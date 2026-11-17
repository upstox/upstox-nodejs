## Get US market holidays

```javascript
let UpstoxClient = require('upstox-js-sdk');

let apiInstance = new UpstoxClient.USMarketHolidaysAndTimingsApi();

apiInstance.getUsHolidays((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get US market holiday on a date

```javascript
let UpstoxClient = require('upstox-js-sdk');

let apiInstance = new UpstoxClient.USMarketHolidaysAndTimingsApi();

apiInstance.getUsHoliday("2026-11-26", (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
