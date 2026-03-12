## Get margin details for equity delivery orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();

let instruments =[new UpstoxClient.Instrument("NSE_EQ|INE669E01016",1,"D","BUY")];

let postMarginRequest = new UpstoxClient.MarginRequest(instruments)

apiInstance.postMargin(postMarginRequest, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
      console.log(data);
    }
  });
```

## Get margin details for future delivery orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();

let instruments =[new UpstoxClient.Instrument("NSE_FO|35000",1,"D","BUY")];

let postMarginRequest = new UpstoxClient.MarginRequest(instruments)

apiInstance.postMargin(postMarginRequest, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
      console.log(data);
    }
  });
```

## Get margin details for option delivery orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();

let instruments =[new UpstoxClient.Instrument("NSE_FO|54524",1,"D","BUY")];

let postMarginRequest = new UpstoxClient.MarginRequest(instruments)

apiInstance.postMargin(postMarginRequest, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
      console.log(data);
    }
  });
```

## Get margin details for MCX delivery orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();

let instruments =[new UpstoxClient.Instrument("MCX_FO|435356",1,"D","BUY")];

let postMarginRequest = new UpstoxClient.MarginRequest(instruments)

apiInstance.postMargin(postMarginRequest, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
      console.log(data);
    }
  });
```

## Get margin details for currency delivery orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();

let instruments =[new UpstoxClient.Instrument("NCD_FO|15758",1,"D","BUY")];

let postMarginRequest = new UpstoxClient.MarginRequest(instruments)

apiInstance.postMargin(postMarginRequest, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
      console.log(data);
    }
  });
```
