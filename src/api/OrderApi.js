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
import {CancelOrExitMultiOrderResponse} from '../model/CancelOrExitMultiOrderResponse';
import {CancelOrderResponse} from '../model/CancelOrderResponse';
import {GetOrderBookResponse} from '../model/GetOrderBookResponse';
import {GetOrderResponse} from '../model/GetOrderResponse';
import {GetTradeResponse} from '../model/GetTradeResponse';
import {ModifyOrderRequest} from '../model/ModifyOrderRequest';
import {ModifyOrderResponse} from '../model/ModifyOrderResponse';
import {PlaceOrderRequest} from '../model/PlaceOrderRequest';
import {PlaceOrderResponse} from '../model/PlaceOrderResponse';
import { GetOrderDetailsResponse } from "../model/GetOrderDetailsResponse";
import {MultiOrderRequest} from '../model/MultiOrderRequest';
import {MultiOrderResponse} from '../model/MultiOrderResponse';

/**
* Order service.
* @module api/OrderApi
* @version v2
*/
export class OrderApi {

    /**
    * Constructs a new OrderApi. 
    * @alias module:api/OrderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

  
    /**
     * Callback function to receive the result of the cancelMultiOrder operation.
     * @callback moduleapi/OrderApi~cancelMultiOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelOrExitMultiOrderResponse{ data The data returned by the service call.
    * @param {String} response The complete HTTP response.
    */

   /**
    * Cancel multi order
    * API to cancel all the open or pending orders which can be applied to both AMO and regular orders.
    * @param {Object} opts Optional parameters
    * @param {String} opts.tag The tag associated with the orders for which the orders must be cancelled
    * @param {String} opts.segment The segment for which the orders must be cancelled
    * @param {module:api/OrderApi~cancelMultiOrderCallback} callback The callback function, accepting three arguments: error, data, response
    * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
    */
   cancelMultiOrder(opts, callback) {
     opts = opts || {};
     let postBody = null;

     let pathParams = {
       
     };
     let queryParams = {
       'tag': opts['tag'],'segment': opts['segment']
     };
     let headerParams = {
       
     };
     let formParams = {
       
     };

     let authNames = ['OAUTH2'];
     let contentTypes = [];
     let accepts = ['application/json', '*/*'];
     let returnType = CancelOrExitMultiOrderResponse;

     return this.apiClient.callApi(
       '/v2/order/multi/cancel', 'DELETE',
       pathParams, queryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType, callback
     );
   }

    /**
     * Callback function to receive the result of the cancelOrder operation.
     * @callback moduleapi/OrderApi~cancelOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelOrderResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel order
     * Cancel order API can be used for two purposes: Cancelling an open order which could be an AMO or a normal order It is also used to EXIT a CO or OCO(bracket order)
     * @param {String} orderId The order ID for which the order must be cancelled
     * @param {String} apiVersion API Version Header
     * @param {module:api/OrderApi~cancelOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cancelOrder(orderId, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling cancelOrder");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling cancelOrder");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'order_id': orderId
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = CancelOrderResponse;

      return this.apiClient.callApi(
        '/v2/order/cancel', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
/**
     * Exit all positions
     * This API provides the functionality to exit all the positions 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag The tag associated with the positions for which the positions must be exit
     * @param {String} opts.segment The segment for which the positions must be exit
     * @param {module:api/OrderApi~exitPositionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
        exitPositions(opts, callback) {
          opts = opts || {};
          let postBody = null;
    
          let pathParams = {
            
          };
          let queryParams = {
            'tag': opts['tag'],'segment': opts['segment']
          };
          let headerParams = {
            
          };
          let formParams = {
            
          };
    
          let authNames = ['OAUTH2'];
          let contentTypes = [];
          let accepts = ['application/json', '*/*'];
          let returnType = CancelOrExitMultiOrderResponse;
    
