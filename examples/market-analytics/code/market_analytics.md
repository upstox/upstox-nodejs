## Get OI Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();
let instrumentKey = "NSE_FO|35024"; // Nifty 50 Futures
let expiry = "2025-12-26";
let date = "2025-01-15";

apiInstance.getOiData(instrumentKey, expiry, date, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get Change in OI Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();
let instrumentKey = "NSE_FO|35024";
let expiry = "2025-12-26";
let date = "2025-01-15";
let interval = 1; // Number of days for OI difference

apiInstance.getChangeOiData(instrumentKey, expiry, date, interval, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get PCR Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();
let instrumentKey = "NSE_FO|35024";
let expiry = "2025-12-26";
let date = "2025-01-15";
let bucketInterval = 30; // Bucket interval in minutes

apiInstance.getPcrData(instrumentKey, expiry, date, bucketInterval, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get Max Pain Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();
let instrumentKey = "NSE_FO|35024";
let expiry = "2025-12-26";
let date = "2025-01-15";
let bucketInterval = 30;

apiInstance.getMaxPainData(instrumentKey, expiry, date, bucketInterval, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get FII Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();
let dataType = "NSE_FO|INDEX_FUTURES";
let interval = "1D";
let opts = {
  from: "2025-01-01"
};

apiInstance.getFiiData(dataType, interval, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get DII Data

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();
let dataType = "NSE_EQ|CASH";
let interval = "1D";
let opts = {
  from: "2025-01-01"
};

apiInstance.getDiiData(dataType, interval, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
