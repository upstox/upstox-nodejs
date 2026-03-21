'use strict';

/**
 * Strategy: Bull Put Spread (Bullish)
 * Sells an ATM put and buys an ATM-1 put for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM put (upper short leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const upperShort = data.data[0];
    console.log('Upper short (ATM)   - Trading symbol :', upperShort.tradingSymbol);

    // Step 2: Find the OTM put (lower long leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const lowerLong = data.data[0];
        console.log('Lower long  (ATM-1) - Trading symbol :', lowerLong.tradingSymbol);

        // Step 3: Sell the upper put (ATM)
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            upperShort.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, upperShort.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Upper short put order placed successfully. Order ID:', result1);

            // Step 4: Buy the lower put (ATM-1)
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                lowerLong.lotSize,
                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                0, lowerLong.instrumentKey,
                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                0, 0, false
            );
            orderApi.placeOrder(body2, {}, (error, result2) => {
                if (error) { console.error('API error:', error); return; }
                console.log('Lower long put order placed successfully. Order ID:', result2);
            });
        });
    });
});
