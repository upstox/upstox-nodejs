# UpstoxClient.LoginApi

All URIs are relative to *https://api-v2.upstox.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](LoginApi.md#authorize) | **GET** /login/authorization/dialog | Authorize API
[**logout**](LoginApi.md#logout) | **DELETE** /logout | Logout
[**token**](LoginApi.md#token) | **POST** /login/authorization/token | Get token API

<a name="authorize"></a>
# **authorize**
> authorize(clientId, redirectUri, apiVersion, opts)

Authorize API

This provides details on the login endpoint.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.LoginApi();
let clientId = "clientId_example"; // String | 
let redirectUri = "redirectUri_example"; // String | 
let apiVersion = "apiVersion_example"; // String | API Version Header
let opts = { 
  'state': "state_example", // String | 
  'scope': "scope_example" // String | 
};
apiInstance.authorize(clientId, redirectUri, apiVersion, opts, (error, data, response) => {
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
 **clientId** | **String**|  | 
 **redirectUri** | **String**|  | 
 **apiVersion** | **String**| API Version Header | 
 **state** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="logout"></a>
# **logout**
> LogoutResponse logout(apiVersion)

Logout

Logout

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new UpstoxClient.LoginApi();
let apiVersion = "apiVersion_example"; // String | API Version Header

apiInstance.logout(apiVersion, (error, data, response) => {
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

[**LogoutResponse**](LogoutResponse.md)

### Authorization

[OAUTH2](../README.md#OAUTH2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="token"></a>
# **token**
> TokenResponse token(apiVersion, opts)

Get token API

This API provides the functionality to obtain opaque token from authorization_code exchange and also provides the user’s profile in the same response.

### Example
```javascript
import {UpstoxClient} from 'upstox-js-sdk';

let apiInstance = new UpstoxClient.LoginApi();
let apiVersion = "apiVersion_example"; // String | API Version Header
let opts = { 
  'code': "code_example", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example", // String | 
  'redirectUri': "redirectUri_example", // String | 
  'grantType': "grantType_example" // String | 
};
apiInstance.token(apiVersion, opts, (error, data, response) => {
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
 **code** | **String**|  | [optional] 
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 
 **redirectUri** | **String**|  | [optional] 
 **grantType** | **String**|  | [optional] 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, */*

