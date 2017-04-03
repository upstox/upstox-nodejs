/**
 * Created by renuka.misal
 */

// External Dependencies
var request = require('request');
var _ = require('lodash');
var promise =  require('bluebird');

// Internal dependencies
var serviceConfig = require('../src/serviceConfig.json');
var constants = require("../src/constants.json");
var LOGGER = true; // enabling logging mechanism for prining logs on console.

/**
 * @method restify
 * @param httpMethod
 * @param route
 * @param params
 * @param auth
 * @return res
 */
function restify (route, httpMethod, params, auth) {

    var host = serviceConfig.host;
    var path = serviceConfig.routes[route];
    if(_.isEmpty(params) || _.isEmpty(params)){
        params = {};
    }
    if(path.indexOf("{") !== -1) {
        var key ;
        for(key in params) {
            if(params.hasOwnProperty(key)) {
                path = path.replace("{" + key + "}", params[key]);
                if(path.indexOf("{") == -1){
                    delete params[key];
                    break;
                }
            }
        }
    }

    var options = {
        method: httpMethod,
        url: host + path,
        json: true,
        resolveWithFullResponse: true,
        headers : {}
    };
    if(auth.sessionToken){
        options.headers['Cookie'] = auth.sessionToken;
    }

    if(httpMethod == "POST" || httpMethod == "PUT"){
        options.body = params;
        options.headers['content-type'] = 'application/json'
    }

    if(httpMethod == "GET"){
        options.qs = params
    }

    return new promise(function(resolve, reject) {
        request(options, function (error, response, body) {
            if(error) {
                reject(error);
            } else if(!isStatus2XX(response.statusCode)) {
                reject(body);
            } else if(route === "login"){
                resolve(response);
            } else {
                resolve(body);
            }
        });
    });
}
function isStatus2XX(code) {
    return /^2/.test(''+ code);
}
/**
 * Logger class
 * @constructor
 */
function Logger(){

    this.debug = function (msg) {
        log("[debug] ", msg)
    };

    this.error = function (msg) {
        log("[error] ", msg)
    };

    this.trace = function (msg) {
        log("[trace] ", msg)
    };

    function log(logLevel, msg) {
        if(LOGGER === true) {
            console.log(new Date() + "%s %s", logLevel, msg);
        }
    }
}

function validateSocketEventParams(eventName, listener) {
    var events = constants.ALLOWED_EVENTS;
    if(typeof eventName === "string" && events.indexOf(eventName) === -1) {
        throw new Error("Unsupported event " + eventName)
    } else if(typeof listener != "function") {
        throw new Error("Listener should be a function");
    } else {
        return true;
    }
}

function getSocketEndpoint(params) {
    var path = serviceConfig.socketEndpoint + "/?id=" + params.userId + "&token=" + encodeURIComponent(params.sessionToken);
    return path;
}

function convertFeedCsvToJson(csvMessage) {
    var data = [];
    var tokens = csvMessage.split(";");

    tokens.forEach(function(t) {
        var obj = {};
        var fields = t.split(",");

        if(fields.length === 5) {
            [obj.timestamp, obj.exchange, obj.symbol, obj.ltp, obj.close] = fields;
        } else {
            [obj.timestamp, obj.exchange, obj.symbol, obj.ltp, obj.close, obj.open, obj.high, obj.low, obj.vtt, obj.atp, obj.oi, obj.spot_price, obj.total_buy_qty, obj.total_sell_qty, obj.lower_circuit, obj.higher_circuit, obj.yearly_low, obj.yearly_high] = fields;
            obj.bids = [];
            obj.asks = [];
            for(var i = 18, j = 33; i <= 32 && j <= 47; i = i + 3, j = j + 3) {
                obj.bids.push({
                    "quantity": fields[i],
                    "price": fields[i+1],
                    "orders": fields[i+2]
                });
                obj.asks.push({
                    "quantity": fields[j],
                    "price": fields[j+1],
                    "orders": fields[j+2],
                });
            }

        }
        data.push(obj);
    });
    return data;
}

module.exports = {
    restify :restify,
    Logger : Logger,
    validateSocketEventParams: validateSocketEventParams,
    getSocketEndpoint: getSocketEndpoint,
    isStatus2XX: isStatus2XX,
    convertFeedCsvToJson: convertFeedCsvToJson
};