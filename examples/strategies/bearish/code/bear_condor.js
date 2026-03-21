'use strict';

/**
 * Strategy: Bear Condor (Bearish)
 * Buys ATM put, sells ATM-1 and ATM-2 puts, buys ATM-3 put for the next weekly expiry.
 */

const UpstoxClient = require('upstox-js-sdk');

const ACCESS_TOKEN = 'your_access_token_here';

let defaultClient = UpstoxClient.ApiClient.instance;
let OAUTH2 = defaultClient.authentications['OAUTH2'];
OAUTH2.accessToken = ACCESS_TOKEN;

const instrumentsApi = new UpstoxClient.InstrumentsApi();
const orderApi = new UpstoxClient.OrderApiV3();

// Step 1: Find ATM put (offset 0)
instrumentsApi.searchInstrument('Nifty 50', {
    exchanges: 'NSE', segments: 'FO',
    instrumentTypes: 'PE', expiry: 'next_week', atmOffset: 0
}, (error, data) => {
    if (error) { console.error('API error:', error); return; }
    const leg0 = data.data[0];
    console.log('Leg 1 BUY  (ATM)   - Trading symbol :', leg0.tradingSymbol);

    // Step 2: Find ATM-1 put (offset -1)
    instrumentsApi.searchInstrument('Nifty 50', {
        exchanges: 'NSE', segments: 'FO',
        instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -1
    }, (error, data) => {
        if (error) { console.error('API error:', error); return; }
        const leg1 = data.data[0];
        console.log('Leg 2 SELL (ATM-1) - Trading symbol :', leg1.tradingSymbol);

        // Step 3: Find ATM-2 put (offset -2)
        instrumentsApi.searchInstrument('Nifty 50', {
            exchanges: 'NSE', segments: 'FO',
            instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -2
        }, (error, data) => {
            if (error) { console.error('API error:', error); return; }
            const leg2 = data.data[0];
            console.log('Leg 3 SELL (ATM-2) - Trading symbol :', leg2.tradingSymbol);

            // Step 4: Find ATM-3 put (offset -3)
            instrumentsApi.searchInstrument('Nifty 50', {
                exchanges: 'NSE', segments: 'FO',
                instrumentTypes: 'PE', expiry: 'next_week', atmOffset: -3
            }, (error, data) => {
                if (error) { console.error('API error:', error); return; }
                const leg3 = data.data[0];
                console.log('Leg 4 BUY  (ATM-3) - Trading symbol :', leg3.tradingSymbol);

                // Step 5: Buy ATM put
                const body1 = new UpstoxClient.PlaceOrderV3Request(
                    leg0.lotSize,
                    UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                    UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                    0, leg0.instrumentKey,
                    UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                    UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                    0, 0, false
                );
                orderApi.placeOrder(body1, {}, (error, result1) => {
                    if (error) { console.error('API error:', error); return; }
                    console.log('Leg 1 BUY ATM put order placed successfully. Order ID:', result1);

                    // Step 6: Sell ATM-1 put
                    const body2 = new UpstoxClient.PlaceOrderV3Request(
                        leg1.lotSize,
                        UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                        UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                        0, leg1.instrumentKey,
                        UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                        UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                        0, 0, false
                    );
                    orderApi.placeOrder(body2, {}, (error, result2) => {
                        if (error) { console.error('API error:', error); return; }
                        console.log('Leg 2 SELL ATM-1 put order placed successfully. Order ID:', result2);

                        // Step 7: Sell ATM-2 put
                        const body3 = new UpstoxClient.PlaceOrderV3Request(
                            leg2.lotSize,
                            UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                            UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                            0, leg2.instrumentKey,
                            UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                            UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.SELL,
                            0, 0, false
                        );
                        orderApi.placeOrder(body3, {}, (error, result3) => {
                            if (error) { console.error('API error:', error); return; }
                            console.log('Leg 3 SELL ATM-2 put order placed successfully. Order ID:', result3);

                            // Step 8: Buy ATM-3 put
                            const body4 = new UpstoxClient.PlaceOrderV3Request(
                                leg3.lotSize,
                                UpstoxClient.PlaceOrderV3Request.ProductEnum.D,
                                UpstoxClient.PlaceOrderV3Request.ValidityEnum.DAY,
                                0, leg3.instrumentKey,
                                UpstoxClient.PlaceOrderV3Request.OrderTypeEnum.MARKET,
                                UpstoxClient.PlaceOrderV3Request.TransactionTypeEnum.BUY,
                                0, 0, false
                            );
                            orderApi.placeOrder(body4, {}, (error, result4) => {
                                if (error) { console.error('API error:', error); return; }
                                console.log('Leg 4 BUY ATM-3 put order placed successfully. Order ID:', result4);
                            });
                        });
                    });
                });
            });
        });
    });
});
