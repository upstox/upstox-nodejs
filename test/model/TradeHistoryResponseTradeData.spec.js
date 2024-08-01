/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UpstoxClient);
  }
}(this, function(expect, UpstoxClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('TradeHistoryResponseTradeData', function() {
      beforeEach(function() {
        instance = new UpstoxClient.TradeHistoryResponseTradeData();
      });

      it('should create an instance of TradeHistoryResponseTradeData', function() {
        // TODO: update the code to test TradeHistoryResponseTradeData
        expect(instance).to.be.a(UpstoxClient.TradeHistoryResponseTradeData);
      });

      it('should have the property exchange (base name: "exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property segment (base name: "segment")', function() {
        // TODO: update the code to test the property segment
        expect(instance).to.have.property('segment');
        // expect(instance.segment).to.be(expectedValueLiteral);
      });

      it('should have the property optionType (base name: "option_type")', function() {
        // TODO: update the code to test the property optionType
        expect(instance).to.have.property('optionType');
        // expect(instance.optionType).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property tradeId (base name: "trade_id")', function() {
        // TODO: update the code to test the property tradeId
        expect(instance).to.have.property('tradeId');
        // expect(instance.tradeId).to.be(expectedValueLiteral);
      });

      it('should have the property tradeDate (base name: "trade_date")', function() {
        // TODO: update the code to test the property tradeDate
        expect(instance).to.have.property('tradeDate');
        // expect(instance.tradeDate).to.be(expectedValueLiteral);
      });

      it('should have the property transactionType (base name: "transaction_type")', function() {
        // TODO: update the code to test the property transactionType
        expect(instance).to.have.property('transactionType');
        // expect(instance.transactionType).to.be(expectedValueLiteral);
      });

      it('should have the property scripName (base name: "scrip_name")', function() {
        // TODO: update the code to test the property scripName
        expect(instance).to.have.property('scripName');
        // expect(instance.scripName).to.be(expectedValueLiteral);
      });

      it('should have the property strikePrice (base name: "strike_price")', function() {
        // TODO: update the code to test the property strikePrice
        expect(instance).to.have.property('strikePrice');
        // expect(instance.strikePrice).to.be(expectedValueLiteral);
      });

      it('should have the property expiry (base name: "expiry")', function() {
        // TODO: update the code to test the property expiry
        expect(instance).to.have.property('expiry');
        // expect(instance.expiry).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property isin (base name: "isin")', function() {
        // TODO: update the code to test the property isin
        expect(instance).to.have.property('isin');
        // expect(instance.isin).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property instrumentToken (base name: "instrument_token")', function() {
        // TODO: update the code to test the property instrumentToken
        expect(instance).to.have.property('instrumentToken');
        // expect(instance.instrumentToken).to.be(expectedValueLiteral);
      });

    });
  });

}));