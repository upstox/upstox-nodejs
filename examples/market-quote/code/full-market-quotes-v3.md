## Get full market quote

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let marketQuoteApiInstance = new UpstoxClient.MarketQuoteV3Api();
marketQuoteApiInstance.getFullMarketQuoteV3({instrumentKey: "NSE_EQ|INE669E01016"}, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get full market quote for multiple instrument keys

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let marketQuoteApiInstance = new UpstoxClient.MarketQuoteV3Api();
marketQuoteApiInstance.getFullMarketQuoteV3({instrumentKey: "NSE_EQ|INE669E01016,NSE_EQ|INE848E01016"}, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Read the quote fields for an instrument

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let marketQuoteApiInstance = new UpstoxClient.MarketQuoteV3Api();
marketQuoteApiInstance.getFullMarketQuoteV3({instrumentKey: "NSE_EQ|INE669E01016"}, (error, data, response) => {
  if (error) {
    console.error(error);
    return;
  }

  // `data.data` is keyed by trading symbol, e.g. "NSE_EQ:TECHM"
  Object.entries(data.data).forEach(([key, quote]) => {
    console.log(key);
    console.log('  instrument token : ' + quote.instrumentToken);
    console.log('  last price       : ' + quote.lastPrice);
    console.log('  net change       : ' + quote.netChange);
    console.log('  volume           : ' + quote.volume);
    console.log('  prev close       : ' + quote.prevClosePrice);
    console.log('  year high / low  : ' + quote.yearHigh + ' / ' + quote.yearLow);
    console.log('  open interest    : ' + quote.oi);
    console.log('  cas eligible     : ' + quote.casEligible);
    console.log('  ohlc             : ' + JSON.stringify(quote.ohlc));
    console.log('  depth            : ' + JSON.stringify(quote.depth));
  });
});
```
