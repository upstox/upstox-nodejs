# UpstoxClient.PositionData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **String** | Exchange to which the order is associated | [optional] 
**multiplier** | **Number** | The quantity/lot size multiplier used for calculating P&amp;Ls | [optional] 
**value** | **Number** | Net value of the position | [optional] 
**pnl** | **Number** | Profit and loss - net returns on the position | [optional] 
**product** | **String** | Shows if the order was either Intraday, Delivery, CO or OCO | [optional] 
**instrumentToken** | **String** | Key issued by Upstox for the instrument | [optional] 
**averagePrice** | **Number** | Average price at which the net position quantity was acquired | [optional] 
**buyValue** | **Number** | Net value of the bought quantities | [optional] 
**overnightQuantity** | **Number** | Quantity held previously and carried forward over night | [optional] 
**dayBuyValue** | **Number** | Amount at which the quantity is bought during the day | [optional] 
**dayBuyPrice** | **Number** | Average price at which the day qty was bought. Default is empty string | [optional] 
**overnightBuyAmount** | **Number** | Amount at which the quantity was bought in the previous session | [optional] 
**overnightBuyQuantity** | **Number** | Quantity bought in the previous session | [optional] 
**dayBuyQuantity** | **Number** | Quantity bought during the day | [optional] 
**daySellValue** | **Number** | Amount at which the quantity is sold during the day | [optional] 
**daySellPrice** | **Number** | Average price at which the day quantity was sold | [optional] 
**overnightSellAmount** | **Number** | Amount at which the quantity was sold in the previous session | [optional] 
**overnightSellQuantity** | **Number** | Quantity sold short in the previous session | [optional] 
**daySellQuantity** | **Number** | Quantity sold during the day | [optional] 
**quantity** | **Number** | Quantity left after nullifying Day and CF buy quantity towards Day and CF sell quantity | [optional] 
**lastPrice** | **Number** | Last traded market price of the instrument | [optional] 
**unrealised** | **Number** | Day PnL generated against open positions | [optional] 
**realised** | **Number** | Day PnL generated against closed positions | [optional] 
**sellValue** | **Number** | Net value of the sold quantities | [optional] 
**tradingsymbol** | **String** | Shows the trading symbol of the instrument | [optional] 
**closePrice** | **Number** | Closing price of the instrument from the last trading day | [optional] 
**buyPrice** | **Number** | Average price at which quantities were bought | [optional] 
**sellPrice** | **Number** | Average price at which quantities were sold | [optional] 

<a name="ExchangeEnum"></a>
## Enum: ExchangeEnum

* `NSE` (value: `"NSE"`)
* `NFO` (value: `"NFO"`)
* `CDS` (value: `"CDS"`)
* `BSE` (value: `"BSE"`)
* `BCD` (value: `"BCD"`)
* `BFO` (value: `"BFO"`)
* `MCX` (value: `"MCX"`)

