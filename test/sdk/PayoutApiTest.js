
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

var apiInstance = new UpstoxClient.UserApi();

// Get available payout modes
apiInstance.getPayoutModes((error, data, response) => {
  if (error) {
    console.error("error in getPayoutModes: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getPayoutModes");
    }
  }
});

// Initiate a payout
let initiatePayoutRequest = new UpstoxClient.InitiatePayoutRequest();
apiInstance.initiatePayout(initiatePayoutRequest, (error, data, response) => {
  if (error) {
    console.error("error in initiatePayout: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in initiatePayout");
    }
  }
});

// Modify an existing payout
let modifyPayoutRequest = new UpstoxClient.ModifyPayoutRequest();
apiInstance.modifyPayout(modifyPayoutRequest, "example-transaction-id", (error, data, response) => {
  if (error) {
    console.error("error in modifyPayout: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in modifyPayout");
    }
  }
});

// Cancel an existing payout
apiInstance.cancelPayout("example-transaction-id", (error, data, response) => {
  if (error) {
    console.error("error in cancelPayout: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in cancelPayout");
    }
  }
});

// Verify model instantiation
let payoutDetails = new UpstoxClient.PayoutDetails();
let payoutDetailsResponse = new UpstoxClient.PayoutDetailsResponse();
payoutDetailsResponse.status = "success";
let payoutModesData = new UpstoxClient.PayoutModesData();
let payoutModesResponse = new UpstoxClient.PayoutModesResponse();
payoutModesResponse.status = "success";
