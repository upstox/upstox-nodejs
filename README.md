
# Upstox API Nodejs client
The official Javascript node client for communicating with the Upstox APIs.

Upstox Node Js Library provides an easy to use wrapper over the HTTPs APIs. The HTTP calls have been converted to methods and their JSON responses.
Moreover we provide websocket connection to get live updates of order and trade.

## Installation

This module is installed via npm:

	 npm install --save upstox

## Documentation
   [Upstox API documentation](https://upstox.com/developer/api/v1/docs/)
   
## Prerequisites   
    node version 6 and above
  
Getting started with API
------------------------

### Authentication with Oauth

To start using upstox services -
------------------------------
1. Require Upstox - 
         
        var Upstox = require("upstox");
         
2. Create an upstox object by passing apiKey as a parameter. (Note: apiKey is required field)
        
        var upstox = new Upstox("your apiKey");

3. Get authentication url with getLoginUri method. Params required are - * redirect_uri (provided while creating the app on developer console of Upstox)
   
        var loginUrl = upstox.getLoginUri(your-redirect-uri);
     
4. Upstox Login screen will appear and in that you need to input your user_id and password provided by Upstox.

5. On completion of authentication user will be redirected to the redirect_uri with code added in query parameter.

6. AccessToken is required for getting authenticated with all subsequent API calls.
 Steps to generate accessToken:
 
         getAccessToken method requires following- 
            var params: {
                "apiSecret" : "your_apiSecret",
                "code" : "your_code_generated_in login",
                "redirect_uri" : "your_redirect_uri"
            };
        
        var accessToken;
        
        upstox.getAccessToken(params)
            .then(function(response) {
              accessToken = response.access_token;
            })
            .catch(function(err) {
                // handle error 
            });
        
7. Set access token by invoking method called setAccessToken(your_access_token); // pass the accessToken generated in response with getAccessToken.

        upstox.setToken(accessToken);
        
     
    
### Examples

        Subsequent services can be called as shown in below
    
        // You can have other api calls here.
        var loginUrl = upstox.getLoginUri("your_redirect_uri");
        console.log("**************** loginUri ***********" + loginUrl);
        
        // GetProfile
        upstox.getProfile()
          .then(function (response) {
              console.log(response);
          })
          .catch(function(error){
              console.log("Error", error);
          });
        
        // Get Balance
        upstox.getBalance({type: "security"})  // type can be security or commodity
          .then(function(response) {
              console.log(response);
          })
          .catch(function(err) {
              console.log(err);
          });

        // Get Subscribed symbols
        upstox.getSubscriptions({type: "LTP"})  // type "LTP", "FULL", "ALL"
          .then(function(response) {
              console.log(response);
          })
          .catch(function(err) {
              console.log(err);
          });
        
        // Get Master Contract
        /* Exchanges */
        upstox.getMasterContract({exchange: "nse_eq", symbol: "reliance"})
          .then(function(response) {
              console.log(response);
          })
          .catch(function(err) {
              console.log(err);
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


## Websocket
 
        Every service returns a promise which will either be resolved or rejected.
         *
         *  Websocket services are available for following events -[live data, position updates, tradeUpdates, liveFeeds]
         *
         *  To get an active socket connection use connectSocket Method.
      
        // Socket
        upstox.connectSocket()
            .then(function(){
                // Socket Connection successfull
                // Now you can setup listeners
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
                //You can call upstox.closeSocket() to disconnect
            }).catch(function(err) {
                // Something went wrong.
            })
            
## Test
    npm test // Please add the oauth token details in testData.json
   
## License
Licensed under the MIT License. 

