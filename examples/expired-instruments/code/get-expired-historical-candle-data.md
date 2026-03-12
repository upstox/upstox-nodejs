## Get Historical Candle Data for Expired Instruments

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let expiredInstrumentsApiInstance = new UpstoxClient.ExpiredInstrumentApi();
expiredInstrumentsApiInstance.getExpiredHistoricalCandleData("NSE_FO|54452|24-04-2025", "1minute", "2025-04-24", "2025-01-03", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log(data);
  }
});
```
