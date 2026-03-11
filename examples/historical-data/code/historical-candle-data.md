## Get historical candle data with a 1-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
let apiInstance = new UpstoxClient.HistoryApi();

let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "1minute"; 
let toDate = "2023-11-13";
let fromDate = "2023-11-12";

apiInstance.getHistoricalCandleData1(instrumentKey, interval, toDate, fromDate,apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get data with a 30-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
let apiInstance = new UpstoxClient.HistoryApi();

let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "30minute"; 
let toDate = "2023-11-13";
let fromDate = "2023-11-12";
apiInstance.getHistoricalCandleData1(instrumentKey, interval, toDate, fromDate,apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get data with a daily interval

```javascript
let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "day"; 
let toDate = "2023-11-13";
let fromDate = "2023-11-07";

apiInstance.getHistoricalCandleData1(instrumentKey, interval, toDate, fromDate,apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get data with a weekly interval

```javascript
let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "week"; 
let toDate = "2023-11-13";
let fromDate = "2023-10-07";

apiInstance.getHistoricalCandleData1(instrumentKey, interval, toDate, fromDate,apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get data with a monthly interval

```javascript
let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "month"; 
let toDate = "2023-11-13";
let fromDate = "2022-10-07";

apiInstance.getHistoricalCandleData1(instrumentKey, interval, toDate, fromDate,apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get historical candle data with a 1-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
let apiInstance = new UpstoxClient.HistoryApi();

let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "1minute"; 
let toDate = "2023-11-13";
apiInstance.getHistoricalCandleData(instrumentKey, interval, toDate, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get data with a 30-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
let apiInstance = new UpstoxClient.HistoryApi();

let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "30minute"; 
let toDate = "2023-11-13";

apiInstance.getHistoricalCandleData(instrumentKey, interval, toDate, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get data with a daily interval

```javascript
let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "day"; 
let toDate = "2023-11-13";

apiInstance.getHistoricalCandleData(instrumentKey, interval, toDate, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get data with a weekly interval

```javascript
let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "week"; 
let toDate = "2023-11-13";

apiInstance.getHistoricalCandleData(instrumentKey, interval, toDate, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```

## Get data with a monthly interval

```javascript
let apiVersion = "2.0"; 
let instrumentKey = "NSE_EQ|INE669E01016"; 
let interval = "month"; 
let toDate = "2023-11-13";

apiInstance.getHistoricalCandleData(instrumentKey, interval, toDate, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
```
