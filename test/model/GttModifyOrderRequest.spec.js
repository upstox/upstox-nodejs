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
    describe('GttModifyOrderRequest', function() {
      beforeEach(function() {
        instance = new UpstoxClient.GttModifyOrderRequest();
      });

      it('should create an instance of GttModifyOrderRequest', function() {
        // TODO: update the code to test GttModifyOrderRequest
        expect(instance).to.be.a(UpstoxClient.GttModifyOrderRequest);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property rules (base name: "rules")', function() {
        // TODO: update the code to test the property rules
        expect(instance).to.have.property('rules');
        // expect(instance.rules).to.be(expectedValueLiteral);
      });

      it('should have the property gttOrderId (base name: "gtt_order_id")', function() {
        // TODO: update the code to test the property gttOrderId
        expect(instance).to.have.property('gttOrderId');
        // expect(instance.gttOrderId).to.be(expectedValueLiteral);
      });

    });
  });

}));
