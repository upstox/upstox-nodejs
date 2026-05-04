let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var apiInstance = new UpstoxClient.UserApi();

// Get payin history
apiInstance.getPayinHistory((error, data, response) => {
  if (error) {
    console.error('error in getPayinHistory: ' + error.response.text);
  } else {
    console.log(JSON.stringify(data));
    if (data.status != 'success') {
      console.log('error in getPayinHistory');
    }
  }
});

// Get payout history
apiInstance.getPayoutHistory((error, data, response) => {
  if (error) {
    console.error('error in getPayoutHistory: ' + error.response.text);
  } else {
    console.log(JSON.stringify(data));
    if (data.status != 'success') {
      console.log('error in getPayoutHistory');
    }
  }
});

// Model instantiation smoke checks
let historyData = new UpstoxClient.PaymentHistoryData();
historyData.amount = 5000.0;
historyData.mode = 'UPI';
historyData.status = 'SUCCESS';
historyData.reason = '';
historyData.bankName = 'HDFC';
historyData.transactionId = 'TXN12345';
historyData.totalCharges = 0.0;
historyData.chargesCategory = 'NONE';

let historyResponse = new UpstoxClient.PaymentHistoryResponse();
historyResponse.status = 'success';
historyResponse.data = [historyData];
