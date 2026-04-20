
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var apiInstance = new UpstoxClient.NewsApi();

// Get news for instrument_keys category
apiInstance.getNews("instrument_keys", { instrumentKeys: "NSE_EQ|INE669E01016", pageNumber: 1, pageSize: 10 }, (error, data, response) => {
  if (error) {
    console.error("error in getNews instrument_keys: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getNews instrument_keys");
    }
  }
});

// Get news for positions category
apiInstance.getNews("positions", { pageNumber: 1, pageSize: 5 }, (error, data, response) => {
  if (error) {
    console.error("error in getNews positions: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getNews positions");
    }
  }
});

// Get news for holdings category
apiInstance.getNews("holdings", { pageNumber: 1, pageSize: 5 }, (error, data, response) => {
  if (error) {
    console.error("error in getNews holdings: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getNews holdings");
    }
  }
});

// Verify model instantiation
let newsItemData = new UpstoxClient.NewsItemData();
newsItemData.heading = "Test Heading";
newsItemData.summary = "Test Summary";
newsItemData.thumbnail = "https://example.com/thumb.jpg";
newsItemData.articleLink = "https://example.com/article";
newsItemData.publishedTime = "2026-04-20T10:00:00Z";

let newsResponseMetaData = new UpstoxClient.NewsResponseMetaData();
let newsResponsePageData = new UpstoxClient.NewsResponsePageData();
let getNewsResponse = new UpstoxClient.GetNewsResponse();
getNewsResponse.status = "success";
