## Get smartlist futures

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();

// assetType: INDEX | STOCK | COMMODITY
// category: TOP_TRADED | MOST_ACTIVE | OI_GAINERS | OI_LOSERS | PRICE_GAINERS | PRICE_LOSERS | PREMIUM | DISCOUNT
let opts = {
  assetType: "STOCK",
  category: "TOP_TRADED",
  pageNumber: 1,
  pageSize: 50
};

apiInstance.getSmartlistFutures(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get smartlist MTF

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();

let opts = {
  pageNumber: 1,
  pageSize: 50
};

apiInstance.getSmartlistMtf(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get smartlist options

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.MarketApi();

// assetType: INDEX | STOCK | COMMODITY
// category: TOP_TRADED | MOST_ACTIVE | OI_GAINERS | OI_LOSERS | PRICE_GAINERS | PRICE_LOSERS | IV_GAINERS | IV_LOSERS | UNDER_5000 | UNDER_10000
let opts = {
  assetType: "INDEX",
  category: "OI_GAINERS",
  pageNumber: 1,
  pageSize: 50
};

apiInstance.getSmartlistOptions(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
