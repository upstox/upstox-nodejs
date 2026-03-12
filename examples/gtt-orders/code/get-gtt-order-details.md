## Get GTT Order Details

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();

apiInstance.getGttOrderDetails({gttOrderId: 'GTT-C25130300047732'}, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
        console.log('API called successfully. Returned data:', data);
    }
});
```
