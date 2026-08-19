## Get IPO orders

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.IPOApi();

let opts = {
  pageNumber: 1,
  records: 20
};

apiInstance.getIpoOrders(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
