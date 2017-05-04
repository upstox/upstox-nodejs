module.exports.apiKey = "your_apiKey";

module.exports.accessToken = {
    "apiSecret" : "your_apiSecret",
    "code" : "your_code_generated_in login",
    "grant_type" : "authorization_code",
    "redirect_uri" : "your_redirect_uri"
};

module.exports.orderObject = {
    "transaction_type":"b",
    "exchange":"NSE_EQ",
    "symbol": "RELIANCE",
    "order_type": "m",
    "quantity": 1
};

module.exports.orderId = "your_order_number";

module.exports.exchange = "nse_eq";

module.exports.miniLiveData =  {
    "exchange": "nse_eq",
    "symbol" : "reliance",
    "type" : "ltp"
};

module.exports.fullLiveData =  {
    "exchange": "nse_eq",
    "symbol" : "reliance",
    "type" : "full"
};

module.exports.ohlc = {
    "exchange": "nse_eq",
    "symbol": "reliance",
    "start": "20-01-2017",
    "end": "01-02-2017"
};

module.exports.feedSub = {
    "type": "ltp",
    "exchange": "nse_eq",
    "symbol": "reliance,mrf"
};

module.exports.feedUnsub = {
    "type": "ltp",
    "exchange": "nse_eq",
    "symbol": "reliance,mrf"
};

module.exports.feedUpdate1 = {
    "type": "ltp",
    "exchange": "nse_eq",
    "symbol": "reliance,mrf"
};

module.exports.feedUpdate2 = {
    "type": "full",
    "exchange": "nse_eq",
    "symbol": "3MINDIA"
};