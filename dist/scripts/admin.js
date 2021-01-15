(window["zkdStarterWebpackJsonpCallback"] = window["zkdStarterWebpackJsonpCallback"] || []).push([["/scripts/admin"],{

/***/ "./resources/assets/scripts/admin.js":
/*!*******************************************!*\
  !*** ./resources/assets/scripts/admin.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_adminMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/adminMenu */ "./resources/assets/scripts/components/adminMenu.js");
/* harmony import */ var _components_mediaSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mediaSVG */ "./resources/assets/scripts/components/mediaSVG.js");


jQuery(document).ready(function () {
  _components_adminMenu__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  _components_mediaSVG__WEBPACK_IMPORTED_MODULE_1__["default"].init();
});

/***/ }),

/***/ "./resources/assets/scripts/components/adminMenu.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/components/adminMenu.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Module: Admin Menu
 *
 * 
 */
var adminMenu = function ($) {
  var _menu = $(".order__sortable-js"),
      init = function init() {
    if (0 !== _menu.length) {
      $(".order__sortable-js").sortable();
      $(".order__settings-menu-save-js").click(function (e) {
        e.preventDefault();

        _saveOrder();
      });
    }
  },
      _saveOrder = function _saveOrder() {
    var order = [];

    _menu.find("li").each(function (i, obj) {
      order.push($(obj).data("value"));
    });

    $.ajax({
      url: zkd.ajax,
      type: "POST",
      data: {
        action: "save_admin_menu_settings",
        nonce: $("#save_admin_menu_settings").val(),
        clear: $("#order__settings-menu-clear").prop("checked"),
        enable: $("#order__settings-menu-custom").prop("checked"),
        order: order
      }
    }).done(function (response) {
      if (response.success) {
        location.reload();
      } else {}
    }).fail(function (response) {
      console.log(response);
    });
  };

  return {
    init: init
  };
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (adminMenu);

/***/ }),

/***/ "./resources/assets/scripts/components/mediaSVG.js":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/components/mediaSVG.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Module: Media SVG
 *
 * 
 */
var mediaSVG = function ($) {
  var mediaGridObserver = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      for (var j = 0; j < mutations[i].addedNodes.length; j++) {
        var element = $(mutations[i].addedNodes[j]);

        if (element.attr('class')) {
          var elementClass = element.attr('class');

          if (element.attr('class').indexOf('attachment') != -1) {
            var attachmentPreview = element.children('.attachment-preview');

            if (attachmentPreview.length != 0) {
              if (attachmentPreview.attr('class').indexOf('subtype-svg+xml') != -1) {
                var handler = function (element) {
                  jQuery.ajax({
                    url: zkd.ajax,
                    type: "POST",
                    dataType: 'html',
                    data: {
                      'action': 'svg_get_attachment_url',
                      'attachmentID': element.attr('data-id')
                    },
                    success: function success(data) {
                      if (data) {
                        element.find('img').attr('src', data);
                        element.find('.filename').text('SVG Image');
                      }
                    }
                  });
                }(element);
              }
            }
          }
        }
      }
    }
  }),
      attachmentPreviewObserver = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      for (var j = 0; j < mutations[i].addedNodes.length; j++) {
        var element = $(mutations[i].addedNodes[j]);
        var onAttachmentPage = false;

        if (element.hasClass('attachment-details') || element.find('.attachment-details').length != 0) {
          onAttachmentPage = true;
        }

        if (onAttachmentPage == true) {
          var urlLabel = element.find('label[data-setting="url"]');

          if (urlLabel.length != 0) {
            var value = urlLabel.find('input').val();
            element.find('.details-image').attr('src', value);
          }
        }
      }
    }
  }),
      init = function init() {
    mediaGridObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
    attachmentPreviewObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  return {
    init: init
  };
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (mediaSVG);

/***/ }),

/***/ 2:
/*!*************************************************!*\
  !*** multi ./resources/assets/scripts/admin.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mateusz\Documents\zakoduje_local\wp-content\themes\zakoduje\resources\assets\scripts\admin.js */"./resources/assets/scripts/admin.js");


