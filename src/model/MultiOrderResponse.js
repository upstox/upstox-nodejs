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
import {MultiOrderData} from './MultiOrderData';
import {MultiOrderError} from './MultiOrderError';
import {MultiOrderSummary} from './MultiOrderSummary';

/**
 * The MultiOrderResponse model module.
 * @module model/MultiOrderResponse
 * @version v0
 */
export class MultiOrderResponse {
  /**
   * Constructs a new <code>MultiOrderResponse</code>.
   * @alias module:model/MultiOrderResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MultiOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiOrderResponse} obj Optional instance to populate.
   * @return {module:model/MultiOrderResponse} The populated <code>MultiOrderResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MultiOrderResponse();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MultiOrderData]);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [MultiOrderError]);
      if (data.hasOwnProperty('summary'))
        obj.summary = MultiOrderSummary.constructFromObject(data['summary']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
MultiOrderResponse.StatusEnum = {
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
 * @member {module:model/MultiOrderResponse.StatusEnum} status
 */
MultiOrderResponse.prototype.status = undefined;

/**
 * Response data for multi order request
 * @member {Array.<module:model/MultiOrderData>} data
 */
MultiOrderResponse.prototype.data = undefined;

/**
 * Error details for multi order request
 * @member {Array.<module:model/MultiOrderError>} errors
 */
MultiOrderResponse.prototype.errors = undefined;

/**
 * @member {module:model/MultiOrderSummary} summary
 */
MultiOrderResponse.prototype.summary = undefined;

