/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.62
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
    describe('MultiOrderData', function() {
      beforeEach(function() {
        instance = new UpstoxClient.MultiOrderData();
      });

      it('should create an instance of MultiOrderData', function() {
        // TODO: update the code to test MultiOrderData
        expect(instance).to.be.a(UpstoxClient.MultiOrderData);
      });

      it('should have the property correlationId (base name: "correlation_id")', function() {
        // TODO: update the code to test the property correlationId
        expect(instance).to.have.property('correlationId');
        // expect(instance.correlationId).to.be(expectedValueLiteral);
      });

      it('should have the property orderId (base name: "order_id")', function() {
        // TODO: update the code to test the property orderId
        expect(instance).to.have.property('orderId');
        // expect(instance.orderId).to.be(expectedValueLiteral);
      });

    });
  });

}));
