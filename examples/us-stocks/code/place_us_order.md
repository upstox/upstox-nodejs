## Place a US stocks market order by quantity

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.USStocksOrderApi();

let body = new UpstoxClient.UsPlaceOrderRequest("DAY", "US_EQ|AAPL", "BUY", "MARKET");
body.quantity = 0.5; // fractional shares are allowed on fractionable stocks

apiInstance.placeUsOrder(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Place a US stocks market order by amount

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.USStocksOrderApi();

let body = new UpstoxClient.UsPlaceOrderRequest("DAY", "US_EQ|AAPL", "BUY", "MARKET");
body.amount = 25.0; // USD to invest

apiInstance.placeUsOrder(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Place a US stocks limit order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.USStocksOrderApi();

let body = new UpstoxClient.UsPlaceOrderRequest("DAY", "US_EQ|AAPL", "BUY", "LIMIT");
body.quantity = 1;
body.price = 180.5;
body.tag = "my-tag";

apiInstance.placeUsOrder(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
