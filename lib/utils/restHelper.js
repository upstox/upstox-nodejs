/**
 * Created by renuka.misal
 */

var rp = require('request-promise');
var _ = require('lodash');
var serviceConfig = require('.././config/serviceConfig.json');
var promise =  require('bluebird');

/**
 * @method GET
 * @description HTTP get method
 * @param route
 * @param params
 * @param auth
 * @return res
 * @constructor
 */
var GET = function (route, params, auth) {
    if (_.isEmpty(params)) {
        params = {};
    }
    console.log("@@@@@@@@@@@@@@@@@" + JSON.stringify(auth));
    return restify(route, "GET", params, auth);
};

/**
 *
 * @param route
 * @param params
 * @return res
 * @constructor
 */
var PUT = function (route, params, auth) {
    if (_.isEmpty(params)) {
        params = {};
    }

    return restify(route, "PUT", params);
};

var DELETE = function (route, params, auth) {
    if (_.isEmpty(params)) {
        params = {};
    }

    return restify(route, "DELETE", params);
};

function POST (route, params, auth) {
    /**
     * @method POST
     * @description HTTP post method
     * @param route
     * @param params
     * @return res
     * @constructor
     */
        if (_.isEmpty(params)) {
            params = {};
        }

        console.log("POST method");
        var headers = {'content-type': 'application/json'};
        return restify(route, "POST", params, auth);
}

/**
 * @method restify
 * @param httpMethod
 * @param route
 * @param param
 * @param auth
 * @return res
 */
function restify (route, httpMethod, param, auth, transform ) {

    var host = serviceConfig.host;
    var path = serviceConfig.routes[route];

    console.log("Path ----------" + path + "--------httpMethod" + httpMethod);

    var options = {
        method: httpMethod,
        url: "http://" + host + path,
        headers: {
            'content-type': 'application/json'
        },
        json: true,
        resolveWithFullResponse: true
    };
    if(auth.sessionToken){
        options.headers['Cookie'] = auth.sessionToken;
    }
    // if(transform){
    //     options.transform = function(body, res){
    //         res.data = Jres.parse();
    //         return res;
    //     }
    // }
    if(httpMethod == "POST"){
        options.body = param
    }
    return rp(options);

}

module.exports = {
    POST: POST,
    DELETE : DELETE,
    GET : GET,
    PUT: PUT,
    restify :restify
};