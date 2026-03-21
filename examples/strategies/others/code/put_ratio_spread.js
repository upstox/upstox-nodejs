'use strict';

/**
 * Strategy: Put Ratio Spread
 * Buys 1x ATM put and sells 2x ATM-1 put for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM put (long put leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const longPut = data.data[0];
    console.log('Long put  (ATM)   - Trading symbol :', longPut.tradingSymbol);

    // Step 2: Find the ATM-1 put (short put leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const shortPut = data.data[0];
        console.log('Short put (ATM-1) - Trading symbol :', shortPut.tradingSymbol);

        // Step 3: Buy 1x the ATM put
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            longPut.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, longPut.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Long put order placed successfully. Order ID:', result1);

            // Step 4: Sell 2x the ATM-1 put
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                shortPut.lotSize * 2,
                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                0, shortPut.instrumentKey,
                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                0, 0, false
            );
            orderApi.placeOrder(body2, {}, (error, result2) => {
                if (error) { console.error('API error:', error); return; }
                console.log('Short put order placed successfully. Order ID:', result2);
            });
        });
    });
});
