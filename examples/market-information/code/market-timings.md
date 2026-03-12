## Get market timings of a date

```javascript
let UpstoxClient = require('upstox-js-sdk');

let apiInstance = new UpstoxClient.MarketHolidaysAndTimingsApi();

apiInstance.getExchangeTimings("2024-01-22",(error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
  });
```
