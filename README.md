# Upstox Node Js SDK for API v2

## Introduction

The official Node.js client for communicating with the <a href="https://upstox.com/uplink/">Upstox API</a>.

Upstox API is a set of rest APIs that provide data required to build a complete investment and trading platform. Execute orders in real time, manage user portfolio, stream live market data (using Websocket), and more, with the easy to understand API collection. 

- API version: v2
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project.

## Documentation.

<a href="https://upstox.com/developer/api-documentation">Upstox API Documentation</a>

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install upstox-js-sdk --save
```

## Examples

[Sample Implementations](examples/) can be found within `/examples` folder.

- [Websocket Market data](examples/websocket/market_data/)
- [Websocket Order updates](examples/websocket/order_updates/)

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var UpstoxClient = require('upstox-js-sdk');
var defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "YOUR ACCESS TOKEN"

var api = new UpstoxClient.ChargeApi()
var instrumentToken = "instrumentToken_example"; // {String} Key of the instrument
var quantity = 56; // {Number} Quantity with which the order is to be placed
var product = "product_example"; // {String} Product with which the order is to be placed
var transactionType = "transactionType_example"; // {String} Indicates whether its a BUY or SELL order
var price = 3.4; // {Number} Price with which the order is to be placed
var apiVersion = "apiVersion_example"; // {String} API Version Header

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.upstox.com/v2/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*UpstoxClient.ChargeApi* | [**getBrokerage**](docs/ChargeApi.md#getBrokerage) | **GET** /v2/charges/brokerage | Brokerage details
*UpstoxClient.ChargeApi* | [**postMargin**](docs/ChargeApi.md#postMargin) | **POST** /v2/charges/margin | Calculate Margin
*UpstoxClient.HistoryApi* | [**getHistoricalCandleData**](docs/HistoryApi.md#getHistoricalCandleData) | **GET** /v2/historical-candle/{instrumentKey}/{interval}/{to_date} | Historical candle data
*UpstoxClient.HistoryApi* | [**getHistoricalCandleData1**](docs/HistoryApi.md#getHistoricalCandleData1) | **GET** /v2/historical-candle/{instrumentKey}/{interval}/{to_date}/{from_date} | Historical candle data
*UpstoxClient.HistoryApi* | [**getIntraDayCandleData**](docs/HistoryApi.md#getIntraDayCandleData) | **GET** /v2/historical-candle/intraday/{instrumentKey}/{interval} | Intra day candle data
*UpstoxClient.LoginApi* | [**authorize**](docs/LoginApi.md#authorize) | **GET** /v2/login/authorization/dialog | Authorize API
*UpstoxClient.LoginApi* | [**logout**](docs/LoginApi.md#logout) | **DELETE** /v2/logout | Logout
*UpstoxClient.LoginApi* | [**token**](docs/LoginApi.md#token) | **POST** /v2/login/authorization/token | Get token API
*UpstoxClient.MarketHolidaysAndTimingsApi* | [**getExchangeTimings**](docs/MarketHolidaysAndTimingsApi.md#getExchangeTimings) | **GET** /v2/market/timings/{date} | Get Exchange Timings on particular date
*UpstoxClient.MarketHolidaysAndTimingsApi* | [**getHoliday**](docs/MarketHolidaysAndTimingsApi.md#getHoliday) | **GET** /v2/market/holidays/{date} | Get Holiday on particular date
*UpstoxClient.MarketHolidaysAndTimingsApi* | [**getHolidays**](docs/MarketHolidaysAndTimingsApi.md#getHolidays) | **GET** /v2/market/holidays | Get Holiday list of current year
*UpstoxClient.MarketHolidaysAndTimingsApi* | [**getMarketStatus**](docs/MarketHolidaysAndTimingsApi.md#getMarketStatus) | **GET** /v2/market/status/{exchange} | Get Market status for particular exchange
*UpstoxClient.MarketQuoteApi* | [**getFullMarketQuote**](docs/MarketQuoteApi.md#getFullMarketQuote) | **GET** /v2/market-quote/quotes | Market quotes and instruments - Full market quotes
*UpstoxClient.MarketQuoteApi* | [**getMarketQuoteOHLC**](docs/MarketQuoteApi.md#getMarketQuoteOHLC) | **GET** /v2/market-quote/ohlc | Market quotes and instruments - OHLC quotes
*UpstoxClient.MarketQuoteApi* | [**ltp**](docs/MarketQuoteApi.md#ltp) | **GET** /v2/market-quote/ltp | Market quotes and instruments - LTP quotes.
*UpstoxClient.OptionsApi* | [**getOptionContracts**](docs/OptionsApi.md#getOptionContracts) | **GET** /v2/option/contract | Get option contracts
*UpstoxClient.OptionsApi* | [**getPutCallOptionChain**](docs/OptionsApi.md#getPutCallOptionChain) | **GET** /v2/option/chain | Get option chain
*UpstoxClient.OrderApi* | [**cancelMultiOrder**](docs/OrderApi.md#cancelMultiOrder) | **DELETE** /v2/order/multi/cancel | Cancel multi order
*UpstoxClient.OrderApi* | [**cancelOrder**](docs/OrderApi.md#cancelOrder) | **DELETE** /v2/order/cancel | Cancel order
*UpstoxClient.OrderApi* | [**exitPositions**](docs/OrderApi.md#exitPositions) | **POST** /v2/order/positions/exit | Exit all positions
*UpstoxClient.OrderApi* | [**getOrderBook**](docs/OrderApi.md#getOrderBook) | **GET** /v2/order/retrieve-all | Get order book
*UpstoxClient.OrderApi* | [**getOrderDetails**](docs/OrderApi.md#getOrderDetails) | **GET** /v2/order/history | Get order history
*UpstoxClient.OrderApi* | [**getOrderStatus**](docs/OrderApi.md#getOrderStatus) | **GET** /v2/order/details | Get order details
*UpstoxClient.OrderApi* | [**getTradeHistory**](docs/OrderApi.md#getTradeHistory) | **GET** /v2/order/trades/get-trades-for-day | Get trades
*UpstoxClient.OrderApi* | [**getTradesByOrder**](docs/OrderApi.md#getTradesByOrder) | **GET** /v2/order/trades | Get trades for order
*UpstoxClient.OrderApi* | [**modifyOrder**](docs/OrderApi.md#modifyOrder) | **PUT** /v2/order/modify | Modify order
*UpstoxClient.OrderApi* | [**placeMultiOrder**](docs/OrderApi.md#placeMultiOrder) | **POST** /v2/order/multi/place | Place multi order
*UpstoxClient.OrderApi* | [**placeOrder**](docs/OrderApi.md#placeOrder) | **POST** /v2/order/place | Place order
*UpstoxClient.PortfolioApi* | [**convertPositions**](docs/PortfolioApi.md#convertPositions) | **PUT** /v2/portfolio/convert-position | Convert Positions
*UpstoxClient.PortfolioApi* | [**getHoldings**](docs/PortfolioApi.md#getHoldings) | **GET** /v2/portfolio/long-term-holdings | Get Holdings
*UpstoxClient.PortfolioApi* | [**getPositions**](docs/PortfolioApi.md#getPositions) | **GET** /v2/portfolio/short-term-positions | Get Positions
*UpstoxClient.PostTradeApi* | [**getTradesByDateRange**](docs/PostTradeApi.md#getTradesByDateRange) | **GET** /v2/charges/historical-trades | 
*UpstoxClient.TradeProfitAndLossApi* | [**getProfitAndLossCharges**](docs/TradeProfitAndLossApi.md#getProfitAndLossCharges) | **GET** /v2/trade/profit-loss/charges | Get profit and loss on trades
*UpstoxClient.TradeProfitAndLossApi* | [**getTradeWiseProfitAndLossData**](docs/TradeProfitAndLossApi.md#getTradeWiseProfitAndLossData) | **GET** /v2/trade/profit-loss/data | Get Trade-wise Profit and Loss Report Data
*UpstoxClient.TradeProfitAndLossApi* | [**getTradeWiseProfitAndLossMetaData**](docs/TradeProfitAndLossApi.md#getTradeWiseProfitAndLossMetaData) | **GET** /v2/trade/profit-loss/metadata | Get profit and loss meta data on trades
*UpstoxClient.UserApi* | [**getProfile**](docs/UserApi.md#getProfile) | **GET** /v2/user/profile | Get profile
*UpstoxClient.UserApi* | [**getUserFundMargin**](docs/UserApi.md#getUserFundMargin) | **GET** /v2/user/get-funds-and-margin | Get User Fund And Margin
*UpstoxClient.WebsocketApi* | [**getMarketDataFeed**](docs/WebsocketApi.md#getMarketDataFeed) | **GET** /v2/feed/market-data-feed | Market Data Feed
*UpstoxClient.WebsocketApi* | [**getMarketDataFeedAuthorize**](docs/WebsocketApi.md#getMarketDataFeedAuthorize) | **GET** /v2/feed/market-data-feed/authorize | Market Data Feed Authorize
*UpstoxClient.WebsocketApi* | [**getPortfolioStreamFeed**](docs/WebsocketApi.md#getPortfolioStreamFeed) | **GET** /v2/feed/portfolio-stream-feed | Portfolio Stream Feed
*UpstoxClient.WebsocketApi* | [**getPortfolioStreamFeedAuthorize**](docs/WebsocketApi.md#getPortfolioStreamFeedAuthorize) | **GET** /v2/feed/portfolio-stream-feed/authorize | Portfolio Stream Feed Authorize

## Documentation for Feeder Functions

Connecting to the WebSocket for market and portfolio updates is streamlined through two primary Feeder functions:

1. **MarketDataStreamer**: Offers real-time market updates, providing a seamless way to receive instantaneous information on various market instruments.
2. **PortfolioDataStreamer**: Delivers updates related to the user's orders, enhancing the ability to track order status and portfolio changes effectively.

Both functions are designed to simplify the process of subscribing to essential data streams, ensuring users have quick and easy access to the information they need.

### Detailed Explanation of Feeder Functions

### MarketDataStreamer


<details>
<summary style="cursor: pointer; font-size: 1.2em;">V3</summary>
<p>

The `MarketDataStreamerV3` function is designed for effortless connection to the market WebSocket, enabling users to receive instantaneous updates on various instruments. The following example demonstrates how to quickly set up and start receiving market updates for selected instrument keys:

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamerV3(["MCX_FO|426268", "MCX_FO|427608"], "full");
streamer.connect();

streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});
```

