## Get user holdings

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.PortfolioApi();
let apiVersion = "2.0";
apiInstance.getHoldings(apiVersion,(error,data,response)=>{
  if(error) {
    console.log(error);
  }
  else{
    console.log("API called=  "  + JSON.stringify(data))
  }
});
```
