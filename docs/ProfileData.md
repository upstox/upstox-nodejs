# UpstoxClient.ProfileData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | E-mail address of the user | [optional] 
**exchanges** | **[String]** | Lists the exchanges to which the user has access | [optional] 
**products** | **[String]** | Lists the products types to which the user has access | [optional] 
**broker** | **String** | The broker ID | [optional] 
**userId** | **String** | Uniquely identifies the user | [optional] 
**userName** | **String** | Name of the user | [optional] 
**orderTypes** | **[String]** | Order types enabled for the user | [optional] 
**userType** | **String** |   Identifies the user&#x27;s registered role at the broker. This will be individual for all retail users | [optional] 
**poa** | **Boolean** |   To depict if the user has given power of attorney for transactions | [optional] 
**isActive** | **Boolean** |   Whether the status of account is active or not | [optional] 

<a name="[ExchangesEnum]"></a>
## Enum: [ExchangesEnum]

* `NSE` (value: `"NSE"`)
* `NFO` (value: `"NFO"`)
* `CDS` (value: `"CDS"`)
* `BSE` (value: `"BSE"`)
* `BCD` (value: `"BCD"`)
* `BFO` (value: `"BFO"`)
* `MCX` (value: `"MCX"`)


<a name="[ProductsEnum]"></a>
## Enum: [ProductsEnum]

* `I` (value: `"I"`)
* `D` (value: `"D"`)
* `CO` (value: `"CO"`)
* `OCO` (value: `"OCO"`)
* `MTF` (value: `"MTF"`)


<a name="[OrderTypesEnum]"></a>
## Enum: [OrderTypesEnum]

* `MARKET` (value: `"MARKET"`)
* `LIMIT` (value: `"LIMIT"`)
* `SL` (value: `"SL"`)
* `SL_M` (value: `"SL-M"`)

