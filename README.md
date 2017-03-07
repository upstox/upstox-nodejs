# Upstox API Nodejs client


The official Javascript node client for communicating with the Upstox APIs

Upstox Node Js Library provides an easy to use wrapper over the HTTP APIs. The HTTP calls have been converted to methods and their JSON responses.


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
	}


