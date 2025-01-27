# UpstoxClient.ChargeApi

All URIs are relative to *https://api-v2.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBrokerage**](ChargeApi.md#getBrokerage) | **GET** /charges/brokerage | Brokerage details

<a name="getBrokerage"></a>
# **getBrokerage**
> GetBrokerageResponse getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion)

Brokerage details

Compute Brokerage Charges

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.ChargeApi();
let instrumentToken = "instrumentToken_example"; // String | Key of the instrument
let quantity = 56; // Number | Quantity with which the order is to be placed
let product = "product_example"; // String | Product with which the order is to be placed
let transactionType = "transactionType_example"; // String | Indicates whether its a BUY or SELL order
let price = 3.4; // Number | Price with which the order is to be placed
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion, (error, data, response) => {
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
 **instrumentToken** | **String**| Key of the instrument | 
 **quantity** | **Number**| Quantity with which the order is to be placed | 
 **product** | **String**| Product with which the order is to be placed | 
 **transactionType** | **String**| Indicates whether its a BUY or SELL order | 
 **price** | **Number**| Price with which the order is to be placed | 
 **apiVersion** | **String**| API Version Header | 

### Return type

[**GetBrokerageResponse**](GetBrokerageResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="postMargin"></a>
# **postMargin**
> PostMarginResponse postMargin(body)

Calculate Margin

Compute Margin

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.ChargeApi();
let body = new UpstoxClient.MarginRequest(); // MarginRequest | 

apiInstance.postMargin(body, (error, data, response) => {
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
 **body** | [**MarginRequest**](MarginRequest.md)|  | 

### Return type

[**PostMarginResponse**](PostMarginResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

