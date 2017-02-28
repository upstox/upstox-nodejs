/**
 * Created by renuka on 27/2/17.
 */


var should = require('chai').should;
var mocha = require('mocha');
var expect = require('chai').expect;

var Upstox = require("../index");



describe('#UpstoxAPI', function () {


    var upstox;
    // beforeEach(function(done){
    //     upstox = new Upstox("123");
    //
    // });

    describe("getSessionToken", function () {
        it('Should return a sessionToken after getting successfully logged in ', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken("120013","abc@189").then(function (response) {
                console.log("Final Response ----------" + JSON.stringify(response, null, 2));
               should.equal(response.statusCode, "200", "Session generated successfully");
                //response.body.should.have(sessioToken);
                done();
            });
        });

        it('Should return a users profile', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken("120013","abc@189").then(function (response) {
                console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getProfile().then(function (response) {
                    console.log("Profile Response ----------" + JSON.stringify(response.body, null, 2));
                });
                done();
            };
        });

        it('Should return a holdings', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken("120013","abc@189").then(function (response) {
                console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getHoldings().then(function (response) {
                    console.log("Holdings Response ----------" + JSON.stringify(response.body, null, 2));
                });
                done();

            };
        });

    })

});

//
// var upstox = new Upstox("123");
// upstox.getSessionToken("120013","abc@189").then(function (response) {
//     console.log("Final Response ----------" + JSON.stringify(response, null, 2));
//
//     start();
// });
//
// var start = function() {
//     upstox.getHoldings().then(function (response) {
//         console.log("Holdings Response ----------" + JSON.stringify(response.body, null, 2));
//     });
//
//     upstox.getProfile().then(function (response) {
//         console.log("Profile Response ----------" + JSON.stringify(response.body, null, 2));
//     });
// };
