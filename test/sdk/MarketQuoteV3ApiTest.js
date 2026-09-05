let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var marketQuoteV3Api = new UpstoxClient.MarketQuoteV3Api();

var singleInstrumentKey = 'NSE_EQ|INE669E01016';
var multipleInstrumentKeys = 'NSE_EQ|INE669E01016,NSE_EQ|INE848E01016';

// Full market quotes - single instrument
marketQuoteV3Api.getFullMarketQuoteV3({ instrumentKey: singleInstrumentKey }, (error, data, response) => {
  if (error) {
    console.error('error in getFullMarketQuoteV3 (single): ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getFullMarketQuoteV3 (single)');
    }
  }
});

// Full market quotes - multiple instruments
marketQuoteV3Api.getFullMarketQuoteV3({ instrumentKey: multipleInstrumentKeys }, (error, data, response) => {
  if (error) {
    console.error('error in getFullMarketQuoteV3 (multiple): ' + error.response.text);
  } else {
    if (data.status !== 'success') {
      console.log('error in getFullMarketQuoteV3 (multiple)');
    }
  }
});
