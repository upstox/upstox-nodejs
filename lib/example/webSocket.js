var Upstox = require("upstox");

var upstox = new Upstox("your_api_key");

upstox.getAccessToken({
    "apiSecret" : "your_api_secret",
    "code" : "login_code",
    "redirect_uri" : "your_redirect_uri"

})
    .then(function(response) {

        console.log(response);

        var accessToken = response.access_token;
        upstox.setToken(accessToken);

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
                upstox.on("disconnected", function(message) {
                    //listener after socket connection is disconnected
                    console.log("disconnected", message);
                });
                upstox.on("error", function(error) {
                    //error listener
                    console.log("error", error);
                });
            }).catch(function(error) {
            console.log( "******** " , error);
        });
    })
    .catch(function(error){
        console.log("Error in generating accessToken" + JSON.stringify(error));
    });