## Get trade history for equity segment

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

apiInstance = new UpstoxClient.PostTradeApi();
opts = {
    segment: "EQ"
}
apiInstance.getTradesByDateRange("2023-04-01","2024-08-30",1,1000,opts,(error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get trade history for futures and options segment

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

apiInstance = new UpstoxClient.PostTradeApi();
opts = {
    segment: "FO"
}
apiInstance.getTradesByDateRange("2023-04-01","2024-08-30",1,1000,opts,(error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
