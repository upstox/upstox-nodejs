/**
 * @fileoverview
 * @author renuka.misal@rksv.in (RenukaMisal92)
 */

// External Dependencies
var _ = require('lodash');
var promise =  require('bluebird');
var WebSocketClient = require('websocket').client;
var atob = require('atob');

// Internal Dependencies
var utils = require('./../utils/helper.js');
var logger = new utils.Logger();
var constants = require("./constants.json");
/**
 * @classdesc API client class. You need to initialise a single instance of this class per `api_key`.
 * This module provides an easy to use wrapper over the HTTP APIs.
 * The HTTP calls have been converted to methods and their JSON responses.
 * Moreover we provide websocket connection APIS to get live updates from Upstox APIs.
 * ~~~~
 *
 * var Upstox = require("upstox");
 * var up = new Upstox("your_apikey", "your_apiSecretKey");
 * up.getSessionToken({
 *  "username": "your_clientId",
 *  "password": "password"
 * })
 * .then(function(response) {
 * 		start();
 * 	})
 *  .catch(function(err) {
 * 		logger.debug(err.response);
 * 	})
 *
 * start(){
 * 	   up.getProfile()
 * 	      .then(function(response){
 * 	           //get the result here
 *         })
 *         .catch(function(error){
 *             //catch the error here
 *          });
 *        up.connectSocket()
 *			.then(function(){
 *				// Socket Connection successfull
 *				// Now you can setup listeners
 *
 *				up.on("orderUpdate", function(message) {
 *					//message for order updates
 *				});
 *              up.on("positionUpdate", function(message) {
 *					//message for position conversion
 *				});
 *              up.on("tradeUpdate", function(message) {
 *					//message for trade updates
 *				});
 *              up.on("liveFeed", function(message) {
 *					//message for live feed
 *				});
 *				up.on("disconnected", function(message) {
 *					//listener after socket connection is disconnected
 *				});
 *				up.on("error", function(error) {
 *					//error listener
 *				});
 *				//You can call up.closeSocket() to disconnect
 *			}).catch(function(err){
 *				// Something went wrong.
 *			});
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
        sessionToken : sessionToken,
        userId: null
    };
    this.isAuthenticated = false;
    this.socketOrderUpdateListener;
    this.socketPositionUpdateListener;
    this.socketTradeUpdateListener;
    this.socketLiveFeedListener;
    this.socketCloseListener;
    this.socketErrorListener;
    this.socketConnection;
}

/**
 * @private
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
 * @private
 * @method setUserId
 * @description method to associate the userId with the instance.
 * @memberOf Upstox
 * @instance
 * @param {string} userId Upstox client_id(username).
 */
