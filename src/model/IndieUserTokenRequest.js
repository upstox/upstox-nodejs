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

/**
 * The IndieUserTokenRequest model module.
 * @module model/IndieUserTokenRequest
 * @version v0
 */
export class IndieUserTokenRequest {
  /**
   * Constructs a new <code>IndieUserTokenRequest</code>.
   * @alias module:model/IndieUserTokenRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IndieUserTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndieUserTokenRequest} obj Optional instance to populate.
   * @return {module:model/IndieUserTokenRequest} The populated <code>IndieUserTokenRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IndieUserTokenRequest();
      if (data.hasOwnProperty('client_secret'))
        obj.clientSecret = ApiClient.convertToType(data['client_secret'], 'String');
    }
    return obj;
  }
}

/**
 * OAuth client secret that is a private secret known only to app and authorization server
 * @member {String} clientSecret
 */
IndieUserTokenRequest.prototype.clientSecret = undefined;

