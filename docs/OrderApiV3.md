# UpstoxClient.OrderApiV3

All URIs are relative to *https://api.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrder**](OrderApiV3.md#cancelOrder) | **DELETE** /v3/order/cancel | 
[**modifyOrder**](OrderApiV3.md#modifyOrder) | **PUT** /v3/order/modify | 
[**placeOrder**](OrderApiV3.md#placeOrder) | **POST** /v3/order/place | 

<a name="cancelGTTOrder"></a>
# **cancelGTTOrder**
> GttTriggerOrderResponse cancelGTTOrder(body)

Cancel GTT order

This API allows you to cancel GTT orders.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.OrderControllerV3Api();
let body = new UpstoxClient.GttCancelOrderRequest(); // GttCancelOrderRequest | 

apiInstance.cancelGTTOrder(body, (error, data, response) => {
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
 **body** | [**GttCancelOrderRequest**](GttCancelOrderRequest.md)|  | 

### Return type

[**GttTriggerOrderResponse**](GttTriggerOrderResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json

<a name="cancelOrder"></a>
# **cancelOrder**
> CancelOrderV3Response cancelOrder(orderId, opts)



### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.OrderApiV3();
let orderId = "orderId_example"; // String | 
let opts = { 
  'origin': "origin_example" // String | 
};
apiInstance.cancelOrder(orderId, opts, (error, data, response) => {
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
 **orderId** | **String**|  | 
 **origin** | **String**|  | [optional] 

### Return type

[**CancelOrderV3Response**](CancelOrderV3Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getGttOrderDetails"></a>
# **getGttOrderDetails**
> GetGttOrderResponse getGttOrderDetails(opts)

Get GTT order details

GTT_ORDER_DESCRIPTION

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.OrderControllerV3Api();
let opts = { 
  'gttOrderId': "gttOrderId_example" // String | Unique identifier of the GTT order for which the order history is required
};
apiInstance.getGttOrderDetails(opts, (error, data, response) => {
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
 **gttOrderId** | **String**| Unique identifier of the GTT order for which the order history is required | [optional] 

### Return type

[**GetGttOrderResponse**](GetGttOrderResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="modifyGTTOrder"></a>
# **modifyGTTOrder**
> GttTriggerOrderResponse modifyGTTOrder(body)

Modify GTT order

This API allows you to modify GTT orders.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.OrderControllerV3Api();
let body = new UpstoxClient.GttModifyOrderRequest(); // GttModifyOrderRequest | 

apiInstance.modifyGTTOrder(body, (error, data, response) => {
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
 **body** | [**GttModifyOrderRequest**](GttModifyOrderRequest.md)|  | 

### Return type

[**GttTriggerOrderResponse**](GttTriggerOrderResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json

<a name="modifyOrder"></a>
# **modifyOrder**
> ModifyOrderV3Response modifyOrder(body, opts)



### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.OrderApiV3();
let body = new UpstoxClient.ModifyOrderRequest(); // ModifyOrderRequest | 
let opts = { 
  'origin': "origin_example" // String | 
};
apiInstance.modifyOrder(body, opts, (error, data, response) => {
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
 **body** | [**ModifyOrderRequest**](ModifyOrderRequest.md)|  | 
 **origin** | **String**|  | [optional] 

### Return type

[**ModifyOrderV3Response**](ModifyOrderV3Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="placeGTTOrder"></a>
# **placeGTTOrder**
> GttTriggerOrderResponse placeGTTOrder(body)

Place GTT order

This API allows you to place GTT orders.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.OrderControllerV3Api();
let body = new UpstoxClient.GttPlaceOrderRequest(); // GttPlaceOrderRequest | 

apiInstance.placeGTTOrder(body, (error, data, response) => {
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
 **body** | [**GttPlaceOrderRequest**](GttPlaceOrderRequest.md)|  | 

### Return type

[**GttTriggerOrderResponse**](GttTriggerOrderResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json

<a name="placeOrder"></a>
# **placeOrder**
> PlaceOrderV3Response placeOrder(body, opts)



### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.OrderApiV3();
let body = new UpstoxClient.PlaceOrderV3Request(); // PlaceOrderV3Request | 
let opts = { 
  'origin': "origin_example" // String | 
};
apiInstance.placeOrder(body, opts, (error, data, response) => {
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
 **body** | [**PlaceOrderV3Request**](PlaceOrderV3Request.md)|  | 
 **origin** | **String**|  | [optional] 

### Return type

[**PlaceOrderV3Response**](PlaceOrderV3Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

