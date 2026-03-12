## Place an order with slicing enabled

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();
let body = new UpstoxClient.PlaceOrderV3Request(4000, 
    UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
    UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY, 
    0, "NSE_FO|43919",
    UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
    UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
    0, 0, false);
let opt = {"slice": true}

apiInstance.placeOrder(body, opt, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

## Place an order with slicing disabled

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();
let body = new UpstoxClient.PlaceOrderV3Request(75, 
    UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
    UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY, 
    0, "NSE_FO|43919",
    UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
    UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
    0, 0, false);
let opt = {"slice": false}

apiInstance.placeOrder(body, opt, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```