          return this.apiClient.callApi(
            '/v2/order/positions/exit', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        }
    /**
     * Callback function to receive the result of the getOrderBook operation.
     * @callback moduleapi/OrderApi~getOrderBookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrderBookResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get order book
     * This API provides the list of orders placed by the user. The orders placed by the user is transient for a day and is cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.
     * @param {String} apiVersion API Version Header
     * @param {module:api/OrderApi~getOrderBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrderBook(apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getOrderBook");
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
      let returnType = GetOrderBookResponse;

      return this.apiClient.callApi(
        '/v2/order/retrieve-all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrderDetails operation.
     * @callback moduleapi/OrderApi~getOrderDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrderResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get order details
     * This API provides the details of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.  The order history can be requested either using order_id or tag.  If both the options are passed, the history of the order which precisely matches both the order_id and tag will be returned in the response.  If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the response.
     * @param {String} apiVersion API Version Header
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderId The order reference ID for which the order history is required
     * @param {String} opts.tag The unique tag of the order for which the order history is being requested
     * @param {module:api/OrderApi~getOrderDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrderDetails(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getOrderDetails");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'order_id': opts['orderId'],'tag': opts['tag']
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = GetOrderResponse;

      return this.apiClient.callApi(
        '/v2/order/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrderStatus operation.
     * @callback moduleapi/OrderApi~getOrderStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrderDetailsResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get order details
     * This API provides the recent detail of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session.\\n\\nThe order details can be requested using order_id.  
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderId The order reference ID for which the order details is required
     * @param {module:api/OrderApi~getOrderStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrderStatus(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'order_id': opts['orderId']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = GetOrderDetailsResponse;

      return this.apiClient.callApi(
        '/v2/order/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTradeHistory operation.
     * @callback moduleapi/OrderApi~getTradeHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTradeResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get trades
     * Retrieve the trades executed for the day
     * @param {String} apiVersion API Version Header
     * @param {module:api/OrderApi~getTradeHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTradeHistory(apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getTradeHistory");
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
      let returnType = GetTradeResponse;

      return this.apiClient.callApi(
        '/v2/order/trades/get-trades-for-day', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTradesByOrder operation.
     * @callback moduleapi/OrderApi~getTradesByOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTradeResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get trades for order
     * Retrieve the trades executed for an order
     * @param {String} orderId The order ID for which the order to get order trades
     * @param {String} apiVersion API Version Header
     * @param {module:api/OrderApi~getTradesByOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTradesByOrder(orderId, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getTradesByOrder");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getTradesByOrder");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'order_id': orderId
      };
      let headerParams = {
        'Api-Version': apiVersion
      };
      let formParams = {
        
      };

      let authNames = ['OAUTH2'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = GetTradeResponse;

      return this.apiClient.callApi(
        '/v2/order/trades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
/**
     * Callback function to receive the result of the placeMultiOrder operation.
     * @callback moduleapi/OrderApi~placeMultiOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MultiOrderResponse{ data The data returned by the service call.
        * @param {String} response The complete HTTP response.
        */
   
