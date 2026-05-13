
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var marketApi = new UpstoxClient.MarketApi();
var instrumentKey = 'NSE_INDEX|Nifty 50';
var expiry = '2025-06-26';
var date = '2025-06-12';

marketApi.getOiData(instrumentKey, expiry, date, (error, data, response) => {
  if (error) {
    console.error('error in getOiData: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getOiData');
  }
});

marketApi.getChangeOiData(instrumentKey, expiry, date, 5, (error, data, response) => {
  if (error) {
    console.error('error in getChangeOiData: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getChangeOiData');
  }
});

marketApi.getPcrData(instrumentKey, expiry, date, 30, (error, data, response) => {
  if (error) {
    console.error('error in getPcrData: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getPcrData');
  }
});

marketApi.getMaxPainData(instrumentKey, expiry, date, 30, (error, data, response) => {
  if (error) {
    console.error('error in getMaxPainData: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getMaxPainData');
  }
});

marketApi.getFiiData('NSE_EQ|CASH', '1D', { from: '2025-01-01' }, (error, data, response) => {
  if (error) {
    console.error('error in getFiiData: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getFiiData');
  }
});

marketApi.getDiiData('NSE_EQ|CASH', '1D', { from: '2025-01-01' }, (error, data, response) => {
  if (error) {
    console.error('error in getDiiData: ' + error.response.text);
  } else {
    if (data.status !== 'success') console.log('error in getDiiData');
  }
});
