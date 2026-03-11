## Get report meta data for equity segment

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = '{your_access_token}';

let apiInstance = new UpstoxClient.TradeProfitAndLossApi();
let segment = "EQ"; // String | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
let financialYear = "2324"; // String | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
let apiVersion = "2.0"; // String | API Version Header
let opts = { 
  'fromDate': "02-04-2023", // String | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
  'toDate': "20-03-2024" // String | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
};
apiInstance.getTradeWiseProfitAndLossMetaData(segment, financialYear, apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```

## Get report meta data for futures and options segment

```javascript
let UpstoxClient = require('upstox-js-sdk');
let defaultClient = UpstoxClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAUTH2
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = '{your_access_token}';

let apiInstance = new UpstoxClient.TradeProfitAndLossApi();
let segment = "FO"; // String | Segment for which data is requested can be from the following options EQ - Equity,   FO - Futures and Options,   COM  - Commodity,   CD - Currency Derivatives
let financialYear = "2324"; // String | Financial year for which data has been requested. Concatenation of last 2 digits of from year and to year Sample:for 2021-2022, financial_year will be 2122
let apiVersion = "2.0"; // String | API Version Header
let opts = { 
  'fromDate': "02-04-2023", // String | Date from which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
  'toDate': "20-03-2024" // String | Date till which data needs to be fetched. from_date and to_date should fall under the same financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
};
apiInstance.getTradeWiseProfitAndLossMetaData(segment, financialYear, apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
});
```
