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
import {ExchangeTimingData} from './ExchangeTimingData';

/**
 * The HolidayData model module.
 * @module model/HolidayData
 * @version v0
 */
export class HolidayData {
  /**
   * Constructs a new <code>HolidayData</code>.
   * Response data for holiday list
   * @alias module:model/HolidayData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HolidayData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HolidayData} obj Optional instance to populate.
   * @return {module:model/HolidayData} The populated <code>HolidayData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HolidayData();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('holiday_type'))
        obj.holidayType = ApiClient.convertToType(data['holiday_type'], 'String');
      if (data.hasOwnProperty('closed_exchanges'))
        obj.closedExchanges = ApiClient.convertToType(data['closed_exchanges'], ['String']);
      if (data.hasOwnProperty('open_exchanges'))
        obj.openExchanges = ApiClient.convertToType(data['open_exchanges'], [ExchangeTimingData]);
    }
    return obj;
  }
}

/**
 * @member {Date} _date
 */
HolidayData.prototype._date = undefined;

/**
 * @member {String} description
 */
HolidayData.prototype.description = undefined;

/**
 * Allowed values for the <code>holidayType</code> property.
 * @enum {String}
 * @readonly
 */
HolidayData.HolidayTypeEnum = {
  /**
   * value: "ALL"
   * @const
   */
  ALL: "ALL",

  /**
   * value: "SETTLEMENT_HOLIDAY"
   * @const
   */
  SETTLEMENT_HOLIDAY: "SETTLEMENT_HOLIDAY",

  /**
   * value: "TRADING_HOLIDAY"
   * @const
   */
  TRADING_HOLIDAY: "TRADING_HOLIDAY",

  /**
   * value: "SPECIAL_TIMING"
   * @const
   */
  SPECIAL_TIMING: "SPECIAL_TIMING"
};
/**
 * @member {module:model/HolidayData.HolidayTypeEnum} holidayType
 */
HolidayData.prototype.holidayType = undefined;

/**
 * @member {Array.<String>} closedExchanges
 */
HolidayData.prototype.closedExchanges = undefined;

/**
 * @member {Array.<module:model/ExchangeTimingData>} openExchanges
 */
HolidayData.prototype.openExchanges = undefined;
