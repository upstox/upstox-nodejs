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
import {Instrument} from './Instrument';

/**
 * The MarginRequest model module.
 * @module model/MarginRequest
 * @version v0
 */
export class MarginRequest {
  /**
   * Constructs a new <code>MarginRequest</code>.
   * @alias module:model/MarginRequest
   * @class
   * @param instruments {Array.<module:model/Instrument>} instruments
   */
  constructor(instruments) {
    this.instruments = instruments;
  }

  /**
   * Constructs a <code>MarginRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarginRequest} obj Optional instance to populate.
   * @return {module:model/MarginRequest} The populated <code>MarginRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MarginRequest();
      if (data.hasOwnProperty('instruments'))
        obj.instruments = ApiClient.convertToType(data['instruments'], [Instrument]);
    }
    return obj;
  }
}

/**
 * instruments
 * @member {Array.<module:model/Instrument>} instruments
 */
MarginRequest.prototype.instruments = undefined;

