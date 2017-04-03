/**
 * Created by renuka on 27/2/17.
 */

// External Dependencies
var should = require('chai').should();
var mocha = require('mocha');
var expect = require('chai').expect;

// Internal Dependencies
var Upstox = require("../index");
var testdata = require("./testData");
var utils = require('./../utils/helper.js');
var logger = new utils.Logger();

describe('#UpstoxAPI', function () {
/*
    describe("getSessionToken()", function () {
        this.timeout(100000);

        it('Should return a sessionToken after getting successfully logged in ', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function () {
                    logger.debug("********* getSessionToken ********** \n");
                    should.exist(upstox.auth.sessionToken);
                    should.exist(upstox.auth.userId);
                    expect(upstox.isAuthenticated);
                    done();
                })
                .catch(function(error){
                    console.log(error)
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
                .then(function () {
                    done();
                })
                .catch(function(response){
                    console.log("error",response);
                    logger.error("********* getSessionToken  401  ********** \n" + JSON.stringify(error, null, 2));
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
                .then(function () {
                    start();
                })
                .catch(function (error) {
                    console.log(error);
                    should.not.exist(error);
                    done();
                });


            var start = function () {
                upstox.getProfile().then(function (response) {
                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
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
                    logger.debug(response);
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
                    should.exist(error);
                    done();
                });
        });
    });

    describe('getHolding()', function(){
        this.timeout(5000);
        it('Should return a holdings', function (done) {

            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function () {
                    start();
                 })
                .catch(function (error) {
                    should.not.exist(error);
                    done(error);
                });


            var start = function() {
                upstox.getHoldings()
                    .then(function (response) {
                        var data = response.data;
                        expect(data).to.be.instanceof(Array);
                        done();
                    })
                    .catch(function(error){
                        done(error);
                    });
            };
        });
    });

    describe('getBalance()', function(){

        this.timeout(8000);
        it('Should return limits', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred).then(function (response) {
                //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getBalance()
                    .then(function (response) {
                        logger.debug("************ getLimits ***************\n " + JSON.stringify(response, null, 2));

                        expect(response.code === 200);
                        should.exist(response.data);
                        var data = response.data;
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
                    });
            };
        });
    });

    describe('getPositions()', function(){
        it('Should return positions', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred).then(function (response) {
                //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                start();
            });

            var start = function() {
                upstox.getPositions().then(function (response) {
                    logger.debug("Position Response ----------" + JSON.stringify(response, null, 2));
                     expect(response.code === 200);
                     should.exist(response.data);
                     var data = response.data;
                     expect(data).to.be.instanceof(Array);
                    done();
                });
            };
        });
    });

    describe('getMasterContract()', function() {

        this.timeout(100000);
        it('Should get the all exchange details successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function () {
                upstox.getMasterContract().then(function (response) {
                    //logger.debug("BOD file  ------------ Response ----------" + JSON.stringify(response.body, null, 2));
                    expect(response.code === 200);
                    done();
                }).catch(function(response){
                    done();
                });
            }
        });


        it('Should get the specified exchange details successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function () {
                var params = {
                    "exchange" : testdata.exchange
                };
                upstox.getMasterContract(params).then(function (response) {
                    //logger.debug("BOD file  ------------ Response ----------" + JSON.stringify(response.body, null, 2));
                    done();
                }).catch(function(response){
                    done();
                });
            }
        });
    });

    describe('getLiveData()', function() {

        this.timeout(10000);      
        it('Should get the specified type details successfully with ltp', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response.body, null, 2));
                    start();
                });

            var start = function () {
                upstox.getLiveFeed(testdata.miniLiveData).then(function (response) {
                    logger.debug("MiniType ------------ Response ----------" + JSON.stringify(response, null, 2));
                    var data = response.data;
                    should.exist(data.open);
                    should.exist(data.high);
                    should.exist(data.low);
                    should.exist(data.close);
                    should.not.exist(data.yearly_low);
                    should.not.exist(data.yearly_high);
                    done();
                }).catch(function(response){
                    logger.error("LiveData ------------ Error ----------" + JSON.stringify(response, null, 2));
                    done();
                });
            }
        });

        it('Should get the specified miniType details successfully with full', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response.body, null, 2));
                    start();
                });

            var start = function () {
                upstox.getLiveFeed(testdata.fullLiveData).then(function (response) {
                    logger.debug("MiniType Full ------------ Response ----------" + JSON.stringify(response, null, 2));
                    var data = response.data;
                    should.exist(data.open);
                    should.exist(data.high);
                    should.exist(data.low);
                    should.exist(data.close);
                    should.exist(data.yearly_low);
                    should.exist(data.yearly_high);
                    done();
                }).catch(function(error){
                    console.log(error);
                    logger.error("LiveData ------------ Error ----------" + JSON.stringify(error, null, 2));
                    done();
                });
            }
        });
    });

    describe('getOrders()', function() {

        this.timeout(10000);
        it('Should get all order successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function () {
                upstox.getOrders().then(function (response) {
                    logger.debug("All orders ------------ Response ----------" + JSON.stringify(response, null, 2));
                    var data = response.data;
                    expect(data).to.be.instanceOf(Array);
                    done();
                });
            }
        });
    });

    describe('placeOrder()', function(){

        this.timeout(8000);
        it('Should place an order successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function() {
                upstox.placeOrder(testdata.orderObject).then(function (response) {
                    logger.debug("Order placement ------------ Response ----------" + JSON.stringify(response.data, null, 2));

                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
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
                    testdata.orderId = data.order_id;
                    done();
                },(err) => {
                    console.log(err);
                    should.not.exist(err);
                    done();
                });
            };
        });
    });

    describe('modifyOrder()', function (){
        this.timeout(150000);
        it('Should modify an order successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var params = {
                "order_id" : testdata.orderId,
                "quantity" : 10
            };
            var start = function () {
                upstox.modifyOrder(params)
                .then((response) => {
                    logger.debug("Modify orders ------------ Response ----------" + JSON.stringify(response, null, 2));
                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
                    expect(data.quantity).to.equal(10);
                    done();
                }, (err) => {
                    console.log(err);
                    should.not.exist(err);
                    done();
                });
            }
        });
    });

    describe('deleteOrder()', function (){
        this.timeout(150000);
        it('Should delete an order successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var params = {
                "order_id" : testdata.orderId
            };
            var start = function () {
                upstox.cancelOrder(params).then((response) => {
                    logger.debug("Delete orders ------------ Response ----------" + JSON.stringify(response, null, 2));
                    expect(response.code).to.equal(200);
                    done();
                }, (err) => {
                    console.log(err);
                    should.not.exist(err);
                    done();
                });
            }
        });
    });

    describe('getOrdersInfo()', function(){

        this.timeout(8000);
        it('Should get specific order details', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function() {
                upstox.placeOrder(testdata.orderObject).then(function (response) {
                    
                    testdata.orderId = response.data.order_id;
                    upstox.getOrdersInfo({
                        order_ids: testdata.orderId
                    })
                    .then((response) => {
                        logger.debug("Orders Info ------------ Response ----------" + JSON.stringify(response, null, 2));
                        expect(response.code === 200);
                        should.exist(response.data);
                        var data = response.data;
                        expect(data).to.be.instanceof(Array);
                        expect(data).to.have.length.above(0);
                        expect(data.map((d)=> { return d.order_id}).indexOf(testdata.orderId)).to.be.not.equal(-1);
                        done();
                    
                    }, (err) => {
                        console.log(err);
                        should.not.exist(err);
                        done();
                    });
                });
            };
        });
    });

    describe('getTradesInfo()', function(){

        this.timeout(8000);
        it('Should gettrades for specific order id', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function() {
                upstox.getTradesInfo({"order_id": testdata.orderId})
                .then((response) => {
                    logger.debug("Trades Info ------------ Response ----------" + JSON.stringify(response, null, 2));
                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
                    expect(data).to.be.instanceof(Array);
                    expect(data).to.have.length.above(0);
                    expect(data.map((d)=> { return d.order_id}).indexOf(testdata.orderId)).to.be.not.equal(-1);
                    done();
                }, (err) => {
                    console.log(err);
                    should.not.exist(err);
                    done();
                });
            };
        });
    });

    describe('getOHLC()', function() {
        this.timeout(150000);
        it('Should get ohlc successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function () {
                upstox.getOHLC(testdata.ohlc)
                .then((response) => {
                    logger.debug("OHLC ------------ Response ----------" + JSON.stringify(response.body, null, 2));
                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
                    expect(data).to.be.instanceof(Array);
                    expect(data).to.have.length.above(0);
                    done();
                }, (err) => {
                    console.log(err);
                    should.not.exist(err);
                    done();
                });
            }
        });
    });

    describe('unsubscribeFeed()', function() {
        this.timeout(150000);
        it('Should get ohlc successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function () {
                upstox.unsubscribeFeed(testdata.feedUnsub).then(function (response) {
                    logger.debug("unsubscribe ------------ Response ----------" + JSON.stringify(response.body, null, 2));
                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
                    expect(data.success);
                    done();
                });
            }
        });
    });
    describe('subscribeFeed()', function() {
        this.timeout(150000);
        it('Should get subcribe to feed list successfully', function (done) {
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(function (response) {
                    //logger.debug("Final Response ----------" + JSON.stringify(response, null, 2));
                    start();
                });

            var start = function () {
                upstox.subscribeFeed(testdata.feedSub)
                .then((response) => {
                    logger.debug("subscribe ------------ Response ----------" + JSON.stringify(response.body, null, 2));
                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
                    expect(data.success);
                    done();
                }, (err) => {
                    console.log(err);
                    should.not.exist(err);
                    done();
                });
            }
        });
    });
    
    describe('connectSocket()', function(){
        this.timeout(150000);
        it('Should connect successfully', (done)=>{
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then((response)=>{
                    start();
                });
            var start = ()=>{
                upstox.connectSocket()
                    .then(() => {
                        done();
                    }, (err) => {
                        should.not.exist(err);
                        done();
                    });
            }
        });
    });

    describe('on orderUpdate', function(){
        this.timeout(150000);
        it('order update message should be received', (done)=>{
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(()=>{
                    upstox.connectSocket()
                        .then(()=>{
                            start();
                        },(err)=>{
                            should.not.exist(err);
                            done();
                        });
                });
            var start = ()=>{
                var placedOrderData,
                    message,
                    isMessageReceived = false,
                    orderPlaced = false;
                var bothDone = function() {
                    if(isMessageReceived && orderPlaced) {
                        should.exist(message);
                        should.exist(placedOrderData);
                        should.exist(placedOrderData.order_id);
                        should.exist(message.order_id);
                        expect(placedOrderData.order_id).to.equal(message.order_id);
                        upstox.on("disconnected", (msg) => {
                            done();
                        });
                        upstox.closeSocket();
                    }
                }
                upstox.on("orderUpdate", (msg) => {
                    message = msg;
                    isMessageReceived = true;
                    bothDone();
                });
                upstox.placeOrder(testdata.orderObject)
                    .then(function (response) {
                        placedOrderData = response.data;
                        orderPlaced = true;
                        bothDone();
                    }).catch(function(error) {
                        console.log(error);
                        should.not.exist(error);
                    });
            };
        });
    });

    describe('on disconnected', function() {
       this.timeout(10000);
       it('connection closed message should be received', (done)=>{
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(()=>{
                    upstox.connectSocket()
                        .then(()=>{
                            upstox.on("disconnected", (msg) => {
                                expect(msg).to.equal("Connection Closed");
                                done();
                            });
                            upstox.closeSocket();
                        },(err)=>{
                            should.not.exist(err);
                            done();
                        });
                });
       })
    });*/
    describe('on liveFeed', function(){
        this.timeout(150000);
        it('live feed message should be received', (done)=>{
            var upstox = new Upstox("123");
            upstox.getSessionToken(testdata.loginCred)
                .then(()=>{
                    upstox.connectSocket()
                        .then(()=>{
                            upstox.subscribeFeed(testdata.feedUpdate)
                                .then(()=>{
                                    start();
                                }, (err)=>{
                                    start();
                                });
                        },(err)=>{
                            should.not.exist(err);
                            done();
                        });
                });
            var start = ()=>{
               
                upstox.on("liveFeed", (msg) => {
                    upstox.on("disconnected", (msg) => {
                        done();
                    });
                    upstox.closeSocket();
                });
            };
        });
    });
});