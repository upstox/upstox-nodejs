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
 * The MultiOrderData model module.
 * @module model/MultiOrderData
 * @version v0
 */
export class MultiOrderData {
  /**
   * Constructs a new <code>MultiOrderData</code>.
   * Response data for multi order request
   * @alias module:model/MultiOrderData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MultiOrderData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiOrderData} obj Optional instance to populate.
   * @return {module:model/MultiOrderData} The populated <code>MultiOrderData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MultiOrderData();
      if (data.hasOwnProperty('correlation_id'))
        obj.correlationId = ApiClient.convertToType(data['correlation_id'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.orderId = ApiClient.convertToType(data['order_id'], 'String');
    }
    return obj;
  }
}

/**
 * A unique identifier for tracking individual orders within the batch
 * @member {String} correlationId
 */
MultiOrderData.prototype.correlationId = undefined;

/**
 * An order ID for the order request placed
 * @member {String} orderId
 */
MultiOrderData.prototype.orderId = undefined;

