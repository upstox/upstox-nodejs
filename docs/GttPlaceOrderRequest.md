# UpstoxClient.GttPlaceOrderRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of GTT order. It can be one of the following: SINGLE refers to a single-leg GTT order MULTIPLE refers to a multi-leg GTT order | 
**quantity** | **Number** | Quantity with which the order is to be placed | 
**product** | **String** | Signifies if the order was either Intraday, Delivery, CO or OCO | 
**rules** | [**[GttRule]**](GttRule.md) | List of rules defining the conditions for each leg in the GTT order | 
**instrumentToken** | **String** | Key of the instrument | 
**transactionType** | **String** | Indicates whether its a buy or sell order | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `SINGLE` (value: `"SINGLE"`)
* `MULTIPLE` (value: `"MULTIPLE"`)


<a name="ProductEnum"></a>
## Enum: ProductEnum

* `I` (value: `"I"`)
* `D` (value: `"D"`)


<a name="TransactionTypeEnum"></a>
## Enum: TransactionTypeEnum

* `BUY` (value: `"BUY"`)
* `SELL` (value: `"SELL"`)

