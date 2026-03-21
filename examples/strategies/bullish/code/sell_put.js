'use strict';

/**
 * Strategy: Sell Put (Bullish)
 * Sells an ATM Nifty 50 put option for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

// Replace with your access token
const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM put option
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }

    const instrument = data.data[0];
    console.log('Trading symbol :', instrument.tradingSymbol);
    console.log('Instrument key :', instrument.instrumentKey);

    // Step 2: Place a sell order
    const body = new UpstoxClient.PlaceOrderV3Request(
        instrument.lotSize,
        UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
        UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
        0,
        instrument.instrumentKey,
        UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
        UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
        0, 0, false
    );

    orderApi.placeOrder(body, {}, (error, result) => {
        if (error) { console.error('API error:', error); return; }
        console.log('Order placed successfully. Order ID:', result);
    });
});
