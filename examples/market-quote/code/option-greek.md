## Get Option Greek fields

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let marketQuoteApiInstance = new UpstoxClient.MarketQuoteV3Api();
marketQuoteApiInstance.getMarketQuoteOptionGreek({instrumentKey: "NSE_FO|43885"}, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get Option Greek fields for multiple instruments keys

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let marketQuoteApiInstance = new UpstoxClient.MarketQuoteV3Api();
marketQuoteApiInstance.getMarketQuoteOptionGreek({instrumentKey: "NSE_FO|38604,NSE_FO|49210"}, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
