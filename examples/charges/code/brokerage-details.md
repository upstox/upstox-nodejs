## Get brokerage details for equity delivery orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();
let instrumentToken = "NSE_EQ|INE669E01016"; 
let quantity = 56; 
let product = "D"; 
let transactionType = "BUY"; 
let price = 23.4; 
let apiVersion = "2.0"; 

apiInstance.getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get brokerage details for equity intraday orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();
let instrumentToken = "NSE_EQ|INE669E01016"; 
let quantity = 10; 
let product = "I"; 
let transactionType = "BUY"; 
let price = 20.4; 
let apiVersion = "2.0"; 

apiInstance.getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get brokerage details for equity futures and options delivery orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();
let instrumentToken = "NSE_FO|35271"; 
let quantity = 10; 
let product = "D"; 
let transactionType = "BUY"; 
let price = 2000.4; 
let apiVersion = "2.0"; 

apiInstance.getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get brokerage details for equity futures and options intraday orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.ChargeApi();
let instrumentToken = "NSE_FO|35271"; 
let quantity = 10; 
let product = "I"; 
let transactionType = "BUY"; 
let price = 2000.4; 
let apiVersion = "2.0"; 

apiInstance.getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
