
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
var defaultClient = UpstoxClient.ApiClient.instance;

var OAUTH2 = defaultClient.authentications['OAUTH2'];



OAUTH2.accessToken = accessToken;

var apiInstance = new UpstoxClient.UserApi();
var apiVersion = "2.0"; // String | API Version Header
apiInstance.getProfile(apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    if(data.status != "success"){
        console.log("error in get profile");
    }
  }
});

apiInstance.getUserFundMargin(apiVersion, null, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
        if(data.status != "success"){
            console.log("error in get funds and margin");
        }
      }
    });


    apiInstance = new UpstoxClient.ChargeApi();
    var instrumentToken = "NSE_EQ|INE669E01016"; 
    var quantity = 56; 
    var product = "D"; 
    var transactionType = "BUY"; 
    var price = 23.4; 
    var apiVersion = "2.0"; 

    apiInstance.getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion, (error, data, response) => {
      if (error) {
        console.error(error);
    } else {
        if(data.status != "success"){
            console.log("error get brokerage");
        }
      }
    });

    let instruments =[ new UpstoxClient.Instrument("NSE_EQ|INE669E01016",1,"D","BUY"), new UpstoxClient.Instrument("NSE_EQ|INE917I01010",2,"D","BUY")];

    let postMarginRequest = new UpstoxClient.MarginRequest(instruments)
    
    apiInstance.postMargin(postMarginRequest, (error, data, response) => {
        if (error) {
          console.log("error in post margin api call");
          console.error(error.response.text);
        } else {
          if(data.status != "success") console.log("error in post margin api call");
        }
      });


    var apiInstance = new UpstoxClient.OrderApi();
    var body = new UpstoxClient.PlaceOrderRequest(1, UpstoxClient.PlaceOrderRequest.ProductEnum.D, UpstoxClient.PlaceOrderRequest.ValidityEnum.DAY, 0.0, "NSE_EQ|INE528G01035",UpstoxClient.PlaceOrderRequest.OrderTypeEnum.MARKET,UpstoxClient.PlaceOrderRequest.TransactionTypeEnum.BUY, 0, 0.0, true); 
    var apiVersion = "2.0"; 

    apiInstance.placeOrder(body, apiVersion, (error, data, response) => {
      if (error) {
        if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI1052") console.log("error in place order");
    } else {
        console.log("place order= " + JSON.stringify(data));
   //     console.log("error in place order else block");
      }
    });



var body = new UpstoxClient.ModifyOrderRequest(UpstoxClient.ModifyOrderRequest.ValidityEnum.DAY,0,"240111010331447",UpstoxClient.ModifyOrderRequest.OrderTypeEnum.MARKET,0); 
var apiVersion = "2.0"; // String | API Version Header

apiInstance.modifyOrder(body, apiVersion, (error, data, response) => {
  if (error) {
    if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI100010") console.log("error in MODIFY order");
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});

var orderId = "240111010403654"; 
apiInstance.cancelOrder(orderId, apiVersion, (error, data, response) => {
    if (error) {
        if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI100010") console.log("error in CANCEL order");
      } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
      }
    });
    apiInstance.getOrderBook(apiVersion, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          if(data.status != "success"){
            console.log("error in get order book");
          }
        }
      });
      var opts = { 
        'orderId': "240112010371054"
      };
      apiInstance.getOrderDetails(apiVersion, opts, (error, data, response) => {
        if (error) {
            if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI100010") console.log("error in get order details");
        } else {
            if(data.status != "success"){
              console.log("error in get order details");
            }
          }
      });
      apiInstance.getTradeHistory(apiVersion, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
            if(data.status != "success"){
              console.log("error in get order details");
            }
          }
      });
      var orderId = "240111010861817"; 
var apiVersion = "2.0"; 

apiInstance.getTradesByOrder(orderId, apiVersion, (error, data, response) => {
  if (error) {
    if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI100010") console.log("get trades by order");
  } else {
    if(data.status != "success"){
      console.log("error in get order details");
    }
  }
});
var apiInstance = new UpstoxClient.PortfolioApi();
var body = new UpstoxClient.ConvertPositionRequest("NSE_EQ|INE528G01035",UpstoxClient.ConvertPositionRequest.NewProductEnum.D,UpstoxClient.ConvertPositionRequest.OldProductEnum.I,UpstoxClient.ConvertPositionRequest.TransactionTypeEnum.BUY,1); // ConvertPositionRequest | 
var apiVersion = "2.0"; // String | API Version Header

apiInstance.convertPositions(body, apiVersion, (error, data, response) => {
  if (error) {
    if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI1035") console.log("error in convert position");
  } else {
    console.log('API called successfully. Returned data: ');
  }
});


apiInstance.getHoldings(apiVersion,(error,data,response)=>{
    if(error) {
      console.log(error);
    }
    else {
        if(data.status != "success"){
          console.log("error in get holdings");
        }
      }
  });

  apiInstance.getPositions(apiVersion,(error,data,response)=>{
    if(error) {
      console.log(error);
    }
    else{
        if(data.status != "success"){
          console.log("error in get position");
        }
      }
  })

  var apiInstance = new UpstoxClient.TradeProfitAndLossApi();
