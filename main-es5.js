function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/shared.index */
    "./src/app/shared/shared.index.ts");
    /* harmony import */


    var _core_routes_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/routes/preloading-strategy.service */
    "./src/app/core/routes/preloading-strategy.service.ts");

    var appRoutes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-pages-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/pages.module */
        "./src/app/pages/pages.module.ts")).then(function (m) {
          return m.PagesModule;
        });
      },
      data: {
        preload: false
      }
    }, {
      path: 'validate-token',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | validate-token-validate-token-module */
        [__webpack_require__.e("common"), __webpack_require__.e("validate-token-validate-token-module")]).then(__webpack_require__.bind(null,
        /*! ./validate-token/validate-token.module */
        "./src/app/validate-token/validate-token.module.ts")).then(function (m) {
          return m.ValidateTokenModule;
        });
      }
    }, {
      path: '**',
      component: _shared_shared_index__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
        useHash: true,
        enableTracing: false,
        preloadingStrategy: _core_routes_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_3__["PreloadingStrategyService"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
            useHash: true,
            enableTracing: false,
            preloadingStrategy: _core_routes_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_3__["PreloadingStrategyService"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_idle_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-idle/core */
    "./node_modules/@ng-idle/core/__ivy_ngcc__/fesm2015/ng-idle-core.js");
    /* harmony import */


    var _services_exceptions_error_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/exceptions/error-global */
    "./src/app/services/exceptions/error-global.ts");
    /* harmony import */


    var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/exceptions/error-options */
    "./src/app/services/exceptions/error-options.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-idle/keepalive */
    "./node_modules/@ng-idle/keepalive/__ivy_ngcc__/fesm2015/ng-idle-keepalive.js");
    /* harmony import */


    var _services_exceptions_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/exceptions/logging.service */
    "./src/app/services/exceptions/logging.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_services_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/services.index */
    "./src/app/services/services.index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(_idle, http, _keepalive, errorTypes, _logger, errorStages, errorMessages, translate, _generateQrService, _idleTimeoutService, _validateDataService) {
        _classCallCheck(this, AppComponent);

        this._idle = _idle;
        this.http = http;
        this._keepalive = _keepalive;
        this.errorTypes = errorTypes;
        this._logger = _logger;
        this.errorStages = errorStages;
        this.errorMessages = errorMessages;
        this.translate = translate;
        this._generateQrService = _generateQrService;
        this._idleTimeoutService = _idleTimeoutService;
        this._validateDataService = _validateDataService;
        this.timedOut = false;
        this.langs = ['es', 'en'];
        this.lastPing = null;
        this.idleState = 'Not started.';
        this.idleTimeout();

        if (!_validateDataService.validateId("1020806419")) {
          console.log(_validateDataService.getMessageError());
        }

        if (!_validateDataService.validateIdType("CC")) {
          console.log(_validateDataService.getMessageError());
        }
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var browserlang = this.translate.getBrowserLang();

          if (this.langs.indexOf(browserlang) > -1) {
            this.translate.setDefaultLang(browserlang);
          } else {
            this.translate.setDefaultLang('es');
          }
          /*this._generateQrService.getQRCode().subscribe(resp => {
            console.log(resp);
          });*/

        }
      }, {
        key: "useLanguage",
        value: function useLanguage(lang) {
          this.translate.setDefaultLang(lang);
        }
      }, {
        key: "idleTimeout",
        value: function idleTimeout() {
          var _this = this;

          this._idleTimeoutService.stateSession.subscribe(function (stateSession) {
            if (stateSession) {
              _this._idle.setIdle(1);

              _this._idle.setTimeout(_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['time']['timeSession']);

              _this._idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_INTERRUPTSOURCES"]);

              _this._idle.onIdleEnd.subscribe(function () {
                _this.idleState = 'No longer idle.';
                console.log(_this.idleState);

                _this.reset();
              });

              _this._idle.onTimeout.subscribe(function () {
                _this.idleState = 'Timed out!';
                _this.timedOut = true;
                console.log(_this.idleState); //this.router.navigate(['/']);
              });

              _this._idle.onIdleStart.subscribe(function () {
                _this.idleState = 'You\'ve gone idle!';
                console.log(_this.idleState); //this.childModal.show();
              });

              _this._idle.onTimeoutWarning.subscribe(function (countdown) {
                _this.idleState = 'You will time out in ' + countdown + ' seconds!';
                console.log(_this.idleState);
              });

              _this._keepalive.interval(15);

              _this._keepalive.onPing.subscribe(function () {
                return _this.lastPing = new Date();
              });

              _this.reset();
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this._idle.watch();

          this.idleState = 'Started.';
          this.timedOut = false;
        }
      }, {
        key: "throwError",
        value: function throwError() {
          throw new _services_exceptions_error_global__WEBPACK_IMPORTED_MODULE_2__["ErrorGlobal"](this.errorTypes.ERROR, this.errorStages.QR, this.errorMessages.F143);
        }
      }, {
        key: "throwHttpError",
        value: function throwHttpError() {
          this.http.get('urlhere').subscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_idle_core__WEBPACK_IMPORTED_MODULE_1__["Idle"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__["Keepalive"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exceptions_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorStages"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_services_index__WEBPACK_IMPORTED_MODULE_9__["GenerateQrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_services_index__WEBPACK_IMPORTED_MODULE_9__["IdleTimeoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_services_index__WEBPACK_IMPORTED_MODULE_9__["ValidateDataService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"], _services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"], _services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorStages"]])],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          providers: [_services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"], _services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"], _services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorStages"]]
        }]
      }], function () {
        return [{
          type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_1__["Idle"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__["Keepalive"]
        }, {
          type: _services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"]
        }, {
          type: _services_exceptions_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"]
        }, {
          type: _services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorStages"]
        }, {
          type: _services_exceptions_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _services_services_index__WEBPACK_IMPORTED_MODULE_9__["GenerateQrService"]
        }, {
          type: _services_services_index__WEBPACK_IMPORTED_MODULE_9__["IdleTimeoutService"]
        }, {
          type: _services_services_index__WEBPACK_IMPORTED_MODULE_9__["ValidateDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-idle/keepalive */
    "./node_modules/@ng-idle/keepalive/__ivy_ngcc__/fesm2015/ng-idle-keepalive.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/services.module */
    "./src/app/services/services.module.ts");
    /* harmony import */


    var _core_routes_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core/routes/preloading-strategy.service */
    "./src/app/core/routes/preloading-strategy.service.ts");
    /* harmony import */


    var _core_interceptors_auth_token_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./core/interceptors/auth-token/auth-token.interceptor */
    "./src/app/core/interceptors/auth-token/auth-token.interceptor.ts");
    /* harmony import */


    var ngx_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-logger */
    "./node_modules/ngx-logger/__ivy_ngcc__/fesm2015/ngx-logger.js");
    /* harmony import */


    var _services_exceptions_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/exceptions/global-error-handler.service */
    "./src/app/services/exceptions/global-error-handler.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _core_translate_translate_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./core/translate/translate.loader */
    "./src/app/core/translate/translate.loader.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_core_interceptors_auth_token_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthTokenProvider"], _core_routes_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategyService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        useClass: _services_exceptions_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["GlobalErrorHandlerService"]
      }],
      imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
        defaultLanguage: 'es',
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
          useFactory: _core_translate_translate_loader__WEBPACK_IMPORTED_MODULE_15__["HttpLoaderFactory"],
          deps: [_core_translate_translate_loader__WEBPACK_IMPORTED_MODULE_15__["HttpClientTrans"]]
        }
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__["NgIdleKeepaliveModule"].forRoot(), ngx_logger__WEBPACK_IMPORTED_MODULE_11__["LoggerModule"].forRoot({
        // serverLoggingUrl: 'api/logs',
        level: ngx_logger__WEBPACK_IMPORTED_MODULE_11__["NgxLoggerLevel"].DEBUG,
        serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_11__["NgxLoggerLevel"].ERROR
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
        timeOut: 6000
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__["NgIdleKeepaliveModule"], ngx_logger__WEBPACK_IMPORTED_MODULE_11__["LoggerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
            defaultLanguage: 'es',
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
              useFactory: _core_translate_translate_loader__WEBPACK_IMPORTED_MODULE_15__["HttpLoaderFactory"],
              deps: [_core_translate_translate_loader__WEBPACK_IMPORTED_MODULE_15__["HttpClientTrans"]]
            }
          }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__["NgIdleKeepaliveModule"].forRoot(), ngx_logger__WEBPACK_IMPORTED_MODULE_11__["LoggerModule"].forRoot({
            // serverLoggingUrl: 'api/logs',
            level: ngx_logger__WEBPACK_IMPORTED_MODULE_11__["NgxLoggerLevel"].DEBUG,
            serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_11__["NgxLoggerLevel"].ERROR
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
            timeOut: 6000
          })],
          providers: [_core_interceptors_auth_token_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthTokenProvider"], _core_routes_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategyService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
            useClass: _services_exceptions_global_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["GlobalErrorHandlerService"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/http/jwt/jwt.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/http/jwt/jwt.service.ts ***!
    \**********************************************/

  /*! exports provided: JwtService */

  /***/
  function srcAppCoreHttpJwtJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtService", function () {
      return JwtService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var JwtService =
    /*#__PURE__*/
    function () {
      function JwtService(http) {
        _classCallCheck(this, JwtService);

        this.http = http;
      }
      /**
       * This function get the json web token - JWT
       */


      _createClass(JwtService, [{
        key: "getAccessToken",
        value: function getAccessToken() {
          var username = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]['keys']['username'];
          var password = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]['keys']['password'];
          var urlAccessToken = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]['endpoints']['accessToken'];
          var requestUrl = urlAccessToken + '?grant_type=client_credentials';
          var headers = {
            "Skip": "true",
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": 'Basic ' + btoa(username + ':' + password)
          };
          return this.http.post(requestUrl, null, {
            headers: headers
          });
        }
      }]);

      return JwtService;
    }();

    JwtService.ɵfac = function JwtService_Factory(t) {
      return new (t || JwtService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    JwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtService,
      factory: JwtService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/interceptors/auth-token/auth-token.interceptor.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/interceptors/auth-token/auth-token.interceptor.ts ***!
    \************************************************************************/

  /*! exports provided: AuthTokenInterceptor, AuthTokenProvider */

  /***/
  function srcAppCoreInterceptorsAuthTokenAuthTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthTokenInterceptor", function () {
      return AuthTokenInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthTokenProvider", function () {
      return AuthTokenProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _http_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../http/jwt/jwt.service */
    "./src/app/core/http/jwt/jwt.service.ts");

    var AuthTokenInterceptor =
    /*#__PURE__*/
    function () {
      function AuthTokenInterceptor(_jwtService) {
        _classCallCheck(this, AuthTokenInterceptor);

        this._jwtService = _jwtService;
        this.accessToken = null;
      }

      _createClass(AuthTokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (req.headers.get("Skip")) {
            return next.handle(req);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.handleAccess(req, next));
        }
      }, {
        key: "handleAccess",
        value: function handleAccess(req, next) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var request, api_key, accessToken, headers;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    request = req;
                    api_key = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['keys']['apiKey'];
                    _context.next = 4;
                    return this.getAccessToken();

                  case 4:
                    accessToken = _context.sent;
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      "x-api-key": api_key,
                      "Autentication": "Bearer " + accessToken
                    });
                    request = req.clone({
                      headers: headers
                    });
                    return _context.abrupt("return", next.handle(request).toPromise());

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken() {
          var _this2 = this;

          return new Promise(function (resolve) {
            _this2._jwtService.getAccessToken().subscribe(function (data) {
              if (data['access_token']) {
                resolve(data['access_token']);
              }
            });
          });
        }
      }, {
        key: "manageError",
        value: function manageError(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }
      }]);

      return AuthTokenInterceptor;
    }();

    AuthTokenInterceptor.ɵfac = function AuthTokenInterceptor_Factory(t) {
      return new (t || AuthTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]));
    };

    AuthTokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthTokenInterceptor,
      factory: AuthTokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthTokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _http_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]
        }];
      }, null);
    })();

    var AuthTokenProvider = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
      useClass: AuthTokenInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/core/routes/preloading-strategy.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/routes/preloading-strategy.service.ts ***!
    \************************************************************/

  /*! exports provided: PreloadingStrategyService */

  /***/
  function srcAppCoreRoutesPreloadingStrategyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreloadingStrategyService", function () {
      return PreloadingStrategyService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreloadingStrategyService =
    /*#__PURE__*/
    function () {
      function PreloadingStrategyService() {
        _classCallCheck(this, PreloadingStrategyService);
      }

      _createClass(PreloadingStrategyService, [{
        key: "preload",
        value: function preload(route, load) {
          if (route.data && route.data['preload']) {
            return load();
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
          }
        }
      }]);

      return PreloadingStrategyService;
    }();

    PreloadingStrategyService.ɵfac = function PreloadingStrategyService_Factory(t) {
      return new (t || PreloadingStrategyService)();
    };

    PreloadingStrategyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PreloadingStrategyService,
      factory: PreloadingStrategyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PreloadingStrategyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/translate/translate.loader.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/translate/translate.loader.ts ***!
    \****************************************************/

  /*! exports provided: HttpClientTrans, HttpLoaderFactory */

  /***/
  function srcAppCoreTranslateTranslateLoaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientTrans", function () {
      return HttpClientTrans;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpClientTrans =
    /*#__PURE__*/
    function (_angular_common_http_) {
      _inherits(HttpClientTrans, _angular_common_http_);

      var _super = _createSuper(HttpClientTrans);

      function HttpClientTrans(handler) {
        _classCallCheck(this, HttpClientTrans);

        return _super.call(this, handler);
      }

      return HttpClientTrans;
    }(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]);

    HttpClientTrans.ɵfac = function HttpClientTrans_Factory(t) {
      return new (t || HttpClientTrans)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"]));
    };

    HttpClientTrans.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpClientTrans,
      factory: HttpClientTrans.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientTrans, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"]
        }];
      }, null);
    })();

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/services/encryption/encryption.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/encryption/encryption.service.ts ***!
    \***********************************************************/

  /*! exports provided: EncryptionService */

  /***/
  function srcAppServicesEncryptionEncryptionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncryptionService", function () {
      return EncryptionService;
    });
    /* harmony import */


    var eccjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! eccjs */
    "./node_modules/eccjs/dist/0.3/ecc.js");
    /* harmony import */


    var eccjs__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(eccjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var EncryptionService =
    /*#__PURE__*/
    function () {
      function EncryptionService() {
        _classCallCheck(this, EncryptionService);

        this._masterEncrypt = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]['keys']['backend_keys']['masterEncrypt'];
        this._masterDecrypt = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]['keys']['backend_keys']['masterDecrypt'];
      }
      /**
       * This function encrypts the data
       * @param value - String or array
       * @returns Json - Data encrypted in the eccjs algorithm
       */


      _createClass(EncryptionService, [{
        key: "getValueEncrypt",
        value: function getValueEncrypt(value) {
          return JSON.parse(eccjs__WEBPACK_IMPORTED_MODULE_0___default.a.encrypt(this._masterEncrypt, JSON.stringify(value)));
        }
        /**
         * This function encrypts the data
         * @param value - String or array
         * @returns String - Data encrypted in the eccjs algorithm
         */

      }, {
        key: "getValueEncryptString",
        value: function getValueEncryptString(value) {
          return eccjs__WEBPACK_IMPORTED_MODULE_0___default.a.encrypt(this._masterEncrypt, JSON.stringify(value));
        }
        /**
         * This function decrypts the data
         * @param encryptInfo - Encrypted data string with the server's public key
         * @returns String - Data decrypted in the eccjs algorithm
         */

      }, {
        key: "decryptData",
        value: function decryptData(encryptInfo) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            try {
              resolve(eccjs__WEBPACK_IMPORTED_MODULE_0___default.a.decrypt(_this3._masterDecrypt, JSON.stringify(encryptInfo)));
            } catch (e) {
              reject(e);
            }
          });
        }
      }]);

      return EncryptionService;
    }();

    EncryptionService.ɵfac = function EncryptionService_Factory(t) {
      return new (t || EncryptionService)();
    };

    EncryptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EncryptionService,
      factory: EncryptionService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EncryptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/exceptions/error-global.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/exceptions/error-global.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorGlobal */

  /***/
  function srcAppServicesExceptionsErrorGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorGlobal", function () {
      return ErrorGlobal;
    });

    var ErrorGlobal =
    /*#__PURE__*/
    function (_Error) {
      _inherits(ErrorGlobal, _Error);

      var _super2 = _createSuper(ErrorGlobal);

      function ErrorGlobal(type, stage, message) {
        var _this4;

        _classCallCheck(this, ErrorGlobal);

        _this4 = _super2.call(this, message);
        _this4.httpStatus = 404;
        _this4.handled = false;
        _this4.name = ErrorGlobal.name;
        _this4.type = type;
        _this4.stage = stage;
        Object.setPrototypeOf(_assertThisInitialized(_this4), ErrorGlobal.prototype);
        return _this4;
      }

      return ErrorGlobal;
    }(
    /*#__PURE__*/
    _wrapNativeSuper(Error));
    /***/

  },

  /***/
  "./src/app/services/exceptions/error-options.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/exceptions/error-options.ts ***!
    \******************************************************/

  /*! exports provided: ErrorTypes, ErrorStages, ErrorMessages */

  /***/
  function srcAppServicesExceptionsErrorOptionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorTypes", function () {
      return ErrorTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorStages", function () {
      return ErrorStages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessages", function () {
      return ErrorMessages;
    });

    var ErrorTypes = function ErrorTypes() {
      _classCallCheck(this, ErrorTypes);

      // INFO, DEBUG, WARNING, ERROR, FATAL_ERROR.
      this.INFO = 'INFO';
      this.DEBUG = 'DEBUG';
      this.WARNING = 'WARNING';
      this.ERROR = 'ERROR';
      this.FATAL_ERROR = 'FATAL_ERROR';
    };

    var ErrorStages = function ErrorStages() {
      _classCallCheck(this, ErrorStages);

      this.QR = 'GENERACIÓN CODIGO QR';
      this.PUSH = 'ENVIO NOTIFICACIÓN';
    };

    var ErrorMessages = function ErrorMessages() {
      _classCallCheck(this, ErrorMessages);

      this.F141 = 'No tiene acceso a internet';
      this.F142 = 'Ocurrio un error en el servicio';
      this.F143 = 'Mensaje F143';
      this.F144 = 'Mensaje F144';
      this.F145 = 'Mensaje F145';
      this.F146 = 'Mensaje F146';
      this.F147 = 'Mensaje F147';
      this.F148 = 'Mensaje F148';
      this.F149 = 'Mensaje F149';
      this.F150 = 'Mensaje F150';
      this.T141 = 'Mensaje T141';
      this.T142 = 'Mensaje T142';
      this.T143 = 'Mensaje T143';
      this.T144 = 'Mensaje T144';
      this.T145 = 'Mensaje T145';
      this.T146 = 'Mensaje T146';
      this.T147 = 'Mensaje T147';
      this.T148 = 'Mensaje T148';
      this.T149 = 'Mensaje T149';
      this.T150 = 'Mensaje T150';
    };
    /***/

  },

  /***/
  "./src/app/services/exceptions/error.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/exceptions/error.service.ts ***!
    \******************************************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppServicesExceptionsErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorService =
    /*#__PURE__*/
    function () {
      function ErrorService() {
        _classCallCheck(this, ErrorService);
      }

      _createClass(ErrorService, [{
        key: "getClientErrorMessage",
        value: function getClientErrorMessage(error) {
          return error.message ? error.message : error.toString();
        }
      }, {
        key: "getClientErrorStack",
        value: function getClientErrorStack(error) {
          return error.stack ? error.stack : error.toString();
        }
      }, {
        key: "getServerErrorMessage",
        value: function getServerErrorMessage(error) {
          return navigator.onLine ? error.message : this.errorMessages.F141;
        }
      }]);

      return ErrorService;
    }();

    ErrorService.ɵfac = function ErrorService_Factory(t) {
      return new (t || ErrorService)();
    };

    ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorService,
      factory: ErrorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/exceptions/global-error-handler.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/services/exceptions/global-error-handler.service.ts ***!
    \*********************************************************************/

  /*! exports provided: GlobalErrorHandlerService */

  /***/
  function srcAppServicesExceptionsGlobalErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalErrorHandlerService", function () {
      return GlobalErrorHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error.service */
    "./src/app/services/exceptions/error.service.ts");
    /* harmony import */


    var _logging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logging.service */
    "./src/app/services/exceptions/logging.service.ts");
    /* harmony import */


    var _error_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./error-options */
    "./src/app/services/exceptions/error-options.ts");

    var GlobalErrorHandlerService =
    /*#__PURE__*/
    function () {
      function GlobalErrorHandlerService(injector, errorMessages, errorTypes) {
        _classCallCheck(this, GlobalErrorHandlerService);

        this.injector = injector;
        this.errorMessages = errorMessages;
        this.errorTypes = errorTypes;
      }

      _createClass(GlobalErrorHandlerService, [{
        key: "handleError",
        value: function handleError(error) {
          var errorService = this.injector.get(_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]);
          var logger = this.injector.get(_logging_service__WEBPACK_IMPORTED_MODULE_3__["LoggingService"]);
          var message;
          var stackTrace;

          if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            // Server error
            message = errorService.getServerErrorMessage(error);
            stackTrace = error.message;
            logger.logError(this.errorTypes.ERROR, this.errorMessages.F142, message, stackTrace);
          } else if (error instanceof Error) {
            // Client Error
            message = errorService.getClientErrorMessage(error);
            stackTrace = errorService.getClientErrorStack(error);
            logger.logError(error.type, error.stage, message, stackTrace);
          }
        }
      }]);

      return GlobalErrorHandlerService;
    }();

    GlobalErrorHandlerService.ɵfac = function GlobalErrorHandlerService_Factory(t) {
      return new (t || GlobalErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"]));
    };

    GlobalErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlobalErrorHandlerService,
      factory: GlobalErrorHandlerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"]
        }, {
          type: _error_options__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/exceptions/logging.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/exceptions/logging.service.ts ***!
    \********************************************************/

  /*! exports provided: LoggingService */

  /***/
  function srcAppServicesExceptionsLoggingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggingService", function () {
      return LoggingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-logger */
    "./node_modules/ngx-logger/__ivy_ngcc__/fesm2015/ngx-logger.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var LoggingService =
    /*#__PURE__*/
    function () {
      function LoggingService(_logger, toastr) {
        _classCallCheck(this, LoggingService);

        this._logger = _logger;
        this.toastr = toastr;
      }

      _createClass(LoggingService, [{
        key: "logError",
        value: function logError(type, stage, message, stack) {
          // INFO, DEBUG, WARNING, ERROR, FATAL_ERROR.
          switch (type) {
            case 'FATAL_ERROR':
              this._logger.fatal('AppWeb', stage, 'ID', message, stack);

              break;

            case 'ERROR':
              this._logger.error('AppWeb', stage, 'ID', message, stack);

              break;

            case 'WARNING':
              this._logger.warn('AppWeb', stage, 'ID', message, stack);

              break;

            case 'DEBUG':
              this._logger.debug('AppWeb', stage, 'ID', message, stack);

              break;

            case 'INFO':
              this._logger.info('AppWeb', stage, 'ID', message, stack);

              break;

            default:
              break;
          }

          this.showError(type, message);
        }
      }, {
        key: "showError",
        value: function showError(type, message) {
          switch (type) {
            case 'FATAL_ERROR':
            case 'ERROR':
              this.toastr.error(message, 'Error');
              break;

            case 'WARNING':
              this.toastr.warning(message, 'Advertencia');
              break;

            case 'DEBUG':
              this.toastr.info(message, 'Verificar');
              break;

            case 'INFO':
              this.toastr.info(message, 'Verificar');
              break;

            default:
              break;
          }
        }
      }]);

      return LoggingService;
    }();

    LoggingService.ɵfac = function LoggingService_Factory(t) {
      return new (t || LoggingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NGXLogger"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    LoggingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggingService,
      factory: LoggingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NGXLogger"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/http/entity/entity.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/http/entity/entity.service.ts ***!
    \********************************************************/

  /*! exports provided: EntityService */

  /***/
  function srcAppServicesHttpEntityEntityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityService", function () {
      return EntityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EntityService =
    /*#__PURE__*/
    function () {
      function EntityService(http) {
        _classCallCheck(this, EntityService);

        this.http = http;
      }

      _createClass(EntityService, [{
        key: "getEntity",
        value: function getEntity(idNumber) {
          //return this.http.get('https://reqres.in/api/user');
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]['endpoints']['validateEntity']); //return this.http.get(ENV['endpoints']['validateEntity'] + '/entities/' + idNumber);
        }
      }]);

      return EntityService;
    }();

    EntityService.ɵfac = function EntityService_Factory(t) {
      return new (t || EntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    EntityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EntityService,
      factory: EntityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/http/generate-qr/generate-qr.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/services/http/generate-qr/generate-qr.service.ts ***!
    \******************************************************************/

  /*! exports provided: GenerateQrService */

  /***/
  function srcAppServicesHttpGenerateQrGenerateQrServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateQrService", function () {
      return GenerateQrService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GenerateQrService =
    /*#__PURE__*/
    function () {
      function GenerateQrService(http) {
        _classCallCheck(this, GenerateQrService);

        this.http = http;
      }

      _createClass(GenerateQrService, [{
        key: "getQRCode",
        value: function getQRCode(generateQr) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]['endpoints']['generateQR'], generateQr);
        }
      }]);

      return GenerateQrService;
    }();

    GenerateQrService.ɵfac = function GenerateQrService_Factory(t) {
      return new (t || GenerateQrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    GenerateQrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GenerateQrService,
      factory: GenerateQrService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerateQrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/idle-timeout/idle-timeout.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/idle-timeout/idle-timeout.service.ts ***!
    \***************************************************************/

  /*! exports provided: IdleTimeoutService */

  /***/
  function srcAppServicesIdleTimeoutIdleTimeoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdleTimeoutService", function () {
      return IdleTimeoutService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IdleTimeoutService =
    /*#__PURE__*/
    function () {
      function IdleTimeoutService() {
        _classCallCheck(this, IdleTimeoutService);

        this.validateSession = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.stateSession = this.validateSession.asObservable();
      }

      _createClass(IdleTimeoutService, [{
        key: "setValidateSession",
        value: function setValidateSession(logout) {
          this.validateSession.next(logout);
        }
      }]);

      return IdleTimeoutService;
    }();

    IdleTimeoutService.ɵfac = function IdleTimeoutService_Factory(t) {
      return new (t || IdleTimeoutService)();
    };

    IdleTimeoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: IdleTimeoutService,
      factory: IdleTimeoutService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IdleTimeoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/local-storage/local-storage.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/local-storage/local-storage.service.ts ***!
    \*****************************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppServicesLocalStorageLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocalStorageService =
    /*#__PURE__*/
    function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "getItemString",
        value: function getItemString(key) {
          return localStorage.getItem(key);
        }
      }, {
        key: "stringifyItem",
        value: function stringifyItem(key, item) {
          localStorage.setItem(key, JSON.stringify(item));
        }
      }, {
        key: "setItem",
        value: function setItem(key, item) {
          localStorage.setItem(key, item);
        }
      }, {
        key: "getItemJSON",
        value: function getItemJSON(key) {
          return JSON.parse(localStorage.getItem(key));
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          localStorage.removeItem(key);
        }
      }, {
        key: "clear",
        value: function clear() {
          localStorage.clear();
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
      return new (t || LocalStorageService)();
    };

    LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalStorageService,
      factory: LocalStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/services.index.ts":
  /*!********************************************!*\
    !*** ./src/app/services/services.index.ts ***!
    \********************************************/

  /*! exports provided: EntityService, EncryptionService, IdleTimeoutService, GenerateQrService, LocalStorageService, ValidateDataService, SessionStorageService, ErrorMessages, ErrorStages, ErrorTypes */

  /***/
  function srcAppServicesServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _http_entity_entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./http/entity/entity.service */
    "./src/app/services/http/entity/entity.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EntityService", function () {
      return _http_entity_entity_service__WEBPACK_IMPORTED_MODULE_0__["EntityService"];
    });
    /* harmony import */


    var _encryption_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./encryption/encryption.service */
    "./src/app/services/encryption/encryption.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EncryptionService", function () {
      return _encryption_encryption_service__WEBPACK_IMPORTED_MODULE_1__["EncryptionService"];
    });
    /* harmony import */


    var _idle_timeout_idle_timeout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./idle-timeout/idle-timeout.service */
    "./src/app/services/idle-timeout/idle-timeout.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdleTimeoutService", function () {
      return _idle_timeout_idle_timeout_service__WEBPACK_IMPORTED_MODULE_2__["IdleTimeoutService"];
    });
    /* harmony import */


    var _http_generate_qr_generate_qr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http/generate-qr/generate-qr.service */
    "./src/app/services/http/generate-qr/generate-qr.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GenerateQrService", function () {
      return _http_generate_qr_generate_qr_service__WEBPACK_IMPORTED_MODULE_3__["GenerateQrService"];
    });
    /* harmony import */


    var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./local-storage/local-storage.service */
    "./src/app/services/local-storage/local-storage.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"];
    });
    /* harmony import */


    var _validate_data_validate_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./validate-data/validate-data.service */
    "./src/app/services/validate-data/validate-data.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ValidateDataService", function () {
      return _validate_data_validate_data_service__WEBPACK_IMPORTED_MODULE_5__["ValidateDataService"];
    });
    /* harmony import */


    var _session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./session-storage/session-storage.service */
    "./src/app/services/session-storage/session-storage.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionStorageService", function () {
      return _session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_6__["SessionStorageService"];
    });
    /* harmony import */


    var _exceptions_error_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./exceptions/error-options */
    "./src/app/services/exceptions/error-options.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessages", function () {
      return _exceptions_error_options__WEBPACK_IMPORTED_MODULE_7__["ErrorMessages"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorStages", function () {
      return _exceptions_error_options__WEBPACK_IMPORTED_MODULE_7__["ErrorStages"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorTypes", function () {
      return _exceptions_error_options__WEBPACK_IMPORTED_MODULE_7__["ErrorTypes"];
    });
    /***/

  },

  /***/
  "./src/app/services/services.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/services.module.ts ***!
    \*********************************************/

  /*! exports provided: ServicesModule */

  /***/
  function srcAppServicesServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesModule", function () {
      return ServicesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services.index */
    "./src/app/services/services.index.ts");

    var ServicesModule = function ServicesModule() {
      _classCallCheck(this, ServicesModule);
    };

    ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServicesModule
    });
    ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServicesModule_Factory(t) {
        return new (t || ServicesModule)();
      },
      providers: [_services_index__WEBPACK_IMPORTED_MODULE_2__["GenerateQrService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["EncryptionService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["IdleTimeoutService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["ErrorMessages"], _services_index__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"], _services_index__WEBPACK_IMPORTED_MODULE_2__["ErrorStages"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [_services_index__WEBPACK_IMPORTED_MODULE_2__["GenerateQrService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["EncryptionService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["IdleTimeoutService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["ErrorMessages"], _services_index__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"], _services_index__WEBPACK_IMPORTED_MODULE_2__["ErrorStages"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/session-storage/session-storage.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/services/session-storage/session-storage.service.ts ***!
    \*********************************************************************/

  /*! exports provided: SessionStorageService */

  /***/
  function srcAppServicesSessionStorageSessionStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionStorageService", function () {
      return SessionStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SessionStorageService =
    /*#__PURE__*/
    function () {
      function SessionStorageService() {
        _classCallCheck(this, SessionStorageService);
      }

      _createClass(SessionStorageService, [{
        key: "getItemString",
        value: function getItemString(key) {
          return sessionStorage.getItem(key);
        }
      }, {
        key: "stringifyItem",
        value: function stringifyItem(key, item) {
          sessionStorage.setItem(key, JSON.stringify(item));
        }
      }, {
        key: "setItem",
        value: function setItem(key, item) {
          sessionStorage.setItem(key, item);
        }
      }, {
        key: "getItemJSON",
        value: function getItemJSON(key) {
          return JSON.parse(sessionStorage.getItem(key));
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          sessionStorage.removeItem(key);
        }
      }, {
        key: "clear",
        value: function clear() {
          sessionStorage.clear();
        }
      }]);

      return SessionStorageService;
    }();

    SessionStorageService.ɵfac = function SessionStorageService_Factory(t) {
      return new (t || SessionStorageService)();
    };

    SessionStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SessionStorageService,
      factory: SessionStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/validate-data/validate-data.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/validate-data/validate-data.service.ts ***!
    \*****************************************************************/

  /*! exports provided: ValidateDataService */

  /***/
  function srcAppServicesValidateDataValidateDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateDataService", function () {
      return ValidateDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ValidateDataService =
    /*#__PURE__*/
    function () {
      function ValidateDataService(translate) {
        _classCallCheck(this, ValidateDataService);

        this.translate = translate;
        this.REGEX_NUMBERS = "^[1-9][0-9]*$";
      }

      _createClass(ValidateDataService, [{
        key: "validateId",
        value: function validateId(documentId) {
          var result = false;
          var id = documentId;
          var regex = new RegExp(this.REGEX_NUMBERS, 'g');
          var matcher = regex.test(id);

          if (id == null) {
            this.setMessageError("documentId.empty");
          } else if (id.length < 6) {
            this.setMessageError("documentId.length_min");
          } else if (id.length > 10) {
            this.setMessageError("documentId.length_max");
          } else if (!matcher) {
            this.setMessageError("documentId.regex");
          } else {
            result = true;
          }

          return result;
        }
      }, {
        key: "validateIdType",
        value: function validateIdType(documentType) {
          var result = false;
          var type = documentType;

          if (type == null) {
            this.setMessageError("documentType.empty");
          } else if (type != 'CC') {
            this.setMessageError("documentType.type");
          } else {
            result = true;
          }

          return result;
        }
      }, {
        key: "setMessageError",
        value: function setMessageError(pathMsg) {
          var initPath = "error.validate_data";
          this.messageError = this.translate.instant(initPath + "." + pathMsg);
        }
      }, {
        key: "getMessageError",
        value: function getMessageError() {
          return this.messageError;
        }
      }]);

      return ValidateDataService;
    }();

    ValidateDataService.ɵfac = function ValidateDataService_Factory(t) {
      return new (t || ValidateDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    ValidateDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ValidateDataService,
      factory: ValidateDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.index.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/shared.index.ts ***!
    \****************************************/

  /*! exports provided: FooterComponent, HeaderComponent, ServiceErrorComponent, PageNotFoundComponent, NotAuthorizedComponent */

  /***/
  function srcAppSharedSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _theme_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./theme/footer/footer.component */
    "./src/app/shared/theme/footer/footer.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _theme_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"];
    });
    /* harmony import */


    var _theme_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme/header/header.component */
    "./src/app/shared/theme/header/header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _theme_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"];
    });
    /* harmony import */


    var _theme_service_error_service_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme/service-error/service-error.component */
    "./src/app/shared/theme/service-error/service-error.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ServiceErrorComponent", function () {
      return _theme_service_error_service_error_component__WEBPACK_IMPORTED_MODULE_2__["ServiceErrorComponent"];
    });
    /* harmony import */


    var _theme_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme/page-not-found/page-not-found.component */
    "./src/app/shared/theme/page-not-found/page-not-found.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return _theme_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"];
    });
    /* harmony import */


    var _theme_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme/not-authorized/not-authorized.component */
    "./src/app/shared/theme/not-authorized/not-authorized.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function () {
      return _theme_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__["NotAuthorizedComponent"];
    }); // Theme

    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared.index */
    "./src/app/shared/shared.index.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_shared_index__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["ServiceErrorComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["NotAuthorizedComponent"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_shared_index__WEBPACK_IMPORTED_MODULE_2__["NotAuthorizedComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["ServiceErrorComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [_shared_index__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["ServiceErrorComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["NotAuthorizedComponent"]],
          declarations: [_shared_index__WEBPACK_IMPORTED_MODULE_2__["NotAuthorizedComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["ServiceErrorComponent"], _shared_index__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/theme/footer/footer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/theme/footer/footer.component.ts ***!
    \*********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedThemeFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90aGVtZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/theme/header/header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/theme/header/header.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedThemeHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 2,
      vars: 0,
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90aGVtZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/theme/not-authorized/not-authorized.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/theme/not-authorized/not-authorized.component.ts ***!
    \*************************************************************************/

  /*! exports provided: NotAuthorizedComponent */

  /***/
  function srcAppSharedThemeNotAuthorizedNotAuthorizedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function () {
      return NotAuthorizedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotAuthorizedComponent =
    /*#__PURE__*/
    function () {
      function NotAuthorizedComponent() {
        _classCallCheck(this, NotAuthorizedComponent);
      }

      _createClass(NotAuthorizedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotAuthorizedComponent;
    }();

    NotAuthorizedComponent.ɵfac = function NotAuthorizedComponent_Factory(t) {
      return new (t || NotAuthorizedComponent)();
    };

    NotAuthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotAuthorizedComponent,
      selectors: [["app-not-authorized"]],
      decls: 2,
      vars: 0,
      template: function NotAuthorizedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-authorized works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90aGVtZS9ub3QtYXV0aG9yaXplZC9ub3QtYXV0aG9yaXplZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotAuthorizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-authorized',
          templateUrl: './not-authorized.component.html',
          styleUrls: ['./not-authorized.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/theme/page-not-found/page-not-found.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/theme/page-not-found/page-not-found.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppSharedThemePageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container", "m-5"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ups... page not found...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90aGVtZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/theme/service-error/service-error.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/theme/service-error/service-error.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ServiceErrorComponent */

  /***/
  function srcAppSharedThemeServiceErrorServiceErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceErrorComponent", function () {
      return ServiceErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServiceErrorComponent =
    /*#__PURE__*/
    function () {
      function ServiceErrorComponent() {
        _classCallCheck(this, ServiceErrorComponent);
      }

      _createClass(ServiceErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServiceErrorComponent;
    }();

    ServiceErrorComponent.ɵfac = function ServiceErrorComponent_Factory(t) {
      return new (t || ServiceErrorComponent)();
    };

    ServiceErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceErrorComponent,
      selectors: [["app-service-error"]],
      decls: 2,
      vars: 0,
      template: function ServiceErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "service-error works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90aGVtZS9zZXJ2aWNlLWVycm9yL3NlcnZpY2UtZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service-error',
          templateUrl: './service-error.component.html',
          styleUrls: ['./service-error.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      endpoints: {
        accessToken: "https://soyyodev.auth.us-east-1.amazoncognito.com/oauth2/token",
        validateToken: "https://m0feaaiiu7.execute-api.us-east-1.amazonaws.com/dev/api/v1/token",
        generateQR: "https://jsonplaceholder.typicode.com/posts/1",
        validateEntity: "https://reqres.in/api/user"
      },
      keys: {
        username: "i9k7m3o570i15p3v4a678s79e",
        password: "ftovorpv8k4knllnlbjchqq2rau2gif7qhdtagqjdu0k033rcl2",
        apiKey: "bYEHYDL5dU1HrkKjlgkzN5SJVwJmFSHP9kdBAl2B"
      },
      time: {
        timeSession: 300
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Jennifer Romero\Aplicaciones\WEB\soyyo_web_transacciones\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** buffer (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map