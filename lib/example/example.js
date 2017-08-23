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

var Upstox = require("upstox");
var upstox = new Upstox("your_api_key");

// Get the login url for generating code
var loginUrl = upstox.getLoginUri("your_redirect_uri");
console.log("**************** loginUri ***********\n" + loginUrl);

var params = {
    "apiSecret" : "your_apiSecret",
    "code" : "your_code_generated_in login",
    "grant_type" : "authorization_code",
    "redirect_uri" : "your_redirect_uri"
};

upstox.getAccessToken(params)
    .then(function(response) {
        var accessToken = response.access_token;
        upstox.setToken(accessToken);
        start();
    })
    .catch(function(err) {
        console.log(err);
    });

function start() {

    // You can have other api calls here.

    // GetProfile
    upstox.getProfile()
        .then(function (response) {
            console.log("****************** Profile ******************\n");
            console.log(response);
        })
        .catch(function (error) {
            console.log("Error", error);
        });

    // Get Balance
    upstox.getBalance({type: "security"})  // type can be security or commodity
        .then(function (response) {
            console.log("****************** Balance ******************\n");
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });

    // Get Master Contract
    /* Exchanges */
    upstox.getMasterContract({exchange: "nse_eq", symbol: "reliance"})
        .then(function (response) {
            console.log("****************** Master contract ****************** \n");
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });

}