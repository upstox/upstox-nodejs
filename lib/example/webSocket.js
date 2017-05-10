var Upstox = require("../index");

var upstox = new Upstox("8D8Qb85fp794yxtdhefvs8r6Xn2gfP8z6vInk5Mc");

upstox.getAccessToken({
    "apiSecret" : "o7w17a12q2",
    "code" : "532caf238ca06e62ed9a8b85674657bc6586dc37",
    "redirect_uri" : "http://localhost:3000"
})
.then(function(){
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
})
.catch(function(){
    console.log("Error in generating accessToken")
});