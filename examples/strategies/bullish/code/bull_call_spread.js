'use strict';

/**
 * Strategy: Bull Call Spread (Bullish)
 * Buys an ATM call and sells an ATM+1 call for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM call (lower long leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const lowerLong = data.data[0];
    console.log('Lower long  (ATM)   - Trading symbol :', lowerLong.tradingSymbol);

    // Step 2: Find the OTM call (upper short leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const upperShort = data.data[0];
        console.log('Upper short (ATM+1) - Trading symbol :', upperShort.tradingSymbol);

        // Step 3: Buy the lower call (ATM)
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            lowerLong.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, lowerLong.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Lower long call order placed successfully. Order ID:', result1);

            // Step 4: Sell the upper call (ATM+1)
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                upperShort.lotSize,
                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                0, upperShort.instrumentKey,
                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                0, 0, false
            );
            orderApi.placeOrder(body2, {}, (error, result2) => {
                if (error) { console.error('API error:', error); return; }
                console.log('Upper short call order placed successfully. Order ID:', result2);
            });
        });
    });
});
