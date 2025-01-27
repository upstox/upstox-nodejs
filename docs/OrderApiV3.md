# UpstoxClient.OrderApiV3

All URIs are relative to *https://api.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrder**](OrderApiV3.md#cancelOrder) | **DELETE** /v3/order/cancel | 
[**modifyOrder**](OrderApiV3.md#modifyOrder) | **PUT** /v3/order/modify | 
[**placeOrder**](OrderApiV3.md#placeOrder) | **POST** /v3/order/place | 

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

