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
 * The OAuthClientExceptionCauseStackTrace model module.
 * @module model/OAuthClientExceptionCauseStackTrace
 * @version v2
 */
export class OAuthClientExceptionCauseStackTrace {
  /**
   * Constructs a new <code>OAuthClientExceptionCauseStackTrace</code>.
   * @alias module:model/OAuthClientExceptionCauseStackTrace
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OAuthClientExceptionCauseStackTrace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuthClientExceptionCauseStackTrace} obj Optional instance to populate.
   * @return {module:model/OAuthClientExceptionCauseStackTrace} The populated <code>OAuthClientExceptionCauseStackTrace</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OAuthClientExceptionCauseStackTrace();
      if (data.hasOwnProperty('classLoaderName'))
        obj.classLoaderName = ApiClient.convertToType(data['classLoaderName'], 'String');
      if (data.hasOwnProperty('moduleName'))
        obj.moduleName = ApiClient.convertToType(data['moduleName'], 'String');
      if (data.hasOwnProperty('moduleVersion'))
        obj.moduleVersion = ApiClient.convertToType(data['moduleVersion'], 'String');
      if (data.hasOwnProperty('methodName'))
        obj.methodName = ApiClient.convertToType(data['methodName'], 'String');
      if (data.hasOwnProperty('fileName'))
        obj.fileName = ApiClient.convertToType(data['fileName'], 'String');
      if (data.hasOwnProperty('lineNumber'))
        obj.lineNumber = ApiClient.convertToType(data['lineNumber'], 'Number');
      if (data.hasOwnProperty('className'))
        obj.className = ApiClient.convertToType(data['className'], 'String');
      if (data.hasOwnProperty('nativeMethod'))
        obj.nativeMethod = ApiClient.convertToType(data['nativeMethod'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} classLoaderName
 */
OAuthClientExceptionCauseStackTrace.prototype.classLoaderName = undefined;

/**
 * @member {String} moduleName
 */
OAuthClientExceptionCauseStackTrace.prototype.moduleName = undefined;

/**
 * @member {String} moduleVersion
 */
OAuthClientExceptionCauseStackTrace.prototype.moduleVersion = undefined;

/**
 * @member {String} methodName
 */
OAuthClientExceptionCauseStackTrace.prototype.methodName = undefined;

/**
 * @member {String} fileName
 */
OAuthClientExceptionCauseStackTrace.prototype.fileName = undefined;

/**
 * @member {Number} lineNumber
 */
OAuthClientExceptionCauseStackTrace.prototype.lineNumber = undefined;

/**
 * @member {String} className
 */
OAuthClientExceptionCauseStackTrace.prototype.className = undefined;

/**
 * @member {Boolean} nativeMethod
 */
OAuthClientExceptionCauseStackTrace.prototype.nativeMethod = undefined;

