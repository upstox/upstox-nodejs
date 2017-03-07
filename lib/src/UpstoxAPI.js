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
 * var Upstox = require("upstox");
 * var up = new Upstox("your_apikey", "your_apiSecretKey");
 * up.getSessionToken("clientId", "password")
 *    .then(function(response) {
 * 		start();
 * 	})
 *    .catch(function(err) {
 * 		console.log(err.response);
 * 	})
 *
 * start(){
 * 	   up.getProfile()
 * 	      .then(function(response){
 * 	           //get the result here
 *         })
 *         .catch(function(error){
               //catch the error here
 *          });
 * }
 * ~~~~
 *

 * @constructor
 * @name Upstox
 * @param {string} apiKey Assigned to you used to authenticate the developers app
 * @param {string} apiSecretKey
 * @param {string} [sessionToken] SessionId generated after successfully logging to upstox API.
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
 * @param {object} params
 * @param {string} params.username valid client id for UPSTOX
 * @param {string} params.password valid password associated with the users client id
 * @return promise
 */
Upstox.prototype.getSessionToken = function(params) {

    var HTTP_METHOD = "POST";
    var __this = this,
        success = {},
        sessionToken;

    return new promise(function (resolve, reject) {
        RestHelper.restify("login", HTTP_METHOD, params, __this.auth)
            .then(function (response) {
                success = response.body;
                success["sessionToken"] = response.headers["set-cookie"][0];
                __this.setToken(response.headers["set-cookie"][0]);
                resolve(success);
            })
            .catch(function (err) {
                reject(err);
            });
    });
};

/**
 * @method getProfile
 * @description Method to get the profile details
 * @memberOf Upstox
 * @return {res}
 * @example
 * {
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-07T12:39:00+05:30",
    "message": "success",
    "data":{
        "client_id": "120013",
        "name": "Orpheus@rksv",
        "account_type": "--",
        "pan": "ABCDE1213F",
        "email": "orpheus.almeida@rksv.in",
        "phone": "9844255627 9844255627",
        "nse_pcode": "",
        "bse_pcode": "",
        "bse_custodian_code": "",
        "dp_account_number": "--",
        "dob": "14/10/2001",
        "is_active": true,
        "exchanges_enabled":["BSE_EQ", "NSE_EQ", "NSE_FO", "NCD_FO", "BCD_FO"],
        "products_enabled":["OCO", "D", "CO", "I"]
    }
 }
 */
Upstox.prototype.getProfile = function () {

    var __this = this;
    var HTTP_METHOD = "GET";

    return RestHelper.restify("profile", HTTP_METHOD, null, __this.auth );
};

/**
 * @method getHoldings
 * @description Get the user's holdings.
 * @memberOf Upstox
 * @return {res}
 * @example
 * {
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-07T15:47:22+05:30",
    "message": "get_holdings",
    "data":[]
    }
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
 * @example
 * {
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-07T15:43:40+05:30",
    "message": "success",
    "data":{
        "equity":{"used_margin": 149.62875, "unrealized_mtm": 0, "realized_mtm": 0, "payin_amount": 878000, "span_margin": 0,…},
        "commodity":{"used_margin": 0, "unrealized_mtm": 0, "realized_mtm": 0, "payin_amount": 10000, "span_margin": 0,…}
    }
    }
 * @return {res}
 */
Upstox.prototype.getLimits = function () {

    var __this = this;
    var HTTP_METHOD = "GET";
    return RestHelper.restify("limits", HTTP_METHOD, null, __this.auth);
};

/**
 * @method getPositions
 * @description Get the user's day positions.
 * @memberOf Upstox
 * @return {res}
 * @example
 * {
      "code": 200,
      "status": "OK",
      "timestamp": "2017-03-07T15:39:07+05:30",
      "message": "get_positions",
      "data": [
        {
          "exchange": "NSE_EQ",
          "token": "2885",
          "product": "I",
          "fill_buy_amount": "1015.00",
          "fill_sell_amount": "0",
          "fill_buy_cf_amount": "0",
          "fill_sell_cf_amount": "0",
          "fill_buy_cf_qty": 0,
          "fill_sell_quantity": 0,
          "fill_buy_quantity": 1,
          "fill_sell_cf_qty": 0
        }
      ]
    }
 */
Upstox.prototype.getPositions = function () {

    var __this = this;
    var HTTP_METHOD = "GET";
    return RestHelper.restify("positions", HTTP_METHOD, null, __this.auth);
};