In this example, you first authenticate using an access token, then instantiate MarketDataStreamerV3 with specific instrument keys and a subscription mode. Upon connecting, the streamer listens for market updates, which are logged to the console as they arrive.

Feel free to adjust the access token placeholder and any other specifics to better fit your actual implementation or usage scenario.

### Exploring the MarketDataStreamerV3 Functionality

#### Modes
- **ltpc**: ltpc provides information solely about the most recent trade, encompassing details such as the last trade price, time of the last trade, quantity traded, and the closing price from the previous day.
- **full**: The full option offers comprehensive information, including the latest trade prices, D5 depth, 1-minute, 30-minute, and daily candlestick data, along with some additional details.   
- **option_greeks**: Contains only option greeks.

#### Functions
1. **constructor MarketDataStreamerV3(instrumentKeys, mode)**: Initializes the streamer with optional instrument keys and mode (`full`, `ltpc`, or `option_greeks`).
2. **connect()**: Establishes the WebSocket connection.
3. **subscribe(instrumentKeys, mode)**: Subscribes to updates for given instrument keys in the specified mode. Both parameters are mandatory.
4. **unsubscribe(instrumentKeys)**: Stops updates for the specified instrument keys.
5. **changeMode(instrumentKeys, mode)**: Switches the mode for already subscribed instrument keys.
6. **disconnect()**: Ends the active WebSocket connection.
7. **autoReconnect(enable, interval, retryCount)**: Customizes auto-reconnect functionality. Parameters include a flag to enable/disable it, the interval(in seconds) between attempts, and the maximum number of retries.

