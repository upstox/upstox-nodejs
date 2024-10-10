# UpstoxClient.CancelOrExitMultiOrderResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** |  | [optional] 
**data** | [**CancelOrExitMultiOrderData**](CancelOrExitMultiOrderData.md) |  | [optional] 
**errors** | [**[CancelOrExitOrderErrorData]**](CancelOrExitOrderErrorData.md) | Error data for cancel or exit order request | [optional] 
**summary** | [**BatchExecutionSummary**](BatchExecutionSummary.md) |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `success` (value: `"success"`)
* `error` (value: `"error"`)
* `partialSuccess` (value: `"partial_success"`)

