# UpstoxClient.ExpiredInstrumentApi

All URIs are relative to *https://api.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExpiredFutureContracts**](ExpiredInstrumentApi.md#getExpiredFutureContracts) | **GET** /v2/expired-instruments/future/contract | Expired instruments - Get future contracts
[**getExpiredHistoricalCandleData**](ExpiredInstrumentApi.md#getExpiredHistoricalCandleData) | **GET** /v2/expired-instruments/historical-candle/{expired_instrument_key}/{interval}/{to_date}/{from_date} | Expired Historical candle data
[**getExpiredOptionContracts**](ExpiredInstrumentApi.md#getExpiredOptionContracts) | **GET** /v2/expired-instruments/option/contract | Get expired option contracts
[**getExpiries**](ExpiredInstrumentApi.md#getExpiries) | **GET** /v2/expired-instruments/expiries | Expired instruments - Get expiries

<a name="getExpiredFutureContracts"></a>
# **getExpiredFutureContracts**
> GetExpiredFuturesContractResponse getExpiredFutureContracts(instrumentKey, expiryDate)

Expired instruments - Get future contracts

This API provides the functionality to retrieve expired future contracts for a given instrument key and expiry date.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.ExpiredInstrumentApi();
let instrumentKey = "instrumentKey_example"; // String | Instrument Key of asset
let expiryDate = "expiryDate_example"; // String | Expiry date of the instrument

apiInstance.getExpiredFutureContracts(instrumentKey, expiryDate, (error, data, response) => {
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
 **instrumentKey** | **String**| Instrument Key of asset | 
 **expiryDate** | **String**| Expiry date of the instrument | 

### Return type

[**GetExpiredFuturesContractResponse**](GetExpiredFuturesContractResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getExpiredHistoricalCandleData"></a>
# **getExpiredHistoricalCandleData**
> GetHistoricalCandleResponse getExpiredHistoricalCandleData(expiredInstrumentKey, interval, toDate, fromDate)

Expired Historical candle data

Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched for the following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day: last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till endDate

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.ExpiredInstrumentApi();
let expiredInstrumentKey = "expiredInstrumentKey_example"; // String | Expired Instrument Key of asset
let interval = "interval_example"; // String | Interval to get expired ohlc data
let toDate = "toDate_example"; // String | to date
let fromDate = "fromDate_example"; // String | from date

apiInstance.getExpiredHistoricalCandleData(expiredInstrumentKey, interval, toDate, fromDate, (error, data, response) => {
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
 **expiredInstrumentKey** | **String**| Expired Instrument Key of asset | 
 **interval** | **String**| Interval to get expired ohlc data | 
 **toDate** | **String**| to date | 
 **fromDate** | **String**| from date | 

### Return type

[**GetHistoricalCandleResponse**](GetHistoricalCandleResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getExpiredOptionContracts"></a>
# **getExpiredOptionContracts**
> GetOptionContractResponse getExpiredOptionContracts(instrumentKey, expiryDate)

Get expired option contracts

This API provides the functionality to retrieve the expired option contracts

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.ExpiredInstrumentApi();
let instrumentKey = "instrumentKey_example"; // String | Instrument key for an underlying symbol
let expiryDate = "expiryDate_example"; // String | Expiry date in format: YYYY-mm-dd

apiInstance.getExpiredOptionContracts(instrumentKey, expiryDate, (error, data, response) => {
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
 **instrumentKey** | **String**| Instrument key for an underlying symbol | 
 **expiryDate** | **String**| Expiry date in format: YYYY-mm-dd | 

### Return type

[**GetOptionContractResponse**](GetOptionContractResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getExpiries"></a>
# **getExpiries**
> GetExpiriesResponse getExpiries(instrumentKey)

Expired instruments - Get expiries

This API provides the functionality to retrieve expiry dates for a given instrument key.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.ExpiredInstrumentApi();
let instrumentKey = "instrumentKey_example"; // String | Instrument Key of asset

apiInstance.getExpiries(instrumentKey, (error, data, response) => {
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
 **instrumentKey** | **String**| Instrument Key of asset | 

### Return type

[**GetExpiriesResponse**](GetExpiriesResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

