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
    describe('OptionStrikeData', function() {
      beforeEach(function() {
        instance = new UpstoxClient.OptionStrikeData();
      });

      it('should create an instance of OptionStrikeData', function() {
        // TODO: update the code to test OptionStrikeData
        expect(instance).to.be.a(UpstoxClient.OptionStrikeData);
      });

      it('should have the property expiry (base name: "expiry")', function() {
        // TODO: update the code to test the property expiry
        expect(instance).to.have.property('expiry');
        // expect(instance.expiry).to.be(expectedValueLiteral);
      });

      it('should have the property pcr (base name: "pcr")', function() {
        // TODO: update the code to test the property pcr
        expect(instance).to.have.property('pcr');
        // expect(instance.pcr).to.be(expectedValueLiteral);
      });

      it('should have the property strikePrice (base name: "strike_price")', function() {
        // TODO: update the code to test the property strikePrice
        expect(instance).to.have.property('strikePrice');
        // expect(instance.strikePrice).to.be(expectedValueLiteral);
      });

      it('should have the property underlyingKey (base name: "underlying_key")', function() {
        // TODO: update the code to test the property underlyingKey
        expect(instance).to.have.property('underlyingKey');
        // expect(instance.underlyingKey).to.be(expectedValueLiteral);
      });

      it('should have the property underlyingSpotPrice (base name: "underlying_spot_price")', function() {
        // TODO: update the code to test the property underlyingSpotPrice
        expect(instance).to.have.property('underlyingSpotPrice');
        // expect(instance.underlyingSpotPrice).to.be(expectedValueLiteral);
      });

      it('should have the property callOptions (base name: "call_options")', function() {
        // TODO: update the code to test the property callOptions
        expect(instance).to.have.property('callOptions');
        // expect(instance.callOptions).to.be(expectedValueLiteral);
      });

      it('should have the property putOptions (base name: "put_options")', function() {
        // TODO: update the code to test the property putOptions
        expect(instance).to.have.property('putOptions');
        // expect(instance.putOptions).to.be(expectedValueLiteral);
      });

    });
  });

}));
