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
import {OrderBookData} from './OrderBookData';

/**
 * The GetOrderDetailsResponse model module.
 * @module model/GetOrderDetailsResponse
 * @version v0
 */
export class GetOrderDetailsResponse {
  /**
   * Constructs a new <code>GetOrderDetailsResponse</code>.
   * @alias module:model/GetOrderDetailsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetOrderDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOrderDetailsResponse} obj Optional instance to populate.
   * @return {module:model/GetOrderDetailsResponse} The populated <code>GetOrderDetailsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetOrderDetailsResponse();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = OrderBookData.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
GetOrderDetailsResponse.StatusEnum = {
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
 * @member {module:model/GetOrderDetailsResponse.StatusEnum} status
 */
GetOrderDetailsResponse.prototype.status = undefined;

/**
 * @member {module:model/OrderBookData} data
 */
GetOrderDetailsResponse.prototype.data = undefined;
