## Get ltp (last traded price) market quotes

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let marketQuoteApiInstance = new UpstoxClient.MarketQuoteV3Api();
marketQuoteApiInstance.getLtp({instrumentKey: "NSE_EQ|INE848E01016"}, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get ltp (last traded price) market quotes for multiple instruments keys

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let marketQuoteApiInstance = new UpstoxClient.MarketQuoteV3Api();
marketQuoteApiInstance.getLtp({instrumentKey: "NSE_EQ|INE848E01016,NSE_EQ|INE669E01016"}, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
