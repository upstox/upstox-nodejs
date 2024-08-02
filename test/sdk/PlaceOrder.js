let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

let apiInstance = new UpstoxClient.OrderApi();
let body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.D, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 0.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.MARKET,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 0.0, false); 
let apiVersion = "2.0"; 

apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});