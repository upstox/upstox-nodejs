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
    describe('MarketData', function() {
      beforeEach(function() {
        instance = new UpstoxClient.MarketData();
      });

      it('should create an instance of MarketData', function() {
        // TODO: update the code to test MarketData
        expect(instance).to.be.a(UpstoxClient.MarketData);
      });

      it('should have the property ltp (base name: "ltp")', function() {
        // TODO: update the code to test the property ltp
        expect(instance).to.have.property('ltp');
        // expect(instance.ltp).to.be(expectedValueLiteral);
      });

      it('should have the property volume (base name: "volume")', function() {
        // TODO: update the code to test the property volume
        expect(instance).to.have.property('volume');
        // expect(instance.volume).to.be(expectedValueLiteral);
      });

      it('should have the property oi (base name: "oi")', function() {
        // TODO: update the code to test the property oi
        expect(instance).to.have.property('oi');
        // expect(instance.oi).to.be(expectedValueLiteral);
      });

      it('should have the property closePrice (base name: "close_price")', function() {
        // TODO: update the code to test the property closePrice
        expect(instance).to.have.property('closePrice');
        // expect(instance.closePrice).to.be(expectedValueLiteral);
      });

      it('should have the property bidPrice (base name: "bid_price")', function() {
        // TODO: update the code to test the property bidPrice
        expect(instance).to.have.property('bidPrice');
        // expect(instance.bidPrice).to.be(expectedValueLiteral);
      });

      it('should have the property bidQty (base name: "bid_qty")', function() {
        // TODO: update the code to test the property bidQty
        expect(instance).to.have.property('bidQty');
        // expect(instance.bidQty).to.be(expectedValueLiteral);
      });

      it('should have the property askPrice (base name: "ask_price")', function() {
        // TODO: update the code to test the property askPrice
        expect(instance).to.have.property('askPrice');
        // expect(instance.askPrice).to.be(expectedValueLiteral);
      });

      it('should have the property askQty (base name: "ask_qty")', function() {
        // TODO: update the code to test the property askQty
        expect(instance).to.have.property('askQty');
        // expect(instance.askQty).to.be(expectedValueLiteral);
      });

      it('should have the property prevOi (base name: "prev_oi")', function() {
        // TODO: update the code to test the property prevOi
        expect(instance).to.have.property('prevOi');
        // expect(instance.prevOi).to.be(expectedValueLiteral);
      });

    });
  });

}));
