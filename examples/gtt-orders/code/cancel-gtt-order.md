## Cancel GTT Order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();
let body = new UpstoxClient.GttCancelOrderRequest("GTT-C25050300168902");

apiInstance.cancelGTTOrder(body, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
        console.log('API called successfully. Returned data:', data);
    }
});
```
