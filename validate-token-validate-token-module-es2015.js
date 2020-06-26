(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validate-token-validate-token-module"],{

/***/ "./src/app/core/models/validate-token.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/validate-token.model.ts ***!
  \*****************************************************/
/*! exports provided: ValidateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateToken", function() { return ValidateToken; });
class ValidateToken {
    constructor(idProcess, identificationNumber, channel, processType, token) {
        this.idProcess = idProcess;
        this.identificationNumber = identificationNumber;
        this.channel = channel;
        this.processType = processType;
        this.token = token;
    }
}


/***/ }),

/***/ "./src/app/validate-token/components/id-c-vt-footer/id-c-vt-footer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/validate-token/components/id-c-vt-footer/id-c-vt-footer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: IdCVtFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCVtFooterComponent", function() { return IdCVtFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class IdCVtFooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
IdCVtFooterComponent.ɵfac = function IdCVtFooterComponent_Factory(t) { return new (t || IdCVtFooterComponent)(); };
IdCVtFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdCVtFooterComponent, selectors: [["app-id-c-vt-footer"]], decls: 15, vars: 12, consts: [[1, "title-footer"], [1, "doubts"], [1, "options"], ["href", "#"]], template: function IdCVtFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "validate-token.footer.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "validate-token.footer.options.FAQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "validate-token.footer.options.contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, "validate-token.footer.options.report"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCVtFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-id-c-vt-footer',
                templateUrl: './id-c-vt-footer.component.html' //,
                // styleUrls: ['./id-c-vt-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/validate-token/components/id-c-vt-header/id-c-vt-header.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/validate-token/components/id-c-vt-header/id-c-vt-header.component.ts ***!
  \**************************************************************************************/
/*! exports provided: IdCVtHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCVtHeaderComponent", function() { return IdCVtHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IdCVtHeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
IdCVtHeaderComponent.ɵfac = function IdCVtHeaderComponent_Factory(t) { return new (t || IdCVtHeaderComponent)(); };
IdCVtHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdCVtHeaderComponent, selectors: [["app-id-c-vt-header"]], decls: 3, vars: 0, consts: [[1, "navbar", "navbar-light", "navbar-white"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo.svg", "width", "105"]], template: function IdCVtHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%] {\n  padding: 0;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.11);\n  -moz-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.11);\n  -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.11);\n}\n\n.navbar-white[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-left: 52px;\n  padding: 17px 0px 17px 0px;\n}\n\n@media (max-width: 576px) {\n  .navbar[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0px;\n    text-align: center;\n    justify-content: center;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 65%;\n    margin: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGUtdG9rZW4vY29tcG9uZW50cy9pZC1jLXZ0LWhlYWRlci9DOlxcVXNlcnNcXEplbm5pZmVyIFJvbWVyb1xcQXBsaWNhY2lvbmVzXFxXRUJcXHNveXlvX3dlYl90cmFuc2FjY2lvbmVzL3NyY1xcYXBwXFx2YWxpZGF0ZS10b2tlblxcY29tcG9uZW50c1xcaWQtYy12dC1oZWFkZXJcXGlkLWMtdnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YWxpZGF0ZS10b2tlbi9jb21wb25lbnRzL2lkLWMtdnQtaGVhZGVyL2lkLWMtdnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLCtDQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QURBQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsdUJBQUE7RUNHTjs7RURERTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRlLXRva2VuL2NvbXBvbmVudHMvaWQtYy12dC1oZWFkZXIvaWQtYy12dC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG59XHJcbi5uYXZiYXItd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUycHg7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDBweCAxN3B4IDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAubmF2YmFyLCAubmF2YmFyIGEge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxufSIsIi5uYXZiYXIge1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbn1cblxuLm5hdmJhci13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmltZyB7XG4gIG1hcmdpbi1sZWZ0OiA1MnB4O1xuICBwYWRkaW5nOiAxN3B4IDBweCAxN3B4IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5uYXZiYXIsIC5uYXZiYXIgYSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCVtHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-id-c-vt-header',
                templateUrl: './id-c-vt-header.component.html',
                styleUrls: ['./id-c-vt-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/validate-token/components/id-c-vt-state/id-c-vt-state.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/validate-token/components/id-c-vt-state/id-c-vt-state.component.ts ***!
  \************************************************************************************/
/*! exports provided: IdCVtStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCVtStateComponent", function() { return IdCVtStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




function IdCVtStateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdCVtStateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdCVtStateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdCVtStateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "validate-token.state.loading.description"), " ");
} }
function IdCVtStateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "validate-token.state.success.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "validate-token.state.success.description"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "validate-token.state.success.end"), " ");
} }
function IdCVtStateComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "validate-token.state.error.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "validate-token.state.error.description"), " ");
} }
class IdCVtStateComponent {
    constructor() {
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        let change = changes["state"];
        this.setState(change.currentValue);
    }
    setState(state) {
        this.isError = false;
        this.isSuccess = false;
        this.isLoading = false;
        switch (state) {
            case 'loading': {
                this.isLoading = true;
                break;
            }
            case 'success': {
                this.isSuccess = true;
                break;
            }
            default: {
                this.isError = true;
                break;
            }
        }
    }
    ;
}
IdCVtStateComponent.ɵfac = function IdCVtStateComponent_Factory(t) { return new (t || IdCVtStateComponent)(); };
IdCVtStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdCVtStateComponent, selectors: [["app-id-c-vt-state"]], inputs: { state: "state" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 6, consts: [[1, "card"], [1, "card-body"], [1, "row", "m-0"], [1, "col-3", "col-md-3", "circle-container"], ["class", "circle circle-loader", 4, "ngIf"], ["class", "circle", 4, "ngIf"], ["class", "circle circle-error", 4, "ngIf"], [1, "col-9", "col-md-9", "p-0", "card-container"], ["class", "loading", 4, "ngIf"], ["class", "success", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "circle", "circle-loader"], ["role", "status", 1, "spinner-border", "text-light"], [1, "sr-only"], [1, "circle"], ["src", "assets/images/smartphone-alert-icon.svg"], [1, "circle", "circle-error"], ["src", "assets/images/exclamation-alert-icon.svg"], [1, "loading"], [1, "description"], [1, "success"], [1, "title"], [1, "end"], [1, "error"]], template: function IdCVtStateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IdCVtStateComponent_div_4_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IdCVtStateComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IdCVtStateComponent_div_6_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IdCVtStateComponent_div_8_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IdCVtStateComponent_div_9_Template, 10, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IdCVtStateComponent_div_10_Template, 7, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCVtStateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-id-c-vt-state',
                templateUrl: './id-c-vt-state.component.html' //,
                // styleUrls: ['./id-c-vt-state.component.scss']
            }]
    }], function () { return []; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/validate-token/pages/error/error.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/validate-token/pages/error/error.component.ts ***!
  \***************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ErrorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 3, vars: 0, consts: [[1, "container", "m-5"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is the Signup...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRlLXRva2VuL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/validate-token/pages/pages.index.ts":
/*!*****************************************************!*\
  !*** ./src/app/validate-token/pages/pages.index.ts ***!
  \*****************************************************/
/*! exports provided: ValidateComponent, ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_validate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate/validate.component */ "./src/app/validate-token/pages/validate/validate.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateComponent", function() { return _validate_validate_component__WEBPACK_IMPORTED_MODULE_0__["ValidateComponent"]; });

