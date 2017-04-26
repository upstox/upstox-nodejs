var Upstox = require("../index");

var upstox = new Upstox();
upstox.getAccessToken({
    "client_id" : "aicstooLib53HGWHwQY5o9FqXUONZzXF2SuUioA9",
    "client_secret" : "1pobqh7laf",
    "code" : "31b4e8c29a1345d28f841dbd967357e9873582e3",
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