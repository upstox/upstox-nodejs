
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var fundamentalsApi = new UpstoxClient.FundamentalsApi();
var isin = 'INE002A01018'; // Reliance Industries

fundamentalsApi.getCompanyProfile(isin, (error, data, response) => {
  if (error) {
    console.error('error in getCompanyProfile: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getCompanyProfile');
  }
});

fundamentalsApi.getBalanceSheet(isin, { type: 'consolidated' }, (error, data, response) => {
  if (error) {
    console.error('error in getBalanceSheet: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getBalanceSheet');
  }
});

fundamentalsApi.getCashFlow(isin, { type: 'consolidated' }, (error, data, response) => {
  if (error) {
    console.error('error in getCashFlow: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getCashFlow');
  }
});

fundamentalsApi.getIncomeStatement(isin, { type: 'consolidated', timePeriod: 'annual' }, (error, data, response) => {
  if (error) {
    console.error('error in getIncomeStatement: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getIncomeStatement');
  }
});

fundamentalsApi.getKeyRatios(isin, (error, data, response) => {
  if (error) {
    console.error('error in getKeyRatios: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getKeyRatios');
  }
});

fundamentalsApi.getShareHoldings(isin, (error, data, response) => {
  if (error) {
    console.error('error in getShareHoldings: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getShareHoldings');
  }
});

fundamentalsApi.getCorporateActions(isin, (error, data, response) => {
  if (error) {
    console.error('error in getCorporateActions: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getCorporateActions');
  }
});

fundamentalsApi.getCompetitors('NSE_EQ|INE002A01018', (error, data, response) => {
  if (error) {
    console.error('error in getCompetitors: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getCompetitors');
  }
});
