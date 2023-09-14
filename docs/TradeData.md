# UpstoxClient.TradeData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **String** | Exchange to which the order is associated | [optional] 
**product** | **String** | Shows if the order was either Intraday, Delivery, CO or OCO | [optional] 
**tradingsymbol** | **String** | Shows the trading symbol which could be a combination of symbol name, instrument, expiry date etc | [optional] 
**instrumentToken** | **String** | Identifier issued by Upstox used for subscribing to live market quotes | [optional] 
**orderType** | **String** | Type of order. It can be one of the following MARKET refers to market order&lt;br&gt;LIMIT refers to Limit Order&lt;br&gt;SL refers to Stop Loss Limit&lt;br&gt;SL-M refers to Stop loss market | [optional] 
**transactionType** | **String** | Indicates whether the order was a buy or sell order | [optional] 
**quantity** | **Number** | The total quantity traded from this particular order | [optional] 
**exchangeOrderId** | **String** | Unique order ID assigned by the exchange for the order placed | [optional] 
**orderId** | **String** | Unique order ID assigned internally for the order placed | [optional] 
**exchangeTimestamp** | **String** | User readable time at when the trade occurred | [optional] 
**averagePrice** | **Number** | Price at which the traded quantity is traded | [optional] 
**tradeId** | **String** | Trade ID generated from exchange towards traded transaction | [optional] 
**orderRefId** | **String** | The order reference ID for which the order must be modified | [optional] 
**orderTimestamp** | **String** | User readable timestamp at which the order was placed | [optional] 

<a name="ExchangeEnum"></a>
## Enum: ExchangeEnum

* `NSE` (value: `"NSE"`)
* `NFO` (value: `"NFO"`)
* `CDS` (value: `"CDS"`)
* `BSE` (value: `"BSE"`)
* `BCD` (value: `"BCD"`)
* `BFO` (value: `"BFO"`)
* `MCX` (value: `"MCX"`)


<a name="ProductEnum"></a>
## Enum: ProductEnum

* `I` (value: `"I"`)
* `D` (value: `"D"`)
* `CO` (value: `"CO"`)
* `OCO` (value: `"OCO"`)
* `MTF` (value: `"MTF"`)


<a name="OrderTypeEnum"></a>
## Enum: OrderTypeEnum

* `MARKET` (value: `"MARKET"`)
* `LIMIT` (value: `"LIMIT"`)
* `SL` (value: `"SL"`)
* `SL_M` (value: `"SL-M"`)


<a name="TransactionTypeEnum"></a>
## Enum: TransactionTypeEnum

* `BUY` (value: `"BUY"`)
* `SELL` (value: `"SELL"`)