/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error.component */ "./src/app/validate-token/pages/error/error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return _error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"]; });





/***/ }),

/***/ "./src/app/validate-token/pages/validate/validate.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/validate-token/pages/validate/validate.component.ts ***!
  \*********************************************************************/
/*! exports provided: ValidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateComponent", function() { return ValidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_models_validate_token_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/models/validate-token.model */ "./src/app/core/models/validate-token.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_validate_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http/validate-token.service */ "./src/app/validate-token/services/http/validate-token.service.ts");
/* harmony import */ var _components_id_c_vt_state_id_c_vt_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/id-c-vt-state/id-c-vt-state.component */ "./src/app/validate-token/components/id-c-vt-state/id-c-vt-state.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







class ValidateComponent {
    constructor(activatedRoute, _validateTokenService) {
        this.activatedRoute = activatedRoute;
        this._validateTokenService = _validateTokenService;
        this.getParameters();
        this.stateProcess = "loading";
    }
    ngOnInit() {
        let channel = 'App WEB';
        let processType = 'ENR';
        let data = new _core_models_validate_token_model__WEBPACK_IMPORTED_MODULE_1__["ValidateToken"](this.idProcess, this.idNumber, channel, processType, this.token);
        this._validateTokenService.validateToken(data).subscribe(resp => {
            console.log(resp);
            if (resp['code'] == 'F084') {
                this.stateProcess = "success";
            }
            else {
                this.stateProcess = "error";
            }
        });
    }
    getParameters() {
        this.activatedRoute.params.subscribe(params => {
            this.token = params['token'];
            this.idProcess = params['idProcess'];
            this.idNumber = params['identificationNumber'];
        });
    }
}
ValidateComponent.ɵfac = function ValidateComponent_Factory(t) { return new (t || ValidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_validate_token_service__WEBPACK_IMPORTED_MODULE_3__["ValidateTokenService"])); };
ValidateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidateComponent, selectors: [["app-validate"]], decls: 15, vars: 10, consts: [[1, "container"], [1, "col", "col-md-12"], [1, "row"], [1, "col", "col-12", "col-md-12", "col-lg-6", "woman-img", "order-md-2", "order-2", "order-lg-1"], ["src", "assets/images/woman.svg"], [1, "col", "col-12", "col-md-12", "col-lg-5", "zi-1", "order-md-1", "order-1", "order-lg-2"], [1, "title", 3, "innerHTML"], [1, "subtitle"], [3, "state"]], template: function ValidateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-id-c-vt-state", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "validate-token.pages.validate.title"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, "validate-token.pages.validate.subtitle.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, "validate-token.pages.validate.subtitle.span"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.stateProcess);
    } }, directives: [_components_id_c_vt_state_id_c_vt_state_component__WEBPACK_IMPORTED_MODULE_4__["IdCVtStateComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validate',
                templateUrl: './validate.component.html' //,
                // styleUrls: ['./validate.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_http_validate_token_service__WEBPACK_IMPORTED_MODULE_3__["ValidateTokenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/validate-token/services/http/validate-token.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/validate-token/services/http/validate-token.service.ts ***!
  \************************************************************************/
/*! exports provided: ValidateTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTokenService", function() { return ValidateTokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ValidateTokenService {
    constructor(http) {
        this.http = http;
    }
    validateToken(validateToken) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["endpoints"]["validateToken"], validateToken);
    }
}
ValidateTokenService.ɵfac = function ValidateTokenService_Factory(t) { return new (t || ValidateTokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ValidateTokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidateTokenService, factory: ValidateTokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateTokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/validate-token/validate-token-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/validate-token/validate-token-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRoutingModule", function() { return TransactionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configs_routing_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/routing-path */ "./src/app/configs/routing-path.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _validate_token_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate-token.component */ "./src/app/validate-token/validate-token.component.ts");
/* harmony import */ var _pages_pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.index */ "./src/app/validate-token/pages/pages.index.ts");







const routes = [
    {
        path: '',
        component: _validate_token_component__WEBPACK_IMPORTED_MODULE_3__["ValidateTokenComponent"],
        children: [
            {
                path: '',
                redirectTo: _configs_routing_path__WEBPACK_IMPORTED_MODULE_1__["RoutingPath"].appRouting.transaction.pages.error.path,
                pathMatch: 'full'
            },
            {
                path: _configs_routing_path__WEBPACK_IMPORTED_MODULE_1__["RoutingPath"].appRouting.transaction.pages.validate.path,
                component: _pages_pages_index__WEBPACK_IMPORTED_MODULE_4__["ValidateComponent"],
                data: {
                    breadcrumb: _configs_routing_path__WEBPACK_IMPORTED_MODULE_1__["RoutingPath"].appRouting.transaction.pages.validate.breadcrumb
                }
            },
            {
                path: _configs_routing_path__WEBPACK_IMPORTED_MODULE_1__["RoutingPath"].appRouting.transaction.pages.error.path,
                component: _pages_pages_index__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"],
                data: {
                    breadcrumb: _configs_routing_path__WEBPACK_IMPORTED_MODULE_1__["RoutingPath"].appRouting.transaction.pages.error.breadcrumb
                }
            }
        ]
    }
];
class TransactionRoutingModule {
}
TransactionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionRoutingModule });
TransactionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionRoutingModule_Factory(t) { return new (t || TransactionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/validate-token/validate-token.component.ts":
/*!************************************************************!*\
  !*** ./src/app/validate-token/validate-token.component.ts ***!
  \************************************************************/
/*! exports provided: ValidateTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTokenComponent", function() { return ValidateTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_id_c_vt_header_id_c_vt_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/id-c-vt-header/id-c-vt-header.component */ "./src/app/validate-token/components/id-c-vt-header/id-c-vt-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_id_c_vt_footer_id_c_vt_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/id-c-vt-footer/id-c-vt-footer.component */ "./src/app/validate-token/components/id-c-vt-footer/id-c-vt-footer.component.ts");





class ValidateTokenComponent {
    constructor() {
    }
    ngOnInit() { }
}
ValidateTokenComponent.ɵfac = function ValidateTokenComponent_Factory(t) { return new (t || ValidateTokenComponent)(); };
ValidateTokenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidateTokenComponent, selectors: [["app-validate-token"]], decls: 4, vars: 0, consts: [[1, "content-validate"]], template: function ValidateTokenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-id-c-vt-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-id-c-vt-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_id_c_vt_header_id_c_vt_header_component__WEBPACK_IMPORTED_MODULE_1__["IdCVtHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_id_c_vt_footer_id_c_vt_footer_component__WEBPACK_IMPORTED_MODULE_3__["IdCVtFooterComponent"]], styles: ["body {\n  background-color: #F1F2F3;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGUtdG9rZW4vQzpcXFVzZXJzXFxKZW5uaWZlciBSb21lcm9cXEFwbGljYWNpb25lc1xcV0VCXFxzb3l5b193ZWJfdHJhbnNhY2Npb25lcy9zcmNcXGFwcFxcdmFsaWRhdGUtdG9rZW5cXHZhbGlkYXRlLXRva2VuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YWxpZGF0ZS10b2tlbi92YWxpZGF0ZS10b2tlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRlLXRva2VuL3ZhbGlkYXRlLXRva2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIGJvZHkgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjM7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn0iLCI6Om5nLWRlZXAgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjM7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateTokenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validate-token',
                templateUrl: './validate-token.component.html',
                styleUrls: ['./validate-token.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/validate-token/validate-token.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/validate-token/validate-token.module.ts ***!
  \*********************************************************/
/*! exports provided: ValidateTokenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTokenModule", function() { return ValidateTokenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _validate_token_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate-token.component */ "./src/app/validate-token/validate-token.component.ts");
/* harmony import */ var _validate_token_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validate-token-routing.module */ "./src/app/validate-token/validate-token-routing.module.ts");
/* harmony import */ var _pages_pages_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.index */ "./src/app/validate-token/pages/pages.index.ts");
/* harmony import */ var _components_id_c_vt_state_id_c_vt_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/id-c-vt-state/id-c-vt-state.component */ "./src/app/validate-token/components/id-c-vt-state/id-c-vt-state.component.ts");
/* harmony import */ var _components_id_c_vt_header_id_c_vt_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/id-c-vt-header/id-c-vt-header.component */ "./src/app/validate-token/components/id-c-vt-header/id-c-vt-header.component.ts");
/* harmony import */ var _components_id_c_vt_footer_id_c_vt_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/id-c-vt-footer/id-c-vt-footer.component */ "./src/app/validate-token/components/id-c-vt-footer/id-c-vt-footer.component.ts");










