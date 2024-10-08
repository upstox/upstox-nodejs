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

/**
 * The MultiOrderSummary model module.
 * @module model/MultiOrderSummary
 * @version v0
 */
export class MultiOrderSummary {
  /**
   * Constructs a new <code>MultiOrderSummary</code>.
   * Execution summary for multi order request
   * @alias module:model/MultiOrderSummary
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MultiOrderSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiOrderSummary} obj Optional instance to populate.
   * @return {module:model/MultiOrderSummary} The populated <code>MultiOrderSummary</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MultiOrderSummary();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Number');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'Number');
      if (data.hasOwnProperty('payload_error'))
        obj.payloadError = ApiClient.convertToType(data['payload_error'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of order lines present in the payload.
 * @member {Number} total
 */
MultiOrderSummary.prototype.total = undefined;

/**
 * The number of order lines that were successfully placed without any errors.
 * @member {Number} success
 */
MultiOrderSummary.prototype.success = undefined;

/**
 * The number of order lines that encountered errors during processing, despite their payloads being valid.
 * @member {Number} error
 */
MultiOrderSummary.prototype.error = undefined;

/**
 * The number of order lines with payload errors, indicating formatting or data validity issues.<br/><br/><b>Note</b>: Orders are processed only if the entire batch is free of payload_error, ensuring error-free transactions.
 * @member {Number} payloadError
 */
MultiOrderSummary.prototype.payloadError = undefined;

