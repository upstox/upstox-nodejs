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
 * The MarketData model module.
 * @module model/MarketData
 * @version v0
 */
export default class MarketData {
  /**
   * Constructs a new <code>MarketData</code>.
   * @alias module:model/MarketData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MarketData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarketData} obj Optional instance to populate.
   * @return {module:model/MarketData} The populated <code>MarketData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MarketData();
      if (data.hasOwnProperty('ltp'))
        obj.ltp = ApiClient.convertToType(data['ltp'], 'Number');
      if (data.hasOwnProperty('volume'))
        obj.volume = ApiClient.convertToType(data['volume'], 'Number');
      if (data.hasOwnProperty('oi'))
        obj.oi = ApiClient.convertToType(data['oi'], 'Number');
      if (data.hasOwnProperty('close_price'))
        obj.closePrice = ApiClient.convertToType(data['close_price'], 'Number');
      if (data.hasOwnProperty('bid_price'))
        obj.bidPrice = ApiClient.convertToType(data['bid_price'], 'Number');
      if (data.hasOwnProperty('bid_qty'))
        obj.bidQty = ApiClient.convertToType(data['bid_qty'], 'Number');
      if (data.hasOwnProperty('ask_price'))
        obj.askPrice = ApiClient.convertToType(data['ask_price'], 'Number');
      if (data.hasOwnProperty('ask_qty'))
        obj.askQty = ApiClient.convertToType(data['ask_qty'], 'Number');
      if (data.hasOwnProperty('prev_oi'))
        obj.prevOi = ApiClient.convertToType(data['prev_oi'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} ltp
 */
MarketData.prototype.ltp = undefined;

/**
 * @member {Number} volume
 */
MarketData.prototype.volume = undefined;

/**
 * @member {Number} oi
 */
MarketData.prototype.oi = undefined;

/**
 * @member {Number} closePrice
 */
MarketData.prototype.closePrice = undefined;

/**
 * @member {Number} bidPrice
 */
MarketData.prototype.bidPrice = undefined;

/**
 * @member {Number} bidQty
 */
MarketData.prototype.bidQty = undefined;

/**
 * @member {Number} askPrice
 */
MarketData.prototype.askPrice = undefined;

/**
 * @member {Number} askQty
 */
MarketData.prototype.askQty = undefined;

/**
 * @member {Number} prevOi
 */
MarketData.prototype.prevOi = undefined;

