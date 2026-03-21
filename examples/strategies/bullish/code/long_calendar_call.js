'use strict';

/**
 * Strategy: Long Calendar with Calls (Bullish)
 * Sells a current-week ATM call and buys a next-week ATM call.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the current-week ATM call (near-term leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'CE', expiry: 'current_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const nearCall = data.data[0];
    console.log('Near-term call (current week) - Trading symbol :', nearCall.tradingSymbol);

    // Step 2: Find the next-week ATM call (far-term leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 0
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const farCall = data.data[0];
        console.log('Far-term call  (next week)    - Trading symbol :', farCall.tradingSymbol);

        // Step 3: Sell the near-term call (current week)
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            nearCall.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, nearCall.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Near-term short call order placed successfully. Order ID:', result1);

            // Step 4: Buy the far-term call (next week)
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                farCall.lotSize,
                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                0, farCall.instrumentKey,
                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                0, 0, false
            );
            orderApi.placeOrder(body2, {}, (error, result2) => {
                if (error) { console.error('API error:', error); return; }
                console.log('Far-term long call order placed successfully. Order ID:', result2);
            });
        });
    });
});
