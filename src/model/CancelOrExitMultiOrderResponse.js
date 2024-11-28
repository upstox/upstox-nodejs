/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.62
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {BatchExecutionSummary} from './BatchExecutionSummary';
import {CancelOrExitMultiOrderData} from './CancelOrExitMultiOrderData';
import {CancelOrExitOrderErrorData} from './CancelOrExitOrderErrorData';

/**
 * The CancelOrExitMultiOrderResponse model module.
 * @module model/CancelOrExitMultiOrderResponse
 * @version v0
 */
export class CancelOrExitMultiOrderResponse {
  /**
   * Constructs a new <code>CancelOrExitMultiOrderResponse</code>.
   * @alias module:model/CancelOrExitMultiOrderResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CancelOrExitMultiOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelOrExitMultiOrderResponse} obj Optional instance to populate.
   * @return {module:model/CancelOrExitMultiOrderResponse} The populated <code>CancelOrExitMultiOrderResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CancelOrExitMultiOrderResponse();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = CancelOrExitMultiOrderData.constructFromObject(data['data']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [CancelOrExitOrderErrorData]);
      if (data.hasOwnProperty('summary'))
        obj.summary = BatchExecutionSummary.constructFromObject(data['summary']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CancelOrExitMultiOrderResponse.StatusEnum = {
  /**
   * value: "success"
   * @const
   */
  success: "success",

  /**
   * value: "error"
   * @const
   */
  error: "error",

  /**
   * value: "partial_success"
   * @const
   */
  partialSuccess: "partial_success"
};
/**
 * @member {module:model/CancelOrExitMultiOrderResponse.StatusEnum} status
 */
CancelOrExitMultiOrderResponse.prototype.status = undefined;

/**
 * @member {module:model/CancelOrExitMultiOrderData} data
 */
CancelOrExitMultiOrderResponse.prototype.data = undefined;

/**
 * Error data for cancel or exit order request
 * @member {Array.<module:model/CancelOrExitOrderErrorData>} errors
 */
CancelOrExitMultiOrderResponse.prototype.errors = undefined;

/**
 * @member {module:model/BatchExecutionSummary} summary
 */
CancelOrExitMultiOrderResponse.prototype.summary = undefined;
