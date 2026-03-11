## Modify a delivery order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();
body = new UpstoxClient.ModifyOrderRequest(UpstoxClient.ModifyOrderRequest.ValidityEnum.DAY,0,"2505010177418",UpstoxClient.ModifyOrderRequest.OrderTypeEnum.MARKET,1); 
body.quantity = 1;

apiInstance.modifyOrder(body, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```