var segment = "EQ"; // String | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
var financialYear = "2324"; // String | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
var apiVersion = "2.0"; // String | API Version Header
var opts = { 
  'fromDate': "02-04-2023", // String | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
  'toDate': "20-03-2024" // String | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
};
apiInstance.getTradeWiseProfitAndLossMetaData(segment, financialYear, apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    if(data.status != "success"){
      console.log("error trade wise profit and loss");
    }
  }
});
apiInstance.getTradeWiseProfitAndLossData(segment, financialYear, 1, 5, apiVersion, opts, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
  });
  apiInstance.getProfitAndLossCharges(segment, financialYear, apiVersion, opts, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
  });

  apiInstance = new UpstoxClient.HistoryApi();
  var instrumentKey = "NSE_EQ|INE669E01016"; 
  var interval = "1minute";
  var toDate = "2023-11-13";
  var fromDate = "2023-11-12";

  apiInstance.getHistoricalCandleData1(instrumentKey, interval, toDate, fromDate,apiVersion, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
  });
  apiInstance.getHistoricalCandleData(instrumentKey, interval, toDate, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
});
var interval = "1minute"; 

apiInstance.getIntraDayCandleData(instrumentKey, interval, apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
});
apiInstance = new UpstoxClient.MarketQuoteApi();


var apiVersion = "2.0"; 
var symbol = "NSE_EQ|INE669E01016"; 

apiInstance.getFullMarketQuote(symbol, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    if(data.status != "success"){
      console.log("error trade wise profit and loss");
    }
  }
});
apiInstance.ltp(symbol,apiVersion, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
  });
  interval = "1d";
  apiInstance.getMarketQuoteOHLC(symbol, interval,apiVersion, (error, data, response) => {
    if (error) {
      console.error(error.response.text);
    } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
  });

apiInstance = new UpstoxClient.OptionsApi();
apiInstance.getPutCallOptionChain("NSE_INDEX|Nifty 50",(error, data, response) => {
    if (error) {
      console.error(error);
    } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
  });
  apiInstance.getOptionContracts("NSE_INDEX|Nifty 50",null,(error, data, response) => {
    if (error) {
      console.error(error);
    } else {
        if(data.status != "success"){
          console.log("error trade wise profit and loss");
        }
      }
  });
var apiInstance1 = new UpstoxClient.MarketHolidaysAndTimingsApi();
apiInstance1.getExchangeTimings("2024-01-22",(error, data, response) => {
    if (error){
        console.log(error);
    } else {
        if(data.status != "success"){
          console.log("market timings get exchange timings");
        }
      }
})
apiInstance1.getHoliday("2024-01-22",(error, data, response) => {
    if (error){
        console.log(error);
    } else {
        if(data.status != "success"){
          console.log("market timings get holiday error");
        }
      }
});


apiInstance1.getHolidays((error, data, response) => {
    if (error){
        console.log(error);
    } else {
        if(data.status != "success"){
          console.log("market timings get holiday error");
        }
      }
});

apiInstance1.getMarketStatus("NSE", (error, data, response) => {
    if (error){
        console.log(error);
    } else {
        if(data.status != "success"){
          console.log("market timings get holiday error");
        }
      }
});

apiInstance = new UpstoxClient.PostTradeApi();


opts = {
    segment: "EQ"
}

apiInstance.getTradesByDateRange("2023-04-01","2024-08-30",1,1000,opts,(error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    if(data.status != "success") console.log("error in post trade")
  }
});

let orderApiInstance = new UpstoxClient.OrderApi();
let orderStatusId = "240926010304511";
let optsOrderStatus = {
  orderId: orderStatusId
};
orderApiInstance.getOrderStatus(optsOrderStatus,(error,data,response) => {
  if (error) {
    if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI100010") console.log("error in order status");
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
})

apiInstance = new UpstoxClient.OrderApi();
body = []
one_req = new UpstoxClient.MultiOrderRequest(1,"D","DAY",8.9,true,"NSE_EQ|INE669E01016","LIMIT","BUY",0,9,true,"tag_should_be_tg1");
one_req.tag = "tg1"
body = body.concat(one_req);
body = body.concat(new UpstoxClient.MultiOrderRequest(1,"D","DAY",8.9,true,"NSE_EQ|INE669E01016","LIMIT","BUY",0,9.0,true,"cid2"));


apiInstance.placeMultiOrder(body, (error, data, response) => {
  if (error) {
    console.error(error.response.text);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});

opts = {
  'tag': 'unknown_tag'
}
apiInstance.cancelMultiOrder(opts, (error, data, response) => {
  if (error) {
    if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI1109") console.log("error in CANCEL Multi order");
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});

apiInstance.exitPositions(opts, (error, data, response) => {
  if (error) {
    if((JSON.parse(error.response.text).errors[0].errorCode != "UDAPI1111") && (JSON.parse(error.response.text).errors[0].errorCode != "UDAPI1113")) console.log("error in Exit all order");
  }  else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});

setTimeout(() => {
  apiInstance = new UpstoxClient.LoginApi();
opts = { 
  'code': "{your_auth_code}", 
  'clientId': "{your_client_secret}", 
  'clientSecret': "{your_client_secret}", 
  'redirectUri': "{your_redirect_url}", 
  'grantType': "authorization_code" 
};

apiInstance.token(apiVersion, opts, (error, data, response) => {
  if (error) {
    if(JSON.parse(error.response.text).errors[0].errorCode != "UDAPI100069") console.log("error in get token= " + JSON.stringify(error));
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});

apiInstance.logout(apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Logout api called successfully. Returned data: ' + JSON.stringify(data));
  }
});
}, 5000);