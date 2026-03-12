## Get option contracts of an instrument key

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OptionsApi();
apiInstance.getOptionContracts("NSE_INDEX|Nifty 50",null,(error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
  });
```

## Get option contracts of an instrument key with expiry date

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";
let opts = {
  'expiryDate': "2024-10-31"
}
let apiInstance = new UpstoxClient.OptionsApi();
apiInstance.getOptionContracts("NSE_INDEX|Nifty 50",opts,(error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
  });
```
