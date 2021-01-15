(window["zkdStarterWebpackJsonpCallback"] = window["zkdStarterWebpackJsonpCallback"] || []).push([["/scripts/main"],{

/***/ "./resources/assets/scripts/components/cookieBar.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/components/cookieBar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Module: Cookie Bar
 *
 * 
 */
var cookieBar = function ($) {
  var object = $('.cookie-bar'),
      init = function init() {
    if (0 !== object.length) {
      object.find('.close').click(function () {
        dismissCookieBar(object);
      });
    }
  },
      dismissCookieBar = function dismissCookieBar(object) {
    $.ajax({
      url: zkd.ajax,
      type: 'POST',
      data: {
        action: 'dismiss_cookie_bar'
      }
    }).done(function () {
      object.slideUp(400, function () {
        $(this).remove();
      });
    }).fail(function (response) {
      console.log(response);
    });
  };

  return {
    init: init
  };
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (cookieBar);

/***/ }),

/***/ "./resources/assets/scripts/components/navigation.js":
/*!***********************************************************!*\
  !*** ./resources/assets/scripts/components/navigation.js ***!
  \***********************************************************/
/*! exports provided: handleNavigationToggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNavigationToggler", function() { return handleNavigationToggler; });
/**
 * Handle the mobile navigation toggler.
 *
 * 
 */
var handleNavigationToggler = function handleNavigationToggler() {
  var toggler = document.querySelector('[data-main-navigation-toggler]');
  var menu = document.querySelector('[data-main-navigation-menu]');

  if (toggler && menu) {
    toggler.addEventListener('click', function (e) {
      toggler.classList.toggle('--active');
      menu.classList.toggle('--active');
    });
  }
};

/***/ }),

/***/ "./resources/assets/scripts/components/utils.js":
/*!******************************************************!*\
  !*** ./resources/assets/scripts/components/utils.js ***!
  \******************************************************/
/*! exports provided: lightboxGallery, smoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightboxGallery", function() { return lightboxGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/**
 * Module: Utils
 *
 *
 */
var lightboxGallery = function lightboxGallery() {
  $('[data-toggle="lightbox"]').click(function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
};
var smoothScroll = function smoothScroll() {
  $("body").on("click", 'a[href*="#"]', function (e) {
    var hash = this.hash;

    if ("" !== hash && (this.href.split("#").length < 2 || document.location.href.includes(this.href.split("#")[0]))) {
      //do this only if the href (without hash) contains current location or is contains just the hash itself
      e.preventDefault();

      try {
        $("html, body").animate({
          scrollTop: $(hash).offset().top - 100
        });
      } catch (error) {
        // catch error when top is null
        console.error(error);
      }
    }
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/scripts/main.js":
/*!******************************************!*\
  !*** ./resources/assets/scripts/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/Router */ "./resources/assets/scripts/util/Router.js");
/* harmony import */ var _routes_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/common */ "./resources/assets/scripts/routes/common.js");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/home */ "./resources/assets/scripts/routes/home.js");
/* harmony import */ var _routes_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/about */ "./resources/assets/scripts/routes/about.js");




if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}





var routes = new _util_Router__WEBPACK_IMPORTED_MODULE_3__["default"]({
  common: _routes_common__WEBPACK_IMPORTED_MODULE_4__["default"],
  home: _routes_home__WEBPACK_IMPORTED_MODULE_5__["default"],
  aboutUs: _routes_about__WEBPACK_IMPORTED_MODULE_6__["default"]
});
jQuery(document).ready(function () {
  return routes.loadEvents();
});

/***/ }),

/***/ "./resources/assets/scripts/routes/about.js":
/*!**************************************************!*\
  !*** ./resources/assets/scripts/routes/about.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {// JavaScript to be fired on the about us page
  }
});

/***/ }),

/***/ "./resources/assets/scripts/routes/common.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/routes/common.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cookieBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cookieBar */ "./resources/assets/scripts/components/cookieBar.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation */ "./resources/assets/scripts/components/navigation.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utils */ "./resources/assets/scripts/components/utils.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    _components_cookieBar__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    Object(_components_utils__WEBPACK_IMPORTED_MODULE_2__["lightboxGallery"])();
    Object(_components_utils__WEBPACK_IMPORTED_MODULE_2__["smoothScroll"])();
    Object(_components_navigation__WEBPACK_IMPORTED_MODULE_1__["handleNavigationToggler"])();
  },
  finalize: function finalize() {}
});

