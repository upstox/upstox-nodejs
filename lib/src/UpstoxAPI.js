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
 * ~~~~
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
 * ~~~~
 *

 * @constructor
 * @name Upstox
 * @param {string} apiKey Assigned to you used to authenticate the developers app
 * @param {string} apiSecretKey
 * @param {string} sessionToken optional
 * @example <caption>Initialize Upstox object</caption>
 * var Upstox = require("Upstox");
 * var up = new Upstox("your_apikey", "your_apiSecretKey");
 *
 */
function Upstox(apiKey, apiSecretKey, sessionToken) {

    /**
     * @type {{apiKey: *, apiSecretKey: *, sessionToken: *}}
     * @memberOf Upstox
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
 * @memberOf Upstox
 * @instance
 * @param {string} sessionToken Token generated after the users logged in successfully with its Upstox client_id(username) and password.
 */
Upstox.prototype.setToken = function(sessionToken){
    var __this = this;
    __this.auth.sessionToken = sessionToken;
};

/**
 * @method getSessionToken
 * @description Method to get the session token required to authenticate user
 * @memberOf Upstox
 * @param {string} username valid client id for UPSTOX
 * @param {string} password valid password associated with the users client id
 * @return promise
 */
Upstox.prototype.getSessionToken = function(username, password) {

    var HTTP_METHOD = "POST";
    var __this = this,
        success = {},
        sessionToken;

    return new promise(function (resolve, reject) {
        var params = {
            username: username,
            password: password
        };
        //console.log("check for params" + JSON.stringify(params, null, 2));

        var res = RestHelper.restify("login", HTTP_METHOD, params, __this.auth);

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
 * @memberOf Upstox
 * @return {res}
 */
Upstox.prototype.getProfile = function () {

    var __this = this;
    var HTTP_METHOD = "GET";

    return RestHelper.restify("profile", HTTP_METHOD, null, __this.auth );
    // promise.then(function (response) {
    //     //console.log(JSON.stringify(response, null, 2));
    // });
    //
    // return promise;
};

/**
 * @method getHoldings
 * @description Get the user's holdings.
 * @memberOf Upstox
 * @return {res}
 */
Upstox.prototype.getHoldings = function () {

    var __this = this;
    var HTTP_METHOD = "GET";
    return RestHelper.restify("holdings", HTTP_METHOD, null, __this.auth);
};

/**
 * @method getLimits
 * @description Get the user's account limits for equity and commodity.
 * @memberOf Upstox
 * @return {res}
 */
Upstox.prototype.getLimits = function () {

    var __this = this;
    var HTTP_METHOD = "GET";
    return RestHelper.restify("limits", HTTP_METHOD, null, __this.auth);
};

/**
 * @method positions
 * @description Get the user's day positions.
 * @memberOf Upstox
 * @return {res}
 */
Upstox.prototype.getPositions = function () {

    var __this = this;
    var HTTP_METHOD = "GET";
    return RestHelper.restify("positions", HTTP_METHOD, null, __this.auth);
};

/**
 * @method placeOrder
 * @description Placing an order
 * @memberOf Upstox
 * @param {object} params
 * @param {string} params.transaction_type
 * @param {string} params.exchange
 * @param {string} params.symbol
 * @param {string} params.quantity
 * @return {res}
 */
Upstox.prototype.placeOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "POST";
    //console.log("Check for authe token in placxe order" + JSON.stringify(__this.auth, null, 2));
    return RestHelper.restify("placeOrder", HTTP_METHOD, params, __this.auth);
};

/**
 * @method getOrders
 * @description Get the orders placed
 * @memberOf Upstox
 * @return {res}
 */
Upstox.prototype.getOrders = function(){

    var __this = this;
    var HTTP_METHOD = "GET";
    return RestHelper.restify("getOrders", HTTP_METHOD, null, __this.auth)
};

/**
 * @method modifyOrder
 * @description Modify the order by updating the order quantity
 * @param params
 * @param params.order_id
 * @param params.quantity
 * @return {res}
 */
Upstox.prototype.modifyOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "PUT";
    return RestHelper.restify("modifyOrder", HTTP_METHOD, params, __this.auth)
};

/**
 * @method cancelOrder
 * @description Cancel the order
 * @param params
 * @param params.order_id
 * @return {res}
 */
Upstox.prototype.cancelOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "DELETE";
    return RestHelper.restify("cancelOrder", HTTP_METHOD, params, __this.auth)
};


Upstox.prototype.getInstruments = function(params){

    var __this = this;
    var HTTP_METHOD = "GET";
    return RestHelper.restify("instruments", HTTP_METHOD, params, __this.auth)

};

module.exports.Upstox = Upstox;