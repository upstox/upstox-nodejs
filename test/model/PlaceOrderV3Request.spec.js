/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.66
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
    describe('PlaceOrderV3Request', function() {
      beforeEach(function() {
        instance = new UpstoxClient.PlaceOrderV3Request();
      });

      it('should create an instance of PlaceOrderV3Request', function() {
        // TODO: update the code to test PlaceOrderV3Request
        expect(instance).to.be.a(UpstoxClient.PlaceOrderV3Request);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property product (base name: "product")', function() {
        // TODO: update the code to test the property product
        expect(instance).to.have.property('product');
        // expect(instance.product).to.be(expectedValueLiteral);
      });

      it('should have the property validity (base name: "validity")', function() {
        // TODO: update the code to test the property validity
        expect(instance).to.have.property('validity');
        // expect(instance.validity).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property tag (base name: "tag")', function() {
        // TODO: update the code to test the property tag
        expect(instance).to.have.property('tag');
        // expect(instance.tag).to.be(expectedValueLiteral);
      });

      it('should have the property slice (base name: "slice")', function() {
        // TODO: update the code to test the property slice
        expect(instance).to.have.property('slice');
        // expect(instance.slice).to.be(expectedValueLiteral);
      });

      it('should have the property instrumentToken (base name: "instrument_token")', function() {
        // TODO: update the code to test the property instrumentToken
        expect(instance).to.have.property('instrumentToken');
        // expect(instance.instrumentToken).to.be(expectedValueLiteral);
      });

      it('should have the property orderType (base name: "order_type")', function() {
        // TODO: update the code to test the property orderType
        expect(instance).to.have.property('orderType');
        // expect(instance.orderType).to.be(expectedValueLiteral);
      });

      it('should have the property transactionType (base name: "transaction_type")', function() {
        // TODO: update the code to test the property transactionType
        expect(instance).to.have.property('transactionType');
        // expect(instance.transactionType).to.be(expectedValueLiteral);
      });

      it('should have the property disclosedQuantity (base name: "disclosed_quantity")', function() {
        // TODO: update the code to test the property disclosedQuantity
        expect(instance).to.have.property('disclosedQuantity');
        // expect(instance.disclosedQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property triggerPrice (base name: "trigger_price")', function() {
        // TODO: update the code to test the property triggerPrice
        expect(instance).to.have.property('triggerPrice');
        // expect(instance.triggerPrice).to.be(expectedValueLiteral);
      });

      it('should have the property isAmo (base name: "is_amo")', function() {
        // TODO: update the code to test the property isAmo
        expect(instance).to.have.property('isAmo');
        // expect(instance.isAmo).to.be(expectedValueLiteral);
      });

    });
  });

}));
