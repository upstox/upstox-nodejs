let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');

// US stocks endpoints are only live on UAT; also keeps order calls off the HFT host.
var usClient = new UpstoxClient.ApiClient();
usClient.basePath = 'https://uat-api.upstox.com';
usClient.orderBasePath = 'https://uat-api.upstox.com';
usClient.authentications['OAUTH2'].accessToken = accessToken;

var instrumentKey = "US_EQ|AAPL";

// --- Orders ---
var orderApi = new UpstoxClient.USStocksOrderApi(usClient);

let placeRequest = new UpstoxClient.UsPlaceOrderRequest(
  UpstoxClient.UsPlaceOrderRequest.ValidityEnum.DAY,
  instrumentKey,
  UpstoxClient.UsPlaceOrderRequest.TransactionTypeEnum.BUY,
  UpstoxClient.UsPlaceOrderRequest.OrderTypeEnum.LIMIT
);
placeRequest.quantity = 1;
placeRequest.price = 100.5;
placeRequest.tag = "sdk-test";

orderApi.placeUsOrder(placeRequest, (error, data, response) => {
  if (error) {
    console.error("error in placeUsOrder: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in placeUsOrder");
    }
  }
});

let modifyRequest = new UpstoxClient.UsModifyOrderRequest(
  1,
  UpstoxClient.UsModifyOrderRequest.ValidityEnum.DAY,
  "example-order-id",
  instrumentKey,
  UpstoxClient.UsModifyOrderRequest.TransactionTypeEnum.BUY,
  UpstoxClient.UsModifyOrderRequest.OrderTypeEnum.LIMIT
);
modifyRequest.price = 101;

orderApi.modifyUsOrder(modifyRequest, (error, data, response) => {
  if (error) {
    console.error("error in modifyUsOrder: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in modifyUsOrder");
    }
  }
});

orderApi.cancelUsOrder("example-order-id", (error, data, response) => {
  if (error) {
    console.error("error in cancelUsOrder: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in cancelUsOrder");
    }
  }
});

let estimateRequest = new UpstoxClient.UsOrderEstimateRequest(
  1,
  instrumentKey,
  UpstoxClient.UsOrderEstimateRequest.TransactionTypeEnum.BUY,
  UpstoxClient.UsOrderEstimateRequest.OrderTypeEnum.MARKET
);

orderApi.estimateUsOrder(estimateRequest, (error, data, response) => {
  if (error) {
    console.error("error in estimateUsOrder: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in estimateUsOrder");
    }
  }
});

orderApi.getUsOrderBook((error, data, response) => {
  if (error) {
    console.error("error in getUsOrderBook: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getUsOrderBook");
    }
  }
});

orderApi.getUsOrderDetails("example-order-id", (error, data, response) => {
  if (error) {
    console.error("error in getUsOrderDetails: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getUsOrderDetails");
    }
  }
});

// --- Charges ---
var chargesApi = new UpstoxClient.USStocksChargesApi(usClient);
let marginRequest = new UpstoxClient.UsMarginRequest([estimateRequest]);

chargesApi.calculateUsMargin(marginRequest, (error, data, response) => {
  if (error) {
    console.error("error in calculateUsMargin: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in calculateUsMargin");
    }
  }
});

// --- Portfolio & funds ---
new UpstoxClient.USStocksPortfolioApi(usClient).getUsHoldings((error, data, response) => {
  if (error) {
    console.error("error in getUsHoldings: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getUsHoldings");
    }
  }
});

new UpstoxClient.USStocksFundsApi(usClient).getUsFunds((error, data, response) => {
  if (error) {
    console.error("error in getUsFunds: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getUsFunds");
    }
  }
});

// --- Market holidays, timings and status ---
var usMarketApi = new UpstoxClient.USMarketHolidaysAndTimingsApi(usClient);

usMarketApi.getUsHolidays((error, data, response) => {
  if (error) {
    console.error("error in getUsHolidays: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getUsHolidays");
    }
  }
});

usMarketApi.getUsHoliday("2026-11-26", (error, data, response) => {
  if (error) {
    console.error("error in getUsHoliday: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getUsHoliday");
    }
  }
});

