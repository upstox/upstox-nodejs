## Get kill switch status

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";
let apiInstance = new UpstoxClient.UserApi();

apiInstance.getKillSwitch((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Update kill switch

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";
let apiInstance = new UpstoxClient.UserApi();

let segment1 = new UpstoxClient.KillSwitchSegmentUpdateRequest();
segment1.segment = "NSE_EQ";
segment1.action = "DISABLE";

let segment2 = new UpstoxClient.KillSwitchSegmentUpdateRequest();
segment2.segment = "NSE_FO";
segment2.action = "DISABLE";

let body = [segment1, segment2];

apiInstance.updateKillSwitch(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
