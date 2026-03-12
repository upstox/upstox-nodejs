## Access token request

```javascript
let UpstoxClient = require('upstox-js-sdk');
let apiInstance = new UpstoxClient.LoginApi();
let body = new UpstoxClient.IndieUserTokenRequest();
body.clientSecret = "your_client_secret"; // Replace with your actual client secret
apiInstance.initTokenRequestForIndieUser(body,"your_client_id",  (error, data, response) => {
    if (error) {
      console.error(error.response.text);
    } else {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
  });
```
