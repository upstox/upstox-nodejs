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
var up = new Upstox();

var params = {
    "username" : "123345",
    "password" : "5xcvbnm"
};

up.getSessionToken(params)
    .then(function(response) {
        start();
    })
    .catch(function(err) {
        console.log(err);
    });

function start() {
    // Fetch holdings.
    // You can have other api calls here.

    up.getHoldings()
        .then(function(response) {
            // You got user's holding details.
            console.log(response);
        }).catch(function(err) {
        // Something went wrong.
        console.log(err);
    });

    var orderObject = {
        transaction_type:"b",
        exchange:"NSE_EQ",
        symbol: "RELIANCE",
        quantity: 1,
        order_type:"m"
    };
    up.placeOrder(orderObject)
        .then(function(response) {
            // Order details received
            console.log(response);
        }).catch(function(err) {
        // Something went wrong.
        console.log(err);
    });

    up.connectSocket()
        .then(function(){
            // Socket Connection successfull
            // Now you can setup listeners
            up.on("orderUpdate", function(message) {
                //message for order updates
                console.log(message);
            });
            up.on("positionUpdate", function(message) {
                //message for position conversion
                console.log(message);
            });
            up.on("tradeUpdate", function(message) {
                //message for trade updates
                console.log(message);
            });
            up.on("liveFeed", function(message) {
                //message for live feed
                console.log(message);
            });
            up.on("disconnected", function(message) {
                //listener after socket connection is disconnected
                console.log(message);
            });
            up.on("error", function(error) {
                //error listener
                console.log(error);
            });
            //You can call up.closeSocket() to disconnect
        }).catch(function(err){
        // Something went wrong.
        console.log(err);
    });
}