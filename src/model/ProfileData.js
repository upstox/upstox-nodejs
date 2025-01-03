/*
 * Upstox Developer API
 * Build your App on the Upstox platform  ![Banner](https://api-v2.upstox.com/api-docs/images/banner.jpg \"banner\")  # Introduction  Upstox API is a set of rest APIs that provide data required to build a complete investment and trading platform. Execute orders in real time, manage user portfolio, stream live market data (using Websocket), and more, with the easy to understand API collection.  All requests are over HTTPS and the requests are sent with the content-type ‘application/json’. Developers have the option of choosing the response type as JSON or CSV for a few API calls.  To be able to use these APIs you need to create an App in the Developer Console and generate your **apiKey** and **apiSecret**. You can use a redirect URL which will be called after the login flow.  If you are a **trader**, you can directly create apps from Upstox mobile app or the desktop platform itself from **Apps** sections inside the **Account** Tab. Head over to <a href=\"http://account.upstox.com/developer/apps\" target=\"_blank\">account.upstox.com/developer/apps</a>.</br> If you are a **business** looking to integrate Upstox APIs, reach out to us and we will get a custom app created for you in no time.  It is highly recommended that you do not embed the **apiSecret** in your frontend app. Create a remote backend which does the handshake on behalf of the frontend app. Marking the apiSecret in the frontend app will make your app vulnerable to threats and potential issues. 
 *
 * OpenAPI spec version: v2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The ProfileData model module.
 * @module model/ProfileData
 * @version v2
 */
export class ProfileData {
  /**
   * Constructs a new <code>ProfileData</code>.
   * Response data for user profile
   * @alias module:model/ProfileData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProfileData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileData} obj Optional instance to populate.
   * @return {module:model/ProfileData} The populated <code>ProfileData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfileData();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('exchanges'))
        obj.exchanges = ApiClient.convertToType(data['exchanges'], ['String']);
      if (data.hasOwnProperty('products'))
        obj.products = ApiClient.convertToType(data['products'], ['String']);
      if (data.hasOwnProperty('broker'))
        obj.broker = ApiClient.convertToType(data['broker'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.userId = ApiClient.convertToType(data['user_id'], 'String');
      if (data.hasOwnProperty('user_name'))
        obj.userName = ApiClient.convertToType(data['user_name'], 'String');
      if (data.hasOwnProperty('order_types'))
        obj.orderTypes = ApiClient.convertToType(data['order_types'], ['String']);
      if (data.hasOwnProperty('user_type'))
        obj.userType = ApiClient.convertToType(data['user_type'], 'String');
      if (data.hasOwnProperty('poa'))
        obj.poa = ApiClient.convertToType(data['poa'], 'Boolean');
      if (data.hasOwnProperty('is_active'))
        obj.isActive = ApiClient.convertToType(data['is_active'], 'Boolean');
    }
    return obj;
  }
}

/**
 * E-mail address of the user
 * @member {String} email
 */
ProfileData.prototype.email = undefined;

/**
 * Allowed values for the <code>exchanges</code> property.
 * @enum {String}
 * @readonly
 */
ProfileData.ExchangesEnum = {
  /**
   * value: "NSE"
   * @const
   */
  NSE: "NSE",

  /**
   * value: "NFO"
   * @const
   */
  NFO: "NFO",

  /**
   * value: "CDS"
   * @const
   */
  CDS: "CDS",

  /**
   * value: "BSE"
   * @const
   */
  BSE: "BSE",

  /**
   * value: "BCD"
   * @const
   */
  BCD: "BCD",

  /**
   * value: "BFO"
   * @const
   */
  BFO: "BFO",

  /**
   * value: "MCX"
   * @const
   */
  MCX: "MCX",

  /**
   * value: "NSCOM"
   * @const
   */
  NSCOM: "NSCOM"
};
/**
 * Lists the exchanges to which the user has access
 * @member {Array.<module:model/ProfileData.ExchangesEnum>} exchanges
 */
ProfileData.prototype.exchanges = undefined;

/**
 * Allowed values for the <code>products</code> property.
 * @enum {String}
 * @readonly
 */
ProfileData.ProductsEnum = {
  /**
   * value: "I"
   * @const
   */
  I: "I",

  /**
   * value: "D"
   * @const
   */
  D: "D",

  /**
   * value: "CO"
   * @const
   */
  CO: "CO",

  /**
   * value: "OCO"
   * @const
   */
  OCO: "OCO",

  /**
   * value: "MTF"
   * @const
   */
  MTF: "MTF"
};
/**
 * Lists the products types to which the user has access
 * @member {Array.<module:model/ProfileData.ProductsEnum>} products
 */
ProfileData.prototype.products = undefined;

/**
 * The broker ID
 * @member {String} broker
 */
ProfileData.prototype.broker = undefined;

/**
 * Uniquely identifies the user
 * @member {String} userId
 */
ProfileData.prototype.userId = undefined;

/**
 * Name of the user
 * @member {String} userName
 */
ProfileData.prototype.userName = undefined;

/**
 * Allowed values for the <code>orderTypes</code> property.
 * @enum {String}
 * @readonly
 */
ProfileData.OrderTypesEnum = {
  /**
   * value: "MARKET"
   * @const
   */
  MARKET: "MARKET",

  /**
   * value: "LIMIT"
   * @const
   */
  LIMIT: "LIMIT",

  /**
   * value: "SL"
   * @const
   */
  SL: "SL",

  /**
   * value: "SL-M"
   * @const
   */
  SL_M: "SL-M"
};
/**
 * Order types enabled for the user
 * @member {Array.<module:model/ProfileData.OrderTypesEnum>} orderTypes
 */
ProfileData.prototype.orderTypes = undefined;

/**
 *   Identifies the user's registered role at the broker. This will be individual for all retail users
 * @member {String} userType
 */
ProfileData.prototype.userType = undefined;

/**
 *   To depict if the user has given power of attorney for transactions
 * @member {Boolean} poa
 */
ProfileData.prototype.poa = undefined;

/**
 *   Whether the status of account is active or not
 * @member {Boolean} isActive
 */
ProfileData.prototype.isActive = undefined;

