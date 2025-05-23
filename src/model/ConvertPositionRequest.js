/*
 * Upstox Developer API
 * Build your App on the Upstox platform  ![Banner](https://api.upstox.com/api-docs/images/banner.jpg \"banner\")  # Introduction  Upstox API is a set of rest APIs that provide data required to build a complete investment and trading platform. Execute orders in real time, manage user portfolio, stream live market data (using Websocket), and more, with the easy to understand API collection.  All requests are over HTTPS and the requests are sent with the content-type ‘application/json’. Developers have the option of choosing the response type as JSON or CSV for a few API calls.  To be able to use these APIs you need to create an App in the Developer Console and generate your **apiKey** and **apiSecret**. You can use a redirect URL which will be called after the login flow.  If you are a **trader**, you can directly create apps from Upstox mobile app or the desktop platform itself from **Apps** sections inside the **Account** Tab. Head over to <a href=\"http://account.upstox.com/developer/apps\" target=\"_blank\">account.upstox.com/developer/apps</a>.</br> If you are a **business** looking to integrate Upstox APIs, reach out to us and we will get a custom app created for you in no time.  It is highly recommended that you do not embed the **apiSecret** in your frontend app. Create a remote backend which does the handshake on behalf of the frontend app. Marking the apiSecret in the frontend app will make your app vulnerable to threats and potential issues. 
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
 * The ConvertPositionRequest model module.
 * @module model/ConvertPositionRequest
 * @version v2
 */
export class ConvertPositionRequest {
  /**
   * Constructs a new <code>ConvertPositionRequest</code>.
   * @alias module:model/ConvertPositionRequest
   * @class
   * @param instrumentToken {String} Key of the instrument
   * @param newProduct {module:model/ConvertPositionRequest.NewProductEnum} Indicates the new product to use for the convert positions
   * @param oldProduct {module:model/ConvertPositionRequest.OldProductEnum} Indicates the old product to use for the convert positions
   * @param transactionType {module:model/ConvertPositionRequest.TransactionTypeEnum} Indicates whether its a buy(b) or sell(s) order
   * @param quantity {Number} Quantity with which the position to convert
   */
  constructor(instrumentToken, newProduct, oldProduct, transactionType, quantity) {
    this.instrumentToken = instrumentToken;
    this.newProduct = newProduct;
    this.oldProduct = oldProduct;
    this.transactionType = transactionType;
    this.quantity = quantity;
  }

  /**
   * Constructs a <code>ConvertPositionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConvertPositionRequest} obj Optional instance to populate.
   * @return {module:model/ConvertPositionRequest} The populated <code>ConvertPositionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConvertPositionRequest();
      if (data.hasOwnProperty('instrument_token'))
        obj.instrumentToken = ApiClient.convertToType(data['instrument_token'], 'String');
      if (data.hasOwnProperty('new_product'))
        obj.newProduct = ApiClient.convertToType(data['new_product'], 'String');
      if (data.hasOwnProperty('old_product'))
        obj.oldProduct = ApiClient.convertToType(data['old_product'], 'String');
      if (data.hasOwnProperty('transaction_type'))
        obj.transactionType = ApiClient.convertToType(data['transaction_type'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }
}

/**
 * Key of the instrument
 * @member {String} instrumentToken
 */
ConvertPositionRequest.prototype.instrumentToken = undefined;

/**
 * Allowed values for the <code>newProduct</code> property.
 * @enum {String}
 * @readonly
 */
ConvertPositionRequest.NewProductEnum = {
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
 * Indicates the new product to use for the convert positions
 * @member {module:model/ConvertPositionRequest.NewProductEnum} newProduct
 */
ConvertPositionRequest.prototype.newProduct = undefined;

/**
 * Allowed values for the <code>oldProduct</code> property.
 * @enum {String}
 * @readonly
 */
ConvertPositionRequest.OldProductEnum = {
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
 * Indicates the old product to use for the convert positions
 * @member {module:model/ConvertPositionRequest.OldProductEnum} oldProduct
 */
ConvertPositionRequest.prototype.oldProduct = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
ConvertPositionRequest.TransactionTypeEnum = {
  /**
   * value: "BUY"
   * @const
   */
  BUY: "BUY",

  /**
   * value: "SELL"
   * @const
   */
  SELL: "SELL"
};
/**
 * Indicates whether its a buy(b) or sell(s) order
 * @member {module:model/ConvertPositionRequest.TransactionTypeEnum} transactionType
 */
ConvertPositionRequest.prototype.transactionType = undefined;

/**
 * Quantity with which the position to convert
 * @member {Number} quantity
 */
ConvertPositionRequest.prototype.quantity = undefined;

