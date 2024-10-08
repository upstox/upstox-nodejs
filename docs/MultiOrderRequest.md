# UpstoxClient.MultiOrderRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **Number** | Quantity with which the order is to be placed | 
**product** | **String** | Signifies if the order was either Intraday, Delivery, CO or OCO | 
**validity** | **String** | It can be one of the following - DAY(default), IOC | 
**price** | **Number** | Price at which the order will be placed | 
**tag** | **String** |  | [optional] 
**slice** | **Boolean** | To divide the order line based on predefined exchange definitions | 
**instrumentToken** | **String** | Key of the instrument | 
**orderType** | **String** | Type of order. It can be one of the following MARKET refers to market order LIMIT refers to Limit Order SL refers to Stop Loss Limit SL-M refers to Stop Loss Market | 
**transactionType** | **String** | Indicates whether its a buy or sell order | 
**disclosedQuantity** | **Number** | The quantity that should be disclosed in the market depth | 
**triggerPrice** | **Number** | If the order is a stop loss order then the trigger price to be set is mentioned here | 
**isAmo** | **Boolean** | Signifies if the order is an After Market Order | 
**correlationId** | **String** | A unique identifier for tracking individual orders within the batch | 

<a name="ProductEnum"></a>
## Enum: ProductEnum

* `I` (value: `"I"`)
* `D` (value: `"D"`)


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

