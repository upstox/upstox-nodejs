## Get trades for an order number

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access}";
let apiInstance = new UpstoxClient.OrderApi();

let orderId = "240111010861817";
let apiVersion = "2.0";

apiInstance.getTradesByOrder(orderId, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
