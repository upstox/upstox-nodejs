## Get access token using auth code

```javascript
let UpstoxClient = require('upstox-js-sdk');

let apiInstance = new UpstoxClient.LoginApi();
let apiVersion = "2.0"; 
let opts = { 
  'code': "{your_auth_code}", 
  'clientId': "{your_client_secret}", 
  'clientSecret': "{your_client_secret}", 
  'redirectUri': "{your_redirect_url}", 
  'grantType': "authorization_code" 
};
apiInstance.token(apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
