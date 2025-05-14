# UpstoxClient.PostTradeApi

All URIs are relative to *https://api.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTradesByDateRange**](PostTradeApi.md#getTradesByDateRange) | **GET** /v2/charges/historical-trades | 

<a name="getTradesByDateRange"></a>
# **getTradesByDateRange**
> TradeHistoryResponse getTradesByDateRange(startDate, endDate, pageNumber, pageSize, opts)



### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.PostTradeApi();
let startDate = "startDate_example"; // String | Date from which trade history needs to be fetched. Date in YYYY-mm-dd format
let endDate = "endDate_example"; // String | Date till which history needs needs to be fetched. Date in YYYY-mm-dd format
let pageNumber = 56; // Number | Page number for which you want to fetch trade history 
let pageSize = 56; // Number | How many records you want for a page 
let opts = { 
  'segment': "" // String | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives MF - Mutual Funds
};
apiInstance.getTradesByDateRange(startDate, endDate, pageNumber, pageSize, opts, (error, data, response) => {
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
 **startDate** | **String**| Date from which trade history needs to be fetched. Date in YYYY-mm-dd format | 
 **endDate** | **String**| Date till which history needs needs to be fetched. Date in YYYY-mm-dd format | 
 **pageNumber** | **Number**| Page number for which you want to fetch trade history  | 
 **pageSize** | **Number**| How many records you want for a page  | 
 **segment** | **String**| Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives MF - Mutual Funds | [optional] 

### Return type

[**TradeHistoryResponse**](TradeHistoryResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

