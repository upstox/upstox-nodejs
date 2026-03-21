'use strict';

/**
 * Strategy: Call Ratio Spread
 * Buys 1x ATM call and sells 2x ATM+1 call for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM call (long call leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const longCall = data.data[0];
    console.log('Long call  (ATM)   - Trading symbol :', longCall.tradingSymbol);

    // Step 2: Find the ATM+1 call (short call leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const shortCall = data.data[0];
        console.log('Short call (ATM+1) - Trading symbol :', shortCall.tradingSymbol);

        // Step 3: Buy 1x the ATM call
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            longCall.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, longCall.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Long call order placed successfully. Order ID:', result1);

            // Step 4: Sell 2x the ATM+1 call
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                shortCall.lotSize * 2,
                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                0, shortCall.instrumentKey,
                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                0, 0, false
            );
            orderApi.placeOrder(body2, {}, (error, result2) => {
                if (error) { console.error('API error:', error); return; }
                console.log('Short call order placed successfully. Order ID:', result2);
            });
        });
    });
});
