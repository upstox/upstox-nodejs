'use strict';

/**
 * Strategy: Strip
 * Buys 1x ATM call and 2x ATM put for the next weekly expiry.
 * Volatility play with a bearish tilt — downside pays twice.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM call
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const atmCall = data.data[0];
    console.log('ATM call - Trading symbol :', atmCall.tradingSymbol);

    // Step 2: Find the ATM put
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const atmPut = data.data[0];
        console.log('ATM put  - Trading symbol :', atmPut.tradingSymbol);

        // Step 3: Buy 1x the ATM call
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            atmCall.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, atmCall.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Long call order placed successfully. Order ID:', result1);

            // Step 4: Buy 2x the ATM put
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                atmPut.lotSize * 2,
                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                0, atmPut.instrumentKey,
                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                0, 0, false
            );
            orderApi.placeOrder(body2, {}, (error, result2) => {
                if (error) { console.error('API error:', error); return; }
                console.log('Long put order placed successfully. Order ID:', result2);
            });
        });
    });
});