/**
 * Placing an order
 *
 * @method placeOrder
 * @memberOf Upstox
 * @param {object} params
 * @param {string} params.transaction_type
 * @param {string} params.exchange
 * @param {string} params.symbol
 * @param {string} params.quantity
 * @return {res}
 * @example
 * {
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-07T15:49:27+05:30",
    "message": "success",
    "data":{
        "exchange": "NSE_EQ",
        "token": 2885,
        "symbol": "RELIANCE",
        "product": "I",
        "order_type": "M",
        "duration": "DAY",
        "price": 0,
        "trigger_price": 0,
        "quantity": 1,
        "disclosed_quantity": 1,
        "transaction_type": "B",
        "average_price": 0,
        "traded_quantity": 0,
        "message": "",
        "exchange_order_id": "",
        "parent_order_id": "NA",
        "order_id": "170307000000021",
        "exchange_time": "",
        "time_in_micro": "0",
        "status": "put order req received",
        "is_amo": false,
        "valid_date": "",
        "order_request_id": "1",
        "total_traded_quantity": 0,
        "traded_shares": 0,
        "traded_price": 0,
        "stop_loss": 0,
        "square_off": 0,
        "trailing_ticks": 0
    }
 }
 */
Upstox.prototype.placeOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "POST";
    return RestHelper.restify("placeOrder", HTTP_METHOD, params, __this.auth);
};

/**
 * Get the orders placed
 * @method getOrders
 * @memberOf Upstox
 * @return {res}
 * @example
 * {
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-07T15:36:04+05:30",
    "message": "get_order_history",
    "data":{
    "170307000000014":[
        {"ctr": 101, "client_id": "210008", "exchange": "NSE_EQ", "token": "2885",…}
    ]
    }
  }
 */
Upstox.prototype.getOrders = function(){

    var __this = this;
    var HTTP_METHOD = "GET";
    return RestHelper.restify("getOrders", HTTP_METHOD, null, __this.auth)
};

/**
 * @method modifyOrder
 * @description Modify the order by updating the order quantity
 * @memberOf Upstox
 * @param {Object} params
 * @param {number} params.order_id
 * @param {number} params.quantity
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
 * @memberOf Upstox
 * @param {object} params
 * @param {number} params.order_id order_id generated after you place an order.
 * @return {res}
 */
Upstox.prototype.cancelOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "DELETE";
    return RestHelper.restify("cancelOrder", HTTP_METHOD, params, __this.auth)
};

/**
 * @method getInstruments
 * @description Get Instruments list
 * @memberOf Upstox
 * @param {object} params
 * @param {string} [params.exchange] name of the exchange to get specific BOD details
 * @return {res}
 * @example
 *      {
        "code": 200,
        "status": "OK",
        "timestamp": "2017-03-07T15:33:08+05:30",
        "message": "success",
        "data":[
        "exchange,token,parent_token,symbol,name,closing_price,expiry,strike_price,tick_size,lot_size,instrument_type",
        "NSE_EQ,19262,,1,LTAMC - 1,,,,1,1,",
        "NSE_EQ,10104,,1IADD,DHFL PRAMERICA MF - HYBRI,,,,1,1,",
        "NSE_EQ,10105,,1ID1G,DHFL PRAMERICA MF - HYBRI,,,,1,1,",
        "NSE_EQ,10106,,1ID2D,DHFL PRAMERICA MF - HYBRI,,,,1,1,", .....
        ]
    }
 */
Upstox.prototype.getInstruments = function(params){

    var __this = this;
    var HTTP_METHOD = "GET";

    return RestHelper.restify("instruments", HTTP_METHOD, params, __this.auth)

};

/**
 * @method LiveFeed
 * @description Get Instruments list
 * @memberOf Upstox
 * @param {object} params
 * @param {string} params.exchange name of the exchange to get live feeds of.
 * @param {string} params.instrument name of the instrument to get live feeds of.
 * @param {string} [params.miniType] name of the exchange to get live feeds of.
 * @return {res}
 * @example
 *
 {
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-07T15:50:40+05:30",
    "message": "feed",
    "data":{
        "timestamp": 1488882035000,
        "ltp": 1304.95,
        "open": 1318.85,
        "high": 1327,
        "low": 1296.15,
        "close": 1304.95,
        "vtt": 9616358,
        "atp": 1309.21,
        "oi": null,
        "spot_price": 0,
        "total_buy_qty": 7454,
        "total_sell_qty": 0,
        "bids":[{
        "quantity": 7454,
        "price": 1304.95,
        "orders": 36
        }],
        "asks":[{
        "quantity": 0,
        "price": 0,
        "orders": 0
        }]
    }
 }
 */
Upstox.prototype.getLiveFeeds = function(params){

    var __this = this;
    var HTTP_METHOD = "GET";

    if(!params.miniType){
        params["miniType"] = "";
    }

    return RestHelper.restify("liveFeeds", HTTP_METHOD, params, __this.auth)

};
module.exports.Upstox = Upstox;