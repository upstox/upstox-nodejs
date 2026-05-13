## Get OI Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();
let instrumentKey = "NSE_INDEX|Nifty 50";
let expiry = "2025-06-26";
let date = "2025-06-12";

apiInstance.getOiData(instrumentKey, expiry, date, (error, data, response) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data));
});
```

## Get Change in OI Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();

apiInstance.getChangeOiData("NSE_INDEX|Nifty 50", "2025-06-26", "2025-06-12", 5, (error, data, response) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data));
});
```

## Get PCR Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();

apiInstance.getPcrData("NSE_INDEX|Nifty 50", "2025-06-26", "2025-06-12", 30, (error, data, response) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data));
});
```

## Get Max Pain Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();

apiInstance.getMaxPainData("NSE_INDEX|Nifty 50", "2025-06-26", "2025-06-12", 30, (error, data, response) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data));
});
```

## Get FII Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();

apiInstance.getFiiData("NSE_FO|INDEX_FUTURES", "1D", { from: "2025-01-01" }, (error, data, response) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data));
});
```

## Get DII Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();

apiInstance.getDiiData("NSE_EQ|CASH", "1D", { from: "2025-01-01" }, (error, data, response) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data));
});
```
