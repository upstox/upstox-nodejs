// var Upstox = require("../index");
//
//
// var upstox = new Upstox("123");
// upstox.getSessionToken({
//     "username":"340214",//"210008",
//     "password":"rksv@111"//"abc@123"
// })
//     .then(()=>{
//         upstox.connectSocket()
//             .then(()=>{
//                 upstox.on("orderUpdate", function(message) {
//                     console.log("orderUpdate", message);
//                 });
//                 upstox.on("positionUpdate", function(message) {
//                     //message for position conversion
//                     console.log("positionUpdate", message);
//                 });
//                 upstox.on("tradeUpdate", function(message) {
//                     //message for trade updates
//                     console.log("tradeUpdate", message);
//                 });
//                 upstox.on("liveFeed", function(message) {
//                     //message for live feed
//                     console.log("liveFeed", message);
//                 });
//                 upstox.on("disconnected", function(message) {
//                     //listener after socket connection is disconnected
//                     console.log("disconnected", message);
//                 });
//                 upstox.on("error", function(error) {
//                     //error listener
//                     console.log("error", message);
//                 });
//             });
//     });