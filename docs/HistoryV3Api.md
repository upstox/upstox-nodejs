# UpstoxClient.HistoryV3Api

All URIs are relative to *https://api-v2.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricalCandleData**](HistoryV3Api.md#getHistoricalCandleData) | **GET** /v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date} | Historical candle data
[**getHistoricalCandleData1**](HistoryV3Api.md#getHistoricalCandleData1) | **GET** /v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}/{from_date} | Historical candle data
[**getIntraDayCandleData**](HistoryV3Api.md#getIntraDayCandleData) | **GET** /v3/historical-candle/intraday/{instrumentKey}/{unit}/{interval} | Intra day candle data

<a name="getHistoricalCandleData"></a>
# **getHistoricalCandleData**
> GetHistoricalCandleResponse getHistoricalCandleData(instrumentKey, unit, interval, toDate)

Historical candle data

Get OHLC values for all instruments for the present trading day with expanded interval options.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.HistoryV3Api();
let instrumentKey = "instrumentKey_example"; // String | 
let unit = "unit_example"; // String | 
let interval = 56; // Number | 
let toDate = "toDate_example"; // String | 

apiInstance.getHistoricalCandleData(instrumentKey, unit, interval, toDate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentKey** | **String**|  | 
 **unit** | **String**|  | 
 **interval** | **Number**|  | 
 **toDate** | **String**|  | 

### Return type

[**GetHistoricalCandleResponse**](GetHistoricalCandleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getHistoricalCandleData1"></a>
# **getHistoricalCandleData1**
> GetHistoricalCandleResponse getHistoricalCandleData1(instrumentKey, unit, interval, toDate, fromDate)

Historical candle data

Get OHLC values for all instruments for the present trading day with expanded interval options

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.HistoryV3Api();
let instrumentKey = "instrumentKey_example"; // String | 
let unit = "unit_example"; // String | 
let interval = 56; // Number | 
let toDate = "toDate_example"; // String | 
let fromDate = "fromDate_example"; // String | 

apiInstance.getHistoricalCandleData1(instrumentKey, unit, interval, toDate, fromDate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentKey** | **String**|  | 
 **unit** | **String**|  | 
 **interval** | **Number**|  | 
 **toDate** | **String**|  | 
 **fromDate** | **String**|  | 

### Return type

[**GetHistoricalCandleResponse**](GetHistoricalCandleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getIntraDayCandleData"></a>
# **getIntraDayCandleData**
> GetIntraDayCandleResponse getIntraDayCandleData(instrumentKey, unit, interval)

Intra day candle data

Get OHLC values for all instruments for the present trading day

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.HistoryV3Api();
let instrumentKey = "instrumentKey_example"; // String | 
let unit = "unit_example"; // String | 
let interval = 56; // Number | 

apiInstance.getIntraDayCandleData(instrumentKey, unit, interval, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentKey** | **String**|  | 
 **unit** | **String**|  | 
 **interval** | **Number**|  | 

### Return type

[**GetIntraDayCandleResponse**](GetIntraDayCandleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

