# UpstoxClient.MarketQuoteApi

All URIs are relative to *https://api.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFullMarketQuote**](MarketQuoteApi.md#getFullMarketQuote) | **GET** /market-quote/quotes | Market quotes and instruments - Full market quotes
[**getMarketQuoteOHLC**](MarketQuoteApi.md#getMarketQuoteOHLC) | **GET** /market-quote/ohlc | Market quotes and instruments - OHLC quotes
[**ltp**](MarketQuoteApi.md#ltp) | **GET** /market-quote/ltp | Market quotes and instruments - LTP quotes.

<a name="getFullMarketQuote"></a>
# **getFullMarketQuote**
> GetFullMarketQuoteResponse getFullMarketQuote(symbol, apiVersion)

Market quotes and instruments - Full market quotes

This API provides the functionality to retrieve the full market quotes for one or more instruments.This API returns the complete market data snapshot of up to 500 instruments in one go.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.MarketQuoteApi();
let symbol = "symbol_example"; // String | Comma separated list of symbols
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getFullMarketQuote(symbol, apiVersion, (error, data, response) => {
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
 **symbol** | **String**| Comma separated list of symbols | 
 **apiVersion** | **String**| API Version Header | 

### Return type

[**GetFullMarketQuoteResponse**](GetFullMarketQuoteResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getMarketQuoteOHLC"></a>
# **getMarketQuoteOHLC**
> GetMarketQuoteOHLCResponse getMarketQuoteOHLC(symbol, interval, apiVersion)

Market quotes and instruments - OHLC quotes

This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 1000 instruments in one go.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.MarketQuoteApi();
let symbol = "symbol_example"; // String | Comma separated list of symbols
let interval = "interval_example"; // String | Interval to get ohlc data
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getMarketQuoteOHLC(symbol, interval, apiVersion, (error, data, response) => {
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
 **symbol** | **String**| Comma separated list of symbols | 
 **interval** | **String**| Interval to get ohlc data | 
 **apiVersion** | **String**| API Version Header | 

### Return type

[**GetMarketQuoteOHLCResponse**](GetMarketQuoteOHLCResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="ltp"></a>
# **ltp**
> GetMarketQuoteLastTradedPriceResponse ltp(symbol, apiVersion)

Market quotes and instruments - LTP quotes.

This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 1000 instruments in one go.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.MarketQuoteApi();
let symbol = "symbol_example"; // String | Comma separated list of symbols
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.ltp(symbol, apiVersion, (error, data, response) => {
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
 **symbol** | **String**| Comma separated list of symbols | 
 **apiVersion** | **String**| API Version Header | 

### Return type

[**GetMarketQuoteLastTradedPriceResponse**](GetMarketQuoteLastTradedPriceResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

