function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/configs/routing-path.ts":
  /*!*****************************************!*\
    !*** ./src/app/configs/routing-path.ts ***!
    \*****************************************/

  /*! exports provided: RoutingPath */

  /***/
  function srcAppConfigsRoutingPathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingPath", function () {
      return RoutingPath;
    });

    var RoutingPath = function RoutingPath() {
      _classCallCheck(this, RoutingPath);
    };

    RoutingPath.appRouting = {
      transaction: {
        pages: {
          validate: {
            path: ':idProcess/:identificationNumber/:token',
            breadcrumb: 'Inicio de sesión'
          },
          error: {
            path: 'error',
            breadcrumb: 'Error al validar Token'
          }
        }
      },
      pages: {
        modules: {
          dashboard: {
            path: 'dashboard',
            breadcrumb: 'Inicio',
            submodules: {}
          },
          profile: {
            path: 'profile',
            breadcrumb: 'Perfil'
          }
        }
      }
    };
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map