# UpstoxClient.ConvertPositionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instrumentToken** | **String** | Key of the instrument | 
**newProduct** | **String** | Indicates the new product to use for the convert positions | 
**oldProduct** | **String** | Indicates the old product to use for the convert positions | 
**transactionType** | **String** | Indicates whether its a buy(b) or sell(s) order | 
**quantity** | **Number** | Quantity with which the position to convert | 

<a name="NewProductEnum"></a>
## Enum: NewProductEnum

* `I` (value: `"I"`)
* `D` (value: `"D"`)
* `CO` (value: `"CO"`)
* `OCO` (value: `"OCO"`)
* `MTF` (value: `"MTF"`)


<a name="OldProductEnum"></a>
## Enum: OldProductEnum

* `I` (value: `"I"`)
* `D` (value: `"D"`)
* `CO` (value: `"CO"`)
* `OCO` (value: `"OCO"`)
* `MTF` (value: `"MTF"`)


<a name="TransactionTypeEnum"></a>
## Enum: TransactionTypeEnum

* `BUY` (value: `"BUY"`)
* `SELL` (value: `"SELL"`)

