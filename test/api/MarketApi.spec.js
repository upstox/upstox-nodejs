/*
 * Upstox Node.js SDK
 * MarketApi spec tests
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['expect.js', '../../src/index', 'sinon'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('expect.js'), require('../../src/index'), require('sinon'));
  } else {
    factory(root.expect, root.UpstoxClient, root.sinon);
  }
}(this, function(expect, UpstoxClient, sinon) {
  'use strict';

  var instance;
  var mockApiClient;

  beforeEach(function() {
    mockApiClient = new UpstoxClient.ApiClient();
    sinon.stub(mockApiClient, 'callApi').callsFake(function(path, httpMethod, pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback) {
      callback(null, {}, {status: 200});
    });
    instance = new UpstoxClient.MarketApi(mockApiClient);
  });

  afterEach(function() {
    mockApiClient.callApi.restore();
  });

  describe('(package)', function() {
    describe('MarketApi', function() {

      describe('getChangeOiData', function() {
        it('should throw when required params are missing', function() {
          expect(function() {
            instance.getChangeOiData(undefined, '2025-12-26', '2025-01-15', 1, function() {});
          }).to.throwError(/instrumentKey/);
          expect(function() {
            instance.getChangeOiData('NSE_FO|26000', null, '2025-01-15', 1, function() {});
          }).to.throwError(/expiry/);
          expect(function() {
            instance.getChangeOiData('NSE_FO|26000', '2025-12-26', undefined, 1, function() {});
          }).to.throwError(/_date/);
          expect(function() {
            instance.getChangeOiData('NSE_FO|26000', '2025-12-26', '2025-01-15', null, function() {});
          }).to.throwError(/interval/);
        });

        it('should invoke callApi for GET /v2/market/change-oi', function(done) {
          instance.getChangeOiData('NSE_FO|26000', '2025-12-26', '2025-01-15', 1, function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/market/change-oi');
            expect(args[1]).to.be('GET');
            var queryParams = args[3];
            expect(queryParams.instrument_key).to.be('NSE_FO|26000');
            expect(queryParams.expiry).to.be('2025-12-26');
            expect(queryParams.date).to.be('2025-01-15');
            expect(queryParams.interval).to.be(1);
            expect(args[7]).to.eql(['OAUTH2']);
            expect(args[10]).to.be(UpstoxClient.AnalyticsResponse);
            done();
          });
        });
      });

      describe('getDiiData', function() {
        it('should throw when required params are missing', function() {
          expect(function() {
            instance.getDiiData(undefined, '1D', {}, function() {});
          }).to.throwError(/dataType/);
          expect(function() {
            instance.getDiiData('NSE_EQ|CASH', null, {}, function() {});
          }).to.throwError(/interval/);
        });

        it('should invoke callApi for GET /v2/market/dii', function(done) {
          instance.getDiiData('NSE_EQ|CASH', '1D', {from: '2025-01-01'}, function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/market/dii');
            expect(args[1]).to.be('GET');
            var queryParams = args[3];
            expect(queryParams.data_type).to.be('NSE_EQ|CASH');
            expect(queryParams.interval).to.be('1D');
            expect(queryParams.from).to.be('2025-01-01');
            expect(args[10]).to.be(UpstoxClient.AnalyticsResponse);
            done();
          });
        });
      });

      describe('getFiiData', function() {
        it('should throw when required params are missing', function() {
          expect(function() {
            instance.getFiiData(undefined, '1M', {}, function() {});
          }).to.throwError(/dataType/);
          expect(function() {
            instance.getFiiData('NSE_FO|INDEX_FUTURES', null, {}, function() {});
          }).to.throwError(/interval/);
        });

        it('should invoke callApi for GET /v2/market/fii', function(done) {
          instance.getFiiData('NSE_FO|INDEX_FUTURES', '1M', {}, function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/market/fii');
            expect(args[1]).to.be('GET');
            expect(args[3].data_type).to.be('NSE_FO|INDEX_FUTURES');
            expect(args[3].interval).to.be('1M');
            expect(args[10]).to.be(UpstoxClient.AnalyticsResponse);
            done();
          });
        });
      });

      describe('getMaxPainData', function() {
        it('should throw when required params are missing', function() {
          expect(function() {
            instance.getMaxPainData(null, '2025-12-26', '2025-01-15', 30, function() {});
          }).to.throwError(/instrumentKey/);
          expect(function() {
            instance.getMaxPainData('NSE_FO|26000', undefined, '2025-01-15', 30, function() {});
          }).to.throwError(/expiry/);
        });

        it('should invoke callApi for GET /v2/market/max-pain', function(done) {
          instance.getMaxPainData('NSE_FO|26000', '2025-12-26', '2025-01-15', 30, function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/market/max-pain');
            expect(args[1]).to.be('GET');
            var queryParams = args[3];
            expect(queryParams.instrument_key).to.be('NSE_FO|26000');
            expect(queryParams.expiry).to.be('2025-12-26');
            expect(queryParams.bucket_interval).to.be(30);
            expect(args[10]).to.be(UpstoxClient.AnalyticsResponse);
            done();
          });
        });
      });

      describe('getOiData', function() {
        it('should throw when required params are missing', function() {
          expect(function() {
            instance.getOiData(undefined, '2025-12-26', '2025-01-15', function() {});
          }).to.throwError(/instrumentKey/);
          expect(function() {
            instance.getOiData('NSE_FO|26000', null, '2025-01-15', function() {});
          }).to.throwError(/expiry/);
          expect(function() {
            instance.getOiData('NSE_FO|26000', '2025-12-26', undefined, function() {});
          }).to.throwError(/_date/);
        });

        it('should invoke callApi for GET /v2/market/oi', function(done) {
          instance.getOiData('NSE_FO|26000', '2025-12-26', '2025-01-15', function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/market/oi');
            expect(args[1]).to.be('GET');
            var queryParams = args[3];
            expect(queryParams.instrument_key).to.be('NSE_FO|26000');
            expect(queryParams.expiry).to.be('2025-12-26');
            expect(queryParams.date).to.be('2025-01-15');
            expect(args[10]).to.be(UpstoxClient.AnalyticsResponse);
            done();
          });
        });
      });

      describe('getPcrData', function() {
        it('should throw when required params are missing', function() {
          expect(function() {
            instance.getPcrData(null, '2025-12-26', '2025-01-15', 30, function() {});
          }).to.throwError(/instrumentKey/);
        });

        it('should invoke callApi for GET /v2/market/pcr', function(done) {
          instance.getPcrData('NSE_FO|26000', '2025-12-26', '2025-01-15', 30, function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/market/pcr');
            expect(args[1]).to.be('GET');
            var queryParams = args[3];
            expect(queryParams.instrument_key).to.be('NSE_FO|26000');
            expect(queryParams.bucket_interval).to.be(30);
            expect(args[10]).to.be(UpstoxClient.AnalyticsResponse);
            done();
          });
        });
      });

    });
  });

}));
