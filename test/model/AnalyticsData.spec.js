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
    describe('AnalyticsData', function() {
      beforeEach(function() {
        instance = new UpstoxClient.AnalyticsData();
      });

      it('should create an instance of AnalyticsData', function() {
        // TODO: update the code to test AnalyticsData
        expect(instance).to.be.a(UpstoxClient.AnalyticsData);
      });

      it('should have the property vega (base name: "vega")', function() {
        // TODO: update the code to test the property vega
        expect(instance).to.have.property('vega');
        // expect(instance.vega).to.be(expectedValueLiteral);
      });

      it('should have the property theta (base name: "theta")', function() {
        // TODO: update the code to test the property theta
        expect(instance).to.have.property('theta');
        // expect(instance.theta).to.be(expectedValueLiteral);
      });

      it('should have the property gamma (base name: "gamma")', function() {
        // TODO: update the code to test the property gamma
        expect(instance).to.have.property('gamma');
        // expect(instance.gamma).to.be(expectedValueLiteral);
      });

      it('should have the property delta (base name: "delta")', function() {
        // TODO: update the code to test the property delta
        expect(instance).to.have.property('delta');
        // expect(instance.delta).to.be(expectedValueLiteral);
      });

      it('should have the property iv (base name: "iv")', function() {
        // TODO: update the code to test the property iv
        expect(instance).to.have.property('iv');
        // expect(instance.iv).to.be(expectedValueLiteral);
      });

      it('should have the property pop (base name: "pop")', function() {
        // TODO: update the code to test the property pop
        expect(instance).to.have.property('pop');
        // expect(instance.pop).to.be(expectedValueLiteral);
      });

    });
  });

}));
