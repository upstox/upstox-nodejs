## Modify Single Leg GTT Order

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

let body = new UpstoxClient.GttModifyOrderRequest(
    UpstoxClient.GttModifyOrderRequest.TypeEnum.SINGLE, 
    1, 
    [entryRule], 
    "GTT-C25270200137952"
);

apiInstance.modifyGTTOrder(body, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
        console.log('API called successfully. Returned data:', data);
    }
});
```

## Modify Multiple Leg GTT Order

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.OrderApiV3();
let entryRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.ENTRY, 
    UpstoxClient.GttRule.TriggerTypeEnum.ABOVE, 
    7.3
);
let targetRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.TARGET,
    UpstoxClient.GttRule.TriggerTypeEnum.IMMEDIATE,
    7.64
);
let stopLossRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.STOPLOSS,
    UpstoxClient.GttRule.TriggerTypeEnum.IMMEDIATE,
    7.1
);

let body = new UpstoxClient.GttModifyOrderRequest(
    UpstoxClient.GttModifyOrderRequest.TypeEnum.MULTIPLE,
    1,
    [entryRule, targetRule, stopLossRule],
    "GTT-C25280200137522"
);

apiInstance.modifyGTTOrder(body, (error, data, response) => {
    if (error) {
        console.error(error.response.text);
    } else {
        console.log('API called successfully. Returned data:', data);
    }
});
```
