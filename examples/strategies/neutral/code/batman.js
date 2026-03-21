'use strict';

/**
 * Strategy: Batman (Neutral)
 * Double butterfly: call butterfly + put butterfly around ATM for the next weekly expiry.
 * Legs: BUY ATM CE, SELL 2x ATM+1 CE, BUY ATM+2 CE, BUY ATM PE, SELL 2x ATM-1 PE, BUY ATM-2 PE.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find ATM call
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const atmCall = data.data[0];
    console.log('ATM call   (offset  0) - Trading symbol :', atmCall.tradingSymbol);

    // Step 2: Find ATM+1 call
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const otm1Call = data.data[0];
        console.log('OTM+1 call (offset +1) - Trading symbol :', otm1Call.tradingSymbol);

        // Step 3: Find ATM+2 call
        instrumentsApi.searchInstrument('Nifty 50', {
            exchanges: 'NSE', segments: 'FO',
            instrumentTypes: 'CE', expiry: 'next_week', atmOffset: 2
        }, (error, data) => {
            if (error) { console.error('API error:', error); return; }
            const otm2Call = data.data[0];
            console.log('OTM+2 call (offset +2) - Trading symbol :', otm2Call.tradingSymbol);

            // Step 4: Find ATM put
            instrumentsApi.searchInstrument('Nifty 50', {
                exchanges: 'NSE', segments: 'FO',
                instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
            }, (error, data) => {
                if (error) { console.error('API error:', error); return; }
                const atmPut = data.data[0];
                console.log('ATM put    (offset  0) - Trading symbol :', atmPut.tradingSymbol);

                // Step 5: Find ATM-1 put
                instrumentsApi.searchInstrument('Nifty 50', {
                    exchanges: 'NSE', segments: 'FO',
                    instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -1
                }, (error, data) => {
                    if (error) { console.error('API error:', error); return; }
                    const otm1Put = data.data[0];
                    console.log('OTM-1 put  (offset -1) - Trading symbol :', otm1Put.tradingSymbol);

                    // Step 6: Find ATM-2 put
                    instrumentsApi.searchInstrument('Nifty 50', {
                        exchanges: 'NSE', segments: 'FO',
                        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -2
                    }, (error, data) => {
                        if (error) { console.error('API error:', error); return; }
                        const otm2Put = data.data[0];
                        console.log('OTM-2 put  (offset -2) - Trading symbol :', otm2Put.tradingSymbol);

                        // Step 7: Buy ATM call
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
                            console.log('ATM call BUY order placed successfully. Order ID:', result1);

                            // Step 8: Sell 2x ATM+1 call
                            const body2 = new UpstoxClient.PlaceOrderV3Request(
                                otm1Call.lotSize * 2,
                                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                                0, otm1Call.instrumentKey,
                                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                                0, 0, false
                            );
                            orderApi.placeOrder(body2, {}, (error, result2) => {
                                if (error) { console.error('API error:', error); return; }
                                console.log('OTM+1 call SELL order placed successfully. Order ID:', result2);

                                // Step 9: Buy ATM+2 call
                                const body3 = new UpstoxClient.PlaceOrderV3Request(
                                    otm2Call.lotSize,
                                    UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                                    UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                                    0, otm2Call.instrumentKey,
                                    UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                                    UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                                    0, 0, false
                                );
                                orderApi.placeOrder(body3, {}, (error, result3) => {
                                    if (error) { console.error('API error:', error); return; }
                                    console.log('OTM+2 call BUY order placed successfully. Order ID:', result3);

                                    // Step 10: Buy ATM put
                                    const body4 = new UpstoxClient.PlaceOrderV3Request(
                                        atmPut.lotSize,
                                        UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                                        UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                                        0, atmPut.instrumentKey,
                                        UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                                        UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                                        0, 0, false
                                    );
                                    orderApi.placeOrder(body4, {}, (error, result4) => {
                                        if (error) { console.error('API error:', error); return; }
                                        console.log('ATM put BUY order placed successfully. Order ID:', result4);

                                        // Step 11: Sell 2x ATM-1 put
                                        const body5 = new UpstoxClient.PlaceOrderV3Request(
                                            otm1Put.lotSize * 2,
                                            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                                            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                                            0, otm1Put.instrumentKey,
                                            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                                            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                                            0, 0, false
                                        );
                                        orderApi.placeOrder(body5, {}, (error, result5) => {
                                            if (error) { console.error('API error:', error); return; }
                                            console.log('OTM-1 put SELL order placed successfully. Order ID:', result5);

                                            // Step 12: Buy ATM-2 put
                                            const body6 = new UpstoxClient.PlaceOrderV3Request(
                                                otm2Put.lotSize,
                                                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                                                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                                                0, otm2Put.instrumentKey,
                                                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                                                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                                                0, 0, false
                                            );
                                            orderApi.placeOrder(body6, {}, (error, result6) => {
                                                if (error) { console.error('API error:', error); return; }
                                                console.log('OTM-2 put BUY order placed successfully. Order ID:', result6);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
