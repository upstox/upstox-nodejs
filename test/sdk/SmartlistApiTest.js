
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var apiInstance = new UpstoxClient.MarketApi();

// Get smartlist futures
apiInstance.getSmartlistFutures({ assetType: "STOCK", category: "TOP_TRADED", pageNumber: 1, pageSize: 50 }, (error, data, response) => {
  if (error) {
    console.error("error in getSmartlistFutures: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getSmartlistFutures");
    }
  }
});

// Get smartlist MTF
apiInstance.getSmartlistMtf({ pageNumber: 1, pageSize: 50 }, (error, data, response) => {
  if (error) {
    console.error("error in getSmartlistMtf: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getSmartlistMtf");
    }
  }
});

// Get smartlist options
apiInstance.getSmartlistOptions({ assetType: "INDEX", category: "OI_GAINERS", pageNumber: 1, pageSize: 50 }, (error, data, response) => {
  if (error) {
    console.error("error in getSmartlistOptions: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getSmartlistOptions");
    }
  }
});

// Verify model instantiation (smartlist reuses AnalyticsResponse / AnalyticsData)
let analyticsData = new UpstoxClient.AnalyticsData();
let analyticsResponse = new UpstoxClient.AnalyticsResponse();
analyticsResponse.status = "success";
