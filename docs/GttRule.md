# UpstoxClient.GttRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy** | **String** | Defines the strategy for the GTT order leg: ENTRY - First leg order STOPLOSS - Stop-loss order TARGET - Target order | 
**triggerType** | **String** | Trigger type for each leg of the order | 
**triggerPrice** | **Number** | Trigger price for the GTT order leg | 

<a name="StrategyEnum"></a>
## Enum: StrategyEnum

* `ENTRY` (value: `"ENTRY"`)
* `STOPLOSS` (value: `"STOPLOSS"`)
* `TARGET` (value: `"TARGET"`)


<a name="TriggerTypeEnum"></a>
## Enum: TriggerTypeEnum

* `ABOVE` (value: `"ABOVE"`)
* `BELOW` (value: `"BELOW"`)
* `IMMEDIATE` (value: `"IMMEDIATE"`)

