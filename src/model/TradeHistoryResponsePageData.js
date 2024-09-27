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
 * The TradeHistoryResponsePageData model module.
 * @module model/TradeHistoryResponsePageData
 * @version v0
 */
export class TradeHistoryResponsePageData {
  /**
   * Constructs a new <code>TradeHistoryResponsePageData</code>.
   * @alias module:model/TradeHistoryResponsePageData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TradeHistoryResponsePageData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TradeHistoryResponsePageData} obj Optional instance to populate.
   * @return {module:model/TradeHistoryResponsePageData} The populated <code>TradeHistoryResponsePageData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TradeHistoryResponsePageData();
      if (data.hasOwnProperty('page_number'))
        obj.pageNumber = ApiClient.convertToType(data['page_number'], 'Number');
      if (data.hasOwnProperty('page_size'))
        obj.pageSize = ApiClient.convertToType(data['page_size'], 'Number');
      if (data.hasOwnProperty('total_records'))
        obj.totalRecords = ApiClient.convertToType(data['total_records'], 'Number');
      if (data.hasOwnProperty('total_pages'))
        obj.totalPages = ApiClient.convertToType(data['total_pages'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} pageNumber
 */
TradeHistoryResponsePageData.prototype.pageNumber = undefined;

/**
 * @member {Number} pageSize
 */
TradeHistoryResponsePageData.prototype.pageSize = undefined;

/**
 * @member {Number} totalRecords
 */
TradeHistoryResponsePageData.prototype.totalRecords = undefined;

/**
 * @member {Number} totalPages
 */
TradeHistoryResponsePageData.prototype.totalPages = undefined;