#### Events
- **open**: Emitted upon successful connection establishment.
- **close**: Indicates the WebSocket connection has been closed.
- **message**: Delivers market updates.
- **error**: Signals an error has occurred.
- **reconnecting**: Announced when a reconnect attempt is initiated.
- **autoReconnectStopped**: Informs when auto-reconnect efforts have ceased after exhausting the retry count.

The following documentation includes examples to illustrate the usage of these functions and events, providing a practical understanding of how to interact with the MarketDataStreamerV3 effectively.

<br/>

1. Subscribing to Market Data on Connection Open with MarketDataStreameV3

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamerV3();
streamer.connect();

// Subscribe to instrument keys upon the 'open' event
streamer.on("open", () => {
  streamer.subscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"], "full");
});

// Handle incoming market data messages
streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});
```

<br/>

2. Subscribing to Instruments with Delays

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamerV3();
streamer.connect();

// Subscribe to the first set of instrument keys immediately upon connection
streamer.on("open", () => {
  streamer.subscribe(["NSE_EQ|INE020B01018"], "full");
  
  // Subscribe to another set of instrument keys after a delay
  setTimeout(() => {
    streamer.subscribe(["NSE_EQ|INE467B01029"], "full");
  }, 5000); // 5-second delay before subscribing to the second set
});

// Handle incoming market data messages
streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});
```

