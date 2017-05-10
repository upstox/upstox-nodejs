/**
 * Created by renuka on 11/4/17.
 */

/**
 *  1. Get authentication url provide with getLoginUri. Params required are - apiKey, redirect_uri, response_type
 *  2. Authenticate with your uccid and password with Upstox .
 *  3. On completion of authentication user will be redirected to the redirect_uri provided while creating the app on developer console of Upstox.
 *  4. User need to provide the code added in query param of redirect-uri in getAccessToken method.
 *  6. getAccessToken method requires following params: {
        "apiSecret" : "your_apiSecret",
        "code" : "your_code_generated_in login",
        "grant_type" : "authorization_code",
        "redirect_uri" : "your_redirect_uri"
        };
    7. Set access token by invoking method called setAccessToken(your_access_token); // pass the accessToken generated in response with getAccessToken.
 *  8. Subsequent services can be called as shown in below
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
var upstox = new Upstox("your_api_key");
var params = {
    "apiSecret" : "your_apiSecret",
    "code" : "your_code_generated_in login",
    "grant_type" : "authorization_code",
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