       /**
        * Place multi order
        * This API allows you to place multiple orders to the exchange via Upstox.
        * @param {Array.<module:model/MultiOrderRequest>} body 
        * @param {module:api/OrderApi~placeMultiOrderCallback} callback The callback function, accepting three arguments: error, data, response
        * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
        */
       placeMultiOrder(body, callback) {
         
         let postBody = body;
         // verify the required parameter 'body' is set
         if (body === undefined || body === null) {
           throw new Error("Missing the required parameter 'body' when calling placeMultiOrder");
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
         let accepts = ['*/*', 'application/json'];
         let returnType = MultiOrderResponse;
   
         return this.apiClient.callApi(
           '/v2/order/multi/place', 'POST',
           pathParams, queryParams, headerParams, formParams, postBody,
           authNames, contentTypes, accepts, returnType, callback
         );
       }
   
    /**
     * Callback function to receive the result of the modifyOrder operation.
     * @callback moduleapi/OrderApi~modifyOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModifyOrderResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    mapToModifyOrderRequest(data) {
      let obj = {};
      if (data) {
        if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
        if (data.hasOwnProperty('validity'))
          obj.validity = ApiClient.convertToType(data['validity'], 'String');
        if (data.hasOwnProperty('price'))
          obj.price = ApiClient.convertToType(data['price'], 'Number');
        if (data.hasOwnProperty('orderId'))
          obj.order_id = ApiClient.convertToType(data['orderId'], 'String');
        if (data.hasOwnProperty('orderType'))
          obj.order_type = ApiClient.convertToType(data['orderType'], 'String');
        if (data.hasOwnProperty('disclosedQuantity'))
          obj.disclosed_quantity = ApiClient.convertToType(data['disclosedQuantity'], 'Number');
        if (data.hasOwnProperty('triggerPrice'))
          obj.trigger_price = ApiClient.convertToType(data['triggerPrice'], 'Number');
      }
      return obj;
    }

    /**
     * Modify order
     * This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send the optional parameter which needs to be modified. In case the optional parameters aren&#x27;t sent, the default will be considered from the original order
     * @param {module:model/ModifyOrderRequest} body 
     * @param {String} apiVersion API Version Header
     * @param {module:api/OrderApi~modifyOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    modifyOrder(body, apiVersion, callback) {
      
      let postBody = this.mapToModifyOrderRequest(body);
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyOrder");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling modifyOrder");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', '*/*'];
      let returnType = ModifyOrderResponse;

      return this.apiClient.callApi(
        '/v2/order/modify', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the placeOrder operation.
     * @callback moduleapi/OrderApi~placeOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlaceOrderResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    mapToPlaceOrderRequest(data) {
      let obj = {};
      if (data) {
        if (data.hasOwnProperty('quantity'))
          obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
        if (data.hasOwnProperty('product'))
          obj.product = ApiClient.convertToType(data['product'], 'String');
        if (data.hasOwnProperty('validity'))
          obj.validity = ApiClient.convertToType(data['validity'], 'String');
        if (data.hasOwnProperty('price'))
          obj.price = ApiClient.convertToType(data['price'], 'Number');
        if (data.hasOwnProperty('tag'))
          obj.tag = ApiClient.convertToType(data['tag'], 'String');
        if (data.hasOwnProperty('instrumentToken'))
          obj.instrument_token = ApiClient.convertToType(data['instrumentToken'], 'String');
        if (data.hasOwnProperty('orderType'))
          obj.order_type = ApiClient.convertToType(data['orderType'], 'String');
        if (data.hasOwnProperty('transactionType'))
          obj.transaction_type = ApiClient.convertToType(data['transactionType'], 'String');
        if (data.hasOwnProperty('disclosedQuantity'))
          obj.disclosed_quantity = ApiClient.convertToType(data['disclosedQuantity'], 'Number');
        if (data.hasOwnProperty('triggerPrice'))
          obj.trigger_price = ApiClient.convertToType(data['triggerPrice'], 'Number');
        if (data.hasOwnProperty('isAmo'))
          obj.is_amo = ApiClient.convertToType(data['isAmo'], 'Boolean');
      }
      return obj;
    }

    /**
     * Place order
     * This API allows you to place an order to the exchange via Upstox.
     * @param {module:model/PlaceOrderRequest} body 
     * @param {String} apiVersion API Version Header
     * @param {module:api/OrderApi~placeOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    placeOrder(body, apiVersion, callback) {
      
      let postBody = this.mapToPlaceOrderRequest(body);
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling placeOrder");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling placeOrder");
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
      let contentTypes = ['application/json'];
      let accepts = ['*/*', 'application/json'];
      let returnType = PlaceOrderResponse;

      return this.apiClient.callApi(
        '/v2/order/place', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}