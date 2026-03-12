## Get market holidays for current year

```javascript
let UpstoxClient = require('upstox-js-sdk');

let apiInstance = new UpstoxClient.MarketHolidaysAndTimingsApi();
apiInstance.getHolidays((error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
  });
```

## Get market holiday status of a date

```javascript
let UpstoxClient = require('upstox-js-sdk');

let apiInstance = new UpstoxClient.MarketHolidaysAndTimingsApi();

apiInstance.getHoliday("2024-01-22",(error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
  });
```
