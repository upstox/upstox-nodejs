## Modify a delivery order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";
let apiInstance = new UpstoxClient.OrderApi();

let body = new UpstoxClient.ModifyOrderRequest(UpstoxClient.ModifyOrderRequest.ValidityEnum.DAY,0,"240111010331447",UpstoxClient.ModifyOrderRequest.OrderTypeEnum.MARKET,0);
let apiVersion = "2.0"; // String | API Version Header

apiInstance.modifyOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```
