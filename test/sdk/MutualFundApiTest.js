
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var apiInstance = new UpstoxClient.MutualFundApi();

// Get mutual fund holdings
apiInstance.getMutualFundHoldings((error, data, response) => {
  if (error) {
    console.error('error in getMutualFundHoldings: ' + error.response.text);
  } else {
    console.log(JSON.stringify(data));
    if (data.status != 'success') {
      console.log('error in getMutualFundHoldings');
    }
  }
});

// Get mutual fund orders (last 7 days) with pagination
apiInstance.getMutualFundOrders({ pageNumber: 1, records: 10 }, (error, data, response) => {
  if (error) {
    console.error('error in getMutualFundOrders: ' + error.response.text);
  } else {
    console.log(JSON.stringify(data));
    if (data.status != 'success') {
      console.log('error in getMutualFundOrders');
    }
  }
});

// Get mutual fund SIPs
apiInstance.getMutualFundSips({ pageNumber: 1, records: 10 }, (error, data, response) => {
  if (error) {
    console.error('error in getMutualFundSips: ' + error.response.text);
  } else {
    console.log(JSON.stringify(data));

    if (data.status != 'success') {
      console.log('error in getMutualFundSips');
    }
  }
});

// Get single mutual fund order (replace with a valid order id when exercising manually)
var sampleOrderId = '2TC3XY-ec4b180c-e937-47ae-811c-8de895e8d587';
apiInstance.getMutualFundOrder(sampleOrderId, (error, data, response) => {
  if (error) {
    console.error('error in getMutualFundOrder: ' + error.response.text);
  } else {
    console.log(JSON.stringify(data));

    if (data.status != 'success') {
      console.log('error in getMutualFundOrder');
    }
  }
});

// Verify model instantiation
let holding = new UpstoxClient.MutualFundHoldingData();
holding.quantity = 10.5;
holding.averagePrice = 100.25;
holding.lastPrice = 105.0;

let page = new UpstoxClient.Pagination();
page.pageNumber = 1;
page.records = 10;

let meta = new UpstoxClient.MutualFundMetaData();
meta.page = page;

let getHoldingsResponse = new UpstoxClient.GetMutualFundHoldingsResponse();
getHoldingsResponse.status = 'success';
getHoldingsResponse.data = [holding];
