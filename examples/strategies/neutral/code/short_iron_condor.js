'use strict';

/**
 * Strategy: Short Iron Condor (Neutral)
 * Sells ATM+1 call and ATM-1 put, buys ATM+2 call and ATM-2 put for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find the ATM+1 call (short call leg)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 1
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const shortCall = data.data[0];
    console.log('Short call (ATM+1) - Trading symbol :', shortCall.tradingSymbol);

    // Step 2: Find the ATM-1 put (short put leg)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const shortPut = data.data[0];
        console.log('Short put  (ATM-1) - Trading symbol :', shortPut.tradingSymbol);

        // Step 3: Find the ATM+2 call (long call wing)
        instrumentsApi.searchInstrument('Nifty 50', {
            exchanges: 'NSE', segments: 'FO',
            instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 2
        }, (error, data) => {
            if (error) { console.error('API error:', error); return; }
            const longCall = data.data[0];
            console.log('Long call  (ATM+2) - Trading symbol :', longCall.tradingSymbol);

            // Step 4: Find the ATM-2 put (long put wing)
            instrumentsApi.searchInstrument('Nifty 50', {
                exchanges: 'NSE', segments: 'FO',
                instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -2
            }, (error, data) => {
                if (error) { console.error('API error:', error); return; }
                const longPut = data.data[0];
                console.log('Long put   (ATM-2) - Trading symbol :', longPut.tradingSymbol);

                // Step 5: Sell the ATM+1 call
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

                    // Step 6: Sell the ATM-1 put
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

                        // Step 7: Buy the ATM+2 call (wing)
                        const body3 = new UpstoxClient.PlaceOrderV3Request(
                            longCall.lotSize,
                            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                            0, longCall.instrumentKey,
                            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                            0, 0, false
                        );
                        orderApi.placeOrder(body3, {}, (error, result3) => {
                            if (error) { console.error('API error:', error); return; }
                            console.log('Long call order placed successfully. Order ID:', result3);

                            // Step 8: Buy the ATM-2 put (wing)
                            const body4 = new UpstoxClient.PlaceOrderV3Request(
                                longPut.lotSize,
                                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                                0, longPut.instrumentKey,
                                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                                0, 0, false
                            );
                            orderApi.placeOrder(body4, {}, (error, result4) => {
                                if (error) { console.error('API error:', error); return; }
                                console.log('Long put order placed successfully. Order ID:', result4);
                            });
                        });
                    });
                });
            });
        });
    });
});
