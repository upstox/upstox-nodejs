## Apply for an IPO

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = "{your_access_token}";

let apiInstance = new UpstoxClient.IPOApi();

let body = new UpstoxClient.IpoApplyRequest();

// id is the IPO slug id returned in the listing and details responses
body.id = "{ipo_slug_id}";

// UPI id used to block the application amount
body.upi = "{your_upi_id}";

// category: IND (individual) | HNI
// Must be a category the issue accepts — see investors[].category in the IPO details response
body.category = "IND";

// 1 to 3 bids. quantity must be a multiple of the IPO's lot_size and at
// least its minimum_quantity. price must sit inside the IPO's price band,
// or equal its cut_off_price, and must be in whole rupees.
let bid = new UpstoxClient.IpoBidRequest();
bid.quantity = 100;
bid.price = 250;
body.bids = [bid];

apiInstance.applyForIpo(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    // data.data.orderId is the application id — pass it as orderId to the
    // get-order and cancel-order APIs
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
