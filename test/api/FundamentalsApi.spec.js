/*
 * Upstox Node.js SDK
 * FundamentalsApi spec tests
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
    instance = new UpstoxClient.FundamentalsApi(mockApiClient);
  });

  afterEach(function() {
    mockApiClient.callApi.restore();
  });

  describe('(package)', function() {
    describe('FundamentalsApi', function() {

      describe('getBalanceSheet', function() {
        it('should throw when isin is missing', function() {
          expect(function() {
            instance.getBalanceSheet(undefined, {}, function() {});
          }).to.throwError(/isin/);
        });

        it('should invoke callApi for GET /v2/fundamentals/{isin}/balance-sheet', function(done) {
          instance.getBalanceSheet('INE002A01018', {}, function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/fundamentals/{isin}/balance-sheet');
            expect(args[1]).to.be('GET');
            expect(args[2]).to.eql({isin: 'INE002A01018'});
            expect(args[7]).to.eql(['OAUTH2']);
            expect(args[10]).to.be(UpstoxClient.BalanceSheetResponse);
            done();
          });
        });

        it('should pass optional type and fs query params', function(done) {
          instance.getBalanceSheet('INE002A01018', {type: 'consolidated', fs: true}, function(error, data, response) {
            expect(error).to.be(null);
            var queryParams = mockApiClient.callApi.getCall(0).args[3];
            expect(queryParams.type).to.be('consolidated');
            expect(queryParams.fs).to.be(true);
            done();
          });
        });
      });

      describe('getCashFlow', function() {
        it('should throw when isin is missing', function() {
          expect(function() {
            instance.getCashFlow(null, {}, function() {});
          }).to.throwError(/isin/);
        });

        it('should invoke callApi for GET /v2/fundamentals/{isin}/cash-flow', function(done) {
          instance.getCashFlow('INE002A01018', {}, function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/fundamentals/{isin}/cash-flow');
            expect(args[1]).to.be('GET');
            expect(args[10]).to.be(UpstoxClient.CashFlowResponse);
            done();
          });
        });
      });

      describe('getCompanyProfile', function() {
        it('should throw when isin is missing', function() {
          expect(function() {
            instance.getCompanyProfile(undefined, function() {});
          }).to.throwError(/isin/);
        });

        it('should invoke callApi for GET /v2/fundamentals/{isin}/profile', function(done) {
          instance.getCompanyProfile('INE002A01018', function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/fundamentals/{isin}/profile');
            expect(args[1]).to.be('GET');
            expect(args[2]).to.eql({isin: 'INE002A01018'});
            expect(args[10]).to.be(UpstoxClient.CompanyProfileResponse);
            done();
          });
        });
      });

      describe('getCompetitors', function() {
        it('should throw when instrumentKey is missing', function() {
          expect(function() {
            instance.getCompetitors(null, function() {});
          }).to.throwError(/instrumentKey/);
        });

        it('should invoke callApi for GET /v2/fundamentals/{instrument_key}/competitors', function(done) {
          instance.getCompetitors('NSE_EQ|INE002A01018', function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/fundamentals/{instrument_key}/competitors');
            expect(args[1]).to.be('GET');
            expect(args[2]).to.eql({instrument_key: 'NSE_EQ|INE002A01018'});
            expect(args[10]).to.be(UpstoxClient.CompetitorsResponse);
            done();
          });
        });
      });

      describe('getCorporateActions', function() {
        it('should throw when isin is missing', function() {
          expect(function() {
            instance.getCorporateActions(undefined, function() {});
          }).to.throwError(/isin/);
        });

        it('should invoke callApi for GET /v2/fundamentals/{isin}/corporate-actions', function(done) {
          instance.getCorporateActions('INE002A01018', function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/fundamentals/{isin}/corporate-actions');
            expect(args[10]).to.be(UpstoxClient.CorporateActionsResponse);
            done();
          });
        });
      });

      describe('getIncomeStatement', function() {
        it('should throw when isin is missing', function() {
          expect(function() {
            instance.getIncomeStatement(null, {}, function() {});
          }).to.throwError(/isin/);
        });

        it('should invoke callApi for GET /v2/fundamentals/{isin}/income-statement', function(done) {
          instance.getIncomeStatement('INE002A01018', {type: 'standalone', timePeriod: 'quarterly'}, function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/fundamentals/{isin}/income-statement');
            var queryParams = args[3];
            expect(queryParams.type).to.be('standalone');
            expect(queryParams.time_period).to.be('quarterly');
            expect(args[10]).to.be(UpstoxClient.IncomeStatementResponse);
            done();
          });
        });
      });

      describe('getKeyRatios', function() {
        it('should throw when isin is missing', function() {
          expect(function() {
            instance.getKeyRatios(undefined, function() {});
          }).to.throwError(/isin/);
        });

        it('should invoke callApi for GET /v2/fundamentals/{isin}/key-ratios', function(done) {
          instance.getKeyRatios('INE002A01018', function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/fundamentals/{isin}/key-ratios');
            expect(args[10]).to.be(UpstoxClient.KeyRatiosResponse);
            done();
          });
        });
      });

      describe('getShareHoldings', function() {
        it('should throw when isin is missing', function() {
          expect(function() {
            instance.getShareHoldings(null, function() {});
          }).to.throwError(/isin/);
        });

        it('should invoke callApi for GET /v2/fundamentals/{isin}/share-holdings', function(done) {
          instance.getShareHoldings('INE002A01018', function(error, data, response) {
            expect(error).to.be(null);
            var args = mockApiClient.callApi.getCall(0).args;
            expect(args[0]).to.be('/v2/fundamentals/{isin}/share-holdings');
            expect(args[10]).to.be(UpstoxClient.ShareHoldingsResponse);
            done();
          });
        });
      });

    });
  });

}));
