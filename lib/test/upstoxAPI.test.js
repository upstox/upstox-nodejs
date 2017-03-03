/**
 * Created by renuka on 27/2/17.
 */


var should = require('chai').should();
var mocha = require('mocha');
var expect = require('chai').expect;

var Upstox = require("../index");
var testdata = require("./testData");

describe('#UpstoxAPI', function () {

    describe("getSessionToken()", function () {
        this.timeout(8000);

        it('Should return a sessionToken after getting successfully logged in ', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    console.log("********* getSessionToken ********** \n" + JSON.stringify(response, null, 2));
                    expect(response.status).to.equal('OK');
                    expect(response.code === 200);
                    should.exist(response.sessionToken);
                    done();
                })
                .catch(function(error){
                    done(error);
                });
        });

        it('Should unauthorized, wrong credentials ', function (done) {
            var upstox = new Upstox("123");
            var cred = {
                "username" : "145",
                "password" : "xyz"
            };
            upstox.getSessionToken(cred)
                .then(function (response) {
                    //console.log("********* getSessionToken ********** \n" + JSON.stringify(response, null, 2));
                    done();
                })
                .catch(function(response){
                    //console.log("********* getSessionToken  401  ********** \n" + JSON.stringify(error, null, 2));
                    should.exist(response.error);
                    var error = response.error;
                    expect(error.code === 401);
                    expect(error.status ==="Unauthorized");
                    done();
                });
        });
    });

    describe('getProfile()', function() {

        this.timeout(5000);
        it('Should return a users profile', function (done) {


            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    expect(response.status).to.equal('OK');
                    start();
                })
                .catch(function (error) {
                    should.exist(error.response);
                    var response = error.response;
                    expect(response.code === 401);
                    done();
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
                    done();
                })
                .catch(function(error){
                    done(error);
                });
            };
        });

        it('Should generate unauthorized error', function (done) {

            var upstox = new Upstox("123");
            upstox.getProfile()
                .then(function (response) {
                    done();
                })
                .catch(function (error) {
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
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    expect(response.status).to.equal('OK');
                    start();
                 })
                .catch(function (error) {
                    should.exist(error.response);
                    var response = error.response;
                    done(error);
                });


            var start = function() {
                upstox.getHoldings()
                    .then(function (response) {
                        done();
                    })
                    .catch(function(error){
                        done(error);
                    });
            };
        });
    });

    describe('getLimits()', function(){

        this.timeout(8000);
        it('Should return a limits', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred).then(function (response) {
                //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getLimits()
                    .then(function (response) {
                        console.log("************ getLimits ***************\n " + JSON.stringify(response.body, null, 2));

                        expect(response.code === 200);
                        should.exist(response.body.data);
                        var data = response.body.data;
                        should.exist(data.equity);
                        should.exist(data.commodity);
                        var equity = data.equity;
                        var commodity = data.commodity;

                        should.exist(equity.used_margin);
                        should.exist(equity.unrealized_mtm);
                        should.exist(equity.realized_mtm);
                        should.exist(equity.payin_amount);
                        should.exist(equity.span_margin);
                        should.exist(equity.available_margin);
                        should.exist(equity.adhoc_margin);
                        should.exist(equity.notional_cash);
                        should.exist(equity.ledger_balance);
                        should.exist(equity.exposure_margin);

                        should.exist(commodity.used_margin);
                        should.exist(commodity.unrealized_mtm);
                        should.exist(commodity.realized_mtm);
                        should.exist(commodity.payin_amount);
                        should.exist(commodity.span_margin);
                        should.exist(commodity.available_margin);
                        should.exist(commodity.adhoc_margin);
                        should.exist(commodity.notional_cash);
                        should.exist(commodity.ledger_balance);
                        should.exist(commodity.exposure_margin);

                        done();
                    })
                    .catch(function (error) {
                        done();
                    })
            };
        });
    });

    describe('getPositions()', function(){
        it('Should return positions', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred).then(function (response) {
                //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getPositions().then(function (response) {
                    console.log("Position Response ----------" + JSON.stringify(response.body, null, 2));
                    done();
                });
            };
        });
    });

    describe('placeOrder()', function(){

        this.timeout(8000);
        it('Should place an order successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.placeOrder(testdata.orderObject).then(function (response) {
                    console.log("Order placement ------------ Response ----------" + JSON.stringify(response.body, null, 2));

                    expect(response.code === 200);
                    should.exist(response.body.data);
                    var data = response.body.data;
                    should.exist(data.exchange);
                    should.exist(data.token);
                    should.exist(data.symbol);
                    should.exist(data.product);
                    should.exist(data.order_type);
                    should.exist(data.duration);
                    should.exist(data.price);
                    should.exist(data.quantity);
                    should.exist(data.disclosed_quantity);
                    should.exist(data.transaction_type);
                    should.exist(data.average_price);
                    should.exist(data.traded_quantity);
                    should.exist(data.message);
                    should.exist(data.exchange_order_id);
                    should.exist(data.parent_order_id);
                    should.exist(data.order_id);
                    should.exist(data.exchange_time);
                    should.exist(data.time_in_micro);
                    should.exist(data.is_amo);
                    should.exist(data.valid_date);
                    should.exist(data.order_request_id);
                    should.exist(data.total_traded_quantity);
                    should.exist(data.traded_shares);
                    should.exist(data.traded_price);
                    should.exist(data.stop_loss);
                    should.exist(data.square_off);
                    should.exist(data.trailing_ticks);
                    done();
                });
            };
        });
    });

    describe('getOrders()', function() {

        this.timeout(5000);
        it('Should place an order successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function () {
                upstox.getOrders().then(function (response) {
                    console.log("All orders ------------ Response ----------" + JSON.stringify(response.body, null, 2));
                    done();
                });
            }
        });
    });

    describe('getInstruments()', function() {

        this.timeout(3000);
        it('Should get the all exchange details successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //console.log("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function () {
                upstox.getInstruments().then(function (response) {
                    //console.log("BOD file  ------------ Response ----------" + JSON.stringify(response.body, null, 2));
                    done();
                }).catch(function(response){
                    done();
                });
            }
        });
    });
});