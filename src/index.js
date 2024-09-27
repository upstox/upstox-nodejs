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
import {ApiClient} from './ApiClient';
import {AnalyticsData} from './model/AnalyticsData';
import {ApiGatewayErrorResponse} from './model/ApiGatewayErrorResponse';
import {BrokerageData} from './model/BrokerageData';
import {BrokerageTaxes} from './model/BrokerageTaxes';
import {BrokerageWrapperData} from './model/BrokerageWrapperData';
import {CancelOrderData} from './model/CancelOrderData';
import {CancelOrderResponse} from './model/CancelOrderResponse';
import {ConvertPositionData} from './model/ConvertPositionData';
import {ConvertPositionRequest} from './model/ConvertPositionRequest';
import {ConvertPositionResponse} from './model/ConvertPositionResponse';
import {Depth} from './model/Depth';
import {DepthMap} from './model/DepthMap';
import {DpPlan} from './model/DpPlan';
import {ExchangeTimingData} from './model/ExchangeTimingData';
import {GetBrokerageResponse} from './model/GetBrokerageResponse';
import {GetExchangeTimingResponse} from './model/GetExchangeTimingResponse';
import {GetFullMarketQuoteResponse} from './model/GetFullMarketQuoteResponse';
import {GetHistoricalCandleResponse} from './model/GetHistoricalCandleResponse';
import {GetHoldingsResponse} from './model/GetHoldingsResponse';
import {GetHolidayResponse} from './model/GetHolidayResponse';
import {GetIntraDayCandleResponse} from './model/GetIntraDayCandleResponse';
import {GetMarketQuoteLastTradedPriceResponse} from './model/GetMarketQuoteLastTradedPriceResponse';
import {GetMarketQuoteOHLCResponse} from './model/GetMarketQuoteOHLCResponse';
import {GetMarketStatusResponse} from './model/GetMarketStatusResponse';
import {GetOptionChainResponse} from './model/GetOptionChainResponse';
import {GetOptionContractResponse} from './model/GetOptionContractResponse';
import {GetOrderBookResponse} from './model/GetOrderBookResponse';
import {GetOrderDetailsResponse} from './model/GetOrderDetailsResponse';
import {GetOrderResponse} from './model/GetOrderResponse';
import {GetPositionResponse} from './model/GetPositionResponse';
import {GetProfileResponse} from './model/GetProfileResponse';
import {GetProfitAndLossChargesResponse} from './model/GetProfitAndLossChargesResponse';
import {GetTradeResponse} from './model/GetTradeResponse';
import {GetTradeWiseProfitAndLossDataResponse} from './model/GetTradeWiseProfitAndLossDataResponse';
import {GetTradeWiseProfitAndLossMetaDataResponse} from './model/GetTradeWiseProfitAndLossMetaDataResponse';
import {GetUserFundMarginResponse} from './model/GetUserFundMarginResponse';
import {HistoricalCandleData} from './model/HistoricalCandleData';
import {HoldingsData} from './model/HoldingsData';
import {HolidayData} from './model/HolidayData';
import {Instrument} from './model/Instrument';
import {InstrumentData} from './model/InstrumentData';
import {IntraDayCandleData} from './model/IntraDayCandleData';
import {LogoutResponse} from './model/LogoutResponse';
import {Margin} from './model/Margin';
import {MarginData} from './model/MarginData';
import {MarginRequest} from './model/MarginRequest';
import {MarketData} from './model/MarketData';
import {MarketQuoteOHLC} from './model/MarketQuoteOHLC';
import {MarketQuoteSymbol} from './model/MarketQuoteSymbol';
import {MarketQuoteSymbolLtp} from './model/MarketQuoteSymbolLtp';
import {MarketStatusData} from './model/MarketStatusData';
import {ModifyOrderData} from './model/ModifyOrderData';
import {ModifyOrderRequest} from './model/ModifyOrderRequest';
import {ModifyOrderResponse} from './model/ModifyOrderResponse';
import {OAuthClientException} from './model/OAuthClientException';
import {OAuthClientExceptionCause} from './model/OAuthClientExceptionCause';
import {OAuthClientExceptionCauseStackTrace} from './model/OAuthClientExceptionCauseStackTrace';
import {OAuthClientExceptionCauseSuppressed} from './model/OAuthClientExceptionCauseSuppressed';
import {Ohlc} from './model/Ohlc';
import {OptionStrikeData} from './model/OptionStrikeData';
import {OrderBookData} from './model/OrderBookData';
import {OrderData} from './model/OrderData';
import {OtherTaxes} from './model/OtherTaxes';
import {PlaceOrderData} from './model/PlaceOrderData';
import {PlaceOrderRequest} from './model/PlaceOrderRequest';
import {PlaceOrderResponse} from './model/PlaceOrderResponse';
import {PositionData} from './model/PositionData';
import {PostMarginResponse} from './model/PostMarginResponse';
import {Problem} from './model/Problem';
import {ProfileData} from './model/ProfileData';
import {ProfitAndLossChargesData} from './model/ProfitAndLossChargesData';
import {ProfitAndLossChargesTaxes} from './model/ProfitAndLossChargesTaxes';
import {ProfitAndLossChargesWrapperData} from './model/ProfitAndLossChargesWrapperData';
import {ProfitAndLossMetaData} from './model/ProfitAndLossMetaData';
import {ProfitAndLossMetaDataWrapper} from './model/ProfitAndLossMetaDataWrapper';
import {ProfitAndLossOtherChargesTaxes} from './model/ProfitAndLossOtherChargesTaxes';
import {PutCallOptionChainData} from './model/PutCallOptionChainData';
import {TokenRequest} from './model/TokenRequest';
import {TokenResponse} from './model/TokenResponse';
import {TradeData} from './model/TradeData';
import {TradeHistoryResponse} from './model/TradeHistoryResponse';
import {TradeHistoryResponseMetaData} from './model/TradeHistoryResponseMetaData';
import {TradeHistoryResponsePageData} from './model/TradeHistoryResponsePageData';
import {TradeHistoryResponseTradeData} from './model/TradeHistoryResponseTradeData';
import {TradeWiseMetaData} from './model/TradeWiseMetaData';
import {TradeWiseProfitAndLossData} from './model/TradeWiseProfitAndLossData';
import {UserFundMarginData} from './model/UserFundMarginData';
import {WebsocketAuthRedirectResponse} from './model/WebsocketAuthRedirectResponse';
import {WebsocketAuthRedirectResponseData} from './model/WebsocketAuthRedirectResponseData';
import {ChargeApi} from './api/ChargeApi';
import {HistoryApi} from './api/HistoryApi';
import {LoginApi} from './api/LoginApi';
import {MarketHolidaysAndTimingsApi} from './api/MarketHolidaysAndTimingsApi';
import {MarketQuoteApi} from './api/MarketQuoteApi';
import {OptionsApi} from './api/OptionsApi';
import {OrderApi} from './api/OrderApi';
import {PortfolioApi} from './api/PortfolioApi';
import {PostTradeApi} from './api/PostTradeApi';
import {TradeProfitAndLossApi} from './api/TradeProfitAndLossApi';
import {UserApi} from './api/UserApi';
import {WebsocketApi} from './api/WebsocketApi';
import {MarketDataStreamer} from './feeder/MarketDataStreamer';
import {PortfolioDataStreamer} from './feeder/PortfolioDataStreamer';