usMarketApi.getUsExchangeTimings("2026-10-29", (error, data, response) => {
  if (error) {
    console.error("error in getUsExchangeTimings: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getUsExchangeTimings");
    }
  }
});

usMarketApi.getUsMarketStatus((error, data, response) => {
  if (error) {
    console.error("error in getUsMarketStatus: " + error.response.text);
  } else {
    if (data.status != "success") {
      console.log("error in getUsMarketStatus");
    }
  }
});

// Verify model instantiation
let usOrderData = new UpstoxClient.UsOrderData();
let usOrderResponse = new UpstoxClient.UsOrderResponse();
usOrderResponse.status = "success";
let usOrderBookData = new UpstoxClient.UsOrderBookData();
let usOrderBookResponse = new UpstoxClient.UsOrderBookResponse();
let usOrderDetailsResponse = new UpstoxClient.UsOrderDetailsResponse();
let usOrderEstimateData = new UpstoxClient.UsOrderEstimateData();
let usOrderEstimateResponse = new UpstoxClient.UsOrderEstimateResponse();
let usOrderMargin = new UpstoxClient.UsOrderMargin();
let usMarginData = new UpstoxClient.UsMarginData();
let usMarginResponse = new UpstoxClient.UsMarginResponse();
let usHoldingData = new UpstoxClient.UsHoldingData();
let usHoldingsResponse = new UpstoxClient.UsHoldingsResponse();
let usFundsData = new UpstoxClient.UsFundsData();
let usFundsResponse = new UpstoxClient.UsFundsResponse();
let usHolidayData = new UpstoxClient.UsHolidayData();
let getUsHolidayResponse = new UpstoxClient.GetUsHolidayResponse();
let usExchangeTimingData = new UpstoxClient.UsExchangeTimingData();
let getUsExchangeTimingResponse = new UpstoxClient.GetUsExchangeTimingResponse();

// Verify response models map snake_case payloads onto camelCase members
let orderResponse = UpstoxClient.UsOrderResponse.constructFromObject({
  status: "success",
  data: { order_id: "example-order-id" }
});
if (orderResponse.data.orderId != "example-order-id") {
  console.log("error parsing order_id on UsOrderResponse");
}

let orderBook = UpstoxClient.UsOrderBookResponse.constructFromObject({
  status: "success",
  data: [{ order_id: "example-order-id", instrument_key: instrumentKey, filled_quantity: 0.5, is_amo: false }]
});
if (orderBook.data[0].instrumentKey != instrumentKey || orderBook.data[0].filledQuantity != 0.5) {
  console.log("error parsing data on UsOrderBookResponse");
}

let marginResponse = UpstoxClient.UsMarginResponse.constructFromObject({
  status: "success",
  data: { margins: [{ instrument_key: instrumentKey, required_margin: 100.5 }], required_margin: 100.5, sufficient: true }
});
if (!(marginResponse.data.margins[0] instanceof UpstoxClient.UsOrderMargin) || marginResponse.data.requiredMargin != 100.5) {
  console.log("error parsing data on UsMarginResponse");
}

let fundsResponse = UpstoxClient.UsFundsResponse.constructFromObject({
  status: "success",
  data: { available_to_trade: 250.75, exchange_rate: 88.1 }
});
if (fundsResponse.data.availableToTrade != 250.75 || fundsResponse.data.exchangeRate != 88.1) {
  console.log("error parsing data on UsFundsResponse");
}

let holidayResponse = UpstoxClient.GetUsHolidayResponse.constructFromObject({
  status: "success",
  data: [{ description: "Thanksgiving Day", holiday_type: "TRADING_HOLIDAY" }]
});
if (holidayResponse.data[0].holidayType != "TRADING_HOLIDAY") {
  console.log("error parsing data on GetUsHolidayResponse");
}

let timingResponse = UpstoxClient.GetUsExchangeTimingResponse.constructFromObject({
  status: "success",
  data: [{ exchange: "NASDAQ", start_time: 1761744600000, end_time: 1761768000000 }]
});
if (timingResponse.data[0].startTime != 1761744600000) {
  console.log("error parsing data on GetUsExchangeTimingResponse");
}
