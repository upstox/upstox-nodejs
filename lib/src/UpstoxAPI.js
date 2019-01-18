/**
 * @fileoverview
 * @author Renuka Misal
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
 var Upstox = require("upstox");
 var upstox = new Upstox("your_apikey");

 var params = {
    "apiSecret" : "your_apiSecret",
    "code" : "your_code_generated_in login",
    "redirect_uri" : "your_redirect_uri"
 };
 upstox.getAccessToken(params)
 .then(function(response) {
        start();
    })
 .catch(function(err) {
        console.log(err);
    });

 start();
 function start() {
    // Fetch holdings.
    // You can have other api calls here.

    var loginUrl = upstox.getLoginUri("your_redirect_uri");
    console.log("**************** loginUri ***********" + loginUrl);

    // Get Holdings
    upstox.getHoldings()
        .then(function(response) {
            // You got user's holding details.
            console.log(response);
        }).catch(function(err) {
        // Something went wrong.
        console.log(err);
    });

    // GetProfile
    upstox.getProfile()
        .then(function (response) {
            console.log(response);
            //done();
        })
        .catch(function(error){
            console.log("%%%%%%%%%%%%% ", error);
            //done(error);
        });

    // PlaceOrder Note : default product = I i.e intra day order will be placed.
    var orderObject = {
        transaction_type:"b",
        exchange:"NSE_EQ",
        symbol: "RELIANCE",
        quantity: 1,
        order_type:"m"
    };

    upstox.placeOrder(orderObject)
        .then(function(response) {
            // Order details received
            console.log(response);
        })
        .catch(function(err) {
            // Something went wrong.
            console.log(err);
        });

    // Web socket
    upstox.connectSocket()
        .then(function(){
            upstox.on("orderUpdate", function(message) {
                console.log("orderUpdate", message);
            });
            upstox.on("positionUpdate", function(message) {
                //message for position conversion
                console.log("positionUpdate", message);
            });
            upstox.on("tradeUpdate", function(message) {
                //message for trade updates
                console.log("tradeUpdate", message);
            });
            upstox.on("liveFeed", function(message) {
                //message for live feed
                console.log("liveFeed", message);
            });
            // upstox.on("disconnected", function(message) {
            //     //listener after socket connection is disconnected
            //     console.log("disconnected", message);
            // });
            upstox.on("error", function(error) {
                //error listener
                console.log("error", message);
            });
        }).catch(function(error) {
        console.log( "******** " , error);
    });
}
 * ~~~~
 *
 * @constructor
 * @name Upstox
 * @param {string} apiKey Assigned to you used to authenticate the developers app
 * @example <caption>Initialize Upstox object</caption>
 * var Upstox = require("Upstox");
 * var up = new Upstox("your_apikey");
 *
 */
