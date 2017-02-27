/**
 * Created by renuka.misal
 */

var request = require('request');
var _ = require('lodash');
var serviceConfig = require('.././config/serviceConfig.json');

var Request  = function () {

    /**
     * @method GET
     * @description HTTP get method
     * @param route
     * @param params
     * @param auth
     * @return res
     * @constructor
     */
    this.GET = function (route, params, auth) {
        if (_.isEmpty(params)) {
            params = {};
        }

        return restify(route, "GET", params, auth);
    };

        /**
     * @method POST
     * @description HTTP post method
     * @param route
     * @param params
     * @return res
     * @constructor
     */
    this.POST = function(route, params, auth) {
        if (_.isEmpty(params)) {
            params = {};
        }

        var headers =  {'content-type': 'application/json'};
        return restify(route, "POST", params, headers);
    };

    /**
     *
     * @param route
     * @param params
     * @return res
     * @constructor
     */
    this.PUT = function(route, params, auth) {
        if (_.isEmpty(params)) {
            params = {};
        }

        return restify(route, "PUT", params);
    };

    this.DELETE = function(route, params, auth) {
        if (_.isEmpty(params)) {
            params = {};
        }

        return restify(route, "DELETE", params);
    };

    /**
     * @method restify
     * @param httpMethod
     * @param route
     * @param headers
     * @param param
     * @return res
     */
    var restify = function (httpMethod, route, headers, param) {

        var host = serviceConfig.host;
        var path = serviceConfig.routes[route];

        var options = {
            method: httpMethod,
            url: host + path,
            headers: {'content-type': 'application/json'},
            body: param,
            json: true
        };

        if(httpMethod == "GET"){
            options.qs = param;
        } else {
            options.body = param;
        }

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(response.headers["set-cookie"]);
        });

        return response;
    };
};


module.exports.Request = Request;