var Upstox = require("../index");

var upstox = new Upstox("ucqheFvdRy7f4fF4jxJuu6fNUpSbh0N53KDKdbDu");

// upstox.getAccessToken({
//     "apiSecret" : "your_api_secret",
//     "code" : "login_code",
//     "redirect_uri" : "your_redirect_uri"
//
// })
// .then(function(response) {
//
//     console.log(response);

    //var accessToken = response.access_token;
    console.log("Login url " + upstox.getLoginUri("localhost://3000"));
    upstox.setToken("9b3b392d40ce8a45a88280a92e20d1ce58ae2658");

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
                console.log("error", message);
            });
        }).catch(function(error) {
            console.log( "******** " , error);
        });
// })
// .catch(function(error){
//     console.log("Error in generating accessToken" + JSON.stringify(error));
// });