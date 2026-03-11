## Place a delivery market order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.D, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 0.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.MARKET,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 0.0, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place a delivery limit order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.D, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 20.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.LIMIT,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 20.1, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place a delivery stop-loss order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.D, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 20.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.SL,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 19.5, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place a delivery stop-loss order market

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.D, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 0.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.SL_M,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 24.5, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place an intraday market order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.I, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 0.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.MARKET,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 0.0, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place an intraday limit order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.I, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 20.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.LIMIT,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 20.1, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place an intraday stop-loss order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.I, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 20.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.SL,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 19.5, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place an intraday stop-loss market order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.I, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 0.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.SL_M,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 24.5, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place a delivery market amo (after market order)

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.D, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 0.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.MARKET,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 0.0, true); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```
