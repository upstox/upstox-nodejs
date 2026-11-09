## Calculate US stocks margin

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.USStocksChargesApi();

let instruments = [
  new UpstoxClient.UsOrderEstimateRequest(1, "US_EQ|AAPL", "BUY", "MARKET"),
  new UpstoxClient.UsOrderEstimateRequest(2, "US_EQ|MSFT", "BUY", "MARKET")
];
let body = new UpstoxClient.UsMarginRequest(instruments);

apiInstance.calculateUsMargin(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
