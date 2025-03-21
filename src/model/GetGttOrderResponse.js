/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {GttOrderDetails} from './GttOrderDetails';
import {OrderMetadata} from './OrderMetadata';

/**
 * The GetGttOrderResponse model module.
 * @module model/GetGttOrderResponse
 * @version v0
 */
export class GetGttOrderResponse {
  /**
   * Constructs a new <code>GetGttOrderResponse</code>.
   * @alias module:model/GetGttOrderResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetGttOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetGttOrderResponse} obj Optional instance to populate.
   * @return {module:model/GetGttOrderResponse} The populated <code>GetGttOrderResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetGttOrderResponse();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [GttOrderDetails]);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = OrderMetadata.constructFromObject(data['metadata']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
GetGttOrderResponse.StatusEnum = {
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
 * @member {module:model/GetGttOrderResponse.StatusEnum} status
 */
GetGttOrderResponse.prototype.status = undefined;

/**
 * Response data for order details
 * @member {Array.<module:model/GttOrderDetails>} data
 */
GetGttOrderResponse.prototype.data = undefined;

/**
 * @member {module:model/OrderMetadata} metadata
 */
GetGttOrderResponse.prototype.metadata = undefined;

