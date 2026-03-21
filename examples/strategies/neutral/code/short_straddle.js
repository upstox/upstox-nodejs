'use strict';

/**
 * Strategy: Short Straddle (Neutral)
 * Sells an ATM call and an ATM put for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM call (short call leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const shortCall = data.data[0];
    console.log('Short call (ATM) - Trading symbol :', shortCall.tradingSymbol);

    // Step 2: Find the ATM put (short put leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const shortPut = data.data[0];
        console.log('Short put  (ATM) - Trading symbol :', shortPut.tradingSymbol);

        // Step 3: Sell the ATM call
        const body1 = new UpstoxClient.PlaceOrderV3Request(
            shortCall.lotSize,
            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
            0, shortCall.instrumentKey,
            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
            0, 0, false
        );
        orderApi.placeOrder(body1, {}, (error, result1) => {
            if (error) { console.error('API error:', error); return; }
            console.log('Short call order placed successfully. Order ID:', result1);

            // Step 4: Sell the ATM put
            const body2 = new UpstoxClient.PlaceOrderV3Request(
                shortPut.lotSize,
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