<br/>

3. Subscribing and Unsubscribing to Instruments

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamerV3();
streamer.connect();

// Subscribe to instrument keys immediately upon connection
streamer.on("open", () => {
  console.log("Connected. Subscribing to instrument keys.");
  streamer.subscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"], "full");
  
  // Unsubscribe after a delay
  setTimeout(() => {
    console.log("Unsubscribing from instrument keys.");
    streamer.unsubscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"]);
  }, 5000); // Adjust delay as needed
});

streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log("Market Update:", feed);
});
```

<br/>

4. Subscribe, Change Mode and Unsubscribe

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamerV3();
streamer.connect();

// Initially subscribe to instrument keys in 'full' mode
streamer.on("open", async () => {
  console.log("Connected. Subscribing in full mode...");
  streamer.subscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"], "full");

  // Change mode to 'ltpc' after a short delay
  setTimeout(() => {
    console.log("Changing subscription mode to ltpc...");
    streamer.changeMode(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"], "ltpc");
  }, 5000); // 5-second delay

  // Unsubscribe after another delay
  setTimeout(() => {
    console.log("Unsubscribing...");
    streamer.unsubscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"]);
  }, 10000); // 10 seconds after subscription
});

// Setup event listeners to log messages, errors, and closure
streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log("Market Update:", feed);
});
streamer.on("error", (error) => console.error("Error:", error));
streamer.on("close", () => console.log("Connection closed."));
```

<br/>

5. Disable Auto-Reconnect

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamerV3();
streamer.connect();

// Disable auto-reconnect feature
streamer.autoReconnect(false);

streamer.on("autoReconnectStopped", (data) => {
  console.log(data);
});
```

<br/>

6. Modify Auto-Reconnect parameters

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamerV3();
streamer.connect();

// Modify auto-reconnect parameters: enable it, set interval to 10 seconds, and retry count to 3
streamer.autoReconnect(true, 10, 3);
```

<br/>
</p>
</details>


<details>
<summary style="cursor: pointer; font-size: 1.2em;">V2</summary>
<p>

The `MarketDataStreamer` function is designed for effortless connection to the market WebSocket, enabling users to receive instantaneous updates on various instruments. The following example demonstrates how to quickly set up and start receiving market updates for selected instrument keys:

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamer(["MCX_FO|426268", "MCX_FO|427608"], "full");
streamer.connect();

streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});
```

In this example, you first authenticate using an access token, then instantiate MarketDataStreamer with specific instrument keys and a subscription mode. Upon connecting, the streamer listens for market updates, which are logged to the console as they arrive.

Feel free to adjust the access token placeholder and any other specifics to better fit your actual implementation or usage scenario.

### Exploring the MarketDataStreamer Functionality

#### Modes
- **ltpc**: ltpc provides information solely about the most recent trade, encompassing details such as the last trade price, time of the last trade, quantity traded, and the closing price from the previous day.
- **full**: The full option offers comprehensive information, including the latest trade prices, D5 depth, 1-minute, 30-minute, and daily candlestick data, along with some additional details.

#### Functions
1. **constructor MarketDataStreamer(instrumentKeys, mode)**: Initializes the streamer with optional instrument keys and mode (`full` or `ltpc`).
2. **connect()**: Establishes the WebSocket connection.
3. **subscribe(instrumentKeys, mode)**: Subscribes to updates for given instrument keys in the specified mode. Both parameters are mandatory.
4. **unsubscribe(instrumentKeys)**: Stops updates for the specified instrument keys.
5. **changeMode(instrumentKeys, mode)**: Switches the mode for already subscribed instrument keys.
6. **disconnect()**: Ends the active WebSocket connection.
7. **autoReconnect(enable, interval, retryCount)**: Customizes auto-reconnect functionality. Parameters include a flag to enable/disable it, the interval(in seconds) between attempts, and the maximum number of retries.

#### Events
- **open**: Emitted upon successful connection establishment.
- **close**: Indicates the WebSocket connection has been closed.
- **message**: Delivers market updates.
- **error**: Signals an error has occurred.
- **reconnecting**: Announced when a reconnect attempt is initiated.
- **autoReconnectStopped**: Informs when auto-reconnect efforts have ceased after exhausting the retry count.

The following documentation includes examples to illustrate the usage of these functions and events, providing a practical understanding of how to interact with the MarketDataStreamer effectively.

<br/>

1. Subscribing to Market Data on Connection Open with MarketDataStreamer

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamer();
streamer.connect();

// Subscribe to instrument keys upon the 'open' event
streamer.on("open", () => {
  streamer.subscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"], "full");
});

// Handle incoming market data messages
streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});
```

<br/>

2. Subscribing to Instruments with Delays

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamer();
streamer.connect();

// Subscribe to the first set of instrument keys immediately upon connection
streamer.on("open", () => {
  streamer.subscribe(["NSE_EQ|INE020B01018"], "full");
  
  // Subscribe to another set of instrument keys after a delay
  setTimeout(() => {
    streamer.subscribe(["NSE_EQ|INE467B01029"], "full");
  }, 5000); // 5-second delay before subscribing to the second set
});

// Handle incoming market data messages
streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});
```

<br/>

3. Subscribing and Unsubscribing to Instruments

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamer();
streamer.connect();

// Subscribe to instrument keys immediately upon connection
streamer.on("open", () => {
  console.log("Connected. Subscribing to instrument keys.");
  streamer.subscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"], "full");
  
  // Unsubscribe after a delay
  setTimeout(() => {
    console.log("Unsubscribing from instrument keys.");
    streamer.unsubscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"]);
  }, 5000); // Adjust delay as needed
});

streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log("Market Update:", feed);
});
```

<br/>

4. Subscribe, Change Mode and Unsubscribe

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamer();
streamer.connect();

