/**
 * Created by renuka on 27/2/17.
 */


var should = require('chai').should();
var mocha = require('mocha');
var expect = require('chai').expect;

var Upstox = require("../index");
const userName = "120013";
const password = "abc@189";

describe('#UpstoxAPI', function () {

    describe("getSessionToken()", function () {
        this.timeout(5000);

        it('Should return a sessionToken after getting successfully logged in ', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(userName, password).then(function (response) {
                //console.log("#############" + JSON.stringify(response, null, 2));
                expect(response.status).to.equal('OK');
                expect(response.code === 200);
                should.exist(response.sessionToken);
                done();
            });
        });
    });

    describe('getProfile()', function() {

        this.timeout(5000);
        it('Should return a users profile', function (done) {

            var upstox = new Upstox("123");
            upstox.getSessionToken(userName, password).then(function (response) {
                //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                //should.equal(response.statusCode, "200", "Session generated successfully");
                start();
            });

            var start = function () {
                upstox.getProfile().then(function (response) {
                    expect(response.code === 200);
                    should.exist(response.body.data);
                    var data = response.body.data;
                    should.exist(data.client_id);
                    should.exist(data.name);
                    should.exist(data.account_type);
                    should.exist(data.pan);
                    should.exist(data.email);
                    should.exist(data.phone);
                    should.exist(data.nse_pcode);
                    should.exist(data.bse_pcode);
                    should.exist(data.bse_custodian_code);
                    should.exist(data.dp_account_number);
                    should.exist(data.products_enabled);
                    should.exist(data);
                    done(null, response);
                });
            };
        });

        it('Should generate unauthorized error', function (done) {

            var upstox = new Upstox("123");
            upstox.getProfile()
                .then(function (response) {
                    done();
                }).catch(function (error) {
                    should.exist(error.response);
                    var response = error.response;
                    expect(response.code === 401);
                    done();
                });
        });
    });

    describe('getHolding()', function(){
        it('Should return a holdings', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(userName, password).then(function (response) {
                //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getHoldings().then(function (response) {
                    //console.log("Holdings Response ----------" + JSON.stringify(response.body, null, 2));
                });
                done();

            };
        });
    });

    describe('getLimits()', function(){
        it('Should return a limits', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(userName, password).then(function (response) {
                //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getLimits().then(function (response) {
                    console.log("Holdings Response ----------" + JSON.stringify(response.body, null, 2));
                });
                done();

            };
        });
    });

    describe('getPositions()', function(){
        it('Should return a limits', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(userName, password).then(function (response) {
                //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getPositions().then(function (response) {
                    console.log("Holdings Response ----------" + JSON.stringify(response.body, null, 2));
                });
                done();

            };
        });
    })
});