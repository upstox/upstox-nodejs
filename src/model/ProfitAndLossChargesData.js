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
import {ProfitAndLossChargesTaxes} from './ProfitAndLossChargesTaxes';
import {ProfitAndLossOtherChargesTaxes} from './ProfitAndLossOtherChargesTaxes';

/**
 * The ProfitAndLossChargesData model module.
 * @module model/ProfitAndLossChargesData
 * @version v2
 */
export class ProfitAndLossChargesData {
  /**
   * Constructs a new <code>ProfitAndLossChargesData</code>.
   * Response data for charges details
   * @alias module:model/ProfitAndLossChargesData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProfitAndLossChargesData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfitAndLossChargesData} obj Optional instance to populate.
   * @return {module:model/ProfitAndLossChargesData} The populated <code>ProfitAndLossChargesData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfitAndLossChargesData();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('brokerage'))
        obj.brokerage = ApiClient.convertToType(data['brokerage'], 'Number');
      if (data.hasOwnProperty('taxes'))
        obj.taxes = ProfitAndLossChargesTaxes.constructFromObject(data['taxes']);
      if (data.hasOwnProperty('charges'))
        obj.charges = ProfitAndLossOtherChargesTaxes.constructFromObject(data['charges']);
    }
    return obj;
  }
}

/**
 *   Total charges for the user
 * @member {Number} total
 */
ProfitAndLossChargesData.prototype.total = undefined;

/**
 * Brokerage charges for the order
 * @member {Number} brokerage
 */
ProfitAndLossChargesData.prototype.brokerage = undefined;

/**
 * @member {module:model/ProfitAndLossChargesTaxes} taxes
 */
ProfitAndLossChargesData.prototype.taxes = undefined;

/**
 * @member {module:model/ProfitAndLossOtherChargesTaxes} charges
 */
ProfitAndLossChargesData.prototype.charges = undefined;

