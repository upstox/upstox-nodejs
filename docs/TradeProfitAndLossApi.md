# UpstoxClient.TradeProfitAndLossApi

All URIs are relative to *https://api.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProfitAndLossCharges**](TradeProfitAndLossApi.md#getProfitAndLossCharges) | **GET** /trade/profit-loss/charges | Get profit and loss on trades
[**getTradeWiseProfitAndLossData**](TradeProfitAndLossApi.md#getTradeWiseProfitAndLossData) | **GET** /trade/profit-loss/data | Get Trade-wise Profit and Loss Report Data
[**getTradeWiseProfitAndLossMetaData**](TradeProfitAndLossApi.md#getTradeWiseProfitAndLossMetaData) | **GET** /trade/profit-loss/metadata | Get profit and loss meta data on trades

<a name="getProfitAndLossCharges"></a>
# **getProfitAndLossCharges**
> GetProfitAndLossChargesResponse getProfitAndLossCharges(segment, financialYear, apiVersion, opts)

Get profit and loss on trades

This API gives the charges incurred by users for their trades

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.TradeProfitAndLossApi();
let segment = "segment_example"; // String | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
let financialYear = "financialYear_example"; // String | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
let apiVersion = "apiVersion_example"; // String | API Version Header
let opts = { 
  'fromDate': "fromDate_example", // String | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
  'toDate': "toDate_example" // String | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
};
apiInstance.getProfitAndLossCharges(segment, financialYear, apiVersion, opts, (error, data, response) => {
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
 **segment** | **String**| Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives | 
 **financialYear** | **String**| Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 | 
 **apiVersion** | **String**| API Version Header | 
 **fromDate** | **String**| Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format | [optional] 
 **toDate** | **String**| Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format | [optional] 

### Return type

[**GetProfitAndLossChargesResponse**](GetProfitAndLossChargesResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getTradeWiseProfitAndLossData"></a>
# **getTradeWiseProfitAndLossData**
> GetTradeWiseProfitAndLossDataResponse getTradeWiseProfitAndLossData(segment, financialYear, pageNumber, pageSize, apiVersion, opts)

Get Trade-wise Profit and Loss Report Data

This API gives the data of the realised Profit and Loss report requested by a user

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.TradeProfitAndLossApi();
let segment = "segment_example"; // String | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
let financialYear = "financialYear_example"; // String | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
let pageNumber = 56; // Number | Page Number, the pages are starting from 1
let pageSize = 56; // Number | Page size for pagination. The maximum page size value is obtained from P and L report metadata API.
let apiVersion = "apiVersion_example"; // String | API Version Header
let opts = { 
  'fromDate': "fromDate_example", // String | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
  'toDate': "toDate_example" // String | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
};
apiInstance.getTradeWiseProfitAndLossData(segment, financialYear, pageNumber, pageSize, apiVersion, opts, (error, data, response) => {
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
 **segment** | **String**| Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives | 
 **financialYear** | **String**| Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 | 
 **pageNumber** | **Number**| Page Number, the pages are starting from 1 | 
 **pageSize** | **Number**| Page size for pagination. The maximum page size value is obtained from P and L report metadata API. | 
 **apiVersion** | **String**| API Version Header | 
 **fromDate** | **String**| Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format | [optional] 
 **toDate** | **String**| Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format | [optional] 

### Return type

[**GetTradeWiseProfitAndLossDataResponse**](GetTradeWiseProfitAndLossDataResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getTradeWiseProfitAndLossMetaData"></a>
# **getTradeWiseProfitAndLossMetaData**
> GetTradeWiseProfitAndLossMetaDataResponse getTradeWiseProfitAndLossMetaData(segment, financialYear, apiVersion, opts)

Get profit and loss meta data on trades

This API gives the data of the realised Profit and Loss report requested by a user

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.TradeProfitAndLossApi();
let segment = "segment_example"; // String | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
let financialYear = "financialYear_example"; // String | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
let apiVersion = "apiVersion_example"; // String | API Version Header
let opts = { 
  'fromDate': "fromDate_example", // String | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
  'toDate': "toDate_example" // String | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
};
apiInstance.getTradeWiseProfitAndLossMetaData(segment, financialYear, apiVersion, opts, (error, data, response) => {
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
 **segment** | **String**| Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives | 
 **financialYear** | **String**| Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122 | 
 **apiVersion** | **String**| API Version Header | 
 **fromDate** | **String**| Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format | [optional] 
 **toDate** | **String**| Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format | [optional] 

### Return type

[**GetTradeWiseProfitAndLossMetaDataResponse**](GetTradeWiseProfitAndLossMetaDataResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

