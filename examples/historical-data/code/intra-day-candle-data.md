## Get intraday candle data with a 1-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
let apiInstance = new UpstoxClient.HistoryApi();

let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "1minute"; 

apiInstance.getIntraDayCandleData(instrumentKey, interval, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get intraday candle data with a 30-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
let apiInstance = new UpstoxClient.HistoryApi();

let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "30minute"; 

apiInstance.getIntraDayCandleData(instrumentKey, interval, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```
