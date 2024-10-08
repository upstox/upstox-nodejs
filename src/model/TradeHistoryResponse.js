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
import {TradeHistoryResponseMetaData} from './TradeHistoryResponseMetaData';
import {TradeHistoryResponseTradeData} from './TradeHistoryResponseTradeData';

/**
 * The TradeHistoryResponse model module.
 * @module model/TradeHistoryResponse
 * @version v0
 */
export class TradeHistoryResponse {
  /**
   * Constructs a new <code>TradeHistoryResponse</code>.
   * @alias module:model/TradeHistoryResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TradeHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TradeHistoryResponse} obj Optional instance to populate.
   * @return {module:model/TradeHistoryResponse} The populated <code>TradeHistoryResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TradeHistoryResponse();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [TradeHistoryResponseTradeData]);
      if (data.hasOwnProperty('metaData'))
        obj.metaData = TradeHistoryResponseMetaData.constructFromObject(data['metaData']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TradeHistoryResponse.StatusEnum = {
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
 * @member {module:model/TradeHistoryResponse.StatusEnum} status
 */
TradeHistoryResponse.prototype.status = undefined;

/**
 * @member {Array.<module:model/TradeHistoryResponseTradeData>} data
 */
TradeHistoryResponse.prototype.data = undefined;

/**
 * @member {module:model/TradeHistoryResponseMetaData} metaData
 */
TradeHistoryResponse.prototype.metaData = undefined;

