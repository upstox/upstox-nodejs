
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var apiInstance = new UpstoxClient.InstrumentsApi();

// Basic search with just query
apiInstance.searchInstrument("Nifty 50", {}, (error, data, response) => {
  if (error) {
    console.error("error in searchInstrument: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in searchInstrument basic query");
    }
  }
});

// Search with exchange filter
apiInstance.searchInstrument("Reliance", { exchanges: "NSE" }, (error, data, response) => {
  if (error) {
    console.error("error in searchInstrument with exchange: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in searchInstrument with exchange filter");
    }
  }
});

// Search with segment filter
apiInstance.searchInstrument("TCS", { segments: "EQ" }, (error, data, response) => {
  if (error) {
    console.error("error in searchInstrument with segment: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in searchInstrument with segment filter");
    }
  }
});

// Search with instrument type filter
apiInstance.searchInstrument("Nifty", { instrumentTypes: "INDEX" }, (error, data, response) => {
  if (error) {
    console.error("error in searchInstrument with instrument type: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in searchInstrument with instrument type filter");
    }
  }
});

// Search with pagination
apiInstance.searchInstrument("HDFC", { pageNumber: 1, records: 5 }, (error, data, response) => {
  if (error) {
    console.error("error in searchInstrument with pagination: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in searchInstrument with pagination");
    }
  }
});
