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
import {ApiClient} from "../ApiClient";
import {ApiGatewayErrorResponse} from '../model/ApiGatewayErrorResponse';
import {IndieUserInitTokenResponse} from '../model/IndieUserInitTokenResponse';
import {IndieUserTokenRequest} from '../model/IndieUserTokenRequest';
import {LogoutResponse} from '../model/LogoutResponse';
import {OAuthClientException} from '../model/OAuthClientException';
import {TokenResponse} from '../model/TokenResponse';

/**
* Login service.
* @module api/LoginApi
* @version v2
*/
export class LoginApi {

    /**
    * Constructs a new LoginApi. 
    * @alias module:api/LoginApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the authorize operation.
     * @callback moduleapi/LoginApi~authorizeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authorize API
     * This provides details on the login endpoint.
     * @param {String} clientId 
     * @param {String} redirectUri 
     * @param {String} apiVersion API Version Header
     * @param {Object} opts Optional parameters
     * @param {String} opts.state 
     * @param {String} opts.scope 
     * @param {module:api/LoginApi~authorizeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authorize(clientId, redirectUri, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling authorize");
      }
      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling authorize");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling authorize");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'client_id': clientId,'redirect_uri': redirectUri,'state': opts['state'],'scope': opts['scope']
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v2/login/authorization/dialog', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    mapToInitTokenRequestForIndieUser(data) {
      let obj = {};
      if (data) {
        if (data.hasOwnProperty('clientSecret'))
          obj.client_secret = ApiClient.convertToType(data['clientSecret'], 'String');

      }
      return obj;
    }
    /**
     * Callback function to receive the result of the initTokenRequestForIndieUser operation.
     * @callback moduleapi/LoginApi~initTokenRequestForIndieUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IndieUserInitTokenResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Init token API
     * This API provides the initialize the generate token and it&#x27;s expiry for an indie user
     * @param {module:model/IndieUserTokenRequest} body 
     * @param {String} clientId 
     * @param {module:api/LoginApi~initTokenRequestForIndieUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    initTokenRequestForIndieUser(body, clientId, callback) {
      
      let postBody = this.mapToInitTokenRequestForIndieUser(body);
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling initTokenRequestForIndieUser");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling initTokenRequestForIndieUser");
      }

      let pathParams = {
        'client_id': clientId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', '*/*'];
      let returnType = IndieUserInitTokenResponse;

      return this.apiClient.callApi(
        '/v3/login/auth/token/request/{client_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the logout operation.
     * @callback moduleapi/LoginApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogoutResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout
     * Logout
     * @param {String} apiVersion API Version Header
     * @param {module:api/LoginApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    logout(apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling logout");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['*/*', 'application/json'];
      let returnType = LogoutResponse;

      return this.apiClient.callApi(
        '/v2/logout', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the token operation.
     * @callback moduleapi/LoginApi~tokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TokenResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get token API
     * This API provides the functionality to obtain opaque token from authorization_code exchange and also provides the user’s profile in the same response.
     * @param {String} apiVersion API Version Header
     * @param {Object} opts Optional parameters
     * @param {String} opts.code 
     * @param {String} opts.clientId 
     * @param {String} opts.clientSecret 
     * @param {String} opts.redirectUri 
     * @param {String} opts.grantType 
     * @param {module:api/LoginApi~tokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    token(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling token");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        'code': opts['code'],'client_id': opts['clientId'],'client_secret': opts['clientSecret'],'redirect_uri': opts['redirectUri'],'grant_type': opts['grantType']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json', '*/*'];
      let returnType = TokenResponse;

      return this.apiClient.callApi(
        '/v2/login/authorization/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}