var Upstox = require("../index");

var upstox = new Upstox("aicstooLib53HGWHwQY5o9FqXUONZzXF2SuUioA9");
upstox.getAccessToken({
    "apiSecret" : "1pobqh7laf",
    "code" : "f54f8c3d8748f30d2d46abd2e8e6d3ac5119a568",
    "grant_type" : "authorization_code",
    "redirect_uri" : "http://localhost:3000"
})
    .then(()=>{
        upstox.connectSocket()
            .then(()=>{
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
            });
    });