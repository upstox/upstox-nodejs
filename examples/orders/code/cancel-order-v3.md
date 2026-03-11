## Cancel an open order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();

apiInstance.cancelOrder("2503050177418", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```
