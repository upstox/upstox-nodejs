/**
 * Created by renuka on 23/2/17
 */

var _ = require('lodash');
var RestHelper = require('./utils/restHelper.js').Request;

/**
 * @classdesc API client class. In production, you may initialise a single instance of this class per `api_key`.
 * This module provides an easy to use wrapper over the HTTP APIs.
 * The HTTP calls have been converted to methods and their JSON responses.
 *
 * var Upstox = require("Upstox");
 *
 * var up = new Upstox("your_apikey", "your_apiSecretKey");
 *
 * up.getSessionToken("clientId", "password")
 * 	.then(function(response) {
 * 		init();
 * 	})
 * 	.catch(function(err) {
 * 		console.log(err.response);
 * 	})
 *
 * @example <caption>Initialize Upstox object</caption>
 * var Upstox = require("Upstox");
 * var up = new Upstox("your_apikey", "your_apiSecretKey");
 *
 * @param apiKey
 * @param apiSecretKey
 * @param sessionToken
 * @constructor
 */
function Upstox(apiKey, apiSecretKey, sessionToken) {

    var auth;
    this.option = {
        apiKey : apiKey,
        apiSecretKey :apiSecretKey
    };

    if(sessionToken){
        auth.sessionToken = sessionToken
    }
    this.auth = _.extend(this.option, auth);

}

/**
 * @method getSessionToken
 * @description Method to get the session token required to authenticate user
 * @instance Static
 * @param username valid client id for UPSTOX
 * @param password valid password associated with the users client id
 * @return sessionToken
 */

Upstox.prototype.getSessionToken = function (username, password){

    var params = {
        username : username,
        password : password
    };
    var response = RestHelper.POST("login", params, this.auth);
    return response.headers["set-cookie"];
};

/**
 * @method getProfile
 * @description Method to get the profile details
 * @return profile object
 */
Upstox.prototype.getProfile = function(){

    var response = RestHelper.GET("profile", null, this.auth);
    return response.body;
};


/**
 * @method getHoldings
 * @description Get the user's holdings.
 * @return array of holdings
 */
Upstox.prototype.getHoldings = function(){

    var response = RestHelper.GET("holdings", null, this.auth);
    return response.body;
};


/**
 * @method getLimits
 * @description Get the user's account limits for equity and commodity.
 * @return data object
 */
Upstox.prototype.getLimits = function(){

    var response = RestHelper.GET("limits", null, this.auth);
    return response.body;
};

/**
 * @method positions
 * @description Get the user's day positions.
 * @return data object
 */
Upstox.prototype.getPositions = function(){

    var response = RestHelper.GET("positions", null, this.auth);
    return response.body;
};



module.exports.Upstox = Upstox;