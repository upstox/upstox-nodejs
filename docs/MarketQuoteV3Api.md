# UpstoxClient.MarketQuoteV3Api

All URIs are relative to *https://api-v2.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLtp**](MarketQuoteV3Api.md#getLtp) | **GET** /v3/market-quote/ltp | Market quotes and instruments - LTP quotes.
[**getMarketQuoteOHLC**](MarketQuoteV3Api.md#getMarketQuoteOHLC) | **GET** /v3/market-quote/ohlc | Market quotes and instruments - OHLC quotes
[**getMarketQuoteOptionGreek**](MarketQuoteV3Api.md#getMarketQuoteOptionGreek) | **GET** /v3/market-quote/option-greek | Market quotes and instruments - Option Greek

<a name="getLtp"></a>
# **getLtp**
> GetMarketQuoteLastTradedPriceResponseV3 getLtp(opts)

Market quotes and instruments - LTP quotes.

This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 500 instruments in one go.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.MarketQuoteV3Api();
let opts = { 
  'instrumentKey': "instrumentKey_example" // String | Comma separated list of instrument keys
};
apiInstance.getLtp(opts, (error, data, response) => {
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
 **instrumentKey** | **String**| Comma separated list of instrument keys | [optional] 

### Return type

[**GetMarketQuoteLastTradedPriceResponseV3**](GetMarketQuoteLastTradedPriceResponseV3.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getMarketQuoteOHLC"></a>
# **getMarketQuoteOHLC**
> GetMarketQuoteOHLCResponseV3 getMarketQuoteOHLC(interval, opts)

Market quotes and instruments - OHLC quotes

This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 500 instruments in one go.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.MarketQuoteV3Api();
let interval = "interval_example"; // String | Interval to get ohlc data
let opts = { 
  'instrumentKey': "instrumentKey_example" // String | Comma separated list of instrument keys
};
apiInstance.getMarketQuoteOHLC(interval, opts, (error, data, response) => {
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
 **interval** | **String**| Interval to get ohlc data | 
 **instrumentKey** | **String**| Comma separated list of instrument keys | [optional] 

### Return type

[**GetMarketQuoteOHLCResponseV3**](GetMarketQuoteOHLCResponseV3.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getMarketQuoteOptionGreek"></a>
# **getMarketQuoteOptionGreek**
> GetMarketQuoteOptionGreekResponseV3 getMarketQuoteOptionGreek(opts)

Market quotes and instruments - Option Greek

This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API returns the Option Greek data of up to 500 instruments in one go.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.MarketQuoteV3Api();
let opts = { 
  'instrumentKey': "instrumentKey_example" // String | Comma separated list of instrument keys
};
apiInstance.getMarketQuoteOptionGreek(opts, (error, data, response) => {
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
 **instrumentKey** | **String**| Comma separated list of instrument keys | [optional] 

### Return type

[**GetMarketQuoteOptionGreekResponseV3**](GetMarketQuoteOptionGreekResponseV3.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