class ValidateTokenModule {
}
ValidateTokenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ValidateTokenModule });
ValidateTokenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ValidateTokenModule_Factory(t) { return new (t || ValidateTokenModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _validate_token_routing_module__WEBPACK_IMPORTED_MODULE_4__["TransactionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ValidateTokenModule, { declarations: [_validate_token_component__WEBPACK_IMPORTED_MODULE_3__["ValidateTokenComponent"],
        _pages_pages_index__WEBPACK_IMPORTED_MODULE_5__["ValidateComponent"],
        _pages_pages_index__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
        _components_id_c_vt_header_id_c_vt_header_component__WEBPACK_IMPORTED_MODULE_7__["IdCVtHeaderComponent"],
        _components_id_c_vt_footer_id_c_vt_footer_component__WEBPACK_IMPORTED_MODULE_8__["IdCVtFooterComponent"],
        _components_id_c_vt_state_id_c_vt_state_component__WEBPACK_IMPORTED_MODULE_6__["IdCVtStateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _validate_token_routing_module__WEBPACK_IMPORTED_MODULE_4__["TransactionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateTokenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _validate_token_component__WEBPACK_IMPORTED_MODULE_3__["ValidateTokenComponent"],
                    _pages_pages_index__WEBPACK_IMPORTED_MODULE_5__["ValidateComponent"],
                    _pages_pages_index__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
                    _components_id_c_vt_header_id_c_vt_header_component__WEBPACK_IMPORTED_MODULE_7__["IdCVtHeaderComponent"],
                    _components_id_c_vt_footer_id_c_vt_footer_component__WEBPACK_IMPORTED_MODULE_8__["IdCVtFooterComponent"],
                    _components_id_c_vt_state_id_c_vt_state_component__WEBPACK_IMPORTED_MODULE_6__["IdCVtStateComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _validate_token_routing_module__WEBPACK_IMPORTED_MODULE_4__["TransactionRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=validate-token-validate-token-module-es2015.js.map