/**
* Build_your_App_on_the_Upstox_platform_Banner_httpsapi_v2_upstox_comapi_docsimagesbanner_jpg_banner_IntroductionUpstox_API_is_a_set_of_rest_APIs_that_provide_data_required_to_build_a_complete_investment_and_trading_platform__Execute_orders_in_real_time_manage_user_portfolio_stream_live_market_data__using_Websocket_and_more_with_the_easy_to_understand_API_collection_All_requests_are_over_HTTPS_and_the_requests_are_sent_with_the_content_type_applicationjson__Developers_have_the_option_of_choosing_the_response_type_as_JSON_or_CSV_for_a_few_API_calls_To_be_able_to_use_these_APIs_you_need_to_create_an_App_in_the_Developer_Console_and_generate_your_apiKey_and_apiSecret__You_can_use_a_redirect_URL_which_will_be_called_after_the_login_flow_If_you_are_a_trader_you_can_directly_create_apps_from_Upstox_mobile_app_or_the_desktop_platform_itself_from_Apps_sections_inside_the_Account_Tab__Head_over_to_a_hrefhttpaccount_upstox_comdeveloperapps_target_blankaccount_upstox_comdeveloperappsa_brIf_you_are_a_business_looking_to_integrate_Upstox_APIs_reach_out_to_us_and_we_will_get_a_custom_app_created_for_you_in_no_time_It_is_highly_recommended_that_you_do_not_embed_the_apiSecret_in_your_frontend_app__Create_a_remote_backend_which_does_the_handshake_on_behalf_of_the_frontend_app__Marking_the_apiSecret_in_the_frontend_app_will_make_your_app_vulnerable_to_threats_and_potential_issues_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var UpstoxClient = require('index'); // See note below*.
* var xxxSvc = new UpstoxClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new UpstoxClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new UpstoxClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new UpstoxClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v2
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,
    MarketDataStreamer,
  
    PortfolioDataStreamer,
    /**
     * The AnalyticsData model constructor.
     * @property {module:model/AnalyticsData}
     */
    AnalyticsData,
    /**
     * The ApiGatewayErrorResponse model constructor.
     * @property {module:model/ApiGatewayErrorResponse}
     */
    ApiGatewayErrorResponse,

    /**
     * The BrokerageData model constructor.
     * @property {module:model/BrokerageData}
     */
    BrokerageData,

    /**
     * The BrokerageTaxes model constructor.
     * @property {module:model/BrokerageTaxes}
     */
    BrokerageTaxes,

    /**
     * The BrokerageWrapperData model constructor.
     * @property {module:model/BrokerageWrapperData}
     */
    BrokerageWrapperData,

    /**
     * The CancelOrderData model constructor.
     * @property {module:model/CancelOrderData}
     */
    CancelOrderData,

    /**
     * The CancelOrderResponse model constructor.
     * @property {module:model/CancelOrderResponse}
     */
    CancelOrderResponse,

    /**
     * The ConvertPositionData model constructor.
     * @property {module:model/ConvertPositionData}
     */
    ConvertPositionData,

    /**
     * The ConvertPositionRequest model constructor.
     * @property {module:model/ConvertPositionRequest}
     */
    ConvertPositionRequest,

    /**
     * The ConvertPositionResponse model constructor.
     * @property {module:model/ConvertPositionResponse}
     */
    ConvertPositionResponse,

    /**
     * The Depth model constructor.
     * @property {module:model/Depth}
     */
    Depth,

    /**
     * The DepthMap model constructor.
     * @property {module:model/DepthMap}
     */
    DepthMap,

    /**
     * The DpPlan model constructor.
     * @property {module:model/DpPlan}
     */
    DpPlan,

    /**
     * The ExchangeTimingData model constructor.
     * @property {module:model/ExchangeTimingData}
     */
    ExchangeTimingData,

    /**
     * The GetBrokerageResponse model constructor.
     * @property {module:model/GetBrokerageResponse}
     */
    GetBrokerageResponse,

    /**
     * The GetExchangeTimingResponse model constructor.
     * @property {module:model/GetExchangeTimingResponse}
     */
    GetExchangeTimingResponse,

    /**
     * The GetFullMarketQuoteResponse model constructor.
     * @property {module:model/GetFullMarketQuoteResponse}
     */
    GetFullMarketQuoteResponse,

    /**
     * The GetHistoricalCandleResponse model constructor.
     * @property {module:model/GetHistoricalCandleResponse}
     */
    GetHistoricalCandleResponse,

    /**
     * The GetHoldingsResponse model constructor.
     * @property {module:model/GetHoldingsResponse}
     */
    GetHoldingsResponse,

    /**
     * The GetHolidayResponse model constructor.
     * @property {module:model/GetHolidayResponse}
     */
    GetHolidayResponse,

    /**
     * The GetIntraDayCandleResponse model constructor.
     * @property {module:model/GetIntraDayCandleResponse}
     */
    GetIntraDayCandleResponse,

    /**
     * The GetMarketQuoteLastTradedPriceResponse model constructor.
     * @property {module:model/GetMarketQuoteLastTradedPriceResponse}
     */
    GetMarketQuoteLastTradedPriceResponse,

    /**
     * The GetMarketQuoteOHLCResponse model constructor.
     * @property {module:model/GetMarketQuoteOHLCResponse}
     */
    GetMarketQuoteOHLCResponse,

    /**
     * The GetMarketStatusResponse model constructor.
     * @property {module:model/GetMarketStatusResponse}
     */
    GetMarketStatusResponse,

    /**
     * The GetOptionChainResponse model constructor.
     * @property {module:model/GetOptionChainResponse}
     */
    GetOptionChainResponse,

    /**
     * The GetOptionContractResponse model constructor.
     * @property {module:model/GetOptionContractResponse}
     */
    GetOptionContractResponse,

    /**
     * The GetOrderBookResponse model constructor.
     * @property {module:model/GetOrderBookResponse}
     */
    GetOrderBookResponse,

    /**
     * The GetOrderDetailsResponse model constructor.
     * @property {module:model/GetOrderDetailsResponse}
     */
    GetOrderDetailsResponse,

    /**
     * The GetOrderResponse model constructor.
     * @property {module:model/GetOrderResponse}
     */
    GetOrderResponse,

    /**
     * The GetPositionResponse model constructor.
     * @property {module:model/GetPositionResponse}
     */
    GetPositionResponse,

    /**
     * The GetProfileResponse model constructor.
     * @property {module:model/GetProfileResponse}
     */
    GetProfileResponse,

    /**
     * The GetProfitAndLossChargesResponse model constructor.
     * @property {module:model/GetProfitAndLossChargesResponse}
     */
    GetProfitAndLossChargesResponse,

    /**
     * The GetTradeResponse model constructor.
     * @property {module:model/GetTradeResponse}
     */
    GetTradeResponse,

    /**
     * The GetTradeWiseProfitAndLossDataResponse model constructor.
     * @property {module:model/GetTradeWiseProfitAndLossDataResponse}
     */
    GetTradeWiseProfitAndLossDataResponse,

    /**
     * The GetTradeWiseProfitAndLossMetaDataResponse model constructor.
     * @property {module:model/GetTradeWiseProfitAndLossMetaDataResponse}
     */
    GetTradeWiseProfitAndLossMetaDataResponse,

    /**
     * The GetUserFundMarginResponse model constructor.
     * @property {module:model/GetUserFundMarginResponse}
     */
    GetUserFundMarginResponse,

    /**
     * The HistoricalCandleData model constructor.
     * @property {module:model/HistoricalCandleData}
     */
    HistoricalCandleData,

    /**
     * The HoldingsData model constructor.
     * @property {module:model/HoldingsData}
     */
    HoldingsData,

    /**
     * The HolidayData model constructor.
     * @property {module:model/HolidayData}
     */
    HolidayData,

    /**
     * The Instrument model constructor.
     * @property {module:model/Instrument}
     */
    Instrument,

    /**
     * The InstrumentData model constructor.
     * @property {module:model/InstrumentData}
     */
    InstrumentData,

    /**
     * The IntraDayCandleData model constructor.
     * @property {module:model/IntraDayCandleData}
     */
    IntraDayCandleData,

    /**
     * The LogoutResponse model constructor.
     * @property {module:model/LogoutResponse}
     */
    LogoutResponse,

    /**
     * The Margin model constructor.
     * @property {module:model/Margin}
     */
    Margin,

    /**
     * The MarginData model constructor.
     * @property {module:model/MarginData}
     */
    MarginData,

    /**
     * The MarginRequest model constructor.
     * @property {module:model/MarginRequest}
     */
    MarginRequest,

    /**
     * The MarketData model constructor.
     * @property {module:model/MarketData}
     */
    MarketData,

    /**
     * The MarketQuoteOHLC model constructor.
     * @property {module:model/MarketQuoteOHLC}
     */
    MarketQuoteOHLC,

    /**
     * The MarketQuoteSymbol model constructor.
     * @property {module:model/MarketQuoteSymbol}
     */
    MarketQuoteSymbol,

    /**
     * The MarketQuoteSymbolLtp model constructor.
     * @property {module:model/MarketQuoteSymbolLtp}
     */
    MarketQuoteSymbolLtp,

    /**
     * The MarketStatusData model constructor.
     * @property {module:model/MarketStatusData}
     */
    MarketStatusData,

    /**
     * The ModifyOrderData model constructor.
     * @property {module:model/ModifyOrderData}
     */
    ModifyOrderData,

    /**
     * The ModifyOrderRequest model constructor.
     * @property {module:model/ModifyOrderRequest}
     */
    ModifyOrderRequest,

    /**
     * The ModifyOrderResponse model constructor.
     * @property {module:model/ModifyOrderResponse}
     */
    ModifyOrderResponse,

    /**
     * The OAuthClientException model constructor.
     * @property {module:model/OAuthClientException}
     */
    OAuthClientException,

    /**
     * The OAuthClientExceptionCause model constructor.
     * @property {module:model/OAuthClientExceptionCause}
     */
    OAuthClientExceptionCause,

    /**
     * The OAuthClientExceptionCauseStackTrace model constructor.
     * @property {module:model/OAuthClientExceptionCauseStackTrace}
     */
    OAuthClientExceptionCauseStackTrace,

    /**
     * The OAuthClientExceptionCauseSuppressed model constructor.
     * @property {module:model/OAuthClientExceptionCauseSuppressed}
     */
    OAuthClientExceptionCauseSuppressed,

    /**
     * The Ohlc model constructor.
     * @property {module:model/Ohlc}
     */
    Ohlc,

    /**
     * The OptionStrikeData model constructor.
     * @property {module:model/OptionStrikeData}
     */
    OptionStrikeData,

    /**
     * The OrderBookData model constructor.
     * @property {module:model/OrderBookData}
     */
    OrderBookData,

    /**
     * The OrderData model constructor.
     * @property {module:model/OrderData}
     */
    OrderData,

    /**
     * The OtherTaxes model constructor.
     * @property {module:model/OtherTaxes}
     */
    OtherTaxes,

    /**
     * The PlaceOrderData model constructor.
     * @property {module:model/PlaceOrderData}
     */
    PlaceOrderData,

    /**
     * The PlaceOrderRequest model constructor.
     * @property {module:model/PlaceOrderRequest}
     */
    PlaceOrderRequest,

    /**
     * The PlaceOrderResponse model constructor.
     * @property {module:model/PlaceOrderResponse}
     */
    PlaceOrderResponse,

    /**
     * The PositionData model constructor.
     * @property {module:model/PositionData}
     */
    PositionData,

    /**
     * The PostMarginResponse model constructor.
     * @property {module:model/PostMarginResponse}
     */
    PostMarginResponse,

    /**
     * The Problem model constructor.
     * @property {module:model/Problem}
     */
    Problem,

    /**
     * The ProfileData model constructor.
     * @property {module:model/ProfileData}
     */
    ProfileData,

    /**
     * The ProfitAndLossChargesData model constructor.
     * @property {module:model/ProfitAndLossChargesData}
     */
    ProfitAndLossChargesData,

    /**
     * The ProfitAndLossChargesTaxes model constructor.
     * @property {module:model/ProfitAndLossChargesTaxes}
     */
    ProfitAndLossChargesTaxes,

    /**
     * The ProfitAndLossChargesWrapperData model constructor.
     * @property {module:model/ProfitAndLossChargesWrapperData}
     */
    ProfitAndLossChargesWrapperData,

    /**
     * The ProfitAndLossMetaData model constructor.
     * @property {module:model/ProfitAndLossMetaData}
     */
    ProfitAndLossMetaData,

    /**
     * The ProfitAndLossMetaDataWrapper model constructor.
     * @property {module:model/ProfitAndLossMetaDataWrapper}
     */
    ProfitAndLossMetaDataWrapper,

    /**
     * The ProfitAndLossOtherChargesTaxes model constructor.
     * @property {module:model/ProfitAndLossOtherChargesTaxes}
     */
    ProfitAndLossOtherChargesTaxes,

    /**
     * The PutCallOptionChainData model constructor.
     * @property {module:model/PutCallOptionChainData}
     */
    PutCallOptionChainData,

    /**
     * The TokenRequest model constructor.
     * @property {module:model/TokenRequest}
     */
    TokenRequest,

    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse,

    /**
     * The TradeData model constructor.
     * @property {module:model/TradeData}
     */
    TradeData,

    /**
     * The TradeHistoryResponse model constructor.
     * @property {module:model/TradeHistoryResponse}
     */
    TradeHistoryResponse,

    /**
     * The TradeHistoryResponseMetaData model constructor.
     * @property {module:model/TradeHistoryResponseMetaData}
     */
    TradeHistoryResponseMetaData,

    /**
     * The TradeHistoryResponsePageData model constructor.
     * @property {module:model/TradeHistoryResponsePageData}
     */
    TradeHistoryResponsePageData,

    /**
     * The TradeHistoryResponseTradeData model constructor.
     * @property {module:model/TradeHistoryResponseTradeData}
     */
    TradeHistoryResponseTradeData,

    /**
     * The TradeWiseMetaData model constructor.
     * @property {module:model/TradeWiseMetaData}
     */
    TradeWiseMetaData,

    /**
     * The TradeWiseProfitAndLossData model constructor.
     * @property {module:model/TradeWiseProfitAndLossData}
     */
    TradeWiseProfitAndLossData,

    /**
     * The UserFundMarginData model constructor.
     * @property {module:model/UserFundMarginData}
     */
    UserFundMarginData,

    /**
     * The WebsocketAuthRedirectResponse model constructor.
     * @property {module:model/WebsocketAuthRedirectResponse}
     */
    WebsocketAuthRedirectResponse,

    /**
     * The WebsocketAuthRedirectResponseData model constructor.
     * @property {module:model/WebsocketAuthRedirectResponseData}
     */
    WebsocketAuthRedirectResponseData,

    /**
    * The ChargeApi service constructor.
    * @property {module:api/ChargeApi}
    */
    ChargeApi,

    /**
    * The HistoryApi service constructor.
    * @property {module:api/HistoryApi}
    */
    HistoryApi,

    /**
    * The LoginApi service constructor.
    * @property {module:api/LoginApi}
    */
    LoginApi,

    /**
    * The MarketHolidaysAndTimingsApi service constructor.
    * @property {module:api/MarketHolidaysAndTimingsApi}
    */
    MarketHolidaysAndTimingsApi,

    /**
    * The MarketQuoteApi service constructor.
    * @property {module:api/MarketQuoteApi}
    */
    MarketQuoteApi,

    /**
    * The OptionsApi service constructor.
    * @property {module:api/OptionsApi}
    */
    OptionsApi,

    /**
    * The OrderApi service constructor.
    * @property {module:api/OrderApi}
    */
    OrderApi,

    /**
    * The PortfolioApi service constructor.
    * @property {module:api/PortfolioApi}
    */
    PortfolioApi,

    /**
    * The PostTradeApi service constructor.
    * @property {module:api/PostTradeApi}
    */
    PostTradeApi,

    /**
    * The TradeProfitAndLossApi service constructor.
    * @property {module:api/TradeProfitAndLossApi}
    */
    TradeProfitAndLossApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The WebsocketApi service constructor.
    * @property {module:api/WebsocketApi}
    */
    WebsocketApi
};
