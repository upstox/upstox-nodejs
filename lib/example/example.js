/**
 * Created by renuka on 11/4/17.
 */

/**
 * Currently the node module is not yet published.
 *
 * To start using upstox services -
 *  1. Require the index.js.
 *  2. Authenticate with your uccid and password with Upstox using getSessionToken method.
 *  3. On completion of authentication, subsequent services can be called as shown in below example.
 *
 *
 *  Every service returns a promise which will either be resolved or rejected.
 *
 *  Websocket services are available for following events -[live data, position updates, tradeUpdates, liveFeeds]
 *
 *  To get an active socket connection use connectSocket Method.
 * @module Example
 */

var Upstox = require("../index");
var logger = new utils.Logger();
var upstox = new Upstox("your client_id");

var params ={
    "client_id" : "your_client_id",
    "client_secret" : "your_client_secret",
    "code" : "your_code_generated_in login",
    "grant_type" : "authorization_code",
    "redirect_uri" : "your_redirect_uri"
};

var orderObject = {
    transaction_type:"b",
    exchange:"NSE_EQ",
    symbol: "RELIANCE",
    quantity: 1,
    order_type:"m"
};

upstox.getAccessToken(params)
    .then(function(response) {
        start();
    })
    .catch(function(err) {
        logger.error(err);
    });

function start() {
    // Fetch holdings.
    // You can have other api calls here.

    // Get Holdings
    upstox.getHoldings()
        .then(function(response) {
            // You got user's holding details.
            logger.debug(response);
        }).catch(function(err) {
        // Something went wrong.
        logger.error(err);
    });

    // GetProfile
    upstox.getProfile()
        .then(function (response) {
            // expect(response.code === 200);
            // should.exist(response.data);
            // var data = response.data;
            // should.exist(data.client_id);
            // should.exist(data.name);
            // should.exist(data.account_type);
            // should.exist(data.pan);
            // should.exist(data.email);
            // should.exist(data.phone);
            // should.exist(data.nse_pcode);
            // should.exist(data.bse_pcode);
            // should.exist(data.bse_custodian_code);
            // should.exist(data.dp_account_number);
            // should.exist(data.products_enabled);
            // should.exist(data);
            logger.debug(response);
            //done();
        })
        .catch(function(error){
            logger.error("%%%%%%%%%%%%% ", error);
            //done(error);
        });
    
    // PlaceOrder
    upstox.placeOrder(orderObject)
        .then(function(response) {
            // Order details received
            logger.debug(response);
        })
        .catch(function(err) {
            // Something went wrong.
            logger.error(err);
        });
    
    // Socket
    upstox.connectSocket()
        .then(function(){
            // Socket Connection successfull
            // Now you can setup listeners
            upstox.on("orderUpdate", function(message) {
                //message for order updates
                logger.debug(message);
            });
            upstox.on("positionUpdate", function(message) {
                //message for position conversion
                logger.debug(message);
            });
            upstox.on("tradeUpdate", function(message) {
                //message for trade updates
                logger.debug(message);
            });
            upstox.on("liveFeed", function(message) {
                //message for live feed
                logger.debug(message);
            });
            upstox.on("disconnected", function(message) {
                //listener after socket connection is disconnected
                logger.debug(message);
            });
            upstox.on("error", function(error) {
                //error listener
                logger.debug(error);
            });
            //You can call upstox.closeSocket() to disconnect
        }).catch(function(err) {
            // Something went wrong.
            logger.error(err);
        })
}