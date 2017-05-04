
# Upstox API Nodejs client


The official Javascript node client for communicating with the Upstox APIs

Upstox Node Js Library provides an easy to use wrapper over the HTTP APIs. The HTTP calls have been converted to methods and their JSON responses.
Moreover we provide websocket connection APIS to get live updates from Upstox APIs.

## Installation

This module is installed via npm:

	 npm install --save Upstox
	

Getting started with API
------------------------

     * To start using upstox services -
     *  1. Get authentication url provide with getLoginUri. Params required are - apiKey, redirect_uri, response_type
     *  2. Authenticate with your uccid and password with Upstox using login url provide with getLoginUri method.
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

    var Upstox = require("../Upstox");
    var upstox = new Upstox("your apiKey");

    var params ={
        "apiKey" : "your_apiKey",
        "apiSecret" : "your_apiSecret",
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
                // should.exist(data.apiKey);
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