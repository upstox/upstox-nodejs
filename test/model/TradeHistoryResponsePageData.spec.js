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
    describe('TradeHistoryResponsePageData', function() {
      beforeEach(function() {
        instance = new UpstoxClient.TradeHistoryResponsePageData();
      });

      it('should create an instance of TradeHistoryResponsePageData', function() {
        // TODO: update the code to test TradeHistoryResponsePageData
        expect(instance).to.be.a(UpstoxClient.TradeHistoryResponsePageData);
      });

      it('should have the property pageNumber (base name: "page_number")', function() {
        // TODO: update the code to test the property pageNumber
        expect(instance).to.have.property('pageNumber');
        // expect(instance.pageNumber).to.be(expectedValueLiteral);
      });

      it('should have the property pageSize (base name: "page_size")', function() {
        // TODO: update the code to test the property pageSize
        expect(instance).to.have.property('pageSize');
        // expect(instance.pageSize).to.be(expectedValueLiteral);
      });

      it('should have the property totalRecords (base name: "total_records")', function() {
        // TODO: update the code to test the property totalRecords
        expect(instance).to.have.property('totalRecords');
        // expect(instance.totalRecords).to.be(expectedValueLiteral);
      });

      it('should have the property totalPages (base name: "total_pages")', function() {
        // TODO: update the code to test the property totalPages
        expect(instance).to.have.property('totalPages');
        // expect(instance.totalPages).to.be(expectedValueLiteral);
      });

    });
  });

}));