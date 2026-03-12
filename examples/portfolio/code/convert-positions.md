## Convert a position from intraday to delivery

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = '{your_access_token}';

let apiInstance = new UpstoxClient.PortfolioApi();
let body = new UpstoxClient.ConvertPositionRequest("NSE_EQ|INE528G01035",UpstoxClient.ConvertPositionRequest.NewProductEnum.D,UpstoxClient.ConvertPositionRequest.OldProductEnum.I,UpstoxClient.ConvertPositionRequest.TransactionTypeEnum.BUY,1); // ConvertPositionRequest | 
let apiVersion = "2.0"; // String | API Version Header

apiInstance.convertPositions(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Convert a position from delivery to intraday

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = '{your_access_token}';

let apiInstance = new UpstoxClient.PortfolioApi();
let body = new UpstoxClient.ConvertPositionRequest("NSE_EQ|INE528G01035",UpstoxClient.ConvertPositionRequest.NewProductEnum.I,UpstoxClient.ConvertPositionRequest.OldProductEnum.D,UpstoxClient.ConvertPositionRequest.TransactionTypeEnum.BUY,1); // ConvertPositionRequest | 
let apiVersion = "2.0"; // String | API Version Header

apiInstance.convertPositions(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
