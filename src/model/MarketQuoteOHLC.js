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
import {Ohlc} from './Ohlc';

/**
 * The MarketQuoteOHLC model module.
 * @module model/MarketQuoteOHLC
 * @version v2
 */
export class MarketQuoteOHLC {
  /**
   * Constructs a new <code>MarketQuoteOHLC</code>.
   * @alias module:model/MarketQuoteOHLC
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MarketQuoteOHLC</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarketQuoteOHLC} obj Optional instance to populate.
   * @return {module:model/MarketQuoteOHLC} The populated <code>MarketQuoteOHLC</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MarketQuoteOHLC();
      if (data.hasOwnProperty('ohlc'))
        obj.ohlc = Ohlc.constructFromObject(data['ohlc']);
      if (data.hasOwnProperty('last_price'))
        obj.lastPrice = ApiClient.convertToType(data['last_price'], 'Number');
      if (data.hasOwnProperty('instrument_token'))
        obj.instrumentToken = ApiClient.convertToType(data['instrument_token'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/Ohlc} ohlc
 */
MarketQuoteOHLC.prototype.ohlc = undefined;

/**
 * The last traded price of symbol
 * @member {Number} lastPrice
 */
MarketQuoteOHLC.prototype.lastPrice = undefined;

/**
 * @member {String} instrumentToken
 */
MarketQuoteOHLC.prototype.instrumentToken = undefined;

