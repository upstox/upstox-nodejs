/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {OptionStrikeData} from './OptionStrikeData';

/**
 * The GetOptionChainResponse model module.
 * @module model/GetOptionChainResponse
 * @version v0
 */
export class GetOptionChainResponse {
  /**
   * Constructs a new <code>GetOptionChainResponse</code>.
   * @alias module:model/GetOptionChainResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetOptionChainResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOptionChainResponse} obj Optional instance to populate.
   * @return {module:model/GetOptionChainResponse} The populated <code>GetOptionChainResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetOptionChainResponse();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OptionStrikeData]);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
GetOptionChainResponse.StatusEnum = {
  /**
   * value: "success"
   * @const
   */
  success: "success",

  /**
   * value: "error"
   * @const
   */
  error: "error"
};
/**
 * @member {module:model/GetOptionChainResponse.StatusEnum} status
 */
GetOptionChainResponse.prototype.status = undefined;

/**
 * Response data for option chain data
 * @member {Array.<module:model/OptionStrikeData>} data
 */
GetOptionChainResponse.prototype.data = undefined;

