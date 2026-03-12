## Get data with a 1-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getIntraDayCandleData("NSE_EQ|INE848E01016", "minutes", "1", (error, data, response) => {
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

historicalApiInstance.getIntraDayCandleData("NSE_EQ|INE848E01016", "minutes", "3", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a 5-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getIntraDayCandleData("NSE_EQ|INE848E01016", "minutes", "5", (error, data, response) => {
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

historicalApiInstance.getIntraDayCandleData("NSE_EQ|INE848E01016", "minutes", "15", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a 30-minute interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getIntraDayCandleData("NSE_EQ|INE848E01016", "minutes", "30", (error, data, response) => {
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

historicalApiInstance.getIntraDayCandleData("NSE_EQ|INE848E01016", "hours", "1", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get data with a 2-hour interval

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getIntraDayCandleData("NSE_EQ|INE848E01016", "hours", "2", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get current day data

```javascript
let UpstoxClient = require('upstox-js-sdk');
const historicalApiInstance = new UpstoxClient.HistoryV3Api();

historicalApiInstance.getIntraDayCandleData("NSE_EQ|INE848E01016", "days", "1", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
