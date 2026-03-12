/**
 * Script-style tests for market_protection support on order APIs.
 * Run with: node test/sdk/MarketProtection.js
 * Requires a valid access token in test/sdk/DataToken.js.
 */
let UpstoxClient = require('upstox-js-sdk');
const { accessToken } = require('./DataToken');
let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = accessToken;

let X_Algo_Name = 'MarketProtectionTest';

// ---------------------------------------------------------------------------
// 1. V3 placeOrder with marketProtection
// ---------------------------------------------------------------------------
function testV3PlaceOrderWithMarketProtection() {
  let apiInstance = new UpstoxClient.OrderApiV3();
  let body = new UpstoxClient.PlaceOrderV3Request(
    1,
    UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
    UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
    0,
    'NSE_EQ|INE669E01016',
    UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
    UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
    0,
    0,
    false
  );
  body.slice = false;
  body.marketProtection = 0;

  apiInstance.placeOrder(body, {}, (error, data, response) => {
    if (error) {
      console.log('V3 placeOrder with marketProtection: error (may be expected if market closed) –', error.response?.text || error.message);
    } else {
      console.log('V3 placeOrder with marketProtection: success –', JSON.stringify(data));
    }
  }, X_Algo_Name);
}

// ---------------------------------------------------------------------------
// 2. V3 modifyOrder with marketProtection
// ---------------------------------------------------------------------------
function testV3ModifyOrderWithMarketProtection() {
  let apiInstance = new UpstoxClient.OrderApiV3();
  let body = new UpstoxClient.ModifyOrderRequest(
    UpstoxClient.ModifyOrderRequest.ValidityEnum.DAY,
    0,
    'REPLACE_WITH_VALID_ORDER_ID',
    UpstoxClient.ModifyOrderRequest.OrderTypeEnum.MARKET,
    0
  );
  body.quantity = 1;
  body.marketProtection = 0;

  apiInstance.modifyOrder(body, (error, data, response) => {
    if (error) {
      console.log('V3 modifyOrder with marketProtection: error (expected if order_id invalid) –', error.response?.text || error.message);
    } else {
      console.log('V3 modifyOrder with marketProtection: success –', JSON.stringify(data));
    }
  }, X_Algo_Name);
}

// ---------------------------------------------------------------------------
// 3. V2 placeMultiOrder with market_protection on orders
// ---------------------------------------------------------------------------
function testV2PlaceMultiOrderWithMarketProtection() {
  let apiInstance = new UpstoxClient.OrderApi();
  let order1 = new UpstoxClient.MultiOrderRequest(1, 'D', 'DAY', 8.9, true, 'NSE_EQ|INE669E01016', 'LIMIT', 'BUY', 0, 9, true, 'mp_cid1');
  order1.tag = 'mp_tg1';
  order1.market_protection = 0;

  let order2 = new UpstoxClient.MultiOrderRequest(1, 'D', 'DAY', 8.9, true, 'NSE_EQ|INE669E01016', 'LIMIT', 'BUY', 0, 9.0, true, 'mp_cid2');
  order2.market_protection = 2;

  let body = [order1, order2];

  apiInstance.placeMultiOrder(body, (error, data, response) => {
    if (error) {
      console.log('V2 placeMultiOrder with market_protection: error (may be expected if market closed) –', error.response?.text || error.message);
    } else {
      console.log('V2 placeMultiOrder with market_protection: success –', JSON.stringify(data));
    }
  }, X_Algo_Name);
}

// ---------------------------------------------------------------------------
// 4. V3 placeGTTOrder with marketProtection on rule
// ---------------------------------------------------------------------------
function testV3PlaceGTTOrderWithMarketProtection() {
  let apiInstance = new UpstoxClient.OrderApiV3();
  let entryRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.ENTRY,
    UpstoxClient.GttRule.TriggerTypeEnum.ABOVE,
    100
  );
  entryRule.marketProtection = 0;

  let body = new UpstoxClient.GttPlaceOrderRequest(
    UpstoxClient.GttPlaceOrderRequest.TypeEnum.SINGLE,
    1,
    UpstoxClient.GttPlaceOrderRequest.ProductEnum.D,
    [entryRule],
    'NSE_EQ|INE669E01016',
    UpstoxClient.GttPlaceOrderRequest.TransactionTypeEnum.BUY
  );

  apiInstance.placeGTTOrder(body, (error, data, response) => {
    if (error) {
      console.log('V3 placeGTTOrder with marketProtection: error (may be expected) –', error.response?.text || error.message);
    } else {
      console.log('V3 placeGTTOrder with marketProtection: success –', JSON.stringify(data));
    }
  }, X_Algo_Name);
}

// ---------------------------------------------------------------------------
// 5. V3 modifyGTTOrder with marketProtection on rule
// ---------------------------------------------------------------------------
function testV3ModifyGTTOrderWithMarketProtection() {
  let apiInstance = new UpstoxClient.OrderApiV3();
  let entryRule = new UpstoxClient.GttRule(
    UpstoxClient.GttRule.StrategyEnum.ENTRY,
    UpstoxClient.GttRule.TriggerTypeEnum.ABOVE,
    100
  );
  entryRule.marketProtection = 0;

  let body = new UpstoxClient.GttModifyOrderRequest(
    UpstoxClient.GttModifyOrderRequest.TypeEnum.SINGLE,
    1,
    [entryRule],
    'REPLACE_WITH_VALID_GTT_ORDER_ID'
  );
  body.quantity = 1;

  apiInstance.modifyGTTOrder(body, (error, data, response) => {
    if (error) {
      console.log('V3 modifyGTTOrder with marketProtection: error (expected if gtt_order_id invalid) –', error.response?.text || error.message);
    } else {
      console.log('V3 modifyGTTOrder with marketProtection: success –', JSON.stringify(data));
    }
  }, X_Algo_Name);
}

// ---------------------------------------------------------------------------
// Run tests (staggered to avoid rate limits; some calls may fail without live orders)
// ---------------------------------------------------------------------------
console.log('Market protection SDK tests (script-style). Some calls may fail without valid orders/tokens.\n');

testV3PlaceOrderWithMarketProtection();

setTimeout(() => {
  testV3ModifyOrderWithMarketProtection();
}, 500);

setTimeout(() => {
  testV2PlaceMultiOrderWithMarketProtection();
}, 1000);

setTimeout(() => {
  testV3PlaceGTTOrderWithMarketProtection();
}, 1500);

setTimeout(() => {
  testV3ModifyGTTOrderWithMarketProtection();
}, 2000);
