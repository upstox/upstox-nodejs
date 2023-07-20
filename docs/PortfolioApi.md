# UpstoxClient.PortfolioApi

All URIs are relative to *https://api-v2.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertPositions**](PortfolioApi.md#convertPositions) | **PUT** /portfolio/convert-position | Convert Positions
[**getHoldings**](PortfolioApi.md#getHoldings) | **GET** /portfolio/long-term-holdings | Get Holdings
[**getPositions**](PortfolioApi.md#getPositions) | **GET** /portfolio/short-term-positions | Get Positions

<a name="convertPositions"></a>
# **convertPositions**
> ConvertPositionResponse convertPositions(body, apiVersion)

Convert Positions

Convert the margin product of an open position

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.PortfolioApi();
let body = new UpstoxClient.ConvertPositionRequest(); // ConvertPositionRequest | 
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.convertPositions(body, apiVersion, (error, data, response) => {
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
 **body** | [**ConvertPositionRequest**](ConvertPositionRequest.md)|  | 
 **apiVersion** | **String**| API Version Header | 

### Return type

[**ConvertPositionResponse**](ConvertPositionResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json

<a name="getHoldings"></a>
# **getHoldings**
> GetHoldingsResponse getHoldings(apiVersion)

Get Holdings

Fetches the holdings which the user has bought/sold in previous trading sessions.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.PortfolioApi();
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getHoldings(apiVersion, (error, data, response) => {
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
 **apiVersion** | **String**| API Version Header | 

### Return type

[**GetHoldingsResponse**](GetHoldingsResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="getPositions"></a>
# **getPositions**
> GetPositionResponse getPositions(apiVersion)

Get Positions

Fetches the current positions for the user for the current day.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.PortfolioApi();
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getPositions(apiVersion, (error, data, response) => {
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
 **apiVersion** | **String**| API Version Header | 

### Return type

[**GetPositionResponse**](GetPositionResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

