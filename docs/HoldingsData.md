# UpstoxClient.HoldingsData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isin** | **String** | The standard ISIN representing stocks listed on multiple exchanges | [optional] 
**cncUsedQuantity** | **Number** | Quantity either blocked towards open or completed order | [optional] 
**collateralType** | **String** | Category of collateral assigned by RMS | [optional] 
**companyName** | **String** | Name of the company | [optional] 
**haircut** | **Number** | This is the haircut percentage applied from RMS (applicable incase of collateral) | [optional] 
**product** | **String** | Shows if the order was either Intraday, Delivery, CO or OCO | [optional] 
**quantity** | **Number** | The total holding qty | [optional] 
**tradingsymbol** | **String** | Shows the trading symbol of the instrument | [optional] 
**lastPrice** | **Number** | The last traded price of the instrument | [optional] 
**closePrice** | **Number** | Closing price of the instrument from the last trading day | [optional] 
**pnl** | **Number** | Profit and Loss | [optional] 
**dayChange** | **Number** | Day&#x27;s change in absolute value for the stock | [optional] 
**dayChangePercentage** | **Number** | Day&#x27;s change in percentage for the stock | [optional] 
**instrumentToken** | **String** | Key issued by Upstox for the instrument | [optional] 
**averagePrice** | **Number** | Average price at which the net holding quantity was acquired | [optional] 
**collateralQuantity** | **Number** | Quantity marked as collateral by RMS on users request | [optional] 
**collateralUpdateQuantity** | **Number** |  | [optional] 
**t1Quantity** | **Number** | Quantity on T+1 day after order execution | [optional] 
**exchange** | **String** | Exchange of the trading symbol | [optional] 

<a name="ExchangeEnum"></a>
## Enum: ExchangeEnum

* `NSE` (value: `"NSE"`)
* `NFO` (value: `"NFO"`)
* `CDS` (value: `"CDS"`)
* `BSE` (value: `"BSE"`)
* `BCD` (value: `"BCD"`)
* `BFO` (value: `"BFO"`)
* `MCX` (value: `"MCX"`)