Upstox.prototype.setUserId = function(userId){
    var __this = this;
    __this.auth.userId = userId;
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
        sessionToken;

    return new promise(function (resolve, reject) {
        utils.restify("login", HTTP_METHOD, params, __this.auth)
            .then(function (response) {
                __this.setToken(response.headers["set-cookie"][0]);
                __this.setUserId(params.username);
                __this.isAuthenticated = true;
                resolve();
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
        "client_id": "1203",
        "name": "xyz",
        "account_type": "--",
        "pan": "ABCDERYTUIU",
        "email": "xyz@gmail.com",
        "phone": "",
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

    return utils.restify("profile", HTTP_METHOD, null, __this.auth );
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
    return utils.restify("holdings", HTTP_METHOD, null, __this.auth);
};

/**
 * @method getBalance
 * @description Get the user's account balances for equity and commodity.
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
 * @param {object} params
 * @param {string} params.type eq - Equity , com - Commodity
 * @return {res}
 */
Upstox.prototype.getBalance = function () {

    var __this = this;
    var HTTP_METHOD = "GET";
    return utils.restify("balance", HTTP_METHOD, null, __this.auth);
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
    return utils.restify("positions", HTTP_METHOD, null, __this.auth);
};

/**
 * @method placeOrder
 * @description  Placing an order
 * @memberOf Upstox
 * @param {object} params
 * @param {string} params.transaction_type Buy or Sell. b : BUY, s : SELL
 * @param {string} params.exchange The exchange segment
 * @param {string} params.symbol The symbol of the instrument
 * @param {number} params.quantity The quantity of order to buy/sell
 * @param {string} params.order_type The type of order to place. l : Limit Order, m : Market Order
 * @param {number} [params.price] The limit price for the order, defaults to 0
 * @param {number} [params.trigger_price] The trigger price for the order, defaults to 0
 * @param {string} [params.duration] The duration of the order (day / ioc)
 * @param {string} [params.product] The product (I: Intraday Order, D: Delivery Order, CO: Cover Order,OCO: Bracket Order)
 * @param {number} [params.disclosed_quantity] The quantity to disclose
 * @param {boolean} [params.is_amo] true: Indicates order is After Market Order, false: Indicates order is normal order
 * @param {number} [params.stoploss] The stoploss for OCO order. It is mandatory for OCO.
 * @param {number} [params.squareoff] The squareoff or profit taking for OCO order. It is mandatory for OCO.
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
    return utils.restify("placeOrder", HTTP_METHOD, params, __this.auth);
};

/**
 * Get the orders placed
 * @method getOrders
 * @memberOf Upstox
 * @return {res}
 * @example
{
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-28T17:01:02+05:30",
    "message": "success",
    "data": [
        {
            "exchange": "NSE_EQ",
            "token": 4067,
            "symbol": "MARICO",
            "product": "I",
            "order_type": "L",
            "duration": "GTC",
            "price": 250.5,
            "trigger_price": 0,
            "quantity": 10,
            "disclosed_quantity": 0,
            "transaction_type": "B",
            "average_price": 0,
            "traded_quantity": 0,
            "message": "16273 : Does not exist",
            "exchange_order_id": "1100000000057116",
            "parent_order_id": "NA",
            "order_id": "161026000000007",
            "exchange_time": "08-Mar-2017 16:12:47",
            "time_in_micro": "1488969541034779",
            "status": "open",
            "is_amo": false,
            "valid_date": "--",
            "order_request_id": "4",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "L",
            "duration": "DAY",
            "price": 1080,
            "trigger_price": 0,
            "quantity": 1,
            "disclosed_quantity": 0,
            "transaction_type": "B",
            "average_price": 1080,
            "traded_quantity": 1,
            "message": "",
            "exchange_order_id": "1100000000006972",
            "parent_order_id": "NA",
            "order_id": "170328000000030",
            "exchange_time": "28-Mar-2017 12:42:42",
            "time_in_micro": "1490697859120172",
            "status": "complete",
            "is_amo": false,
            "valid_date": "--",
            "order_request_id": "1",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        }
    ]
}
 */
Upstox.prototype.getOrders = function(){

    var __this = this;
    var HTTP_METHOD = "GET";
    return utils.restify("getOrders", HTTP_METHOD, null, __this.auth)
};

/**
 * Get the trades details for a particular order
 * @method getTradesInfo
 * @param {object} params
 * @param {string} params.order_id  the order id for which trade details are to be fetched
 * @memberOf Upstox
 * @return {res}
 * @example
{
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-28T18:19:24+05:30",
    "message": "success",
    "data": [
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "M",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000020501",
            "order_id": "170328000000054",
            "exchange_time": "28-Mar-2017 18:04:22",
            "time_in_micro": "1490704218023191",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50031226",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "M",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000020532",
            "order_id": "170328000000055",
            "exchange_time": "28-Mar-2017 18:04:40",
            "time_in_micro": "1490704235700345",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50031308",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "M",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000019491",
            "order_id": "170328000000049",
            "exchange_time": "28-Mar-2017 17:58:14",
            "time_in_micro": "1490703850303152",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50028841",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "M",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000019490",
            "order_id": "170328000000048",
            "exchange_time": "28-Mar-2017 17:58:12",
            "time_in_micro": "1490703847853846",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50028824",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "M",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000020350",
            "order_id": "170328000000052",
            "exchange_time": "28-Mar-2017 18:03:20",
            "time_in_micro": "1490704156310111",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50030874",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "L",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000006972",
            "order_id": "170328000000030",
            "exchange_time": "28-Mar-2017 12:42:42",
            "time_in_micro": "1490697859120172",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50027602",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "M",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000020474",
            "order_id": "170328000000053",
            "exchange_time": "28-Mar-2017 18:04:20",
            "time_in_micro": "1490704215355625",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50031207",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_FO",
            "token": 44866,
            "symbol": "NIFTY17MARFUT",
            "product": "I",
            "order_type": "L",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 75,
            "exchange_order_id": "1100000000004623",
            "order_id": "170328000000031",
            "exchange_time": "28-Mar-2017 12:43:00",
            "time_in_micro": "1490684935796062",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50000457",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "M",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000019840",
            "order_id": "170328000000050",
            "exchange_time": "28-Mar-2017 17:59:33",
            "time_in_micro": "1490703928614186",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50029505",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        },
        {
            "exchange": "NSE_EQ",
            "token": 2885,
            "symbol": "RELIANCE",
            "product": "I",
            "order_type": "M",
            "price": null,
            "trigger_price": null,
            "quantity": null,
            "disclosed_quantity": null,
            "transaction_type": "B",
            "average_price": null,
            "traded_quantity": 1,
            "exchange_order_id": "1100000000020149",
            "order_id": "170328000000051",
            "exchange_time": "28-Mar-2017 18:01:49",
            "time_in_micro": "1490704064457870",
            "status": "complete",
            "total_traded_quantity": 0,
            "traded_shares": 0,
            "traded_price": 0,
            "trade_id": "50030314",
            "stop_loss": 0,
            "square_off": 0,
            "trailing_ticks": 0
        }
    ]
}

 */
Upstox.prototype.getTradesInfo = function(params){

    var __this = this;
    var HTTP_METHOD = "GET";
    return utils.restify("tradesInfo", HTTP_METHOD, params, __this.auth)
};

/**
 * @method modifyOrder
 * @description Modify the order by updating the order quantity
 * @memberOf Upstox
 * @param {Object} params
 * @param {number} params.order_id The order which is to be modified
 * @param {number} [params.parent_order_id] The parent order id in case of CO and OCO orders
 * @param {number} [params.price] The limit price for the order, defaults to 0
 * @param {number} [params.trigger_price] The trigger price for the order, defaults to 0
 * @param {number} [params.quantity] The quantity of order
 * @param {number} [params.disclosed_quantity] The quantity to disclose
 * @param {string} [params.valid_date] The valid date of the order in case of MCX_FO
 * @return {res}
 * @example
{
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-27T11:57:02+05:30",
    "message": "success",
    "data": {
        "exchange": "NSE_EQ",
        "token": 2885,
        "symbol": "RELIANCE",
        "product": "I",
        "order_type": "M",
        "duration": "DAY",
        "price": 0,
        "trigger_price": 0,
        "quantity": 10,
        "disclosed_quantity": 0,
        "transaction_type": "B",
        "average_price": 0,
        "traded_quantity": 0,
        "message": "",
        "exchange_order_id": "",
        "parent_order_id": "NA",
        "order_id": "170327000000003",
        "exchange_time": "",
        "time_in_micro": "1490595778207641",
        "status": "not modified",
        "is_amo": false,
        "valid_date": "",
        "order_request_id": "2",
        "total_traded_quantity": 0,
        "traded_shares": 0,
        "traded_price": 0,
        "stop_loss": 0,
        "square_off": 0,
        "trailing_ticks": 0
    }
}
 */
Upstox.prototype.modifyOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "PUT";
    params = params || {};
    if(!params.parent_order_id){
        params["parent_order_id"] = "";
    }
    return utils.restify("modifyOrder", HTTP_METHOD, params, __this.auth)
};

/**
 * @method cancelOrder
 * @description Cancel the order
 * @memberOf Upstox
 * @param {object} params
 * @param {number} params.order_id order_id generated after you place an order.
 * @return {res}
 * @example
{
    "code": 200,
    "status": "OK",
    "timestamp": "2017-03-27T11:38:40+05:30",
    "message": "success",
    "data": {
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
        "order_id": "170327000000002",
        "exchange_time": "",
        "time_in_micro": "1490594676511489",
        "status": "not cancelled",
        "is_amo": false,
        "valid_date": "",
        "order_request_id": "2",
        "total_traded_quantity": 0,
        "traded_shares": 0,
        "traded_price": 0,
        "stop_loss": 0,
        "square_off": 0,
        "trailing_ticks": 0
    }
}

 */
Upstox.prototype.cancelOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "DELETE";
    params = params || {};
    if(!params.parent_order_id){
        params["parent_order_id"] = "";
    }
    return utils.restify("cancelOrder", HTTP_METHOD, params, __this.auth)
};

/**
 * @method getMasterContract
 * @description Download the master contract as csv.
 * The master contract contains all necessary information about all available contracts.
 * Gets all contracts or filter contracts by exchange segment.
 * @memberOf Upstox
 * @param {object} params
 * @param {string} [params.exchange] name of the exchange to get specific BOD details
 * ~~~~
    eg :
    The exchange segment params.exchange can be -
    bse_eq (BSE Equity)
    bcd_fo (BSE Futures & Options)
    nse_eq (NSE Equity)
    nse_fo (NSE Futures & Options)
    ncd_fo (NSE Currency Futures & Options)
    ~~~~
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
Upstox.prototype.getMasterContract = function(params){

    var __this = this;
    var HTTP_METHOD = "GET";
    params = params || {};
    if(!params.exchange){
        params["exchange"] = "";
    }
    return utils.restify("masterContract", HTTP_METHOD, params, __this.auth)

};

/**
 * @method getLiveFeed
 * @description Get Instruments list
 * @memberOf Upstox
 * @param {object} params
 * @param {string} params.exchange name of the exchange to get live feeds of.
 * ~~~~
  eg:
     The exchange segment params.exchange can be -
     bse_eq (BSE Equity)
     bcd_fo (BSE Futures & Options)
     nse_eq (NSE Equity)
     nse_fo (NSE Futures & Options)
     ncd_fo (NSE Currency Futures & Options)
 ~~~~
 * @param {string} params.symbol The symbol of the instrument. This must match exactly as given in the master contract csv.
 * ~~~
 eg: reliance
 ~~~
 * @param {string} params.type type of feed.
 * ~~~
eg: "ltp",
    "full"
~~~
 * @param {string} [params.format] Response format json/csv
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
Upstox.prototype.getLiveFeed = function(params){

    var __this = this;
    var HTTP_METHOD = "GET";

    return utils.restify("liveFeed", HTTP_METHOD, params, __this.auth);
};

/**
 * @method getOHLC
 * @description Get the OHLC candle values for a given instrument
 * @memberOf Upstox
 * @param params
 * @param {string} params.exchange name of the exchange to get live feeds of.
 * ~~~~
     eg:
         The exchange segment params.exchange can be -
         bse_eq (BSE Equity)
         bcd_fo (BSE Futures & Options)
         nse_eq (NSE Equity)
         nse_fo (NSE Futures & Options)
         ncd_fo (NSE Currency Futures & Options)
 ~~~~
 * @param {string} params.symbol The symbol of the instrument. This must match exactly as given in the master contract csv
 * ~~~
     eg: reliance
     ~~~
 * @param {string} [params.interval] Default: 1day
 * ~~~~~
     1MINUTE
     5MINUTE
     10MINUTE
     30MINUTE
     60MINUTE
     1DAY
     1WEEK
     1MONTH
 * ~~~~~
 * @param {string} [params.start_date] Default: 15 days before today
 * ~~~~~
     Date format: DD-MM-YYYY
 ~~~~~
 * @param {string} [params.end_date]  Default: today
 * ~~~~~
     Date format: DD-MM-YYYY
     ~~~~~
 * @param {string} [params.format] Default: json
 * ~~~~~
     csv
     json
    ~~~~
 * @return {res}
 * @example {
  "code": 200,
  "status": "OK",
  "timestamp": "",
  "message": "ohlc",
  "data": [
    {
      "timestamp": 1485973800000,
      "open": 1050,
      "high": 1050.8,
      "low": 1038.25,
      "close": 1043.5,
      "volume": 2079908,
      "cp": 1045.55
    }
  ]
}
 */
Upstox.prototype.getOHLC = function(params){
    var __this = this;
    var HTTP_METHOD = "GET";

    return utils.restify("OHLC", HTTP_METHOD, params, __this.auth);
};

/**
 * @method subscribeFeed
 * @description Subscribe to a live feed for a given exchange and set of symbols
 * @memberOf Upstox
 * @param params
 * @param {string} params.exchange name of the exchange to get live feeds of.
 * ~~~~
     eg:
         The exchange segment params.exchange can be -
         bse_eq (BSE Equity)
         bcd_fo (BSE Futures & Options)
         nse_eq (NSE Equity)
         nse_fo (NSE Futures & Options)
         ncd_fo (NSE Currency Futures & Options)
 ~~~~
 * @param {string} params.symbol The symbol of the instrument. This must match exactly as given in the master contract csv. The symbol can have multiple symbols, separated by comma
 * ~~~
     eg: reliance
     ~~~
 * @param {string} params.type The type of feed "ltp" or "full"
 * @return {res}
 */
Upstox.prototype.subscribeFeed = function(params){
    var __this = this;
    var HTTP_METHOD = "GET";

    return utils.restify("liveFeedSubscribe", HTTP_METHOD, params, __this.auth)
}

/**
 * @method unsubscribeFeed
 * @description Unsubscribe from a live feed for a given exchange and set of symbols
 * @memberOf Upstox
 * @param params
 * @param {string} params.exchange name of the exchange to get live feeds of.
 * ~~~~
     eg:
         The exchange segment params.exchange can be -
         bse_eq (BSE Equity)
         bcd_fo (BSE Futures & Options)
         nse_eq (NSE Equity)
         nse_fo (NSE Futures & Options)
         ncd_fo (NSE Currency Futures & Options)
 ~~~~
 * @param {string} params.symbol The symbol of the instrument. This must match exactly as given in the master contract csv. The symbol can have multiple symbols, separated by comma
 * ~~~
     eg: reliance
     ~~~
 * @param {string} params.type The type of feed "ltp" or "full"
 * @return {res}
 */
Upstox.prototype.unsubscribeFeed = function(params){
    var __this = this;
    var HTTP_METHOD = "GET";

    return utils.restify("liveFeedUnsubscribe", HTTP_METHOD, params, __this.auth)
}

/**
 * @method connectSocket
 * @description Connect to web socket server.
 * @memberOf Upstox
 * @return promise
 * @throws {Error} User not autheticated
 * @throws {Error} Connection Error
 * @example
var upstox = new Upstox("your_apikey", "your_apiSecretKey");
upstox.getSessionToken(login_credentials)
    .then((response)=>{
        upstox.connectSocket()
        .then(() => {
            //code to set socket listeners
        }, (err) => {
            //handle connection errors
        });
    });
 */
Upstox.prototype.connectSocket = function() {
    var __this = this,
        socket = new WebSocketClient();
    __this.socket = socket;
    return new promise(function (resolve, reject) {
        if(__this.isAuthenticated) {
            socket.on('connectFailed', function(error) {
                reject(error);
            });

            socket.on('connect', function(connection) {
                __this.socketConnection = connection;
                connection.on('error', function(error) {
                    if(__this.socketErrorListener) {
                        __this.socketErrorListener.call(null, error);
                    } else {
                        console.log("Connection Error: " + error.toString());
                    }
                });
                connection.on('close', function() {
                    if(__this.socketCloseListener) {
                        __this.socketCloseListener.call(null, "Connection Closed");
                    } else {
                        console.log("Connection Closed");
                    }
                });
                connection.on('message', function(message) {
                    var parsedMessage,
                        socketListener;

                    if(message.type === "utf8") {
                        parsedMessage = JSON.parse(message.utf8Data);
                        if(utils.isStatus2XX(parsedMessage.code)) {
                            switch (parsedMessage.message) {
                                case constants.MESSAGE_TYPES.FILL_REPORT:
                                    socketListener = __this.socketTradeUpdateListener;
                                    break;
                                case constants.MESSAGE_TYPES.ORDER_UPDATE:
                                    socketListener = __this.socketOrderUpdateListener;
                                    break;
                                case constants.MESSAGE_TYPES.POSITION_UPDATE:
                                case constants.MESSAGE_TYPES.GET_POSITION:
                                    socketListener = __this.socketPositionUpdateListener;
                                    break;
                                default:
                                    console.log("add listeners for event type " + parsedMessage.message);
                            }
                        } else {
                            socketListener = __this.socketErrorListener;
                        }

                        if(socketListener) {
                            socketListener.call(null, parsedMessage.data);
                        }
                    } else if(message.type === "binary") {
                        parsedMessage = atob(message.binaryData);
                        if(__this.socketLiveFeedListener) {
                            __this.socketLiveFeedListener.call(null, utils.convertFeedCsvToJson(parsedMessage));
                        }
                    } else {
                        console.log("add listeners for message type"+ message.type);
                    }
                });
                resolve();
            });
            console.log("In socket ---" + JSON.stringify(__this.auth));
            socket.connect(utils.getSocketEndpoint(__this.auth));
        } else {
            reject(new Error("User not authenticated"))
        }
    });
}

/**
 * @method closeSocket
 * @description Close the socket connection.
 * @memberOf Upstox
 */
Upstox.prototype.closeSocket = function() {
    if(this.socketConnection) {
        this.socketConnection.close();
    }
}

/**
 * @method on
 * @description set socket event listeners
 * @memberOf Upstox
 * @param {string} eventName name of the event.
 * ~~~~
The eventName can be -
orderUpdate
positionUpdate
tradeUpdate
liveFeed
disconnected
error
 ~~~~
 * @param {function} listener function to listen to events
 * @throws {Error} Unsupported event
 * @throws {Error} Incorrect Parameter
 * @example
var upstox = new Upstox("your_apikey", "your_apiSecretKey");
upstox.getSessionToken(login_credentials)
    .then((response)=>{
        upstox.connectSocket()
        .then(() => {
            //code to set socket listeners
            upstox.on("orderUpdate", function(message) {
                //message for order updates
            });
            upstox.on("positionUpdate", function(message) {
                //message for position conversion
            });
            upstox.on("tradeUpdate", function(message) {
                //message for trade updates
            });
            upstox.on("liveFeed", function(message) {
                //message for live feed
            });
            upstox.on("disconnected", function(message) {
                //listener after socket connection is disconnected
            });
            upstox.on("error", function(error) {
                //error listener
            });
        }, (err) => {
            //handle connection errors
        });
    });
 */
Upstox.prototype.on = function(eventName, listener) {
    var __this = this;

    if(utils.validateSocketEventParams(eventName, listener)) {
        switch(eventName) {
            case constants.EVENTS.ORDER_UPDATE:
                __this.socketOrderUpdateListener = listener;
                break;
            case constants.EVENTS.POSITION_UPDATE:
                __this.socketPositionUpdateListener = listener;
                break;
            case constants.EVENTS.TRADE_UPDATE:
                __this.socketTradeUpdateListener = listener;
                break;
            case constants.EVENTS.LIVE_FEED:
                __this.socketLiveFeedListener = listener;
                break;
            case constants.EVENTS.DISCONNECTED:
                __this.socketCloseListener = listener;
                break;
            case constants.EVENTS.ERROR:
                __this.socketErrorListener = listener;
                break;
        }
    }
}

module.exports.Upstox = Upstox;