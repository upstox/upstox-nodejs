# UpstoxClient.ModifyOrderRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **Number** | Quantity with which the order was placed | [optional] 
**validity** | **String** | Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order) | 
**price** | **Number** | Price at which the order was placed | 
**orderId** | **String** | The order ID for which the order must be modified | 
**orderType** | **String** | Type of order. It can be one of the following MARKET refers to market order LIMILT refers to Limit Order SL refers to Stop Loss Limit SL-M refers to Stop Loss Market | 
**disclosedQuantity** | **Number** | The quantity that should be disclosed in the market depth | [optional] 
**triggerPrice** | **Number** | If the order is a stop loss order then the trigger price to be set is mentioned here | 

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