/***/ }),

/***/ "./resources/assets/scripts/routes/home.js":
/*!*************************************************!*\
  !*** ./resources/assets/scripts/routes/home.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {// JavaScript to be fired on the home page
  },
  finalize: function finalize() {// JavaScript to be fired on the home page, after the init JS
  }
});

/***/ }),

/***/ "./resources/assets/scripts/util/Router.js":
/*!*************************************************!*\
  !*** ./resources/assets/scripts/util/Router.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camelCase */ "./resources/assets/scripts/util/camelCase.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */

var Router = /*#__PURE__*/function () {
  /**
   * Create a new Router
   * @param {Object} routes
   */
  function Router(routes) {
    _classCallCheck(this, Router);

    this.routes = routes;
  }
  /**
   * Fire Router events
   * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
   * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
   * @param {string} [arg] Any custom argument to be passed to the event.
   */


  _createClass(Router, [{
    key: "fire",
    value: function fire(route) {
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
      var arg = arguments.length > 2 ? arguments[2] : undefined;
      document.dispatchEvent(new CustomEvent('routed', {
        bubbles: true,
        detail: {
          route: route,
          fn: event
        }
      }));
      var fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';

      if (fire) {
        this.routes[route][event](arg);
      }
    }
    /**
     * Automatically load and fire Router events
     *
     * Events are fired in the following order:
     *  * common init
     *  * page-specific init
     *  * page-specific finalize
     *  * common finalize
     */

  }, {
    key: "loadEvents",
    value: function loadEvents() {
      var _this = this;

      // Fire common init JS
      this.fire('common'); // Fire page-specific init JS, and then finalize JS

      document.body.className.toLowerCase().replace(/-/g, '_').split(/\s+/).map(_camelCase__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(function (className) {
        _this.fire(className);

        _this.fire(className, 'finalize');
      }); // Fire common finalize JS

      this.fire('common', 'finalize');
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./resources/assets/scripts/util/camelCase.js":
/*!****************************************************!*\
  !*** ./resources/assets/scripts/util/camelCase.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
/* harmony default export */ __webpack_exports__["default"] = (function (str) {
  return "".concat(str.charAt(0).toLowerCase()).concat(str.replace(/[\W_]/g, '|').split('|').map(function (part) {
    return "".concat(part.charAt(0).toUpperCase()).concat(part.slice(1));
  }).join('').slice(1));
});

/***/ }),

/***/ 1:
/*!************************************************!*\
  !*** multi ./resources/assets/scripts/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mateusz\Documents\zakoduje_local\wp-content\themes\zakoduje\resources\assets\scripts\main.js */"./resources/assets/scripts/main.js");


/***/ })

},[[1,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9jb29raWVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcm91dGVzL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9yb3V0ZXMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9yb3V0ZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvdXRpbC9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3V0aWwvY2FtZWxDYXNlLmpzIl0sIm5hbWVzIjpbImNvb2tpZUJhciIsIiQiLCJvYmplY3QiLCJpbml0IiwibGVuZ3RoIiwiZmluZCIsImNsaWNrIiwiZGlzbWlzc0Nvb2tpZUJhciIsImFqYXgiLCJ1cmwiLCJ6a2QiLCJ0eXBlIiwiZGF0YSIsImFjdGlvbiIsImRvbmUiLCJzbGlkZVVwIiwicmVtb3ZlIiwiZmFpbCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpRdWVyeSIsImhhbmRsZU5hdmlnYXRpb25Ub2dnbGVyIiwidG9nZ2xlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxpZ2h0Ym94R2FsbGVyeSIsInByZXZlbnREZWZhdWx0IiwiZWtrb0xpZ2h0Ym94Iiwic21vb3RoU2Nyb2xsIiwib24iLCJoYXNoIiwiaHJlZiIsInNwbGl0IiwibG9jYXRpb24iLCJpbmNsdWRlcyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJlcnJvciIsIndpbmRvdyIsIk5vZGVMaXN0IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsIkFycmF5IiwiSFRNTENvbGxlY3Rpb24iLCJyb3V0ZXMiLCJSb3V0ZXIiLCJjb21tb24iLCJob21lIiwiYWJvdXRVcyIsInJlYWR5IiwibG9hZEV2ZW50cyIsImZpbmFsaXplIiwicm91dGUiLCJldmVudCIsImFyZyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkZXRhaWwiLCJmbiIsImZpcmUiLCJib2R5IiwiY2xhc3NOYW1lIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibWFwIiwiY2FtZWxDYXNlIiwic3RyIiwiY2hhckF0IiwicGFydCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFLLFVBQVNDLENBQVQsRUFBWTtBQUU5QixNQUVFQyxNQUFNLEdBQUdELENBQUMsQ0FBRSxhQUFGLENBRlo7QUFBQSxNQUlFRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ1gsUUFBSyxNQUFNRCxNQUFNLENBQUNFLE1BQWxCLEVBQTJCO0FBQ3pCRixZQUFNLENBQUNHLElBQVAsQ0FBYSxRQUFiLEVBQXdCQyxLQUF4QixDQUErQixZQUFXO0FBQ3hDQyx3QkFBZ0IsQ0FBRUwsTUFBRixDQUFoQjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBVkg7QUFBQSxNQVlFSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUVMLE1BQUYsRUFBYztBQUMvQkQsS0FBQyxDQUFDTyxJQUFGLENBQU87QUFDTEMsU0FBRyxFQUFFQyxHQUFHLENBQUNGLElBREo7QUFFTEcsVUFBSSxFQUFF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QUNBLFdBQUtGLElBQUwsQ0FBVSxRQUFWLEVBQW9CLFVBQXBCO0FBQ0Q7Ozs7OztBQUdZZixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UseUVBQUFzQixHQUFHO0FBQUEsbUJBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBY0wsV0FBZCxFQUFQLFNBQXFDSSxHQUFHLENBQUNILE9BQUosQ0FBWSxRQUFaLEVBQXNCLEdBQXRCLEVBQTJCbEMsS0FBM0IsQ0FBaUMsR0FBakMsRUFDcERtQyxHQURvRCxDQUNoRCxVQUFBSSxJQUFJO0FBQUEscUJBQU9BLElBQUksQ0FBQ0QsTUFBTCxDQUFZLENBQVosRUFBZUUsV0FBZixFQUFQLFNBQXNDRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLENBQXRDO0FBQUEsR0FENEMsRUFFcERDLElBRm9ELENBRS9DLEVBRitDLEVBR3BERCxLQUhvRCxDQUc5QyxDQUg4QyxDQUFyQztBQUFBLENBQWxCLEUiLCJmaWxlIjoiL3NjcmlwdHMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBNb2R1bGU6IENvb2tpZSBCYXJcclxuICpcclxuICogXHJcbiAqL1xyXG5jb25zdCBjb29raWVCYXIgPSAoIGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgdmFyXHJcblxyXG4gICAgb2JqZWN0ID0gJCggJy5jb29raWUtYmFyJyApLFxyXG5cclxuICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgIGlmICggMCAhPT0gb2JqZWN0Lmxlbmd0aCApIHtcclxuICAgICAgICBvYmplY3QuZmluZCggJy5jbG9zZScgKS5jbGljayggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBkaXNtaXNzQ29va2llQmFyKCBvYmplY3QgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkaXNtaXNzQ29va2llQmFyID0gKCBvYmplY3QgKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiB6a2QuYWpheCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWN0aW9uOiAnZGlzbWlzc19jb29raWVfYmFyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuZG9uZSggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb2JqZWN0LnNsaWRlVXAoIDQwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KS5mYWlsKCBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIHJlc3BvbnNlICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9O1xyXG5cclxufShqUXVlcnkpICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb29raWVCYXI7XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGUgdGhlIG1vYmlsZSBuYXZpZ2F0aW9uIHRvZ2dsZXIuXHJcbiAqXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5hdmlnYXRpb25Ub2dnbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tYWluLW5hdmlnYXRpb24tdG9nZ2xlcl0nKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbWFpbi1uYXZpZ2F0aW9uLW1lbnVdJyk7XHJcblxyXG4gIGlmICh0b2dnbGVyICYmIG1lbnUpIHtcclxuICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgdG9nZ2xlci5jbGFzc0xpc3QudG9nZ2xlKCctLWFjdGl2ZScpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBNb2R1bGU6IFV0aWxzXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpZ2h0Ym94R2FsbGVyeSA9IGZ1bmN0aW9uKCkge1xyXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImxpZ2h0Ym94XCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCh0aGlzKS5la2tvTGlnaHRib3goKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbW9vdGhTY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICdhW2hyZWYqPVwiI1wiXScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IGhhc2ggPSB0aGlzLmhhc2g7XHJcbiAgICBpZiAoXHJcbiAgICAgIFwiXCIgIT09IGhhc2ggJiZcclxuICAgICAgKHRoaXMuaHJlZi5zcGxpdChcIiNcIikubGVuZ3RoIDwgMiB8fFxyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXModGhpcy5ocmVmLnNwbGl0KFwiI1wiKVswXSkpXHJcbiAgICApIHtcclxuICAgICAgLy9kbyB0aGlzIG9ubHkgaWYgdGhlIGhyZWYgKHdpdGhvdXQgaGFzaCkgY29udGFpbnMgY3VycmVudCBsb2NhdGlvbiBvciBpcyBjb250YWlucyBqdXN0IHRoZSBoYXNoIGl0c2VsZlxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDEwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIGNhdGNoIGVycm9yIHdoZW4gdG9wIGlzIG51bGxcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgXCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIjtcclxuaW1wb3J0IFwiY29yZS1qcy9zdGFibGVcIjtcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcblxyXG5pZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xyXG4gIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XHJcbn1cclxuXHJcbmlmICh3aW5kb3cuSFRNTENvbGxlY3Rpb24gJiYgIUhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5mb3JFYWNoKSB7XHJcbiAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcclxufVxyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi91dGlsL1JvdXRlclwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL3JvdXRlcy9jb21tb25cIjtcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vcm91dGVzL2hvbWVcIjtcclxuaW1wb3J0IGFib3V0VXMgZnJvbSBcIi4vcm91dGVzL2Fib3V0XCI7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBuZXcgUm91dGVyKHtcclxuICBjb21tb24sXHJcbiAgaG9tZSxcclxuICBhYm91dFVzXHJcbn0pO1xyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoKSA9PiByb3V0ZXMubG9hZEV2ZW50cygpKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaXQoKSB7XHJcbiAgICAvLyBKYXZhU2NyaXB0IHRvIGJlIGZpcmVkIG9uIHRoZSBhYm91dCB1cyBwYWdlXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IGNvb2tpZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb29raWVCYXJcIjtcclxuaW1wb3J0IHsgaGFuZGxlTmF2aWdhdGlvblRvZ2dsZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IGxpZ2h0Ym94R2FsbGVyeSwgc21vb3RoU2Nyb2xsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpbml0KCkge1xyXG4gICAgY29va2llQmFyLmluaXQoKTtcclxuICAgIGxpZ2h0Ym94R2FsbGVyeSgpO1xyXG4gICAgc21vb3RoU2Nyb2xsKCk7XHJcbiAgICBoYW5kbGVOYXZpZ2F0aW9uVG9nZ2xlcigpO1xyXG4gIH0sXHJcbiAgZmluYWxpemUoKSB7fVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdCgpIHtcclxuICAgIC8vIEphdmFTY3JpcHQgdG8gYmUgZmlyZWQgb24gdGhlIGhvbWUgcGFnZVxyXG4gIH0sXHJcbiAgZmluYWxpemUoKSB7XHJcbiAgICAvLyBKYXZhU2NyaXB0IHRvIGJlIGZpcmVkIG9uIHRoZSBob21lIHBhZ2UsIGFmdGVyIHRoZSBpbml0IEpTXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICcuL2NhbWVsQ2FzZSc7XHJcblxyXG4vKipcclxuICogRE9NLWJhc2VkIFJvdXRpbmdcclxuICpcclxuICogQmFzZWQgb24ge0BsaW5rIGh0dHA6Ly9nb28uZ2wvRVVUaTUzfE1hcmt1cC1iYXNlZCBVbm9idHJ1c2l2ZSBDb21wcmVoZW5zaXZlIERPTS1yZWFkeSBFeGVjdXRpb259IGJ5IFBhdWwgSXJpc2hcclxuICpcclxuICogVGhlIHJvdXRpbmcgZmlyZXMgYWxsIGNvbW1vbiBzY3JpcHRzLCBmb2xsb3dlZCBieSB0aGUgcGFnZSBzcGVjaWZpYyBzY3JpcHRzLlxyXG4gKiBBZGQgYWRkaXRpb25hbCBldmVudHMgZm9yIG1vcmUgY29udHJvbCBvdmVyIHRpbWluZyBlLmcuIGEgZmluYWxpemUgZXZlbnRcclxuICovXHJcbmNsYXNzIFJvdXRlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBSb3V0ZXJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcm91dGVzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iocm91dGVzKSB7XHJcbiAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmUgUm91dGVyIGV2ZW50c1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBET00tYmFzZWQgcm91dGUgZGVyaXZlZCBmcm9tIGJvZHkgY2xhc3NlcyAoYDxib2R5IGNsYXNzPVwiLi4uXCI+YClcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50XSBFdmVudHMgb24gdGhlIHJvdXRlLiBCeSBkZWZhdWx0LCBgaW5pdGAgYW5kIGBmaW5hbGl6ZWAgZXZlbnRzIGFyZSBjYWxsZWQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcmddIEFueSBjdXN0b20gYXJndW1lbnQgdG8gYmUgcGFzc2VkIHRvIHRoZSBldmVudC5cclxuICAgKi9cclxuICBmaXJlKHJvdXRlLCBldmVudCA9ICdpbml0JywgYXJnKSB7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncm91dGVkJywge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBkZXRhaWw6IHtcclxuICAgICAgICByb3V0ZSxcclxuICAgICAgICBmbjogZXZlbnQsXHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpcmUgPSByb3V0ZSAhPT0gJycgJiYgdGhpcy5yb3V0ZXNbcm91dGVdICYmIHR5cGVvZiB0aGlzLnJvdXRlc1tyb3V0ZV1bZXZlbnRdID09PSAnZnVuY3Rpb24nO1xyXG4gICAgaWYgKGZpcmUpIHtcclxuICAgICAgdGhpcy5yb3V0ZXNbcm91dGVdW2V2ZW50XShhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXV0b21hdGljYWxseSBsb2FkIGFuZCBmaXJlIFJvdXRlciBldmVudHNcclxuICAgKlxyXG4gICAqIEV2ZW50cyBhcmUgZmlyZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjpcclxuICAgKiAgKiBjb21tb24gaW5pdFxyXG4gICAqICAqIHBhZ2Utc3BlY2lmaWMgaW5pdFxyXG4gICAqICAqIHBhZ2Utc3BlY2lmaWMgZmluYWxpemVcclxuICAgKiAgKiBjb21tb24gZmluYWxpemVcclxuICAgKi9cclxuICBsb2FkRXZlbnRzKCkge1xyXG4gICAgLy8gRmlyZSBjb21tb24gaW5pdCBKU1xyXG4gICAgdGhpcy5maXJlKCdjb21tb24nKTtcclxuXHJcbiAgICAvLyBGaXJlIHBhZ2Utc3BlY2lmaWMgaW5pdCBKUywgYW5kIHRoZW4gZmluYWxpemUgSlNcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lXHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIC5yZXBsYWNlKC8tL2csICdfJylcclxuICAgICAgLnNwbGl0KC9cXHMrLylcclxuICAgICAgLm1hcChjYW1lbENhc2UpXHJcbiAgICAgIC5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcclxuICAgICAgICB0aGlzLmZpcmUoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmZpcmUoY2xhc3NOYW1lLCAnZmluYWxpemUnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gRmlyZSBjb21tb24gZmluYWxpemUgSlNcclxuICAgIHRoaXMuZmlyZSgnY29tbW9uJywgJ2ZpbmFsaXplJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XHJcbiIsIi8qKlxyXG4gKiB0aGUgbW9zdCB0ZXJyaWJsZSBjYW1lbGl6ZXIgb24gdGhlIGludGVybmV0LCBndWFyYW50ZWVkIVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0aGF0IGlzbid0IGNhbWVsLWNhc2UsIGUuZy4sIENBTWVMX0NhU0VpUy1oYXJEXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIGNvbnZlcnRlZCB0byBjYW1lbC1jYXNlLCBlLmcuLCBjYW1lbENhc2VJc0hhcmRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHN0ciA9PiBgJHtzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCl9JHtzdHIucmVwbGFjZSgvW1xcV19dL2csICd8Jykuc3BsaXQoJ3wnKVxyXG4gIC5tYXAocGFydCA9PiBgJHtwYXJ0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7cGFydC5zbGljZSgxKX1gKVxyXG4gIC5qb2luKCcnKVxyXG4gIC5zbGljZSgxKX1gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9