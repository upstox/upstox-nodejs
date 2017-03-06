/**
 * Created by renuka.misal
 */

var rp = require('request-promise');
var _ = require('lodash');
var serviceConfig = require('.././config/serviceConfig.json');
var promise =  require('bluebird');

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

    console.log("Auth value ------" + JSON.stringify(params, null,2 ));

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
                    console.log("***********  After Delete ***** \n" + JSON.stringify(params, null, 2));
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

        console.log("In POST " + JSON.stringify(params, null, 2));
        options.body = params;
        options.headers['content-type'] = 'application/json'
    }

    if(httpMethod == "GET"){
        options.qs = params
    }

    console.log("########## Options ###########" + JSON.stringify(options, null, 2));
    return rp(options);

}

module.exports = {
    restify :restify
};