# UpstoxClient.OrderData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **String** | Exchange to which the order is associated | [optional] 
**price** | **Number** | Price at which the order was placed | [optional] 
**product** | **String** | Shows if the order was either Intraday, Delivery, CoverOrder or OneCancelsOther | [optional] 
**quantity** | **Number** | Quantity with which the order was placed | [optional] 
**status** | **String** | Indicates the current status of the order. Valid order status’ are outlined in the table below | [optional] 
**tag** | **String** | Tag to uniquely identify an order | [optional] 
**validity** | **String** | Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order) | [optional] 
**averagePrice** | **Number** | Average price at which the qty got traded | [optional] 
**disclosedQuantity** | **Number** | The quantity that should be disclosed in the market depth | [optional] 
**exchangeOrderId** | **String** | Unique order ID assigned by the exchange for the order placed | [optional] 
**exchangeTimestamp** | **String** | User readable time at which the order was placed or updated | [optional] 
**instrumentToken** | **String** | Identifier issued by Upstox used for subscribing to live market quotes | [optional] 
**isAmo** | **Boolean** | Signifies if the order is an After Market Order | [optional] 
**statusMessage** | **String** | Indicates the reason when any order is rejected, not modified or cancelled | [optional] 
**orderId** | **String** | Unique order ID assigned internally for the order placed | [optional] 
**orderRequestId** | **String** | Apart from 1st order it shows the count of how many requests were sent | [optional] 
**orderType** | **String** | Type of order. It can be one of the following MARKET refers to market order&lt;br&gt;LIMIT refers to Limit Order&lt;br&gt;SL refers to Stop Loss Limit&lt;br&gt;SL-M refers to Stop loss market | [optional] 
**parentOrderId** | **String** | In case the order is part of the second or third leg of a CO or OCO, the parent order ID is indicated here | [optional] 
**tradingsymbol** | **String** | Shows the trading symbol of the instrument | [optional] 
**orderTimestamp** | **String** | User readable timestamp at which the order was placed | [optional] 
**filledQuantity** | **Number** | The total quantity traded from this particular order | [optional] 
**transactionType** | **String** | Indicates whether the order was a buy or sell order | [optional] 
**triggerPrice** | **Number** | If the order was a stop loss order then the trigger price set is mentioned here | [optional] 
**placedBy** | **String** | Uniquely identifies the user | [optional] 
**variety** | **String** | Order complexity | [optional] 

<a name="ExchangeEnum"></a>
## Enum: ExchangeEnum

* `NSE` (value: `"NSE"`)
* `NFO` (value: `"NFO"`)
* `CDS` (value: `"CDS"`)
* `BSE` (value: `"BSE"`)
* `BCD` (value: `"BCD"`)
* `MCX` (value: `"MCX"`)


<a name="ProductEnum"></a>
## Enum: ProductEnum

* `I` (value: `"I"`)
* `D` (value: `"D"`)
* `CO` (value: `"CO"`)
* `OCO` (value: `"OCO"`)
* `MTF` (value: `"MTF"`)


<a name="ValidityEnum"></a>
## Enum: ValidityEnum

* `DAY` (value: `"DAY"`)
* `IOC` (value: `"IOC"`)


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

