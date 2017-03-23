var Upstox = require("../index");
var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log(error)
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        console.log(message);
    });
});

var upstox = new Upstox();
var testdata = require("./testData");
upstox.getSessionToken(testdata.loginCred)
    .then(function (response) {
        client.connect('ws://192.168.75.167/?id=210008&token='+encodeURIComponent(response.sessionToken));
    })
    .catch(function(error){
        console.log(error);
    });
