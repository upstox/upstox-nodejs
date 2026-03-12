## Place a multi order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

apiInstance = new UpstoxClient.OrderApi();
body = []
order = new UpstoxClient.MultiOrderRequest(25,"D","DAY",0,false,"NSE_FO|44166","MARKET","BUY",0,0,true,"1");
order.tag = "string"; //optional parameter tag
body = body.concat(order);


apiInstance.placeMultiOrder(body, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Place Multiple BUY and SELL Orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

apiInstance = new UpstoxClient.OrderApi();
body = []
buyRequest = new UpstoxClient.MultiOrderRequest(25,"D","DAY",0,false,"NSE_FO|44166","MARKET","BUY",0,0,true,"1");
buyRequest.tag = "string";

sellRequest = new UpstoxClient.MultiOrderRequest(25,"D","DAY",0,false,"NSE_FO|44122","MARKET","SELL",0,0,true,"2");
sellRequest.tag = "string";
body = body.concat(buyRequest, sellRequest);


apiInstance.placeMultiOrder(body, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Place Multiple Orders with Auto Slicing enabled

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

apiInstance = new UpstoxClient.OrderApi();
body = []
order = new UpstoxClient.MultiOrderRequest(25,"D","DAY",0,true,"NSE_FO|44166","MARKET","BUY",0,0,true,"1");
order.tag = "string"; //optional parameter tag
body = body.concat(order);


apiInstance.placeMultiOrder(body, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
