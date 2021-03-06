/**
 * ORY Hydra - Cloud Native OAuth 2.0 and OpenID Connect Server
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here. Keep in mind that this document reflects the latest branch, always. Support for versioned documentation is coming in the future.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      'ApiClient',
      'model/AcceptConsentRequest',
      'model/AcceptLoginRequest',
      'model/AttributeTypeAndValue',
      'model/AuthenticationSession',
      'model/Certificate',
      'model/CompletedRequest',
      'model/ConsentRequest',
      'model/ConsentRequestSession',
      'model/ExtKeyUsage',
      'model/Extension',
      'model/FlushInactiveOAuth2TokensRequest',
      'model/HealthNotReadyStatus',
      'model/HealthStatus',
      'model/IP',
      'model/IPMask',
      'model/IPNet',
      'model/InlineResponse401',
      'model/JSONWebKey',
      'model/JSONWebKeySet',
      'model/JoseWebKeySetRequest',
      'model/JsonWebKey',
      'model/JsonWebKeySet',
      'model/JsonWebKeySetGeneratorRequest',
      'model/KeyUsage',
      'model/LoginRequest',
      'model/ModelInt',
      'model/Name',
      'model/OAuth2Client',
      'model/OAuth2TokenIntrospection',
      'model/OauthTokenResponse',
      'model/ObjectIdentifier',
      'model/OpenIDConnectContext',
      'model/PublicKeyAlgorithm',
      'model/RawMessage',
      'model/RejectRequest',
      'model/SignatureAlgorithm',
      'model/SwaggerFlushInactiveAccessTokens',
      'model/SwaggerJsonWebKeyQuery',
      'model/SwaggerJwkCreateSet',
      'model/SwaggerJwkSetQuery',
      'model/SwaggerJwkUpdateSet',
      'model/SwaggerJwkUpdateSetKey',
      'model/SwaggerOAuthIntrospectionRequest',
      'model/SwaggerRevokeOAuth2TokenParameters',
      'model/URL',
      'model/Userinfo',
      'model/UserinfoResponse',
      'model/Version',
      'model/WellKnown',
      'api/HealthApi',
      'api/JsonWebKeyApi',
      'api/MetricsApi',
      'api/OAuth2Api',
      'api/VersionApi'
    ], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('./ApiClient'),
      require('./model/AcceptConsentRequest'),
      require('./model/AcceptLoginRequest'),
      require('./model/AttributeTypeAndValue'),
      require('./model/AuthenticationSession'),
      require('./model/Certificate'),
      require('./model/CompletedRequest'),
      require('./model/ConsentRequest'),
      require('./model/ConsentRequestSession'),
      require('./model/ExtKeyUsage'),
      require('./model/Extension'),
      require('./model/FlushInactiveOAuth2TokensRequest'),
      require('./model/HealthNotReadyStatus'),
      require('./model/HealthStatus'),
      require('./model/IP'),
      require('./model/IPMask'),
      require('./model/IPNet'),
      require('./model/InlineResponse401'),
      require('./model/JSONWebKey'),
      require('./model/JSONWebKeySet'),
      require('./model/JoseWebKeySetRequest'),
      require('./model/JsonWebKey'),
      require('./model/JsonWebKeySet'),
      require('./model/JsonWebKeySetGeneratorRequest'),
      require('./model/KeyUsage'),
      require('./model/LoginRequest'),
      require('./model/ModelInt'),
      require('./model/Name'),
      require('./model/OAuth2Client'),
      require('./model/OAuth2TokenIntrospection'),
      require('./model/OauthTokenResponse'),
      require('./model/ObjectIdentifier'),
      require('./model/OpenIDConnectContext'),
      require('./model/PublicKeyAlgorithm'),
      require('./model/RawMessage'),
      require('./model/RejectRequest'),
      require('./model/SignatureAlgorithm'),
      require('./model/SwaggerFlushInactiveAccessTokens'),
      require('./model/SwaggerJsonWebKeyQuery'),
      require('./model/SwaggerJwkCreateSet'),
      require('./model/SwaggerJwkSetQuery'),
      require('./model/SwaggerJwkUpdateSet'),
      require('./model/SwaggerJwkUpdateSetKey'),
      require('./model/SwaggerOAuthIntrospectionRequest'),
      require('./model/SwaggerRevokeOAuth2TokenParameters'),
      require('./model/URL'),
      require('./model/Userinfo'),
      require('./model/UserinfoResponse'),
      require('./model/Version'),
      require('./model/WellKnown'),
      require('./api/HealthApi'),
      require('./api/JsonWebKeyApi'),
      require('./api/MetricsApi'),
      require('./api/OAuth2Api'),
      require('./api/VersionApi')
    )
  }
})(function(
  ApiClient,
  AcceptConsentRequest,
  AcceptLoginRequest,
  AttributeTypeAndValue,
  AuthenticationSession,
  Certificate,
  CompletedRequest,
  ConsentRequest,
  ConsentRequestSession,
  ExtKeyUsage,
  Extension,
  FlushInactiveOAuth2TokensRequest,
  HealthNotReadyStatus,
  HealthStatus,
  IP,
  IPMask,
  IPNet,
  InlineResponse401,
  JSONWebKey,
  JSONWebKeySet,
  JoseWebKeySetRequest,
  JsonWebKey,
  JsonWebKeySet,
  JsonWebKeySetGeneratorRequest,
  KeyUsage,
  LoginRequest,
  ModelInt,
  Name,
  OAuth2Client,
  OAuth2TokenIntrospection,
  OauthTokenResponse,
  ObjectIdentifier,
  OpenIDConnectContext,
  PublicKeyAlgorithm,
  RawMessage,
  RejectRequest,
  SignatureAlgorithm,
  SwaggerFlushInactiveAccessTokens,
  SwaggerJsonWebKeyQuery,
  SwaggerJwkCreateSet,
  SwaggerJwkSetQuery,
  SwaggerJwkUpdateSet,
  SwaggerJwkUpdateSetKey,
  SwaggerOAuthIntrospectionRequest,
  SwaggerRevokeOAuth2TokenParameters,
  URL,
  Userinfo,
  UserinfoResponse,
  Version,
  WellKnown,
  HealthApi,
  JsonWebKeyApi,
  MetricsApi,
  OAuth2Api,
  VersionApi
) {
  'use strict'

  /**
   * Welcome_to_the_ORY_Hydra_HTTP_API_documentation__You_will_find_documentation_for_all_HTTP_APIs_here__Keep_in_mind_that_this_document_reflects_the_latest_branch_always__Support_for_versioned_documentation_is_coming_in_the_future_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var OryHydraCloudNativeOAuth20AndOpenIdConnectServer = require('index'); // See note below*.
   * var xxxSvc = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new OryHydraCloudNativeOAuth20AndOpenIdConnectServer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version Latest
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AcceptConsentRequest model constructor.
     * @property {module:model/AcceptConsentRequest}
     */
    AcceptConsentRequest: AcceptConsentRequest,
    /**
     * The AcceptLoginRequest model constructor.
     * @property {module:model/AcceptLoginRequest}
     */
    AcceptLoginRequest: AcceptLoginRequest,
    /**
     * The AttributeTypeAndValue model constructor.
     * @property {module:model/AttributeTypeAndValue}
     */
    AttributeTypeAndValue: AttributeTypeAndValue,
    /**
     * The AuthenticationSession model constructor.
     * @property {module:model/AuthenticationSession}
     */
    AuthenticationSession: AuthenticationSession,
    /**
     * The Certificate model constructor.
     * @property {module:model/Certificate}
     */
    Certificate: Certificate,
    /**
     * The CompletedRequest model constructor.
     * @property {module:model/CompletedRequest}
     */
    CompletedRequest: CompletedRequest,
    /**
     * The ConsentRequest model constructor.
     * @property {module:model/ConsentRequest}
     */
    ConsentRequest: ConsentRequest,
    /**
     * The ConsentRequestSession model constructor.
     * @property {module:model/ConsentRequestSession}
     */
    ConsentRequestSession: ConsentRequestSession,
    /**
     * The ExtKeyUsage model constructor.
     * @property {module:model/ExtKeyUsage}
     */
    ExtKeyUsage: ExtKeyUsage,
    /**
     * The Extension model constructor.
     * @property {module:model/Extension}
     */
    Extension: Extension,
    /**
     * The FlushInactiveOAuth2TokensRequest model constructor.
     * @property {module:model/FlushInactiveOAuth2TokensRequest}
     */
    FlushInactiveOAuth2TokensRequest: FlushInactiveOAuth2TokensRequest,
    /**
     * The HealthNotReadyStatus model constructor.
     * @property {module:model/HealthNotReadyStatus}
     */
    HealthNotReadyStatus: HealthNotReadyStatus,
    /**
     * The HealthStatus model constructor.
     * @property {module:model/HealthStatus}
     */
    HealthStatus: HealthStatus,
    /**
     * The IP model constructor.
     * @property {module:model/IP}
     */
    IP: IP,
    /**
     * The IPMask model constructor.
     * @property {module:model/IPMask}
     */
    IPMask: IPMask,
    /**
     * The IPNet model constructor.
     * @property {module:model/IPNet}
     */
    IPNet: IPNet,
    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401: InlineResponse401,
    /**
     * The JSONWebKey model constructor.
     * @property {module:model/JSONWebKey}
     */
    JSONWebKey: JSONWebKey,
    /**
     * The JSONWebKeySet model constructor.
     * @property {module:model/JSONWebKeySet}
     */
    JSONWebKeySet: JSONWebKeySet,
    /**
     * The JoseWebKeySetRequest model constructor.
     * @property {module:model/JoseWebKeySetRequest}
     */
    JoseWebKeySetRequest: JoseWebKeySetRequest,
    /**
     * The JsonWebKey model constructor.
     * @property {module:model/JsonWebKey}
     */
    JsonWebKey: JsonWebKey,
    /**
     * The JsonWebKeySet model constructor.
     * @property {module:model/JsonWebKeySet}
     */
    JsonWebKeySet: JsonWebKeySet,
    /**
     * The JsonWebKeySetGeneratorRequest model constructor.
     * @property {module:model/JsonWebKeySetGeneratorRequest}
     */
    JsonWebKeySetGeneratorRequest: JsonWebKeySetGeneratorRequest,
    /**
     * The KeyUsage model constructor.
     * @property {module:model/KeyUsage}
     */
    KeyUsage: KeyUsage,
    /**
     * The LoginRequest model constructor.
     * @property {module:model/LoginRequest}
     */
    LoginRequest: LoginRequest,
    /**
     * The ModelInt model constructor.
     * @property {module:model/ModelInt}
     */
    ModelInt: ModelInt,
    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name: Name,
    /**
     * The OAuth2Client model constructor.
     * @property {module:model/OAuth2Client}
     */
    OAuth2Client: OAuth2Client,
    /**
     * The OAuth2TokenIntrospection model constructor.
     * @property {module:model/OAuth2TokenIntrospection}
     */
    OAuth2TokenIntrospection: OAuth2TokenIntrospection,
    /**
     * The OauthTokenResponse model constructor.
     * @property {module:model/OauthTokenResponse}
     */
    OauthTokenResponse: OauthTokenResponse,
    /**
     * The ObjectIdentifier model constructor.
     * @property {module:model/ObjectIdentifier}
     */
    ObjectIdentifier: ObjectIdentifier,
    /**
     * The OpenIDConnectContext model constructor.
     * @property {module:model/OpenIDConnectContext}
     */
    OpenIDConnectContext: OpenIDConnectContext,
    /**
     * The PublicKeyAlgorithm model constructor.
     * @property {module:model/PublicKeyAlgorithm}
     */
    PublicKeyAlgorithm: PublicKeyAlgorithm,
    /**
     * The RawMessage model constructor.
     * @property {module:model/RawMessage}
     */
    RawMessage: RawMessage,
    /**
     * The RejectRequest model constructor.
     * @property {module:model/RejectRequest}
     */
    RejectRequest: RejectRequest,
    /**
     * The SignatureAlgorithm model constructor.
     * @property {module:model/SignatureAlgorithm}
     */
    SignatureAlgorithm: SignatureAlgorithm,
    /**
     * The SwaggerFlushInactiveAccessTokens model constructor.
     * @property {module:model/SwaggerFlushInactiveAccessTokens}
     */
    SwaggerFlushInactiveAccessTokens: SwaggerFlushInactiveAccessTokens,
    /**
     * The SwaggerJsonWebKeyQuery model constructor.
     * @property {module:model/SwaggerJsonWebKeyQuery}
     */
    SwaggerJsonWebKeyQuery: SwaggerJsonWebKeyQuery,
    /**
     * The SwaggerJwkCreateSet model constructor.
     * @property {module:model/SwaggerJwkCreateSet}
     */
    SwaggerJwkCreateSet: SwaggerJwkCreateSet,
    /**
     * The SwaggerJwkSetQuery model constructor.
     * @property {module:model/SwaggerJwkSetQuery}
     */
    SwaggerJwkSetQuery: SwaggerJwkSetQuery,
    /**
     * The SwaggerJwkUpdateSet model constructor.
     * @property {module:model/SwaggerJwkUpdateSet}
     */
    SwaggerJwkUpdateSet: SwaggerJwkUpdateSet,
    /**
     * The SwaggerJwkUpdateSetKey model constructor.
     * @property {module:model/SwaggerJwkUpdateSetKey}
     */
    SwaggerJwkUpdateSetKey: SwaggerJwkUpdateSetKey,
    /**
     * The SwaggerOAuthIntrospectionRequest model constructor.
     * @property {module:model/SwaggerOAuthIntrospectionRequest}
     */
    SwaggerOAuthIntrospectionRequest: SwaggerOAuthIntrospectionRequest,
    /**
     * The SwaggerRevokeOAuth2TokenParameters model constructor.
     * @property {module:model/SwaggerRevokeOAuth2TokenParameters}
     */
    SwaggerRevokeOAuth2TokenParameters: SwaggerRevokeOAuth2TokenParameters,
    /**
     * The URL model constructor.
     * @property {module:model/URL}
     */
    URL: URL,
    /**
     * The Userinfo model constructor.
     * @property {module:model/Userinfo}
     */
    Userinfo: Userinfo,
    /**
     * The UserinfoResponse model constructor.
     * @property {module:model/UserinfoResponse}
     */
    UserinfoResponse: UserinfoResponse,
    /**
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version: Version,
    /**
     * The WellKnown model constructor.
     * @property {module:model/WellKnown}
     */
    WellKnown: WellKnown,
    /**
     * The HealthApi service constructor.
     * @property {module:api/HealthApi}
     */
    HealthApi: HealthApi,
    /**
     * The JsonWebKeyApi service constructor.
     * @property {module:api/JsonWebKeyApi}
     */
    JsonWebKeyApi: JsonWebKeyApi,
    /**
     * The MetricsApi service constructor.
     * @property {module:api/MetricsApi}
     */
    MetricsApi: MetricsApi,
    /**
     * The OAuth2Api service constructor.
     * @property {module:api/OAuth2Api}
     */
    OAuth2Api: OAuth2Api,
    /**
     * The VersionApi service constructor.
     * @property {module:api/VersionApi}
     */
    VersionApi: VersionApi
  }

  return exports
})
