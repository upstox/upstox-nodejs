## Get US market timings on a date

```javascript
let UpstoxClient = require('upstox-js-sdk');

let apiInstance = new UpstoxClient.USMarketHolidaysAndTimingsApi();

apiInstance.getUsExchangeTimings("2026-10-29", (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
