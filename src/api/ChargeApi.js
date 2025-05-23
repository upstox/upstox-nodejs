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
import {ApiClient} from "../ApiClient";
import {ApiGatewayErrorResponse} from '../model/ApiGatewayErrorResponse';
import {GetBrokerageResponse} from '../model/GetBrokerageResponse';
import MarginRequest from '../model/MarginRequest';
import {PostMarginResponse} from '../model/PostMarginResponse';

/**
* Charge service.
* @module api/ChargeApi
* @version v2
*/
export class ChargeApi {

    /**
    * Constructs a new ChargeApi. 
    * @alias module:api/ChargeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getBrokerage operation.
     * @callback moduleapi/ChargeApi~getBrokerageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBrokerageResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Brokerage details
     * Compute Brokerage Charges
     * @param {String} instrumentToken Key of the instrument
     * @param {Number} quantity Quantity with which the order is to be placed
     * @param {String} product Product with which the order is to be placed
     * @param {String} transactionType Indicates whether its a BUY or SELL order
     * @param {Number} price Price with which the order is to be placed
     * @param {String} apiVersion API Version Header
     * @param {module:api/ChargeApi~getBrokerageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBrokerage(instrumentToken, quantity, product, transactionType, price, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'instrumentToken' is set
      if (instrumentToken === undefined || instrumentToken === null) {
        throw new Error("Missing the required parameter 'instrumentToken' when calling getBrokerage");
      }
      // verify the required parameter 'quantity' is set
      if (quantity === undefined || quantity === null) {
        throw new Error("Missing the required parameter 'quantity' when calling getBrokerage");
      }
      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling getBrokerage");
      }
      // verify the required parameter 'transactionType' is set
      if (transactionType === undefined || transactionType === null) {
        throw new Error("Missing the required parameter 'transactionType' when calling getBrokerage");
      }
      // verify the required parameter 'price' is set
      if (price === undefined || price === null) {
        throw new Error("Missing the required parameter 'price' when calling getBrokerage");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getBrokerage");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'instrument_token': instrumentToken,'quantity': quantity,'product': product,'transaction_type': transactionType,'price': price
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = GetBrokerageResponse;

      return this.apiClient.callApi(
        '/v2/charges/brokerage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postMargin operation.
     * @callback moduleapi/ChargeApi~postMarginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostMarginResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate Margin
     * Compute Margin
     * @param {module:model/MarginRequest} body 
     * @param {module:api/ChargeApi~postMarginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postMargin(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postMargin");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', '*/*'];
      let returnType = PostMarginResponse;

      return this.apiClient.callApi(
        '/v2/charges/margin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}