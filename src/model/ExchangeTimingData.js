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
import ApiClient from '../ApiClient';

/**
 * The ExchangeTimingData model module.
 * @module model/ExchangeTimingData
 * @version v0
 */
export default class ExchangeTimingData {
  /**
   * Constructs a new <code>ExchangeTimingData</code>.
   * @alias module:model/ExchangeTimingData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ExchangeTimingData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExchangeTimingData} obj Optional instance to populate.
   * @return {module:model/ExchangeTimingData} The populated <code>ExchangeTimingData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ExchangeTimingData();
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
      if (data.hasOwnProperty('start_time'))
        obj.startTime = ApiClient.convertToType(data['start_time'], 'Number');
      if (data.hasOwnProperty('end_time'))
        obj.endTime = ApiClient.convertToType(data['end_time'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} exchange
 */
ExchangeTimingData.prototype.exchange = undefined;

/**
 * @member {Number} startTime
 */
ExchangeTimingData.prototype.startTime = undefined;

/**
 * @member {Number} endTime
 */
ExchangeTimingData.prototype.endTime = undefined;

