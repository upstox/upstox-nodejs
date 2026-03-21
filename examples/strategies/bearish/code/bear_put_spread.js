'use strict';

/**
 * Strategy: Bear Put Spread (Bearish)
 * Buys an ATM put and sells an ATM-1 put for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM put (upper long leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const upperLong = data.data[0];
    console.log('Upper long  (ATM)   - Trading symbol :', upperLong.tradingSymbol);

    // Step 2: Find the ATM-1 put (lower short leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const lowerShort = data.data[0];
        console.log('Lower short (ATM-1) - Trading symbol :', lowerShort.tradingSymbol);

        // Step 3: Buy the upper put (ATM)
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            upperLong.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, upperLong.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Upper long put order placed successfully. Order ID:', result1);

            // Step 4: Sell the lower put (ATM-1)
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                lowerShort.lotSize,
                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                0, lowerShort.instrumentKey,
                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                0, 0, false
            );
            orderApi.placeOrder(body2, {}, (error, result2) => {
                if (error) { console.error('API error:', error); return; }
                console.log('Lower short put order placed successfully. Order ID:', result2);
            });
        });
    });
});
