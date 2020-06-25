function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"], {
  /***/
  "./src/app/core/models/generate-qr.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/models/generate-qr.model.ts ***!
    \**************************************************/

  /*! exports provided: GenerateQr */

  /***/
  function srcAppCoreModelsGenerateQrModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateQr", function () {
      return GenerateQr;
    });

    var GenerateQr = function GenerateQr(idTransaction, channel) {
      _classCallCheck(this, GenerateQr);

      this.idTransaction = idTransaction;
      this.channel = channel;
    };
    /***/

  },

  /***/
  "./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: IdCCarouselComponent */

  /***/
  function srcAppPagesModulesDashboardComponentsIdCCarouselIdCCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdCCarouselComponent", function () {
      return IdCCarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_core_models_generate_qr_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/generate-qr.model */
    "./src/app/core/models/generate-qr.model.ts");
    /* harmony import */


    var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/services.index */
    "./src/app/services/services.index.ts");

    var IdCCarouselComponent =
    /*#__PURE__*/
    function () {
      function IdCCarouselComponent(translate, _generateQr) {
        _classCallCheck(this, IdCCarouselComponent);

        this.translate = translate;
        this._generateQr = _generateQr;
        this.sliders = [];
      }

      _createClass(IdCCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var idTransaction = '1';
          var channel = 'Web';
          var data = new src_app_core_models_generate_qr_model__WEBPACK_IMPORTED_MODULE_2__["GenerateQr"](idTransaction, channel);
          /*this._generateQr.getQRCode(data).subscribe(resp => {
            console.log(resp);
          });*/

          this.titleCarrusel = this.translate.instant('carrusel.title');
          this.imagePathFirst = 'assets/images/carrusel.svg';
          this.subtitleFirst = 'carrusel.slideFirst.subtitle';
          this.textFirst = 'carrusel.slideFirst.text';
          this.imagePathSecond = 'assets/images/carrusel2.svg';
          this.subtitleSecond = 'carrusel.slideSecond.subtitle';
          this.textSecond = 'carrusel.slideSecond.text'; //this.imagePathThird = qr;

          this.imagePathThird = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACEAQMAAABrihHkAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAw0lEQVRIie2VMQ7DUAhDuYHvf0vfwLVJK0UdWiXuWMJA3vCDkfmZ+ceXkEQB2qIgTMLPFgURHTiKkkzQjwhb4qTS5ln7daJ9Y6gakgD15obrxJ1pIGRmLIhrI+bwiuyJlnl85D5RVCJ9ahpic4uwUKEiPhNLBTYk3tyNG1XENgJ3cd1iQZZJsDHBikStnTBkQ45NeW5LQbKwmXv8OQ3ZmyRCX0rvE2T48XpJsidK1ZDNtfhJ+3Wyk9f+iM435GXyjw/xAPSVAhoWGEr8AAAAAElFTkSuQmCC";
          this.subtitleThird = 'carrusel.slideThird.subtitle';
          this.textThird = 'carrusel.slideThird.text';
          this.imagePathFourth = 'assets/images/carrusel3.svg';
          this.subtitleFourth = 'carrusel.slideFourth.subtitle';
          this.textFourth = 'carrusel.slideFourth.text';
          /*this.sliders.push(
            {
                imagePath: '../../../../assets/images/carrusel.svg',
                subtitle: 'carrusel.slideFirst.subtitle',
                text: 'carrusel.slideFirst.text'
            },
            {
                imagePath: '../../../../assets/images/carrusel2.svg',
                subtitle: 'carrusel.slideSecond.subtitle',
                text: 'carrusel.slideSecond.text'
            },
            {
                imagePath: this.imagePathThird,
                subtitle: 'carrusel.slideThird.subtitle',
                text: 'carrusel.slideThird.text'
            },
            {
                imagePath: '../../../../assets/images/carrusel3.svg',
                subtitle: 'carrusel.slideFourth.subtitle',
                text: 'carrusel.slideFourth.text'
            }
          );*/
        }
      }]);

      return IdCCarouselComponent;
    }();

    IdCCarouselComponent.ɵfac = function IdCCarouselComponent_Factory(t) {
      return new (t || IdCCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_services_index__WEBPACK_IMPORTED_MODULE_3__["GenerateQrService"]));
    };

    IdCCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IdCCarouselComponent,
      selectors: [["app-id-c-carousel"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])],
      decls: 53,
      vars: 31,
      consts: [[1, "carrousel"], ["id", "slider"], ["checked", "", "type", "radio", "name", "slider", "id", "slide1"], ["type", "radio", "name", "slider", "id", "slide2"], ["type", "radio", "name", "slider", "id", "slide3"], ["type", "radio", "name", "slider", "id", "slide4"], ["id", "slides"], ["id", "overflow"], [1, "inner"], [1, "slide"], [1, "row", "name"], [1, "row", "description", 3, "innerHTML"], [1, "slide-content"], ["alt", "", 1, "img_slider", 3, "src"], [1, "row", "name", 3, "innerHTML"], ["alt", "", 1, "img_slider", "codqr", 3, "src"], ["id", "controls"], ["for", "slide1"], ["for", "slide2"], ["for", "slide3"], ["for", "slide4"], ["id", "bullets"]],
      template: function IdCCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 13, "carrusel.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, ctx.subtitleFirst));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 17, ctx.textFirst), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePathFirst, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 19, ctx.subtitleSecond), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 21, ctx.textSecond), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePathSecond, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 23, ctx.subtitleThird));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 25, ctx.textThird), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePathThird, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 27, ctx.subtitleFourth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 29, ctx.textFourth), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePathFourth, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-id-c-carousel',
          templateUrl: './id-c-carousel.component.html',
          //styleUrls: ['./id-c-carousel.component.scss'],
          providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]]
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_3__["GenerateQrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: IdCUserComponent */

  /***/
  function srcAppPagesModulesDashboardComponentsIdCUserIdCUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdCUserComponent", function () {
      return IdCUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var IdCUserComponent =
    /*#__PURE__*/
    function () {
      function IdCUserComponent() {
        _classCallCheck(this, IdCUserComponent);
      }

      _createClass(IdCUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IdCUserComponent;
    }();

    IdCUserComponent.ɵfac = function IdCUserComponent_Factory(t) {
      return new (t || IdCUserComponent)();
    };

    IdCUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IdCUserComponent,
      selectors: [["app-id-c-user"]],
      decls: 11,
      vars: 6,
      consts: [[1, "col-md-9", "user"], [1, "row"], [1, "col-md-3", "tel"], ["src", "assets/images/telefono.svg", "alt", "", 1, "img_telephone"], [1, "col-md-9", "c-user"], [1, "row", "title-user"], [1, "row", "text-user"]],
      template: function IdCUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "dashboard.title-register"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "dashboard.text-register"));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-id-c-user',
          templateUrl: './id-c-user.component.html',
          styleUrls: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modules/dashboard/dashboard.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/modules/dashboard/dashboard.component.ts ***!
    \****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesModulesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_id_c_user_id_c_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/id-c-user/id-c-user.component */
    "./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts");
    /* harmony import */


    var _components_id_c_carousel_id_c_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/id-c-carousel/id-c-carousel.component */
    "./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 25,
      vars: 9,
      consts: [[1, "container_dashboard"], [1, "container_base"], [1, "row", "in-line"], [1, "col-md-6"], [1, "row", "logo"], ["src", "assets/images/logo.svg", "alt", "", 1, "img"], [1, "row"], [1, "col-md-12"], [1, "welcome"], [1, "text-welcome", 3, "innerHTML"], [1, "text-help"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-id-c-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-id-c-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, "dashboard.welcome"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "dashboard.text-welcome"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 7, "dashboard.text-help"));
        }
      },
      directives: [_components_id_c_user_id_c_user_component__WEBPACK_IMPORTED_MODULE_1__["IdCUserComponent"], _components_id_c_carousel_id_c_carousel_component__WEBPACK_IMPORTED_MODULE_2__["IdCCarouselComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modules/modules.index.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/modules/modules.index.ts ***!
    \************************************************/

  /*! exports provided: ProfileComponent, DashboardComponent */

  /***/
  function srcAppPagesModulesModulesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/pages/modules/profile/profile.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"];
    });
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/modules/dashboard/dashboard.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/modules/profile/profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/modules/profile/profile.component.ts ***!
    \************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesModulesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container", "m-5"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is my profile\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pages-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../configs/routing-path */
    "./src/app/configs/routing-path.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/modules.index */
    "./src/app/pages/modules/modules.index.ts");

    var routes = [{
      path: '',
      component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
      children: [{
        path: '',
        redirectTo: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.path,
        pathMatch: 'full'
      }, {
        path: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.path,
        component: _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-dashboard-dashboard-module */
          "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./modules/dashboard/dashboard.module */
          "./src/app/pages/modules/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        },
        data: {
          breadcrumb: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.breadcrumb
        }
      }, {
        path: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.profile.path,
        component: _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        data: {
          breadcrumb: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.profile.breadcrumb
        }
      }]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
    PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesRoutingModule_Factory(t) {
        return new (t || PagesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PagesComponent =
    /*#__PURE__*/
    function () {
      function PagesComponent() {
        _classCallCheck(this, PagesComponent);
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagesComponent;
    }();

    PagesComponent.ɵfac = function PagesComponent_Factory(t) {
      return new (t || PagesComponent)();
    };

    PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagesComponent,
      selectors: [["app-pages"]],
      decls: 1,
      vars: 0,
      template: function PagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pages',
          templateUrl: './pages.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
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


    var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/pages/pages-routing.module.ts");

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
        declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-pages-module-es5.js.map