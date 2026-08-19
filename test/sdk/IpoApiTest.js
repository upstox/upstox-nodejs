
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

// Apply for an IPO
let ipoApplyRequest = new UpstoxClient.IpoApplyRequest();
ipoApplyRequest.id = "example-ipo-slug";
ipoApplyRequest.upi = "example@upi";
ipoApplyRequest.category = "IND";
ipoApplyRequest.bids = [{ quantity: 100, price: 250 }];

apiInstance.applyForIpo(ipoApplyRequest, (error, data, response) => {
  if (error) {
    console.error("error in applyForIpo: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in applyForIpo");
    }
  }
});

// Get the authenticated user's IPO orders
apiInstance.getIpoOrders({ pageNumber: 1, records: 20 }, (error, data, response) => {
  if (error) {
    console.error("error in getIpoOrders: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getIpoOrders");
    }
  }
});

// Get a single IPO order by order id
apiInstance.getIpoOrderById("example-order-id", (error, data, response) => {
  if (error) {
    console.error("error in getIpoOrderById: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getIpoOrderById");
    }
  }
});

// Cancel an IPO order by order id
apiInstance.cancelIpoOrder("example-order-id", (error, data, response) => {
  if (error) {
    console.error("error in cancelIpoOrder: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in cancelIpoOrder");
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

// Verify the investors field is parsed on the listing and details data models
let listingWithInvestors = UpstoxClient.IpoListingData.constructFromObject({
  id: "example-ipo-slug",
  investors: [{ category: "IND", description: "Individual" }]
});
if (!listingWithInvestors.investors || listingWithInvestors.investors.length != 1) {
  console.log("error parsing investors on IpoListingData");
}

let detailsWithInvestors = UpstoxClient.IpoDetailsData.constructFromObject({
  id: "example-ipo-slug",
  investors: [{ category: "IND", description: "Individual" }, { category: "HNI", description: "HNI" }]
});
if (!detailsWithInvestors.investors || detailsWithInvestors.investors.length != 2) {
  console.log("error parsing investors on IpoDetailsData");
}

// Verify instantiation of the IPO order models
let ipoInvestorType = new UpstoxClient.IpoInvestorType();
ipoInvestorType.category = "IND";

let ipoBidRequest = new UpstoxClient.IpoBidRequest();
ipoBidRequest.quantity = 100;
ipoBidRequest.price = 250;

let ipoApplyData = new UpstoxClient.IpoApplyData();
let ipoApplyResponse = new UpstoxClient.IpoApplyResponse();
ipoApplyResponse.status = "success";

let ipoOrderBid = new UpstoxClient.IpoOrderBid();
let ipoOrderData = new UpstoxClient.IpoOrderData();
let ipoOrderResponse = new UpstoxClient.IpoOrderResponse();
ipoOrderResponse.status = "success";

let ipoOrderDetailResponse = new UpstoxClient.IpoOrderDetailResponse();
ipoOrderDetailResponse.status = "success";

let ipoCancelData = new UpstoxClient.IpoCancelData();
let ipoCancelResponse = new UpstoxClient.IpoCancelResponse();
ipoCancelResponse.status = "success";

// Verify the apply/order response models map snake_case payloads onto camelCase members
let applyResponse = UpstoxClient.IpoApplyResponse.constructFromObject({
  status: "success",
  data: { order_id: "example-order-id" }
});
if (applyResponse.data.orderId != "example-order-id") {
  console.log("error parsing order_id on IpoApplyResponse");
}

let orderDetailResponse = UpstoxClient.IpoOrderDetailResponse.constructFromObject({
  status: "success",
  data: { order_id: "example-order-id", units_allotted: 100, issue_type: "regular" }
});
if (orderDetailResponse.data.orderId != "example-order-id" || orderDetailResponse.data.unitsAllotted != 100) {
  console.log("error parsing data on IpoOrderDetailResponse");
}

let cancelResponse = UpstoxClient.IpoCancelResponse.constructFromObject({
  status: "success",
  data: { order_id: "example-order-id", status: "cancelled" }
});
if (cancelResponse.data.orderId != "example-order-id") {
  console.log("error parsing order_id on IpoCancelResponse");
}
