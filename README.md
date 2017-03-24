# Upstox API Nodejs client


The official Javascript node client for communicating with the Upstox APIs

Upstox Node Js Library provides an easy to use wrapper over the HTTP APIs. The HTTP calls have been converted to methods and their JSON responses.
Moreover we provide websocket connection APIS to get live updates from Upstox APIs.

## Documentation

- [Javascript client documentation](http://localhost:63342/upstoxnodelibrary/docs/index.html)

## Installation

This module is installed via npm:

	npm install --save upstox
	

Getting started with API
------------------------

	 var Upstox = require("upstox");
     var up = new Upstox("your_apikey", "your_apiSecretKey");
     
     var params = {
        "clientId" : 123345,   
        "password" : 5xcvbnm
     }
     
     up.getSessionToken(params)
        .then(function(response) {
     		start();
     	})
       .catch(function(err) {
     		console.log(err.response);
     })

	function start() {
		// Fetch holdings.
		// You can have other api calls here.

		up.getHoldings()
			.then(function(response) {
				// You got user's holding details.
			}).catch(function(err) {
				// Something went wrong.
			});

		up.connectSocket()
			.then(function(){
				// Socket Connection successfull 
				// Now you can setup listeners

				up.on("messageReceived", function(message) {
					//message for order updates, trade updates, position conversion, live market feed
				});
				up.on("disconnected", function(message) {
					//listener after socket connection is disconnected
				});
				up.on("error", function(error) {
					//error listener 
				});
				//You can call up.closeSocket() to disconnect
			}).catch(function(err){
				// Something went wrong.
			});
	}


