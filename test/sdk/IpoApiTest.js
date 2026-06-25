
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var apiInstance = new UpstoxClient.IPOApi();

// Get IPO listing filtered by status
apiInstance.getIpoListing({ status: "open", issueType: "regular", pageNumber: 1, records: 20 }, (error, data, response) => {
  if (error) {
    console.error("error in getIpoListing: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getIpoListing");
    }
  }
});

// Get IPO details by slug id
apiInstance.getIpoDetails("example-ipo-slug", (error, data, response) => {
  if (error) {
    console.error("error in getIpoDetails: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getIpoDetails");
    }
  }
});

// Verify model instantiation
let ipoListingData = new UpstoxClient.IpoListingData();
let ipoMetaData = new UpstoxClient.IpoMetaData();
let ipoListingResponse = new UpstoxClient.IpoListingResponse();
ipoListingResponse.status = "success";

let ipoRegistrarInfo = new UpstoxClient.IpoRegistrarInfo();
let ipoTimeline = new UpstoxClient.IpoTimeline();
let ipoDetailsData = new UpstoxClient.IpoDetailsData();
let ipoDetailsResponse = new UpstoxClient.IpoDetailsResponse();
ipoDetailsResponse.status = "success";