function Upstox(apiKey) {

    /**
     * @type {{apiKey: *}}
     * @private
     * @memberOf Upstox
     */
    if(!apiKey){
        throw new Error("Missing apiKey");
    }

    this.auth = {
        apiKey: apiKey,
        accessToken : null
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

Upstox.prototype.Constants = constants;
/**
 * @method setToken
 * @description method to associate the accessToken with the class object.
 * @memberOf Upstox
 * @instance
 * @param {string} accessToken Token generated after the users logged in successfully with its Upstox apiKey(username) and password.
 */
Upstox.prototype.setToken = function(accessToken){
    var __this = this;
    __this.auth.accessToken = accessToken;
    __this.isAuthenticated = true;
};

/**
 * @method getLoginUri
 * @memberOf Upstox
 * @param redirect_uri Redirect_uri specified by you while creating an app
 * @instance
 * @return {string} Login Url to get authorized.
 */
Upstox.prototype.getLoginUri = function(redirect_uri){

    var urLDetails = utils.generateUrl('authorize', null);
    var __this = this;
    return urLDetails.host + urLDetails.path + "?apiKey=" + __this.auth.apiKey + "&redirect_uri=" + redirect_uri + "&response_type=" + "code";
};

/**
 * @method getAccessToken
 * @description Method to get the session token required to authenticate user
 * @memberOf Upstox
 * @instance
 * @param {object} params
 * @param {string} params.apiSecret
 * @param {string} params.code
 * @param {string} params.redirect_uri
 * @return promise
 */
Upstox.prototype.getAccessToken = function(params) {

    var HTTP_METHOD = "POST";
    var __this = this,
        accessToken;
    var basicAuth = "Basic " + new Buffer(__this.auth.apiKey + ':' + params.apiSecret).toString('base64');
    delete(params.apiSecret);

    params["grant_type"] = "authorization_code";

    return new promise(function (resolve, reject) {
        utils.restify("accessToken", HTTP_METHOD, params, __this.auth, {basicAuth: basicAuth})
            .then(function (response) {
                __this.setToken(response.access_token);
                __this.isAuthenticated = true;
                resolve(response);
            })
            .catch(function (err) {
                reject(err);
            });
    });
};

/**
 * @instance
 * @memberOf Upstox
 * @method logout
 * @description function to logout from upstox session
 * @return {res}
 */
Upstox.prototype.logout = function () {

    var HTTP_METHOD = "GET";
    var __this = this;
    return utils.restify("logout", HTTP_METHOD, null, __this.auth);
};

/**
 * @method getProfile
 * @description Method to get the profile details
 *@instance
 * @memberOf Upstox
 * @return {res}
 * @example
 * {
  "code": 200,
  "status": "OK",
  "timestamp": "2017-05-16T11:00:04+05:30",
  "message": "success",
  "data": {
    "client_id": "990099",
    "name": "Upstox API",
    "account_type": "--",
    "pan": "ABCDE1234F",
    "email": "support@upstox.com",
    "phone": "02261309999",
    "dob": "01/01/2012",
    "is_active": true,
    "exchanges_enabled": [
      "BSE_EQ",
      "NSE_EQ",
      "NSE_FO",
      "MCX_FO",
      "NCD_FO",
      "BCD_FO"
    ],
    "products_enabled": [
      "OCO",
      "D",
      "CO",
      "I"
    ],
    "bank_name": "State Bank of india",
    "bank_account": "123456789",
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
 * @instance
 * @memberOf Upstox
 * @return {res}
 * @example
   {
      "code": 200,
      "status": "OK",
      "timestamp": "2017-05-17T10:37:58+05:30",
      "message": "success",
      "data": [
        {
          "instrument": [
            {
              "exchange": "NSE_EQ",
              "symbol": "DAAWAT",
              "token": 13816
            },
            {
              "exchange": "BSE_EQ",
              "symbol": "DAAWAT",
              "token": 532783
            }
          ],
          "product": "D",
          "collateral_type": "WC",
          "cnc_used_quantity": 0,
          "quantity": 1,
          "collateral_qty": 0,
          "haircut": 25
        }
      ]
   }
 */
Upstox.prototype.getHoldings = function () {

    var __this = this;
    var HTTP_METHOD = "GET";
    return utils.restify("holdings", HTTP_METHOD, null, __this.auth);
};

/**
 * @method getBalance
 * @instance
 * @memberOf Upstox
 * @description Get the user's account balance for equity and commodity.
 * @param {object} params
 * @param {string} params.type type of users account
 * ~~~~
     eg :
     type can be - security
     - commodity

 * ~~~~
 * @example
  {
      "code": 200,
      "status": "OK",
      "timestamp": "2017-05-17T11:00:04+05:30",
      "message": "success",
      "data": {
        "equity": {
          "used_margin": 0,
          "unrealized_mtm": 0,
          "realized_mtm": 0,
          "payin_amount": 0,
          "span_margin": 0,
          "adhoc_margin": 12000,
          "notional_cash": 0,
          "available_margin": 10717.11,
          "exposure_margin": 0
        },
        "commodity": {
          "used_margin": 0,
          "unrealized_mtm": 0,
          "realized_mtm": 0,
          "payin_amount": 0,
          "span_margin": 0,
          "adhoc_margin": 0,
          "notional_cash": 0,
          "available_margin": 520.45,
          "exposure_margin": 0
        }
      }
  }
 * @return {res}
 */
Upstox.prototype.getBalance = function (params) {

    var __this = this;
    var HTTP_METHOD = "GET";
    return utils.restify("balance", HTTP_METHOD, params, __this.auth);
};

/**
 * @method getPositions
 * @instance
 * @description Get the user's day positions.
 * @memberOf Upstox
 * @return {res}
 * @example
 {
  "code": 200,
  "status": "OK",
  "timestamp": "2017-05-15T14:40:04+05:30",
  "message": "success",
  "data": [
    {
      "exchange": "NSE_EQ",
      "product": "I",
      "symbol": "RELIANCE",
      "token": 2885,
      "buy_amount": 1344.25,
      "sell_amount": 0,
      "buy_quantity": 1,
      "sell_quantity": 0,
      "cf_buy_amount": 0,
      "cf_sell_amount": 0,
      "cf_buy_quantity": 0,
      "cf_sell_quantity": 0,
      "avg_buy_price": 1344.25,
      "avg_sell_price": 0.00,
      "net_quantity": 1,
      "close_price": 1350.45,
      "realized_profit": 0.00,
      "unrealized_profit": 3.09
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
 * @instance
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
 {
      "code": 200,
      "status": "OK",
      "timestamp": "2017-05-17T11:01:45+05:30",
      "message": "success",
      "data": {
        "exchange": "NSE_EQ",
        "token": 2885,
        "symbol": "RELIANCE",
        "product": "I",
        "order_type": "L",
        "duration": "DAY",
        "price": 1200,
        "trigger_price": 0,
        "quantity": 1,
        "disclosed_quantity": 0,
        "transaction_type": "B",
        "average_price": 0,
        "traded_quantity": 0,
        "message": "",
        "exchange_order_id": "",
        "parent_order_id": "NA",
        "order_id": "170517000028023",
        "exchange_time": "",
        "time_in_micro": "0",
        "status": "put order req received",
        "is_amo": false,
        "valid_date": "",
        "order_request_id": "1"
      }
 }
 */
Upstox.prototype.placeOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "POST";
    return utils.restify("placeOrder", HTTP_METHOD, params, __this.auth);
};

/**
 * Get the orders book (all orders details) or Get the order details for specific order
 * @method getOrders
 * @instance
 * @memberOf Upstox
 * @param {Object} params
 * @param {String} params.order_id
 * @return {res}
 * @example
 {
   "code": 200,
   "status": "OK",
   "timestamp": "2017-05-17T11:02:39+05:30",
   "message": "success",
   "data": [
     {
       "exchange": "NSE_EQ",
       "token": 2885,
       "symbol": "RELIANCE",
       "product": "I",
       "order_type": "L",
       "duration": "DAY",
       "price": 1250,
       "trigger_price": 0,
       "quantity": 1,
       "disclosed_quantity": 0,
       "transaction_type": "B",
       "average_price": 0,
       "traded_quantity": 0,
       "message": "",
       "exchange_order_id": "1200000000219469",
       "parent_order_id": "NA",
       "order_id": "170517000003728",
       "exchange_time": "17-May-2017 09:17:43",
       "time_in_micro": "1494992898053855",
       "status": "cancelled",
       "is_amo": false,
       "valid_date": "--",
       "order_request_id": "1"
     }
   ]
 }
*/
Upstox.prototype.getOrders = function(params){

    var __this = this;
    var HTTP_METHOD = "GET";
    if (params == null) {
        return utils.restify("getOrders", HTTP_METHOD, null, __this.auth)
    }
    return utils.restify("getOrdersInfo", HTTP_METHOD, params, __this.auth)
};

/**
 * Get the trades details for a particular order
 * @method getTrades
 * @instance
 * @param {object} params
 * @param {string} params.order_id  the order id for which trade details are to be fetched
 * @memberOf Upstox
 * @return {res}
 * @example
 {
   "code": 200,
   "status": "OK",
   "timestamp": "2017-05-15T14:48:52+05:30",
   "message": "success",
   "data": [
     {
       "exchange": "NSE_EQ",
       "token": 2885,
       "symbol": "RELIANCE",
       "product": "I",
       "order_type": "M",
       "transaction_type": "B",
       "traded_quantity": 1,
       "exchange_order_id": "1200000003336976",
       "order_id": "170515000047270",
       "exchange_time": "15-May-2017 13:56:31",
       "time_in_micro": "1494836825761723",
       "total_traded_quantity": 0,
       "traded_shares": 0,
       "traded_price": 0,
       "trade_id": "51345784",
     }
   ]
 }
 */
Upstox.prototype.getTrades = function(params){

    var __this = this;
    var HTTP_METHOD = "GET";
    return utils.restify("tradesInfo", HTTP_METHOD, params, __this.auth)
};


/**
 * Get the trades book in users account
 * @method getTradeBook
 * @instance
 * @memberOf Upstox
 * @return {res}
 * @example
 {
  code: 200,
  status: 'OK',
  timestamp: '2017-07-27T12:15:46+05:30',
  message: 'success',
  data:
   [
    {  exchange: 'NSE_FO',
       token: 49732,
       symbol: 'BANKNIFTY17JULFUT',
       product: 'I',
       order_type: 'L',
       transaction_type: 'B',
       traded_quantity: 40,
       exchange_order_id: '1000000000040558',
       order_id: '170727000000051',
       exchange_time: '27-Jul-2017 12:10:50',
       time_in_micro: '1501137514968885',
       traded_price: 23000,
       trade_id: '697'
    },
    {
       exchange: 'NSE_FO',
       token: 49735,
       symbol: 'NIFTY17JULFUT',
       product: 'I',
       order_type: 'L',
       transaction_type: 'B',
       traded_quantity: 75,
       exchange_order_id: '1100000000043923',
       order_id: '170727000000049',
       exchange_time: '27-Jul-2017 12:10:15',
       time_in_micro: '1501137478148876',
       traded_price: 9800,
       trade_id: '50000253'
    }
   ]
}

 */
Upstox.prototype.getTradeBook = function(){

    var __this = this;
    var HTTP_METHOD = "GET";
    return utils.restify("tradeBook", HTTP_METHOD, null, __this.auth)
};

/**
 * @method modifyOrder
 * @description Modify the order by updating the order quantity
 * @memberOf Upstox
 * @instance
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
        "order_request_id": "2"
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
 * @instance
 * @param {object} params
 * @param {number} params.order_id order_id generated after you place an order. (Can specify multiple order number as a coma separated string)
 * @return {res}
 * @example
 {
 code: 200,
 status: 'OK',
 timestamp: '2017-08-31T12:33:31+05:30',
 message: 'success',
 data: 'Cancellation sent for [170831000000018]'
 }

 */
Upstox.prototype.cancelOrder = function(params){

    var __this = this;
    var HTTP_METHOD = "DELETE";

    if(!params || !params.order_id){
        throw new Error("Please specify atleast one order id");
    }
    // params = params || {};


    // if(!params.parent_order_id){
    //     params["parent_order_id"] = "";
    // }
    return utils.restify("cancelOrder", HTTP_METHOD, params, __this.auth)
};


/**
 * @method cancelAllOrder
 * @description Cancel all open order
 * @memberOf Upstox
 * @instance
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
         "order_request_id": "2"
     }
 }

 */
Upstox.prototype.cancelAllOrder = function(){

    var __this = this;
    var HTTP_METHOD = "DELETE";

    return utils.restify("cancelAllOrder", HTTP_METHOD, null, __this.auth)
};
/**
 * @method getMasterContract
 * @description Download the master contract as csv.
 * The master contract contains all necessary information about all available contracts.
 * Gets all contracts or filter contracts by exchange segment.
 * @memberOf Upstox
 * @instance
 * @param {object} params
 * @param {string} [params.exchange] name of the exchange to get specific BOD details
 * @param {string} [params.symbol] name of the symbol
 * @param {string} [params.token] name of the token
 * ~~~~
    eg :
    The exchange segment params.exchange can be -
    bse_eq (BSE Equity)
    bcd_fo (BSE Futures & Options)
    nse_eq (NSE Equity)
    nse_fo (NSE Futures & Options)
    ncd_fo (NSE Currency Futures & Options)

    Symbol can be : reliance
    Token can be : 2885
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
 * @instance
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
~~~
 If you request for LTP, following will be the response

 {
   "code": 200,
   "status": "OK",
   "timestamp": "2017-05-15T16:45:12+05:30",
   "message": "feed",
   "data": {
     "timestamp": 1494843956000,
     "exchange": "NSE_EQ",
     "symbol": "RELIANCE",
     "ltp": 1344.1,
     "close": 1350.45
   }
 }
~~~
 If you request for Mini, following will be the response

 {
   "code": 200,
   "status": "OK",
   "timestamp": "2017-05-15T15:10:12+05:30",
   "message": "feed",
   "data": {
     "timestamp": 1494837991000,
     "exchange": "NSE_FO",
     "symbol": "NIFTY17MAYFUT",
     "ltp": 9446.8,
     "open": 9448,
     "high": 9454.4,
     "low": 9437,
     "close": 9414.8,
     "vtt": 2802525,
     "atp": 9446.71,
     "oi": 21256725,
     "spot_price": 9442.5,
     "total_buy_qty": 831075,
     "total_sell_qty": 858375,
     "bids": [
       {
         "quantity": 900,
         "price": 9446.7,
         "orders": 2
       }
     ],
     "asks": [
       {
         "quantity": 450,
         "price": 9447,
         "orders": 1
       }
     ]
   }
 }
 ~~~
 If you request for Full, following will be the response

 {
   "code": 200,
   "status": "OK",
   "timestamp": "2017-05-15T15:10:42+05:30",
   "message": "feed",
   "data": {
     "timestamp": 1494837991000,
     "exchange": "NSE_FO",
     "symbol": "NIFTY17MAYFUT",
     "ltp": 9446.8,
     "open": 9448,
     "high": 9454.4,
     "low": 9437,
     "close": 9414.8,
     "vtt": 2802525,
     "atp": 9446.71,
     "oi": 21256725,
     "spot_price": 9442.15,
     "total_buy_qty": 830925,
     "total_sell_qty": 858375,
     "lower_circuit": 8473.35,
     "upper_circuit": 10356.3,
     "bids": [
       {
         "quantity": 900,
         "price": 9446.7,
         "orders": 2
       },
       {
         "quantity": 75,
         "price": 9446.65,
         "orders": 1
       },
       {
         "quantity": 1050,
         "price": 9446.6,
         "orders": 4
       },
       {
         "quantity": 150,
         "price": 9446.55,
         "orders": 1
       },
       {
         "quantity": 75,
         "price": 9446.1,
         "orders": 1
       }
     ],
     "asks": [
       {
         "quantity": 450,
         "price": 9447,
         "orders": 1
       },
       {
         "quantity": 450,
         "price": 9447.3,
         "orders": 1
       },
       {
         "quantity": 900,
         "price": 9447.4,
         "orders": 1
       },
       {
         "quantity": 75,
         "price": 9447.45,
         "orders": 1
       },
       {
         "quantity": 75,
         "price": 9447.55,
         "orders": 1
       }
     ]
   }
 }
 ~~~
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
 * @instance
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
     3MINUTE
     5MINUTE
     10MINUTE
     15MINUTE
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
 * @example
 {
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

    params["interval"] = constants.OHLC_INTERVALS[params["interval"]];
    params["exchange"] = params["exchange"].toUpperCase();
    return utils.restify("OHLC", HTTP_METHOD, params, __this.auth);
};


/**
 * @method getSubscriptions
 * @description Fetch subscribed symbols
 * @memberOf Upstox
 * @instance
 * @param params
 * @param {string} params.type Feed type for which subscriptions has to be fetched (ltp, full, all)
 * @return {object} An object containing the user subscription list
 */
Upstox.prototype.getSubscriptions = function (params) {
    var __this = this;
    var HTTP_METHOD = "GET";

    return utils.restify("getSubscriptions", HTTP_METHOD, params, __this.auth)
}

/**
 * @method subscribeFeed
 * @description Subscribe to a live feed for a given exchange and set of symbols
 * @memberOf Upstox
 * @instance
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
 * @instance
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
};

/**
 * @method connectSocket
 * @description Connect to web socket server.
 * @memberOf Upstox
 * @instance
 * @return promise
 * @throws {Error} User not autheticated
 * @throws {Error} Connection Error
 * @example
    var upstox = new Upstox("your_apikey", "your_apiSecretKey");
    upstox.getAccessToken(login_credentials)
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

    var __this = this;
    var socket;
    return new promise(function (resolve, reject) {

        var HTTP_METHOD = "GET";
        var socketParams = {
            keepalive: true,
            keepaliveInterval: 1000,
            disableNagleAlgorithm: true,
            autoAcceptConnections: false,
            keepaliveGracePeriod: 60000,
            dropConnectionOnKeepaliveTimeout : true
        };
        utils.restify("socket-params", HTTP_METHOD, null, __this.auth)
            .then(function(response){
                if(response) {
                    socketParams.keepalive = response.keepalive ? response.keepalive : socketParams.keepalive;
                    socketParams.keepaliveInterval = response.keepaliveInterval ? response.keepaliveInterval : socketParams.keepaliveInterval;
                    socketParams.disableNagleAlgorithm = response.disableNagleAlgorithm ? response.disableNagleAlgorithm : socketParams.disableNagleAlgorithm;
                    socketParams.autoAcceptConnections = response.autoAcceptConnections ? response.autoAcceptConnections : socketParams.autoAcceptConnections;
                    socketParams.keepaliveGracePeriod = response.keepaliveGracePeriod ? response.keepaliveGracePeriod : socketParams.keepaliveGracePeriod;
                    socketParams.dropConnectionOnKeepaliveTimeout = response.dropConnectionOnKeepaliveTimeout ? response.dropConnectionOnKeepaliveTimeout : socketParams.dropConnectionOnKeepaliveTimeout;
                }
                socket = new WebSocketClient(socketParams);
                __this.socket = socket;
                connecting();
            })
            .catch(function(error){
                // Connecting socket with default params of socket object.
                socket = new WebSocketClient(socketParams);
                connecting();
            });

        function connecting() {
            if (!__this.isAuthenticated) {
                logger.error("User is not authenticated");
                reject(new Error("User not authenticated"))
            }
            socket.on('connectFailed', function (error) {
                reject(error);
            });

            socket.on('connect', function (connection) {
                __this.socketConnection = connection;
                connection.on('message', function (message) {
                    var parsedMessage,
                        socketListener;
                    if (message.type === "utf8") {
                        parsedMessage = JSON.parse(message.utf8Data);
                        if (utils.isStatus2XX(parsedMessage.code)) {
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
                                    logger.debug("add listeners for event type " + parsedMessage.message);
                            }
                        } else {
                            socketListener = __this.socketErrorListener;
                        }

                        if (socketListener) {
                            socketListener.call(null, parsedMessage.data);
                        }
                    } else if (message.type === "binary") {
                        parsedMessage = atob(message.binaryData);
                        if (__this.socketLiveFeedListener) {
                            __this.socketLiveFeedListener.call(null, utils.convertFeedCsvToJson(parsedMessage));
                        }
                    } else {
                        logger.debug("add listeners for message type" + message.type);
                    }
                });

                connection.on('error', function (error) {
                    if (__this.socketErrorListener) {
                        __this.socketErrorListener.call(null, error);
                    } else {
                        logger.debug("Connection Error: " + error.toString());
                    }
                });
                connection.on('close', function () {
                    if (__this.socketCloseListener) {
                        __this.socketCloseListener.call(null, "Connection Closed");
                    } else {
                        logger.debug("Connection Closed");
                    }
                });

                resolve();
            });

            socket.connect(utils.getSocketEndpoint(__this.auth), null, null, {Authorization: "Bearer" + __this.auth.accessToken});
        }
    });
};

/**
 * @method closeSocket
 * @description Close the socket connection.
 * @memberOf Upstox
 * @instance
 */
Upstox.prototype.closeSocket = function() {
    if(this.socketConnection) {
        this.socketConnection.close();
    }
};

/**
 * @method on
 * @description set socket event listeners
 * @memberOf Upstox
 * @instance
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
};

module.exports.Upstox = Upstox;