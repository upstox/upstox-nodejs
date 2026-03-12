## Get data with a 1-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getHistoricalCandleData1("NSE_EQ|INE848E01016", "minutes", "1", "2025-01-02", "2025-01-01", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a 3-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getHistoricalCandleData1("NSE_EQ|INE848E01016", "minutes", "3", "2025-01-02", "2025-01-01", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a 15-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getHistoricalCandleData1("NSE_EQ|INE848E01016", "minutes", "15", "2025-01-04", "2025-01-01", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a 1-hour interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getHistoricalCandleData1("NSE_EQ|INE848E01016", "hours", "1", "2025-02-01", "2025-01-01", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a 4-hour interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getHistoricalCandleData1("NSE_EQ|INE848E01016", "hours", "4", "2025-02-01", "2025-01-01", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a daily interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getHistoricalCandleData1("NSE_EQ|INE848E01016", "days", "1", "2025-03-01", "2025-01-01", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a weekly interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getHistoricalCandleData1("NSE_EQ|INE848E01016", "weeks", "1", "2025-01-01", "2024-01-01", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a monthly interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getHistoricalCandleData1("NSE_EQ|INE848E01016", "months", "1", "2025-01-01", "2010-01-01", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
