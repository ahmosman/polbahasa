(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin_word_list"],{

/***/ "./assets/js/admin_word_list.js":
/*!**************************************!*\
  !*** ./assets/js/admin_word_list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var searchInput = document.querySelector(".search-input-div>input");
var adminWordTable = document.querySelector(".admin-word-table");
var copyAdminWordTable = adminWordTable.innerHTML;
searchInput.addEventListener('input', function () {
  if (searchInput.value.length > 0) {
    autocompleteWords();
  } else {
    adminWordTable.innerHTML = copyAdminWordTable;
  }
});

function autocompleteWords() {
  return _autocompleteWords.apply(this, arguments);
}

function _autocompleteWords() {
  _autocompleteWords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, words;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(Routing.generate('autocomplete'), "?q=").concat(searchInput.value));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            words = _context.sent;
            if (words.length > 0 && searchInput.value.length > 0) displayWords(words);else adminWordTable.innerHTML = copyAdminWordTable;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _autocompleteWords.apply(this, arguments);
}

function displayWords(words) {
  $(".admin-word-tr").remove();

  var _iterator = _createForOfIteratorHelper(words),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var word = _step.value;
      var adminWordTr = document.createElement("tr");
      adminWordTr.classList.add("admin-word-tr");
      adminWordTr.innerHTML = "<td class=\"word-name-td\">".concat(word, "</td>\n                    <td class=\"word-action-td\">\n                        <a href=\"").concat(Routing.generate('preview_word', {
        name: word
      }), "\" class=\"btn btn-hotpink\">Podgl\u0105d</a>\n                        <a href=\"").concat(Routing.generate('edit_word', {
        name: word
      }), "\" class=\"btn btn-orchid\">Edytuj</a>\n                        <a href=\"").concat(Routing.generate('delete_word', {
        name: word
      }), "\" class=\"btn btn-danger\" onclick=\"return confirm('Czy na pewno usun\u0105\u0107 ").concat(word.text, "?')\">Usu\u0144</a>\n                    </td>");
      $(".admin-word-table").append(adminWordTr);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_s-6657b7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ec52f8"], () => (__webpack_exec__("./assets/js/admin_word_list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW5fd29yZF9saXN0LmpzIl0sIm5hbWVzIjpbInNlYXJjaElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRtaW5Xb3JkVGFibGUiLCJjb3B5QWRtaW5Xb3JkVGFibGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJsZW5ndGgiLCJhdXRvY29tcGxldGVXb3JkcyIsImZldGNoIiwiUm91dGluZyIsImdlbmVyYXRlIiwicmVzcG9uc2UiLCJqc29uIiwid29yZHMiLCJkaXNwbGF5V29yZHMiLCIkIiwicmVtb3ZlIiwid29yZCIsImFkbWluV29yZFRyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5hbWUiLCJ0ZXh0IiwiYXBwZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFsQjtBQUNBLElBQUlDLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFyQjtBQUNBLElBQUlFLGtCQUFrQixHQUFHRCxjQUFjLENBQUNFLFNBQXhDO0FBR0FMLFdBQVcsQ0FBQ00sZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBSTtBQUN0QyxNQUFHTixXQUFXLENBQUNPLEtBQVosQ0FBa0JDLE1BQWxCLEdBQTJCLENBQTlCLEVBQWdDO0FBQzVCQyxxQkFBaUI7QUFDcEIsR0FGRCxNQUVLO0FBQ0ROLGtCQUFjLENBQUNFLFNBQWYsR0FBMkJELGtCQUEzQjtBQUNIO0FBQ0osQ0FORDs7U0FRZUssaUI7Ozs7OytFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3lCQyxLQUFLLFdBQUlDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixjQUFqQixDQUFKLGdCQUEwQ1osV0FBVyxDQUFDTyxLQUF0RCxFQUQ5Qjs7QUFBQTtBQUNRTSxvQkFEUjtBQUFBO0FBQUEsbUJBRXNCQSxRQUFRLENBQUNDLElBQVQsRUFGdEI7O0FBQUE7QUFFUUMsaUJBRlI7QUFJSSxnQkFBR0EsS0FBSyxDQUFDUCxNQUFOLEdBQWUsQ0FBZixJQUFvQlIsV0FBVyxDQUFDTyxLQUFaLENBQWtCQyxNQUFsQixHQUEyQixDQUFsRCxFQUNJUSxZQUFZLENBQUNELEtBQUQsQ0FBWixDQURKLEtBR0laLGNBQWMsQ0FBQ0UsU0FBZixHQUEyQkQsa0JBQTNCOztBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFVQSxTQUFTWSxZQUFULENBQXNCRCxLQUF0QixFQUE0QjtBQUN4QkUsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JDLE1BQXBCOztBQUR3Qiw2Q0FHTEgsS0FISztBQUFBOztBQUFBO0FBR3hCLHdEQUEwQjtBQUFBLFVBQWZJLElBQWU7QUFDdEIsVUFBSUMsV0FBVyxHQUFHbkIsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBRCxpQkFBVyxDQUFDRSxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixlQUExQjtBQUNBSCxpQkFBVyxDQUFDZixTQUFaLHdDQUFvRGMsSUFBcEQseUdBRTJCUixPQUFPLENBQUNDLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUM7QUFBQ1ksWUFBSSxFQUFFTDtBQUFQLE9BQWpDLENBRjNCLDhGQUcyQlIsT0FBTyxDQUFDQyxRQUFSLENBQWlCLFdBQWpCLEVBQThCO0FBQUNZLFlBQUksRUFBRUw7QUFBUCxPQUE5QixDQUgzQix1RkFJMkJSLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixhQUFqQixFQUFnQztBQUFDWSxZQUFJLEVBQUVMO0FBQVAsT0FBaEMsQ0FKM0IsaUdBSWlKQSxJQUFJLENBQUNNLElBSnRKO0FBTUFSLE9BQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCUyxNQUF2QixDQUE4Qk4sV0FBOUI7QUFDSDtBQWJ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYzNCLEMiLCJmaWxlIjoiYWRtaW5fd29yZF9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaW5wdXQtZGl2PmlucHV0XCIpO1xyXG5sZXQgYWRtaW5Xb3JkVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkbWluLXdvcmQtdGFibGVcIik7XHJcbmxldCBjb3B5QWRtaW5Xb3JkVGFibGUgPSBhZG1pbldvcmRUYWJsZS5pbm5lckhUTUw7XHJcblxyXG5cclxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKT0+e1xyXG4gICAgaWYoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgYXV0b2NvbXBsZXRlV29yZHMoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGFkbWluV29yZFRhYmxlLmlubmVySFRNTCA9IGNvcHlBZG1pbldvcmRUYWJsZTtcclxuICAgIH1cclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhdXRvY29tcGxldGVXb3Jkcygpe1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Um91dGluZy5nZW5lcmF0ZSgnYXV0b2NvbXBsZXRlJyl9P3E9JHtzZWFyY2hJbnB1dC52YWx1ZX1gKTtcclxuICAgIGxldCB3b3JkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZih3b3Jkcy5sZW5ndGggPiAwICYmIHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA+IDApXHJcbiAgICAgICAgZGlzcGxheVdvcmRzKHdvcmRzKTtcclxuICAgIGVsc2VcclxuICAgICAgICBhZG1pbldvcmRUYWJsZS5pbm5lckhUTUwgPSBjb3B5QWRtaW5Xb3JkVGFibGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXb3Jkcyh3b3Jkcyl7XHJcbiAgICAkKFwiLmFkbWluLXdvcmQtdHJcIikucmVtb3ZlKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRzKSB7XHJcbiAgICAgICAgbGV0IGFkbWluV29yZFRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGFkbWluV29yZFRyLmNsYXNzTGlzdC5hZGQoXCJhZG1pbi13b3JkLXRyXCIpO1xyXG4gICAgICAgIGFkbWluV29yZFRyLmlubmVySFRNTCA9IGA8dGQgY2xhc3M9XCJ3b3JkLW5hbWUtdGRcIj4ke3dvcmR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3b3JkLWFjdGlvbi10ZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtSb3V0aW5nLmdlbmVyYXRlKCdwcmV2aWV3X3dvcmQnLCB7bmFtZTogd29yZH0pfVwiIGNsYXNzPVwiYnRuIGJ0bi1ob3RwaW5rXCI+UG9kZ2zEhWQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke1JvdXRpbmcuZ2VuZXJhdGUoJ2VkaXRfd29yZCcsIHtuYW1lOiB3b3JkfSl9XCIgY2xhc3M9XCJidG4gYnRuLW9yY2hpZFwiPkVkeXR1ajwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Um91dGluZy5nZW5lcmF0ZSgnZGVsZXRlX3dvcmQnLCB7bmFtZTogd29yZH0pfVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbmNsaWNrPVwicmV0dXJuIGNvbmZpcm0oJ0N6eSBuYSBwZXdubyB1c3VuxIXEhyAke3dvcmQudGV4dH0/JylcIj5Vc3XFhDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICAgICAgJChcIi5hZG1pbi13b3JkLXRhYmxlXCIpLmFwcGVuZChhZG1pbldvcmRUcik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9