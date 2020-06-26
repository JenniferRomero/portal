(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/core/models/generate-qr.model.ts":
/*!**************************************************!*\
  !*** ./src/app/core/models/generate-qr.model.ts ***!
  \**************************************************/
/*! exports provided: GenerateQr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateQr", function() { return GenerateQr; });
class GenerateQr {
    constructor(idTransaction, channel) {
        this.idTransaction = idTransaction;
        this.channel = channel;
    }
}


/***/ }),

/***/ "./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: IdCCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCCarouselComponent", function() { return IdCCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_core_models_generate_qr_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/generate-qr.model */ "./src/app/core/models/generate-qr.model.ts");
/* harmony import */ var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/services.index */ "./src/app/services/services.index.ts");






class IdCCarouselComponent {
    constructor(translate, _generateQr) {
        this.translate = translate;
        this._generateQr = _generateQr;
        this.sliders = [];
    }
    ngOnInit() {
        const idTransaction = '1';
        const channel = 'Web';
        const data = new src_app_core_models_generate_qr_model__WEBPACK_IMPORTED_MODULE_2__["GenerateQr"](idTransaction, channel);
        /*this._generateQr.getQRCode(data).subscribe(resp => {
          console.log(resp);
        });*/
        const qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAAD3CAYAAADBjMJTAAAABmJLR0QA/wD/AP+gvaeTAAATTElEQVR4nO3dWYxb13kH8P8lOQtnkSVFGkuydsnaZUkeyUrauFLiBAiSwogT9EWBi9TtQx8StC8tWqBFkJcCDtCiRR9atA9p6yYI4LZZ4DhI4sSJY8eubVmWbGsZxRrtM9JotM7CWcibh4/UzMiX1iXP4TmHn/4/QPBY4vBecvifc/nxO+dEB3rjGESkTs73CdzpW2+mu92Xdjf2PGphcs5J3+vrdklMvtfk/tL+fE3OJS3b5+xKxvcJEFFjMNxESjHcREox3ERKVS2o+SpUmNzOdjEpLdvHsF2s8fV4TX6+tu/PF5854shNpBTDTaQUw02kFMNNpFRNHWohFXVsF518dWKZsN3Nl/b+XBSJTI5r++dmm6scceQmUorhJlKK4SZSiuEmUiq4KZ9p+Sp8hF7UsT290+R2SVwUQk3OxeR2oeHITaQUw02kFMNNpBTDTaRUUxTUbK8fZrsY52vdN18FMNvHSHt/Sefiq0uvGXDkJlKK4SZSiuEmUorhJlKqpoJa6MUGF0UTXxsBpOWiM85XMdPX2m22ucoRR24ipRhuIqUYbiKlGG4ipaoW1EJa2D303TFdFNmasXCUxPbzZ/u4SXwVR01x5CZSiuEmUorhJlKK4SZSKgeE33mWxNcUw5CKOibH9cXF8+eimGlyOxe+tJsjN5FaDDeRUgw3kVIMN5FS0YHeOE76BxfFARdFrCS2Cy5JXNyfC76KRC66wlx0y/ma5suCGpFiDDeRUgw3kVIMN5FSxlM+bRcbfBXP0gq9UBbSVMSQdgNN4qI7MO39NaLIy5GbSCmGm0gphptIKYabSKmqHWpJfK1/lfZckjTj+Zkcw3Znl4vn2dcxfBVHXRWhOXITKcVwEynFcBMpxXATKVXTLp+hL4LfjMUz28+LlumsWnbbdPHzqIYjN5FSDDeRUgw3kVIMN5FSNRXU0vK11pVtaY8bUqeTLyHtJJrE16YOPl+nHLmJlGK4iZRiuImUYriJlHI25TMtX1MW0wp9t82Qzs/F5gAm5xLS9M5GTI/lyE2kFMNNpBTDTaQUw02kVNUOtZDWS7MtpMXyQ5ruaLszzuRx2C4w2X68Loq8pq81jtxESjHcREox3ERKMdxESuUAf+s8+ZoS6KtYGPqi+mm5eK5cTBs2kfY58PU42KFGpBjDTaQUw02kFMNNpFRDpnza5mJXxJCmO7o4rgkX3W2hdzkm8Tm9MwlHbiKlGG4ipRhuIqUYbiKlogO9ceyrQOKrU8zFOZsIvcsspO4xF9N3XeQjiem5cOQmUorhJlKK4SZSiuEmUqohu3xqKUS5WCss7a6habkoTvla4N9ESMUzV1N1OXITKcVwEynFcBMpxXATKVV1yqevrpwkLnb+DH19s7qOW/7JfuXvgPFRoFQCslmgvQOYtxD4yBJgwWKgrb3+8/qw80viq7AVeudjI+6vIdVyciuOgbER4MTbs/4OQFT++tv/BMSlmb+LMkAmA2RzQL4L6FkGrNoIrNkMbNgh4Y+iDx6HmgvD3cTGR4EzfcCRV4H+Y8C1K3fcoBzQq5er30cmC1w6B7x/FOh8QUbydduAhz4GrFgnQafmxHA3o1hG4e/+O9B/Arh0Frg2JJfdFWkH3lJRfkmMjwLDg8D5U8CFfqDvMLB2M7B9L7B6E9DR3YgHQo3EcDeRymV1DLlsfuk54NZ1u8coFYErA/Ln3G+AsyeBbY8AW/bISJ7J2j0eNY7xGmpJQu+wSiuktcLiWV9E0dz31I0URcDiZcC2vcDu/cCDDwEdXR+8nZaplyF1y5l+Lz8KaxbldFcKXa7qXXEMXL4AvPI88INvAm+/DIxcl7+nsPGyPGTxzH+i29fjfk5loiDvw4cGgMkC8PA+oOs+qbpTmPijCV0kP6TYY7ArSiUpuj3zD8AbPwdGb3IEDxnDHbAYQBQDpbve0q3CGPCtfwTe/CUwcsP32VA1Na2h5mtXzrQaUZSol3GRqDxSx3e81w7BnHOycEXholMspJ9vWqavZ77nDkxxGnM+8wop1BWVc6rUAipXGL7fNtBcDHdgzp7ErA+zPZ/MXUSY9Z478HO9FzHcARm9Cbz7evl/LIYl1wLkO4G2vFS3P+xqIAYwfgsYvTW3462a25fmkKCHeKVxr2K4A9J/DDh60M6g3d4BLF4KLFkJLOwBuubL39013DHw1kvAb94FJsZTHszxZ++UTtVwh9QplsT2+mauuoaqGR8F3nkN6D9qFpIoAhYtBdZtBbbuATbuAu5fLqP33ZRK0s567K3aR+AFi4F9jwOP/9HMFNKQ1mSz3QVn8tjS4pRPJc70AaeOm/WKRxHQs1xC9rFPA4sfkF7xwjhw85p8nckCrW0yimdz5YJYDExNAJcvyrTRYwfl465aXL8CnHoPGDgtE03IP4Y7AHEs0zYvnTW7n+4FwBN/Aux6VPq/JwvAlUHg5BHgzAlgdATIdwAr1wMP7pCe8bZ2AJG0mD77L8DBX9bXmBLHwOB5eRwMdxgY7gCMj5bnYw+Z3c8TfyzzsDu7ZSR99cfAC/8jLaNxjNtv5qMIWLAI2P954NHPyWX8gh5g76ck3PUaHgT6jshVQEub2WMhc+xQC8DxQ7LQQprqdJJsDtj8MLDjd4Hu+4DhS8CPvg0894wEu1Qsr8QSy39LRflF8uPvAM/9FzBwRqrpG3cCvfuBXGt951Gclvt9/2h930921TRyhz6VM7RF4dPqPwqMGrRxtrYB+58A7lsoAf71j4A3XgRuXp3VTZaREX1sRMJdKknr6MGXZCGGzz8ll/Wf+qK8556erO9cRm/KVcimXfU/nlo04wYYLgrOAC/Lg3CmT0JXj0wG6J4PbOmVkJ8+IdXu4UEJdr4LWL8V2PMYMG+BhO+tl6RwNnJDLt/73gZOvgNs2Q2s3SqX6YWxcrdcjcZuAaeP1/dYyC6G27PCmBS9Jgr1fX+uFbh/hQQ3ykjxbOiiBDPXAqzaAHzmALC5V4pnU5Py0dj0lPwSmCzIpfuJQ7LiSr4DeGCNFNjG6/iFMzEua7IVi/U9HrKH77k9uzYEFEblvXA9Wlqk6h2VC2WDZ2V0BoDOeTJqb3tk5rPnllb57HvjTrmMB+T2A5VKfSSrobak+Fw8yfQ0cOsGZ4uFgOH2rDLK1ivKSFtppfNlfExGZUA+Dpu/+IMNLJmMVMc7y4seTk/JL5iKtg6zRRimp6SoR37lAH9TJX11JrnYvTPtc/X0V2HUbxrHcmld6e9ubZtZxHCyID3i01NzA14qSgGv8lYgmwNa8zP/PjUBlAwWYRgaAP72SbPXi+2NKJKE/npOe4xqOHI3ueKUFMXiWP4sXjazgGGla+zSuXJgi/Kee/iyFNCGB+V2+U7pQ698Fn7titxvvaLKZ+rkFcMdgNigmXyiINNEp8ofXW3YIRNFAClqHX8L+ObTwLtvSGhPHAL+82ngyGvA5ITcbmEPsHGHfF2K5RdCIe2kkaTHA3AWSQBYLQ+AyUIHcSyX3scOAlsfAdZuATbsBAbPycg9UZAK+r9+TS6/S0Wp0Ffel3d2yySTLXvk786ckCKfUR0A4MgdAI7cvlmY3zlZAF54Vj5jzrUAH/8ssHvf3ILZyA3gxrBMTJmalF8KbXnpQ9/3uHxdGAV++qwU5YweUmT+mMic15HbV5ePr26lxAJOL4wDPj0tPd1vvgjs/bR8jv2JL8hOnm/+Ajj3/tyP2qIIWLpKlifesx94YK38Yjj8qvyptzutomcZ8OffcLMjakjrr9kuwJrcjmuohWDWSiZ1i2XyyYvfl1bShz4qW/90dAHL1wEXTkmjTGFMRuiFPdKosmaLFNImCtLQ8rP/BW5dM39IuRbZHpj8Yrg9m7PIoOF9nTkBvPg9ubzetlfaSBctkSaWq5elSNbWLgsrdHTJca9eltVfXvuJvDc3lc3JZgWd3DjQO4bbs0rxydbaY8cOyvvroQGZvNGzXFpTl6yU7rTpKRmphy7KbfoOA4delskrNrR3yCU/Nwz0j+EOgMkColEEtLZLoIrTMhJfOCXTON9+RQK+aoN0qnV0yaX59WHg3EmZanqhXyroC++XXwITY8Cl8/VPP+3sBtZwsYYg1LQpQRIX0+vSHjctF4+tlvM7/GvgO/9cXta4Ri2twJrNwJ9+XSrhP/8/+Wz7+rB8jv1hPevZnLwHX7pSFmrY/QnZtvffvi4fr9Xqzg0UXHRn+Xr9ucA11BTYuFOKXOdPyShai7a8LGv0kSVAzwPA6o3yHvqV54H3XgduzJrTfVskvePL10qo93xSRn4AmL9IesvrCXflvrnEcRgY7gC05WUe9flTsul9LcZGgEO/ArbvlSaW1jZZlWX9VuDmdZkldvG0LNwwOSGXzQt6gBXrpdiW75TRP46Bm8PAD/97ZlZZraIPfEE+MdwBiCJZ+6zvcO3hLhXlffYzfy/38TufkffYHd0yAs9fJF1rxWkJcDYLZFukap7LAYikueWd/wdefl4q7pP1zC2PpXmFuQ4Hwx2IFeuAtZvlPe+N4dq+tzgtiyu8/jMJ56pNEuiV62UiybwFd9y+CFwfkjncp4/JmmcX+4FLF2SCSb0ibi0UlKpTPm0vzp4kpGKIr6l5leO2dwDbPyrhPvQr1BWQm9fkz8BZ4OThmQp457zySN0io/L42MwSS8ODwNUhs1BnskDvPuBzTwIPbp/5excdaraLbC7W4XNxzuxQC8yaTTKB49DLZvczUl4J5UyfXPJnc/JePNcq4Z4s1P9RV5IlK2R3kxXr7d0nmWO4A5LvkpDYFMfSuDJtMD/7w+Q75b3+lt1Ae/7utyd3OCssMCvWQbpa4vBnTWZzchn+8O8By1b7Phu6E8MdmEx2ZrGDSmtqPdv7NFoUyefqj/0BsH47P9cOUXSg181LJ6Qih4vjplXtGJX1xf/jG9IyGkpjSOU88l3AU38lu5xUmyRiuxNQS7Er7XHT3l+17+XIHaiObmDnx4EDfyaV9FBEkOr7l/9C3mtX1muj8DDcgYoiCdEjjwFf/suZaaHeRcBTfy2/eDq6w7iaoGSslgcsk5G50bself83WWvNlhgyYuc7GezQMdyBiyIJ+O0i2+zh20G4bv8+qWz/C16KN4uGTPk0EdIOnKEV3kpFmX/93hvyp//YzJrltlVCveeTspLL5l75uKvaaO2iU9HFhhWhT1dOix1qTSaTLc/mWirdbEdekzXGB89LG6nJcsTArIr8rMv/3/9DOWZlrzFqHgx3E8p3ymZ+qzcDA6eBI6/KDiJXL8tHaGO3ZLfN6buEPZ410eP2gDzr8hsxsH5bYx4DNR7D3cTa2mWhhtWbZC3y99+TS/XTx2ULoVs3pO10aEDeq1cG5MrUzNsV+FkrqMQx52VrwXAr0dIq66Vt2iX/XyrK5JHhS8DfPIk5o/OcAtkdFXhWwPVoyC6ftgtMvoo1vrqLbDzPmaxsSjBvYZVzOZjuGGm5KIpp4aq4xyYWIqUYbiKlGG4ipRhuIqVygL8ih68CnW0hFRB9cVE889Vl5qqjLM1xa7kdR24ipRhuIqUYbiKlGG4ipWqa8umrsBVSV1NI3Wi+nueQXhtpuVhDzdfUaa6hRnSPYbiJlGK4iZRiuImUqlpQC4mLwpGLIpGWolMSX2uemdxfEl/ruTUCR24ipRhuIqUYbiKlGG4ipaoukBhSJ5YJF9MOTY7rotPJdgEnpAX+k/h67aY9hquuRI7cREox3ERKMdxESjHcRErVtONI2iKRye1Cn3LnYlqk7eOmvT/bmzXYPq7JMZLYXtMutLUIOXITKcVwEynFcBMpxXATKVVTQS30jqMkaQs4Loo6Jo/D5PxcTHENqRPQ188ytF1SOXITKcVwEynFcBMpxXATKRUd6I3jpH8Iab0qF9+bJKSF55P4WlvONl+diiF1/TXiuBy5iZRiuImUYriJlGK4iZRqyC6fSVx075gI/bG52NAg9E0YQiqEhjQNlLt8Et1jGG4ipRhuIqUYbiKlaiqopeWiEyukApjJcZuxa832cV1MNfVV9PT58+DITaQUw02kFMNNpBTDTaRUDgirwOTiGL6KcSEdIy3ba7e5YLvwZnvzAtvYoUZ0j2G4iZRiuImUYriJlKraoRYSF91A7HjzV3wM6fXnq8ibVi2ve47cREox3ERKMdxESjHcREoZd6jZllQw8LUOlYupfr6mgfo6hu3XWki7s7rYibUWHLmJlGK4iZRiuImUYriJlMpV+wefi6nX+722u4ZsF1Jc7EiZJKTime1zcbH+mu1zMbm/Wp57jtxESjHcREox3ERKMdxESlUtqCUJaaOCJCbT9XxNbXTR8WYipGJhSOvX+ToXTvkkIoabSCuGm0gphptIqZoKaqFrxs0GTIpnvtaRczEF0sU6Y76m+bpaM44jN5FSDDeRUgw3kVIMN5FSTVtQs13Q8FVMcjEVMYnJubh4rkLioshmglM+ie4xDDeRUgw3kVIMN5FSNRXUQtqNMS1fxakkoRfPkjTjTqIuOsVCWvuOUz6J7jEMN5FSDDeRUgw3kVLRgd449n0Ss/nq8knLxQL/aY8b+vPiYtqmr+4xX2vu1XJ/HLmJlGK4iZRiuImUYriJlAquoEZEdvwWohMXC9aJ8fQAAAAASUVORK5CYII=";
        this.titleCarrusel = this.translate.instant('carrusel.title');
        this.imagePathFirst = 'assets/images/carrusel.svg';
        this.subtitleFirst = 'carrusel.slideFirst.subtitle';
        this.textFirst = 'carrusel.slideFirst.text';
        this.imagePathSecond = 'assets/images/carrusel2.svg';
        this.subtitleSecond = 'carrusel.slideSecond.subtitle';
        this.textSecond = 'carrusel.slideSecond.text';
        this.imagePathThird = qr;
        //this.imagePathThird = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACEAQMAAABrihHkAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAw0lEQVRIie2VMQ7DUAhDuYHvf0vfwLVJK0UdWiXuWMJA3vCDkfmZ+ceXkEQB2qIgTMLPFgURHTiKkkzQjwhb4qTS5ln7daJ9Y6gakgD15obrxJ1pIGRmLIhrI+bwiuyJlnl85D5RVCJ9ahpic4uwUKEiPhNLBTYk3tyNG1XENgJ3cd1iQZZJsDHBikStnTBkQ45NeW5LQbKwmXv8OQ3ZmyRCX0rvE2T48XpJsidK1ZDNtfhJ+3Wyk9f+iM435GXyjw/xAPSVAhoWGEr8AAAAAElFTkSuQmCC";
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
}
IdCCarouselComponent.ɵfac = function IdCCarouselComponent_Factory(t) { return new (t || IdCCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_services_index__WEBPACK_IMPORTED_MODULE_3__["GenerateQrService"])); };
IdCCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdCCarouselComponent, selectors: [["app-id-c-carousel"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])], decls: 53, vars: 31, consts: [[1, "carrousel"], ["id", "slider"], ["checked", "", "type", "radio", "name", "slider", "id", "slide1"], ["type", "radio", "name", "slider", "id", "slide2"], ["type", "radio", "name", "slider", "id", "slide3"], ["type", "radio", "name", "slider", "id", "slide4"], ["id", "slides"], ["id", "overflow"], [1, "inner"], [1, "slide"], [1, "row", "name"], [1, "row", "description", 3, "innerHTML"], [1, "slide-content"], ["alt", "", 1, "img_slider", 3, "src"], [1, "row", "name", 3, "innerHTML"], ["alt", "", 1, "img_slider", "codqr", 3, "src"], ["id", "controls"], ["for", "slide1"], ["for", "slide2"], ["for", "slide3"], ["for", "slide4"], ["id", "bullets"]], template: function IdCCarouselComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-id-c-carousel',
                templateUrl: './id-c-carousel.component.html',
                //styleUrls: ['./id-c-carousel.component.scss'],
                providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_3__["GenerateQrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IdCUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCUserComponent", function() { return IdCUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class IdCUserComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
IdCUserComponent.ɵfac = function IdCUserComponent_Factory(t) { return new (t || IdCUserComponent)(); };
IdCUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdCUserComponent, selectors: [["app-id-c-user"]], decls: 11, vars: 6, consts: [[1, "col-md-9", "user"], [1, "row"], [1, "col-md-3", "tel"], ["src", "assets/images/telefono.svg", "alt", "", 1, "img_telephone"], [1, "col-md-9", "c-user"], [1, "row", "title-user"], [1, "row", "text-user"]], template: function IdCUserComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "dashboard.title-register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "dashboard.text-register"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-id-c-user',
                templateUrl: './id-c-user.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/modules/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/modules/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_id_c_user_id_c_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/id-c-user/id-c-user.component */ "./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts");
/* harmony import */ var _components_id_c_carousel_id_c_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/id-c-carousel/id-c-carousel.component */ "./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class DashboardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 25, vars: 9, consts: [[1, "container_dashboard"], [1, "container_base"], [1, "row", "in-line"], [1, "col-md-6"], [1, "row", "logo"], ["src", "assets/images/logo.svg", "alt", "", 1, "img"], [1, "row"], [1, "col-md-12"], [1, "welcome"], [1, "text-welcome", 3, "innerHTML"], [1, "text-help"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, "dashboard.welcome"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "dashboard.text-welcome"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 7, "dashboard.text-help"));
    } }, directives: [_components_id_c_user_id_c_user_component__WEBPACK_IMPORTED_MODULE_1__["IdCUserComponent"], _components_id_c_carousel_id_c_carousel_component__WEBPACK_IMPORTED_MODULE_2__["IdCCarouselComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/modules/modules.index.ts":
/*!************************************************!*\
  !*** ./src/app/pages/modules/modules.index.ts ***!
  \************************************************/
/*! exports provided: ProfileComponent, DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/modules/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });

/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/modules/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]; });





/***/ }),

/***/ "./src/app/pages/modules/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/modules/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProfileComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, consts: [[1, "container", "m-5"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is my profile\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/routing-path */ "./src/app/configs/routing-path.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modules.index */ "./src/app/pages/modules/modules.index.ts");







const routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            {
                path: '',
                redirectTo: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.path,
                pathMatch: 'full'
            },
            {
                path: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.path,
                component: _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "./src/app/pages/modules/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
                data: {
                    breadcrumb: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.breadcrumb
                }
            },
            {
                path: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.profile.path,
                component: _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                data: {
                    breadcrumb: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.profile.breadcrumb
                }
            }
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 1, vars: 0, template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");





class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es2015.js.map