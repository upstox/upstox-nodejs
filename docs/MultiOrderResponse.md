# UpstoxClient.MultiOrderResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** |  | [optional] 
**data** | [**[MultiOrderData]**](MultiOrderData.md) | Response data for multi order request | [optional] 
**errors** | [**[MultiOrderError]**](MultiOrderError.md) | Error details for multi order request | [optional] 
**summary** | [**MultiOrderSummary**](MultiOrderSummary.md) |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `success` (value: `"success"`)
* `error` (value: `"error"`)
* `partialSuccess` (value: `"partial_success"`)

