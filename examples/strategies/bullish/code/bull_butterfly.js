'use strict';

/**
 * Strategy: Bull Butterfly (Bullish)
 * Buys ATM call, sells 2x ATM+1 call, buys ATM+2 call for the next weekly expiry.
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

    // Step 2: Find the ATM+1 call (middle short leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const middleShort = data.data[0];
        console.log('Middle short (ATM+1) - Trading symbol :', middleShort.tradingSymbol);

        // Step 3: Find the ATM+2 call (upper long leg)
        instrumentsApi.searchInstrument('Nifty 50', {
            exchanges: 'NSE', segments: 'FO',
            instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 2
        }, (error, data) => {
            if (error) { console.error('API error:', error); return; }
            const upperLong = data.data[0];
            console.log('Upper long  (ATM+2) - Trading symbol :', upperLong.tradingSymbol);

            // Step 4: Buy the lower call (ATM)
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

                // Step 5: Sell 2x the middle call (ATM+1)
                const body2 = new UpstoxClient.PlaceOrderV3Request(
                    middleShort.lotSize * 2,
                    UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                    UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                    0, middleShort.instrumentKey,
                    UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                    UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                    0, 0, false
                );
                orderApi.placeOrder(body2, {}, (error, result2) => {
                    if (error) { console.error('API error:', error); return; }
                    console.log('Middle short call order placed successfully. Order ID:', result2);

                    // Step 6: Buy the upper call (ATM+2)
                    const body3 = new UpstoxClient.PlaceOrderV3Request(
                        upperLong.lotSize,
                        UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                        UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                        0, upperLong.instrumentKey,
                        UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                        UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                        0, 0, false
                    );
                    orderApi.placeOrder(body3, {}, (error, result3) => {
                        if (error) { console.error('API error:', error); return; }
                        console.log('Upper long call order placed successfully. Order ID:', result3);
                    });
                });
            });
        });
    });
});