// Initially subscribe to instrument keys in 'full' mode
streamer.on("open", async () => {
  console.log("Connected. Subscribing in full mode...");
  streamer.subscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"], "full");

  // Change mode to 'ltpc' after a short delay
  setTimeout(() => {
    console.log("Changing subscription mode to ltpc...");
    streamer.changeMode(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"], "ltpc");
  }, 5000); // 5-second delay

  // Unsubscribe after another delay
  setTimeout(() => {
    console.log("Unsubscribing...");
    streamer.unsubscribe(["NSE_EQ|INE020B01018", "NSE_EQ|INE467B01029"]);
  }, 10000); // 10 seconds after subscription
});

// Setup event listeners to log messages, errors, and closure
streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log("Market Update:", feed);
});
streamer.on("error", (error) => console.error("Error:", error));
streamer.on("close", () => console.log("Connection closed."));
```

<br/>

5. Disable Auto-Reconnect

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamer();
streamer.connect();

// Disable auto-reconnect feature
streamer.autoReconnect(false);

streamer.on("autoReconnectStopped", (data) => {
  console.log(data);
});
```

<br/>

6. Modify Auto-Reconnect parameters

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = <ACCESS_TOKEN>;

const streamer = new UpstoxClient.MarketDataStreamer();
streamer.connect();

// Modify auto-reconnect parameters: enable it, set interval to 10 seconds, and retry count to 3
streamer.autoReconnect(true, 10, 3);
```

<br/>
</p>
</details>

### PortfolioDataStreamer

Connecting to the Portfolio WebSocket for real-time order updates is straightforward with the PortfolioDataStreamer function. Below is a concise guide to get you started on receiving updates:

```javascript
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = "<ACCESS_TOKEN>";

const streamer = new UpstoxClient.PortfolioDataStreamer();
streamer.connect();

streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});

