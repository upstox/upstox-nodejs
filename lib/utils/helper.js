/**
 * Created by renuka.misal
 */

// External Dependencies
var rp = require('request-promise');
var _ = require('lodash');
var promise =  require('bluebird');

// Internal dependencies
var serviceConfig = require('../src/serviceConfig.json');
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
    return rp(options);

}

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

module.exports = {
    restify :restify,
    Logger : Logger
};