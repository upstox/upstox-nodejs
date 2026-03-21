'use strict';

/**
 * Strategy: Long Calendar with Puts (Bearish)
 * Sells a current-week ATM put and buys a next-week ATM put.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the current-week ATM put (near-term leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'PE', expiry: 'current_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const nearPut = data.data[0];
    console.log('Near-term put (current week) - Trading symbol :', nearPut.tradingSymbol);

    // Step 2: Find the next-week ATM put (far-term leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const farPut = data.data[0];
        console.log('Far-term put  (next week)    - Trading symbol :', farPut.tradingSymbol);

        // Step 3: Sell the near-term put (current week)
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            nearPut.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, nearPut.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Near-term short put order placed successfully. Order ID:', result1);

            // Step 4: Buy the far-term put (next week)
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                farPut.lotSize,
                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                0, farPut.instrumentKey,
                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                0, 0, false
            );
            orderApi.placeOrder(body2, {}, (error, result2) => {
                if (error) { console.error('API error:', error); return; }
                console.log('Far-term long put order placed successfully. Order ID:', result2);
            });
        });
    });
});
