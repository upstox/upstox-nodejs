# UpstoxClient.OptionsApi

All URIs are relative to *https://api.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOptionContracts**](OptionsApi.md#getOptionContracts) | **GET** /v2/option/contract | Get option contracts
[**getPutCallOptionChain**](OptionsApi.md#getPutCallOptionChain) | **GET** /v2/option/chain | Get option chain

<a name="getOptionContracts"></a>
# **getOptionContracts**
> GetOptionContractResponse getOptionContracts(instrumentKey, opts)

Get option contracts

This API provides the functionality to retrieve the option contracts

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.OptionsApi();
let instrumentKey = "instrumentKey_example"; // String | Instrument key for an underlying symbol
let opts = { 
  'expiryDate': "expiryDate_example" // String | Expiry date in format: YYYY-mm-dd
};
apiInstance.getOptionContracts(instrumentKey, opts, (error, data, response) => {
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
 **expiryDate** | **String**| Expiry date in format: YYYY-mm-dd | [optional] 

### Return type

[**GetOptionContractResponse**](GetOptionContractResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getPutCallOptionChain"></a>
# **getPutCallOptionChain**
> GetOptionChainResponse getPutCallOptionChain(instrumentKey, expiryDate)

Get option chain

This API provides the functionality to retrieve the option chain

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.OptionsApi();
let instrumentKey = "instrumentKey_example"; // String | Instrument key for an underlying symbol
let expiryDate = "expiryDate_example"; // String | Expiry date in format: YYYY-mm-dd

apiInstance.getPutCallOptionChain(instrumentKey, expiryDate, (error, data, response) => {
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

[**GetOptionChainResponse**](GetOptionChainResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

