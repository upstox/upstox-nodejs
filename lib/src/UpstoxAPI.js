/**
 * @fileoverview
 * @author renuka.misal@rksv.in (RenukaMisal92)
 */

// External Dependencies
var _ = require('lodash');
var promise =  require('bluebird');

// Internal Dependencies
var RestHelper = require('./../utils/helper.js');

/**
 * @classdesc API client class. You need to initialise a single instance of this class per `api_key`.
 * This module provides an easy to use wrapper over the HTTP APIs.
 * The HTTP calls have been converted to methods and their JSON responses.
 *
 * var Upstox = require("Upstox");
 * var up = new Upstox("your_apikey", "your_apiSecretKey");
 * up.getSessionToken("clientId", "password")
 *    .then(function(response) {
 * 		init();
 * 	})
 *    .catch(function(err) {
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

    /**
     * @private @const
     * @type {{apiKey: *, apiSecretKey: *, sessionToken: *}}
     */
    this.auth = {
        apiKey: apiKey,
        apiSecretKey: apiSecretKey,
        sessionToken : sessionToken
    };
}

/**
 * @method setToken
 * @description method to associate the sessionToken with the class object.
 * @param sessionToken
 */
Upstox.prototype.setToken = function(sessionToken){
    var __this = this;
    __this.auth.sessionToken = sessionToken;
};

/**
 * @method getSessionToken
 * @description Method to get the session token required to authenticate user
 * @param {string} username valid client id for UPSTOX
 * @param {string} password valid password associated with the users client id
 * @return promise
 */
Upstox.prototype.getSessionToken = function(username, password) {

    var __this = this,
        success = {},
        sessionToken;

    return new promise(function (resolve, reject) {
        var params = {
            username: username,
            password: password
        };

        var res = RestHelper.restify("login", "POST", params, __this.auth);

        res.then(function (response) {
            success = response.body;
            success["sessionToken"] = response.headers["set-cookie"][0];
            __this.setToken(response.headers["set-cookie"][0]);
            resolve(success);
        }).catch(function (err) {
            //console.log("Error", err);
            reject(err);
        });

        return res;
    });
};


/**
 * @method getProfile
 * @description Method to get the profile details
 * @return {res}
 */
Upstox.prototype.getProfile = function () {

    var __this = this;
    return RestHelper.GET("profile", null, __this.auth );
    // promise.then(function (response) {
    //     //console.log(JSON.stringify(response, null, 2));
    // });
    //
    // return promise;
};


/**
 * @method getHoldings
 * @description Get the user's holdings.
 * @return {res}
 */
Upstox.prototype.getHoldings = function () {

    var __this = this;
    return RestHelper.GET("holdings", null, __this.auth);
    // promise.then(function (response) {
    //     //console.log("Hii ----------");
    // });
    //return promise;

};


/**
 * @method getLimits
 * @description Get the user's account limits for equity and commodity.
 * @return {res}
 */
Upstox.prototype.getLimits = function () {

    var __this = this;
    return RestHelper.GET("limits", null, this.auth);

};

/**
 * @method positions
 * @description Get the user's day positions.
 * @return {res}
 */
Upstox.prototype.getPositions = function () {

    var __this = this;
    return RestHelper.GET("positions", null, this.auth);
};


Upstox.prototype.placeOrder = function(){

};

Upstox.prototype.getOrders = function(){

}

Upstox.prototype.
module.exports.Upstox = Upstox;