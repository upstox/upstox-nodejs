## Place Single Leg GTT Order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();
let entryRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.ENTRY, 
    UpstoxClient.GttRule.TriggerTypeEnum.ABOVE, 
    100
);

let body = new UpstoxClient.GttPlaceOrderRequest(
    UpstoxClient.GttPlaceOrderRequest.TypeEnum.SINGLE, 
    1, 
    UpstoxClient.GttPlaceOrderRequest.ProductEnum.D, 
    [entryRule],
    "NSE_EQ|INE669E01016", 
    UpstoxClient.GttPlaceOrderRequest.TransactionTypeEnum.BUY
);

apiInstance.placeGTTOrder(body, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
        console.log('API called successfully. Returned data:', data);
    }
});
```

## Place Multiple Leg GTT Order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();
let entryRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.ENTRY, 
    UpstoxClient.GttRule.TriggerTypeEnum.ABOVE, 
    100
);
let stopLossRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.STOPLOSS, 
    UpstoxClient.GttRule.TriggerTypeEnum.IMMEDIATE, 
    80
);
let targetRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.TARGET, 
    UpstoxClient.GttRule.TriggerTypeEnum.IMMEDIATE, 
    120
);

let body = new UpstoxClient.GttPlaceOrderRequest(
    UpstoxClient.GttPlaceOrderRequest.TypeEnum.MULTIPLE, 
    1, 
    UpstoxClient.GttPlaceOrderRequest.ProductEnum.D, 
    [entryRule,stopLossRule,targetRule],
    "NSE_EQ|INE669E01016", 
    UpstoxClient.GttPlaceOrderRequest.TransactionTypeEnum.BUY
);

apiInstance.placeGTTOrder(body, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
        console.log('API called successfully. Returned data:', data);
    }
});
```
