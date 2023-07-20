# UpstoxClient.WebsocketApi

All URIs are relative to *https://api-v2.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMarketDataFeed**](WebsocketApi.md#getMarketDataFeed) | **GET** /feed/market-data-feed | Market Data Feed
[**getMarketDataFeedAuthorize**](WebsocketApi.md#getMarketDataFeedAuthorize) | **GET** /feed/market-data-feed/authorize | Market Data Feed Authorize
[**getPortfolioStreamFeed**](WebsocketApi.md#getPortfolioStreamFeed) | **GET** /feed/portfolio-stream-feed | Portfolio Stream Feed
[**getPortfolioStreamFeedAuthorize**](WebsocketApi.md#getPortfolioStreamFeedAuthorize) | **GET** /feed/portfolio-stream-feed/authorize | Portfolio Stream Feed Authorize

<a name="getMarketDataFeed"></a>
# **getMarketDataFeed**
> getMarketDataFeed(apiVersion)

Market Data Feed

 This API redirects the client to the respective socket endpoint to receive Market updates.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.WebsocketApi();
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getMarketDataFeed(apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| API Version Header | 

### Return type

null (empty response body)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getMarketDataFeedAuthorize"></a>
# **getMarketDataFeedAuthorize**
> WebsocketAuthRedirectResponse getMarketDataFeedAuthorize(apiVersion)

Market Data Feed Authorize

This API provides the functionality to retrieve the socket endpoint URI for Market updates.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.WebsocketApi();
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getMarketDataFeedAuthorize(apiVersion, (error, data, response) => {
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

[**WebsocketAuthRedirectResponse**](WebsocketAuthRedirectResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="getPortfolioStreamFeed"></a>
# **getPortfolioStreamFeed**
> getPortfolioStreamFeed(apiVersion)

Portfolio Stream Feed

This API redirects the client to the respective socket endpoint to receive Portfolio updates.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.WebsocketApi();
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getPortfolioStreamFeed(apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| API Version Header | 

### Return type

null (empty response body)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getPortfolioStreamFeedAuthorize"></a>
# **getPortfolioStreamFeedAuthorize**
> WebsocketAuthRedirectResponse getPortfolioStreamFeedAuthorize(apiVersion)

Portfolio Stream Feed Authorize

 This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.WebsocketApi();
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getPortfolioStreamFeedAuthorize(apiVersion, (error, data, response) => {
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

[**WebsocketAuthRedirectResponse**](WebsocketAuthRedirectResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