```

This example demonstrates initializing the PortfolioDataStreamer, connecting it to the WebSocket, and setting up an event listener to receive and print order updates. Replace <ACCESS_TOKEN> with your valid access token to authenticate the session.

### Exploring the PortfolioDataStreamer Functionality

#### Functions
1. **constructor PortfolioDataStreamer()**: Initializes the streamer.
2. **connect()**: Establishes the WebSocket connection.
6. **disconnect()**: Ends the active WebSocket connection.
7. **autoReconnect(enable, interval, retryCount)**: Customizes auto-reconnect functionality. Parameters include a flag to enable/disable it, the interval(in seconds) between attempts, and the maximum number of retries.

#### Events
- **open**: Emitted upon successful connection establishment.
- **close**: Indicates the WebSocket connection has been closed.
- **message**: Delivers market updates.
- **error**: Signals an error has occurred.
- **reconnecting**: Announced when a reconnect attempt is initiated.
- **autoReconnectStopped**: Informs when auto-reconnect efforts have ceased after exhausting the retry count.

## Documentation for Models

 - [UpstoxClient.AnalyticsData](docs/AnalyticsData.md)
 - [UpstoxClient.ApiGatewayErrorResponse](docs/ApiGatewayErrorResponse.md)
 - [UpstoxClient.BatchExecutionSummary](docs/BatchExecutionSummary.md)
 - [UpstoxClient.BrokerageData](docs/BrokerageData.md)
 - [UpstoxClient.BrokerageTaxes](docs/BrokerageTaxes.md)
 - [UpstoxClient.BrokerageWrapperData](docs/BrokerageWrapperData.md)
 - [UpstoxClient.CancelOrExitMultiOrderData](docs/CancelOrExitMultiOrderData.md)
 - [UpstoxClient.CancelOrExitMultiOrderResponse](docs/CancelOrExitMultiOrderResponse.md)
 - [UpstoxClient.CancelOrExitOrderErrorData](docs/CancelOrExitOrderErrorData.md)
 - [UpstoxClient.CancelOrderData](docs/CancelOrderData.md)
 - [UpstoxClient.CancelOrderResponse](docs/CancelOrderResponse.md)
 - [UpstoxClient.ConvertPositionData](docs/ConvertPositionData.md)
 - [UpstoxClient.ConvertPositionRequest](docs/ConvertPositionRequest.md)
 - [UpstoxClient.ConvertPositionResponse](docs/ConvertPositionResponse.md)
 - [UpstoxClient.Depth](docs/Depth.md)
 - [UpstoxClient.DepthMap](docs/DepthMap.md)
 - [UpstoxClient.DpPlan](docs/DpPlan.md)
 - [UpstoxClient.ExchangeTimingData](docs/ExchangeTimingData.md)
 - [UpstoxClient.GetBrokerageResponse](docs/GetBrokerageResponse.md)
 - [UpstoxClient.GetExchangeTimingResponse](docs/GetExchangeTimingResponse.md)
 - [UpstoxClient.GetFullMarketQuoteResponse](docs/GetFullMarketQuoteResponse.md)
 - [UpstoxClient.GetHistoricalCandleResponse](docs/GetHistoricalCandleResponse.md)
 - [UpstoxClient.GetHoldingsResponse](docs/GetHoldingsResponse.md)
 - [UpstoxClient.GetHolidayResponse](docs/GetHolidayResponse.md)
 - [UpstoxClient.GetIntraDayCandleResponse](docs/GetIntraDayCandleResponse.md)
 - [UpstoxClient.GetMarketQuoteLastTradedPriceResponse](docs/GetMarketQuoteLastTradedPriceResponse.md)
 - [UpstoxClient.GetMarketQuoteOHLCResponse](docs/GetMarketQuoteOHLCResponse.md)
 - [UpstoxClient.GetMarketStatusResponse](docs/GetMarketStatusResponse.md)
 - [UpstoxClient.GetOptionChainResponse](docs/GetOptionChainResponse.md)
 - [UpstoxClient.GetOptionContractResponse](docs/GetOptionContractResponse.md)
 - [UpstoxClient.GetOrderBookResponse](docs/GetOrderBookResponse.md)
 - [UpstoxClient.GetOrderDetailsResponse](docs/GetOrderDetailsResponse.md)
 - [UpstoxClient.GetOrderResponse](docs/GetOrderResponse.md)
 - [UpstoxClient.GetPositionResponse](docs/GetPositionResponse.md)
 - [UpstoxClient.GetProfileResponse](docs/GetProfileResponse.md)
 - [UpstoxClient.GetProfitAndLossChargesResponse](docs/GetProfitAndLossChargesResponse.md)
 - [UpstoxClient.GetTradeResponse](docs/GetTradeResponse.md)
 - [UpstoxClient.GetTradeWiseProfitAndLossDataResponse](docs/GetTradeWiseProfitAndLossDataResponse.md)
 - [UpstoxClient.GetTradeWiseProfitAndLossMetaDataResponse](docs/GetTradeWiseProfitAndLossMetaDataResponse.md)
 - [UpstoxClient.GetUserFundMarginResponse](docs/GetUserFundMarginResponse.md)
 - [UpstoxClient.HistoricalCandleData](docs/HistoricalCandleData.md)
 - [UpstoxClient.HoldingsData](docs/HoldingsData.md)
 - [UpstoxClient.HolidayData](docs/HolidayData.md)
 - [UpstoxClient.Instrument](docs/Instrument.md)
 - [UpstoxClient.InstrumentData](docs/InstrumentData.md)
 - [UpstoxClient.IntraDayCandleData](docs/IntraDayCandleData.md)
 - [UpstoxClient.LogoutResponse](docs/LogoutResponse.md)
 - [UpstoxClient.Margin](docs/Margin.md)
 - [UpstoxClient.MarginData](docs/MarginData.md)
 - [UpstoxClient.MarginRequest](docs/MarginRequest.md)
 - [UpstoxClient.MarketData](docs/MarketData.md)
 - [UpstoxClient.MarketQuoteOHLC](docs/MarketQuoteOHLC.md)
 - [UpstoxClient.MarketQuoteSymbol](docs/MarketQuoteSymbol.md)
 - [UpstoxClient.MarketQuoteSymbolLtp](docs/MarketQuoteSymbolLtp.md)
 - [UpstoxClient.MarketStatusData](docs/MarketStatusData.md)
 - [UpstoxClient.ModifyOrderData](docs/ModifyOrderData.md)
 - [UpstoxClient.ModifyOrderRequest](docs/ModifyOrderRequest.md)
 - [UpstoxClient.ModifyOrderResponse](docs/ModifyOrderResponse.md)
 - [UpstoxClient.MultiOrderData](docs/MultiOrderData.md)
 - [UpstoxClient.MultiOrderError](docs/MultiOrderError.md)
 - [UpstoxClient.MultiOrderRequest](docs/MultiOrderRequest.md)
 - [UpstoxClient.MultiOrderResponse](docs/MultiOrderResponse.md)
 - [UpstoxClient.MultiOrderSummary](docs/MultiOrderSummary.md)
 - [UpstoxClient.OAuthClientException](docs/OAuthClientException.md)
 - [UpstoxClient.OAuthClientExceptionCause](docs/OAuthClientExceptionCause.md)
 - [UpstoxClient.OAuthClientExceptionCauseStackTrace](docs/OAuthClientExceptionCauseStackTrace.md)
 - [UpstoxClient.OAuthClientExceptionCauseSuppressed](docs/OAuthClientExceptionCauseSuppressed.md)
 - [UpstoxClient.Ohlc](docs/Ohlc.md)
 - [UpstoxClient.OptionStrikeData](docs/OptionStrikeData.md)
 - [UpstoxClient.OrderBookData](docs/OrderBookData.md)
 - [UpstoxClient.OrderData](docs/OrderData.md)
 - [UpstoxClient.OtherTaxes](docs/OtherTaxes.md)
 - [UpstoxClient.PlaceOrderData](docs/PlaceOrderData.md)
 - [UpstoxClient.PlaceOrderRequest](docs/PlaceOrderRequest.md)
 - [UpstoxClient.PlaceOrderResponse](docs/PlaceOrderResponse.md)
 - [UpstoxClient.PositionData](docs/PositionData.md)
 - [UpstoxClient.PostMarginResponse](docs/PostMarginResponse.md)
 - [UpstoxClient.Problem](docs/Problem.md)
 - [UpstoxClient.ProfileData](docs/ProfileData.md)
 - [UpstoxClient.ProfitAndLossChargesData](docs/ProfitAndLossChargesData.md)
 - [UpstoxClient.ProfitAndLossChargesTaxes](docs/ProfitAndLossChargesTaxes.md)
 - [UpstoxClient.ProfitAndLossChargesWrapperData](docs/ProfitAndLossChargesWrapperData.md)
 - [UpstoxClient.ProfitAndLossMetaData](docs/ProfitAndLossMetaData.md)
 - [UpstoxClient.ProfitAndLossMetaDataWrapper](docs/ProfitAndLossMetaDataWrapper.md)
 - [UpstoxClient.ProfitAndLossOtherChargesTaxes](docs/ProfitAndLossOtherChargesTaxes.md)
 - [UpstoxClient.PutCallOptionChainData](docs/PutCallOptionChainData.md)
 - [UpstoxClient.TokenRequest](docs/TokenRequest.md)
 - [UpstoxClient.TokenResponse](docs/TokenResponse.md)
 - [UpstoxClient.TradeData](docs/TradeData.md)
 - [UpstoxClient.TradeHistoryResponse](docs/TradeHistoryResponse.md)
 - [UpstoxClient.TradeHistoryResponseMetaData](docs/TradeHistoryResponseMetaData.md)
 - [UpstoxClient.TradeHistoryResponsePageData](docs/TradeHistoryResponsePageData.md)
 - [UpstoxClient.TradeHistoryResponseTradeData](docs/TradeHistoryResponseTradeData.md)
 - [UpstoxClient.TradeWiseMetaData](docs/TradeWiseMetaData.md)
 - [UpstoxClient.TradeWiseProfitAndLossData](docs/TradeWiseProfitAndLossData.md)
 - [UpstoxClient.UserFundMarginData](docs/UserFundMarginData.md)
 - [UpstoxClient.WebsocketAuthRedirectResponse](docs/WebsocketAuthRedirectResponse.md)
 - [UpstoxClient.WebsocketAuthRedirectResponseData](docs/WebsocketAuthRedirectResponseData.md)