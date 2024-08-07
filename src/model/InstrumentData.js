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

/**
 * The InstrumentData model module.
 * @module model/InstrumentData
 * @version v0
 */
export class InstrumentData {
  /**
   * Constructs a new <code>InstrumentData</code>.
   * Response data for option contracts
   * @alias module:model/InstrumentData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InstrumentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstrumentData} obj Optional instance to populate.
   * @return {module:model/InstrumentData} The populated <code>InstrumentData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InstrumentData();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('segment'))
        obj.segment = ApiClient.convertToType(data['segment'], 'String');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
      if (data.hasOwnProperty('isin'))
        obj.isin = ApiClient.convertToType(data['isin'], 'String');
      if (data.hasOwnProperty('expiry'))
        obj.expiry = ApiClient.convertToType(data['expiry'], 'Date');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('latency'))
        obj.latency = ApiClient.convertToType(data['latency'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('weekly'))
        obj.weekly = ApiClient.convertToType(data['weekly'], 'Boolean');
      if (data.hasOwnProperty('instrument_key'))
        obj.instrumentKey = ApiClient.convertToType(data['instrument_key'], 'String');
      if (data.hasOwnProperty('exchange_token'))
        obj.exchangeToken = ApiClient.convertToType(data['exchange_token'], 'String');
      if (data.hasOwnProperty('trading_symbol'))
        obj.tradingSymbol = ApiClient.convertToType(data['trading_symbol'], 'String');
      if (data.hasOwnProperty('short_name'))
        obj.shortName = ApiClient.convertToType(data['short_name'], 'String');
      if (data.hasOwnProperty('tick_size'))
        obj.tickSize = ApiClient.convertToType(data['tick_size'], 'Number');
      if (data.hasOwnProperty('lot_size'))
        obj.lotSize = ApiClient.convertToType(data['lot_size'], 'Number');
      if (data.hasOwnProperty('instrument_type'))
        obj.instrumentType = ApiClient.convertToType(data['instrument_type'], 'String');
      if (data.hasOwnProperty('freeze_quantity'))
        obj.freezeQuantity = ApiClient.convertToType(data['freeze_quantity'], 'Number');
      if (data.hasOwnProperty('underlying_key'))
        obj.underlyingKey = ApiClient.convertToType(data['underlying_key'], 'String');
      if (data.hasOwnProperty('underlying_type'))
        obj.underlyingType = ApiClient.convertToType(data['underlying_type'], 'String');
      if (data.hasOwnProperty('underlying_symbol'))
        obj.underlyingSymbol = ApiClient.convertToType(data['underlying_symbol'], 'String');
      if (data.hasOwnProperty('last_trading_date'))
        obj.lastTradingDate = ApiClient.convertToType(data['last_trading_date'], 'Date');
      if (data.hasOwnProperty('strike_price'))
        obj.strikePrice = ApiClient.convertToType(data['strike_price'], 'Number');
      if (data.hasOwnProperty('price_quote_unit'))
        obj.priceQuoteUnit = ApiClient.convertToType(data['price_quote_unit'], 'String');
      if (data.hasOwnProperty('qty_multiplier'))
        obj.qtyMultiplier = ApiClient.convertToType(data['qty_multiplier'], 'Number');
      if (data.hasOwnProperty('minimum_lot'))
        obj.minimumLot = ApiClient.convertToType(data['minimum_lot'], 'Number');
      if (data.hasOwnProperty('start_time'))
        obj.startTime = ApiClient.convertToType(data['start_time'], 'String');
      if (data.hasOwnProperty('end_time'))
        obj.endTime = ApiClient.convertToType(data['end_time'], 'String');
      if (data.hasOwnProperty('week_days'))
        obj.weekDays = ApiClient.convertToType(data['week_days'], 'String');
      if (data.hasOwnProperty('general_denominator'))
        obj.generalDenominator = ApiClient.convertToType(data['general_denominator'], 'Number');
      if (data.hasOwnProperty('general_numerator'))
        obj.generalNumerator = ApiClient.convertToType(data['general_numerator'], 'Number');
      if (data.hasOwnProperty('price_numerator'))
        obj.priceNumerator = ApiClient.convertToType(data['price_numerator'], 'Number');
      if (data.hasOwnProperty('price_denominator'))
        obj.priceDenominator = ApiClient.convertToType(data['price_denominator'], 'Number');
      if (data.hasOwnProperty('mtf_enabled'))
        obj.mtfEnabled = ApiClient.convertToType(data['mtf_enabled'], 'Boolean');
      if (data.hasOwnProperty('mtf_bracket'))
        obj.mtfBracket = ApiClient.convertToType(data['mtf_bracket'], 'Number');
      if (data.hasOwnProperty('security_type'))
        obj.securityType = ApiClient.convertToType(data['security_type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
InstrumentData.prototype.name = undefined;

/**
 * @member {String} segment
 */
InstrumentData.prototype.segment = undefined;

/**
 * @member {String} exchange
 */
InstrumentData.prototype.exchange = undefined;

/**
 * @member {String} isin
 */
InstrumentData.prototype.isin = undefined;

/**
 * @member {Date} expiry
 */
InstrumentData.prototype.expiry = undefined;

/**
 * @member {String} country
 */
InstrumentData.prototype.country = undefined;

/**
 * @member {String} latency
 */
InstrumentData.prototype.latency = undefined;

/**
 * @member {String} description
 */
InstrumentData.prototype.description = undefined;

/**
 * @member {String} currency
 */
InstrumentData.prototype.currency = undefined;

/**
 * @member {Boolean} weekly
 */
InstrumentData.prototype.weekly = undefined;

/**
 * @member {String} instrumentKey
 */
InstrumentData.prototype.instrumentKey = undefined;

/**
 * @member {String} exchangeToken
 */
InstrumentData.prototype.exchangeToken = undefined;

/**
 * @member {String} tradingSymbol
 */
InstrumentData.prototype.tradingSymbol = undefined;

/**
 * @member {String} shortName
 */
InstrumentData.prototype.shortName = undefined;

/**
 * @member {Number} tickSize
 */
InstrumentData.prototype.tickSize = undefined;

/**
 * @member {Number} lotSize
 */
InstrumentData.prototype.lotSize = undefined;

/**
 * @member {String} instrumentType
 */
InstrumentData.prototype.instrumentType = undefined;

/**
 * @member {Number} freezeQuantity
 */
InstrumentData.prototype.freezeQuantity = undefined;

/**
 * @member {String} underlyingKey
 */
InstrumentData.prototype.underlyingKey = undefined;

/**
 * @member {String} underlyingType
 */
InstrumentData.prototype.underlyingType = undefined;

/**
 * @member {String} underlyingSymbol
 */
InstrumentData.prototype.underlyingSymbol = undefined;

/**
 * @member {Date} lastTradingDate
 */
InstrumentData.prototype.lastTradingDate = undefined;

/**
 * @member {Number} strikePrice
 */
InstrumentData.prototype.strikePrice = undefined;

/**
 * @member {String} priceQuoteUnit
 */
InstrumentData.prototype.priceQuoteUnit = undefined;

/**
 * @member {Number} qtyMultiplier
 */
InstrumentData.prototype.qtyMultiplier = undefined;

/**
 * @member {Number} minimumLot
 */
InstrumentData.prototype.minimumLot = undefined;

/**
 * @member {String} startTime
 */
InstrumentData.prototype.startTime = undefined;

/**
 * @member {String} endTime
 */
InstrumentData.prototype.endTime = undefined;

/**
 * @member {String} weekDays
 */
InstrumentData.prototype.weekDays = undefined;

/**
 * @member {Number} generalDenominator
 */
InstrumentData.prototype.generalDenominator = undefined;

/**
 * @member {Number} generalNumerator
 */
InstrumentData.prototype.generalNumerator = undefined;

/**
 * @member {Number} priceNumerator
 */
InstrumentData.prototype.priceNumerator = undefined;

/**
 * @member {Number} priceDenominator
 */
InstrumentData.prototype.priceDenominator = undefined;

/**
 * @member {Boolean} mtfEnabled
 */
InstrumentData.prototype.mtfEnabled = undefined;

/**
 * @member {Number} mtfBracket
 */
InstrumentData.prototype.mtfBracket = undefined;

/**
 * @member {String} securityType
 */
InstrumentData.prototype.securityType = undefined;

