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

    this.timeout(100000);
    var upstox = new Upstox(testdata.apiKey);

    var accessToken;
    describe('******** GetLoginUrl() ******** ', function(done){
        it('should return the login url to get authenticate with oauth', function(done) {
            var loginUrl = upstox.getLoginUri(testdata.accessToken.redirect_uri, "code");
            logger.debug(loginUrl);
            done();
        });
    });

    before(function(done) {

        upstox.getAccessToken(testdata.accessToken)
            .then(function(response) {
                // logger.debug("********* getSessionToken ********** \n" + JSON.stringify(response, null, 2));
                logger.debug("********* upstox ********** \n" + JSON.stringify(upstox, null, 2));
                should.exist(upstox.auth.accessToken);
                accessToken = response.access_token;
                expect(upstox.isAuthenticated);
                done();
            })
            .catch(function (error) {
                logger.error(error);
                done(error);
            });

    });

    describe('********  setToken() ******** ', function(done){
        logger.debug("accessToken ---" + accessToken);
        if(accessToken) {
            it('should set the accessToken in upstox API', function () {
                upstox.setToken(accessToken);
                done();
            });
        }
    });

    describe('********  getProfile() ******** ', function(done){
        it('Should return a users profile', function (done) {
            upstox.getProfile().then(function (response) {
                expect(response.code === 200);
                should.exist(response.data);
                var data = response.data;
                should.exist(data);
                should.exist(data.client_id);
                should.exist(data.name);
                should.exist(data.account_type);
                should.exist(data.pan);
                should.exist(data.email);
                should.exist(data.phone);
                should.exist(data.products_enabled);
                should.exist(data.is_active);
                should.exist(data.exchanges_enabled);
                logger.debug(response);
                done();
            })
            .catch(function(error){
                logger.error(error);
                done(error);
            });
        });
    });

    describe('********  getHolding() ******** ', function() {
        it('Should get holdings details', function (done) {

            upstox.getHoldings()
                .then(function (response) {
                    var data = response.data;
                    expect(data).to.be.instanceof(Array);
                    done();
                })
                .catch(function (error) {
                    done(error);
                });
        });
    });

    describe('******** getPositions() ******** ', function(){
        it('getPositions() - Should return positions', function (done) {

            upstox.getPositions().then(function (response) {
                logger.debug("Position Response ----------" + JSON.stringify(response, null, 2));
                expect(response.code === 200);
                should.exist(response.data);
                var data = response.data;
                expect(data).to.be.instanceof(Array);
                done();
            });
        });
    });

    describe('********  getBalance() ******** ', function(){
        it('getBalance()- Should return balance', function (done) {

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
                    should.exist(equity.exposure_margin);
                    should.exist(commodity.used_margin);
                    should.exist(commodity.unrealized_mtm);
                    should.exist(commodity.realized_mtm);
                    should.exist(commodity.payin_amount);
                    should.exist(commodity.span_margin);
                    should.exist(commodity.available_margin);
                    should.exist(commodity.adhoc_margin);
                    should.exist(commodity.notional_cash);
                    should.exist(commodity.exposure_margin);
                    done();
                })
                .catch(function (error) {
                    logger.error(error);
                    done();
                });
        });
    });

    describe('********  getMasterContract() ******** ', function(){
        it('Should get the all exchange details successfully', function (done) {
                upstox.getMasterContract()
                    .then(function (response) {
                        //logger.debug("BOD file  ------------ Response ----------" + JSON.stringify(response.body, null, 2));
                        expect(response.code === 200);
                        done();
                }).catch(function(error){
                    logger.error(error);
                    done();
                });
        });
    });

    describe('******** getLiveData() ******** ', function() {

        this.timeout(10000);
        it('Should get the specified type details successfully with ltp', function (done) {

            upstox.getLiveFeed(testdata.miniLiveData).then(function (response) {
                logger.debug("MiniType ------------ Response ----------" + JSON.stringify(response, null, 2));
                var data = response.data;
                should.exist(data.timestamp);
                should.exist(data.exchange);
                should.exist(data.symbol);
                should.exist(data.ltp);
                should.exist(data.close);
                done();
            }).catch(function(response){
                logger.error("LiveData ------------ Error ----------" + JSON.stringify(response, null, 2));
                done();
            });

        });

        it('Should get the specified miniType details successfully with full', function (done) {

            upstox.getLiveFeed(testdata.fullLiveData).then(function (response) {
                logger.debug("MiniType Full ------------ Response ----------" + JSON.stringify(response, null, 2));
                var data = response.data;
                should.exist(data.timestamp);
                should.exist(data.exchange);
                should.exist(data.symbol);
                should.exist(data.ltp);
                should.exist(data.close);
                should.exist(data.bids);
                should.exist(data.asks);
                done();
            }).catch(function(error){
                logger.error("LiveData ------------ Error ----------" + JSON.stringify(error, null, 2));
                done();
            });

        });
    });

    describe('******** getOrders() ********', function() {

        this.timeout(10000);
        it('Should get all order successfully', function (done) {
            upstox.getOrders().then(function (response) {
                logger.debug("All orders ------------ Response ----------" + JSON.stringify(response, null, 2));
                var data = response.data;
                expect(data).to.be.instanceOf(Array);
                done();
            });
        });
    });

    describe('********  getTradesInfo() ******** ', function(){

        this.timeout(8000);
        it('Should get trades for specific order id', function (done) {
            upstox.getTrades({"order_id": testdata.orderId})
            .then((response) => {
                logger.debug("Trades Info ------------ Response ----------" + JSON.stringify(response, null, 2));
                expect(response.code === 200);
                should.exist(response.data);
                var data = response.data;
                expect(data).to.be.instanceof(Array);
                done();
            }, (err) => {
                logger.error(err);
                should.not.exist(err);
                done();
            });

        });
    });

    describe('********  getOHLC() ******** ', function() {
        this.timeout(150000);
        it('Should get ohlc successfully', function (done) {

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
                    logger.error(err);
                    should.not.exist(err);
                    done();
                }
            );
        });
    });

    describe('******** unsubscribeFeed() ******** ', function() {
        this.timeout(15000);
        it('Should get ohlc successfully', function (done) {

            upstox.unsubscribeFeed(testdata.feedUnsub).then(function (response) {
                logger.debug("unsubscribe ------------ Response ----------" + JSON.stringify(response, null, 2));
                expect(response.code === 200);
                should.exist(response.data);
                var data = response.data;
                expect(data.success);
                done();
            });
        });
    });

    describe('********  subscribeFeed() ******** ', function() {
        this.timeout(15000);
        it('Should get subcribe to feed list successfully', function (done) {
            upstox.subscribeFeed(testdata.feedSub)
                .then((response) => {
                    logger.debug("subscribe ------------ Response ----------" + JSON.stringify(response, null, 2));
                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
                    expect(data.success);
                    done();
                }, (err) => {
                    logger.error(err);
                    should.not.exist(err);
                    done();
                }
            );
        });
    });

    describe('******** placeOrder() ********', function(){

        this.timeout(8000);
        it('Should place an order successfully', function (done) {

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
                testdata.orderId = data.order_id;
                done();
            },(err) => {
                logger.error(err);
                should.not.exist(err);
                done();
            });

        });
    });

    describe('******** modifyOrder() ********', function (){
        this.timeout(200000);
        it('Should modify an order successfully', function (done) {

            var params = {
                "order_id" : testdata.orderId,
                "quantity" : 10
            };
            upstox.modifyOrder(params)
                .then((response) => {
                    logger.debug("Modify orders ------------ Response ----------" + JSON.stringify(response, null, 2));
                    expect(response.code === 200);
                    should.exist(response.data);
                    var data = response.data;
                    expect(data.quantity).to.equal(10);
                    done();
                }, (err) => {
                    logger.error(err);
                    should.not.exist(err);
                    done();
                });
        });
    });

    describe('********  deleteOrder() ******** ', function (){
        this.timeout(150000);
        it('Should delete an order successfully', function (done) {

            var params = {
                "order_id" : testdata.orderId
            };
            upstox.cancelOrder(params)
                .then((response) => {
                        logger.debug("Delete orders ------------ Response ----------" + JSON.stringify(response, null, 2));
                        expect(response.code).to.equal(200);
                        done();
                    }, (err) => {
                        logger.error(err);
                        should.not.exist(err);
                        done();
                    }
                );
        });
    });

    // WebSocket test cases

    describe('connectSocket()', function(){
        this.timeout(150000);
        it('Should connect successfully', (done)=>{
            upstox.connectSocket()
                .then(() => {
                    done();
                }, (err) => {
                    should.not.exist(err);
                    done();
                });
        });
    });

    describe('on orderUpdate', function(){
        this.timeout(150000);
        it('order update message should be received', (done)=>{

            upstox.connectSocket()
                .then(()=>{
                    start();
                },(err)=>{
                    should.not.exist(err);
                    done();
                });
                var start = ()=> {
                    var placedOrderData,
                        message,
                        isMessageReceived = false,
                        orderPlaced = false;

                    var bothDone = function () {
                        if (isMessageReceived && orderPlaced) {
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
                    };

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
                        }).catch(function (error) {
                        logger.error(error);
                        should.not.exist(error);
                    });
                };
        });
    });

    describe('on disconnected', function() {
       this.timeout(10000);
       it('connection closed message should be received', (done)=>{
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
                }
            );
       })
    });

    describe('on liveFeed', function(){
        this.timeout(150000);
        it('live feed message should be received', (done)=>{

            upstox.connectSocket()
                .then(()=>{
                start();
                    upstox.subscribeFeed(testdata.feedUpdate1)
                        .then(()=>{
                            subscribe();
                        }, (err)=>{
                            subscribe();
                        });
                },(err)=>{
                    should.not.exist(err);
                    done();
                });

            var subscribe = function() {
                upstox.subscribeFeed(testdata.feedUpdate2)
                    .then(() => {
                        start();
                    }, () => {
                        start();
                    })
            };

            var reliance_feed = false;
            var mrf_feed = false;
            var mindia_feed = false;

            var start = ()=>{
                upstox.on("liveFeed", (feeds) => {
                    expect(feeds).to.be.instanceof(Array);
                    feeds.forEach(function(feed) {
                        if(feed.symbol.toLowerCase() === "reliance") {
                            reliance_feed = true;
                        }
                        if(feed.symbol.toLowerCase() === "mrf") {
                            mrf_feed = true;
                        }
                        if(feed.symbol.toLowerCase() === "3mindia") {
                            mindia_feed = true;
                        }
                    });
                    if(reliance_feed && mrf_feed && mindia_feed) {
                        upstox.on("disconnected", (msg) => {
                            done();
                        });
                        upstox.closeSocket();
                    }
                });
            };
        });
    });

});