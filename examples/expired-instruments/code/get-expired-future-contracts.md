## Get Expired Future Contracts for given instrument with expiry date

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let expiredInstrumentsApiInstance = new UpstoxClient.ExpiredInstrumentApi();
expiredInstrumentsApiInstance.getExpiredFutureContracts("NSE_INDEX|Nifty 50", "2024-11-27", (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log(data);
  }
});
```