/***/ })

},[[2,"/scripts/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvYWRtaW5NZW51LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL21lZGlhU1ZHLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJhZG1pbk1lbnUiLCJpbml0IiwibWVkaWFTVkciLCIkIiwiX21lbnUiLCJsZW5ndGgiLCJzb3J0YWJsZSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3NhdmVPcmRlciIsIm9yZGVyIiwiZmluZCIsImVhY2giLCJpIiwib2JqIiwicHVzaCIsImRhdGEiLCJhamF4IiwidXJsIiwiemtkIiwidHlwZSIsImFjdGlvbiIsIm5vbmNlIiwidmFsIiwiY2xlYXIiLCJwcm9wIiwiZW5hYmxlIiwiZG9uZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJtZWRpYUdyaWRPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJqIiwiYWRkZWROb2RlcyIsImVsZW1lbnQiLCJhdHRyIiwiZWxlbWVudENsYXNzIiwiaW5kZXhPZiIsImF0dGFjaG1lbnRQcmV2aWV3IiwiY2hpbGRyZW4iLCJoYW5kbGVyIiwiZGF0YVR5cGUiLCJ0ZXh0IiwiYXR0YWNobWVudFByZXZpZXdPYnNlcnZlciIsIm9uQXR0YWNobWVudFBhZ2UiLCJoYXNDbGFzcyIsInVybExhYmVsIiwidmFsdWUiLCJvYnNlcnZlIiwiYm9keSIsImNoaWxkTGlzdCIsInN1YnRyZWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLE1BQU0sQ0FBRUMsUUFBRixDQUFOLENBQW1CQyxL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QUFDWG1DLHFCQUFpQixDQUFDbUIsT0FBbEIsQ0FBMEJ6RCxRQUFRLENBQUMwRCxJQUFuQyxFQUF5QztBQUN2Q0MsZUFBUyxFQUFFLElBRDRCO0FBRXZDQyxhQUFPLEVBQUU7QUFGOEIsS0FBekM7QUFJQVIsNkJBQXlCLENBQUNLLE9BQTFCLENBQWtDekQsUUFBUSxDQUFDMEQsSUFBM0MsRUFBaUQ7QUFDL0NDLGVBQVMsRUFBRSxJQURvQztBQUUvQ0MsYUFBTyxFQUFFO0FBRnNDLEtBQWpEO0FBSUQsR0FqRUg7O0FBb0VBLFNBQU87QUFDTHpELFFBQUksRUFBRUE7QUFERCxHQUFQO0FBSUQsQ0ExRWtCLENBMEVqQkosTUExRWlCLENBQW5COztBQTRFZUssdUVBQWYsRSIsImZpbGUiOiIvc2NyaXB0cy9hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZG1pbk1lbnUgZnJvbSAnLi9jb21wb25lbnRzL2FkbWluTWVudSdcclxuaW1wb3J0IG1lZGlhU1ZHIGZyb20gJy4vY29tcG9uZW50cy9tZWRpYVNWRydcclxuXHJcbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24oKSB7XHJcbiAgYWRtaW5NZW51LmluaXQoKTtcclxuICBtZWRpYVNWRy5pbml0KCk7XHJcbn0pO1xyXG4iLCIvKipcclxuICogTW9kdWxlOiBBZG1pbiBNZW51XHJcbiAqXHJcbiAqIFxyXG4gKi9cclxuY29uc3QgYWRtaW5NZW51ID0gKGZ1bmN0aW9uKCQpIHtcclxuICB2YXIgX21lbnUgPSAkKFwiLm9yZGVyX19zb3J0YWJsZS1qc1wiKSxcclxuICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgIGlmICgwICE9PSBfbWVudS5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiLm9yZGVyX19zb3J0YWJsZS1qc1wiKS5zb3J0YWJsZSgpO1xyXG4gICAgICAgICQoXCIub3JkZXJfX3NldHRpbmdzLW1lbnUtc2F2ZS1qc1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBfc2F2ZU9yZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBfc2F2ZU9yZGVyID0gKCkgPT4ge1xyXG4gICAgICB2YXIgb3JkZXIgPSBbXTtcclxuICAgICAgX21lbnUuZmluZChcImxpXCIpLmVhY2goZnVuY3Rpb24oaSwgb2JqKSB7XHJcbiAgICAgICAgb3JkZXIucHVzaCgkKG9iaikuZGF0YShcInZhbHVlXCIpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogemtkLmFqYXgsXHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYWN0aW9uOiBcInNhdmVfYWRtaW5fbWVudV9zZXR0aW5nc1wiLFxyXG4gICAgICAgICAgbm9uY2U6ICQoXCIjc2F2ZV9hZG1pbl9tZW51X3NldHRpbmdzXCIpLnZhbCgpLFxyXG4gICAgICAgICAgY2xlYXI6ICQoXCIjb3JkZXJfX3NldHRpbmdzLW1lbnUtY2xlYXJcIikucHJvcChcImNoZWNrZWRcIiksXHJcbiAgICAgICAgICBlbmFibGU6ICQoXCIjb3JkZXJfX3NldHRpbmdzLW1lbnUtY3VzdG9tXCIpLnByb3AoXCJjaGVja2VkXCIpLFxyXG4gICAgICAgICAgb3JkZXI6IG9yZGVyXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbChmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogaW5pdFxyXG4gIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZG1pbk1lbnU7XHJcbiIsIi8qKlxyXG4gKiBNb2R1bGU6IE1lZGlhIFNWR1xyXG4gKlxyXG4gKiBAYXV0aG9yIE1DXHJcbiAqL1xyXG5jb25zdCBtZWRpYVNWRyA9ICggZnVuY3Rpb24oJCkge1xyXG5cclxuICB2YXJcclxuXHJcbiAgICBtZWRpYUdyaWRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJChtdXRhdGlvbnNbaV0uYWRkZWROb2Rlc1tqXSk7XHJcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cignY2xhc3MnKSkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudENsYXNzID0gZWxlbWVudC5hdHRyKCdjbGFzcycpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdjbGFzcycpLmluZGV4T2YoJ2F0dGFjaG1lbnQnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dGFjaG1lbnRQcmV2aWV3ID0gZWxlbWVudC5jaGlsZHJlbignLmF0dGFjaG1lbnQtcHJldmlldycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFjaG1lbnRQcmV2aWV3Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFjaG1lbnRQcmV2aWV3LmF0dHIoJ2NsYXNzJykuaW5kZXhPZignc3VidHlwZS1zdmcreG1sJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB6a2QuYWpheCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbic6ICdzdmdfZ2V0X2F0dGFjaG1lbnRfdXJsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0dGFjaG1lbnRJRCc6IGVsZW1lbnQuYXR0cignZGF0YS1pZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZmlsZW5hbWUnKS50ZXh0KCdTVkcgSW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcblxyXG4gICAgYXR0YWNobWVudFByZXZpZXdPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJChtdXRhdGlvbnNbaV0uYWRkZWROb2Rlc1tqXSk7XHJcbiAgICAgICAgICAgICAgdmFyIG9uQXR0YWNobWVudFBhZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQuaGFzQ2xhc3MoJ2F0dGFjaG1lbnQtZGV0YWlscycpKSB8fCBlbGVtZW50LmZpbmQoJy5hdHRhY2htZW50LWRldGFpbHMnKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBvbkF0dGFjaG1lbnRQYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG9uQXR0YWNobWVudFBhZ2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdXJsTGFiZWwgPSBlbGVtZW50LmZpbmQoJ2xhYmVsW2RhdGEtc2V0dGluZz1cInVybFwiXScpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodXJsTGFiZWwubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVybExhYmVsLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJy5kZXRhaWxzLWltYWdlJykuYXR0cignc3JjJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuXHJcbiAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICBtZWRpYUdyaWRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgYXR0YWNobWVudFByZXZpZXdPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfTtcclxuXHJcbn0oalF1ZXJ5KSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVkaWFTVkc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=