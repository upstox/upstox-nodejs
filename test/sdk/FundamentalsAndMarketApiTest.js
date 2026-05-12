
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var fundamentalsApi = new UpstoxClient.FundamentalsApi();
var marketApi = new UpstoxClient.MarketApi();

var sampleIsin = 'INE002A01018'; // Reliance Industries
var sampleInstrumentKey = 'NSE_FO|35024'; // Nifty 50 futures
var sampleExpiry = '2025-12-26';
var sampleDate = '2025-01-15';

// Get company profile
fundamentalsApi.getCompanyProfile(sampleIsin, (error, data, response) => {
  if (error) {
    console.error('error in getCompanyProfile: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getCompanyProfile');
    }
  }
});

// Get balance sheet (consolidated)
fundamentalsApi.getBalanceSheet(sampleIsin, { type: 'consolidated' }, (error, data, response) => {
  if (error) {
    console.error('error in getBalanceSheet: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getBalanceSheet');
    }
  }
});

// Get cash flow
fundamentalsApi.getCashFlow(sampleIsin, { type: 'standalone' }, (error, data, response) => {
  if (error) {
    console.error('error in getCashFlow: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getCashFlow');
    }
  }
});

// Get key ratios
fundamentalsApi.getKeyRatios(sampleIsin, (error, data, response) => {
  if (error) {
    console.error('error in getKeyRatios: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getKeyRatios');
    }
  }
});

// Get income statement
fundamentalsApi.getIncomeStatement(sampleIsin, { type: 'consolidated', timePeriod: 'yearly' }, (error, data, response) => {
  if (error) {
    console.error('error in getIncomeStatement: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getIncomeStatement');
    }
  }
});

// Get share holdings
fundamentalsApi.getShareHoldings(sampleIsin, (error, data, response) => {
  if (error) {
    console.error('error in getShareHoldings: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getShareHoldings');
    }
  }
});

// Get corporate actions
fundamentalsApi.getCorporateActions(sampleIsin, (error, data, response) => {
  if (error) {
    console.error('error in getCorporateActions: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getCorporateActions');
    }
  }
});

// Get competitors
fundamentalsApi.getCompetitors('NSE_EQ|INE002A01018', (error, data, response) => {
  if (error) {
    console.error('error in getCompetitors: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getCompetitors');
    }
  }
});

// Get OI data
marketApi.getOiData(sampleInstrumentKey, sampleExpiry, sampleDate, (error, data, response) => {
  if (error) {
    console.error('error in getOiData: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getOiData');
    }
  }
});

// Get change OI data
marketApi.getChangeOiData(sampleInstrumentKey, sampleExpiry, sampleDate, 1, (error, data, response) => {
  if (error) {
    console.error('error in getChangeOiData: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getChangeOiData');
    }
  }
});

// Get PCR data
marketApi.getPcrData(sampleInstrumentKey, sampleExpiry, sampleDate, 30, (error, data, response) => {
  if (error) {
    console.error('error in getPcrData: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getPcrData');
    }
  }
});

// Get max pain data
marketApi.getMaxPainData(sampleInstrumentKey, sampleExpiry, sampleDate, 30, (error, data, response) => {
  if (error) {
    console.error('error in getMaxPainData: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getMaxPainData');
    }
  }
});

// Get FII data
marketApi.getFiiData('NSE_FO|INDEX_FUTURES', '1D', { from: '2025-01-01' }, (error, data, response) => {
  if (error) {
    console.error('error in getFiiData: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getFiiData');
    }
  }
});

// Get DII data
marketApi.getDiiData('NSE_EQ|CASH', '1D', { from: '2025-01-01' }, (error, data, response) => {
  if (error) {
    console.error('error in getDiiData: ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getDiiData');
    }
  }
});

// Verify model instantiation
let analyticsResponse = new UpstoxClient.AnalyticsResponse();
analyticsResponse.status = 'success';
analyticsResponse.data = {};

let balanceSheetData = new UpstoxClient.BalanceSheetData();
let balanceSheetHistoryItem = new UpstoxClient.BalanceSheetHistoryItem();
let balanceSheetResponse = new UpstoxClient.BalanceSheetResponse();
balanceSheetResponse.status = 'success';

let cashFlowData = new UpstoxClient.CashFlowData();
let cashFlowEntry = new UpstoxClient.CashFlowEntry();
let cashFlowResponse = new UpstoxClient.CashFlowResponse();

let companyProfileData = new UpstoxClient.CompanyProfileData();
let companyProfileResponse = new UpstoxClient.CompanyProfileResponse();
companyProfileResponse.status = 'success';

let competitorData = new UpstoxClient.CompetitorData();
let competitorsResponse = new UpstoxClient.CompetitorsResponse();

let corporateActionData = new UpstoxClient.CorporateActionData();
let corporateActionEventDetail = new UpstoxClient.CorporateActionEventDetail();
let corporateActionsResponse = new UpstoxClient.CorporateActionsResponse();

let financialStatementEntry = new UpstoxClient.FinancialStatementEntry();
let historyItem = new UpstoxClient.HistoryItem();

let incomeStatementData = new UpstoxClient.IncomeStatementData();
let incomeStatementEntry = new UpstoxClient.IncomeStatementEntry();
let incomeStatementResponse = new UpstoxClient.IncomeStatementResponse();

let keyRatioData = new UpstoxClient.KeyRatioData();
let keyRatiosResponse = new UpstoxClient.KeyRatiosResponse();

let sectorMarketCapAmount = new UpstoxClient.SectorMarketCapAmount();
let shareHoldingData = new UpstoxClient.ShareHoldingData();
let shareHoldingsResponse = new UpstoxClient.ShareHoldingsResponse();
