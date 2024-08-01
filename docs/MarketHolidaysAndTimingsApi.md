# UpstoxClient.MarketHolidaysAndTimingsApi

All URIs are relative to *https://api-v2.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExchangeTimings**](MarketHolidaysAndTimingsApi.md#getExchangeTimings) | **GET** /v2/market/timings/{date} | Get Exchange Timings on particular date
[**getHoliday**](MarketHolidaysAndTimingsApi.md#getHoliday) | **GET** /v2/market/holidays/{date} | Get Holiday on particular date
[**getHolidays**](MarketHolidaysAndTimingsApi.md#getHolidays) | **GET** /v2/market/holidays | Get Holiday list of current year
[**getMarketStatus**](MarketHolidaysAndTimingsApi.md#getMarketStatus) | **GET** /v2/market/status/{exchange} | Get Market status for particular exchange

<a name="getExchangeTimings"></a>
# **getExchangeTimings**
> GetExchangeTimingResponse getExchangeTimings(_date)

Get Exchange Timings on particular date

This API provides the functionality to retrieve the exchange timings on particular date

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.MarketHolidaysAndTimingsApi();
let _date = "_date_example"; // String | 

apiInstance.getExchangeTimings(_date, (error, data, response) => {
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
 **_date** | **String**|  | 

### Return type

[**GetExchangeTimingResponse**](GetExchangeTimingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getHoliday"></a>
# **getHoliday**
> GetHolidayResponse getHoliday(_date)

Get Holiday on particular date

This API provides the functionality to retrieve the holiday on particular date

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.MarketHolidaysAndTimingsApi();
let _date = "_date_example"; // String | 

apiInstance.getHoliday(_date, (error, data, response) => {
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
 **_date** | **String**|  | 

### Return type

[**GetHolidayResponse**](GetHolidayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getHolidays"></a>
# **getHolidays**
> GetHolidayResponse getHolidays()

Get Holiday list of current year

This API provides the functionality to retrieve the holiday list of current year

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.MarketHolidaysAndTimingsApi();
apiInstance.getHolidays((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetHolidayResponse**](GetHolidayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getMarketStatus"></a>
# **getMarketStatus**
> GetMarketStatusResponse getMarketStatus(exchange)

Get Market status for particular exchange

This API provides the functionality to retrieve the market status for particular exchange

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.MarketHolidaysAndTimingsApi();
let exchange = "exchange_example"; // String | 

apiInstance.getMarketStatus(exchange, (error, data, response) => {
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
 **exchange** | **String**|  | 

### Return type

[**GetMarketStatusResponse**](GetMarketStatusResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

