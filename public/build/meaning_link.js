(self["webpackChunk"] = self["webpackChunk"] || []).push([["meaning_link"],{

/***/ "./assets/js/meaning_link.js":
/*!***********************************!*\
  !*** ./assets/js/meaning_link.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

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

var anchors = document.querySelectorAll(".meaning-anchor");

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var anchor = _step.value;
    console.log(anchor.textContent.split('('));
    var split = anchor.textContent.split('(');
    anchor.href += "?q=".concat(split[0]);

    if (split.length > 1) {
      anchor.textContent = split[0];
      var anchorDescription = document.createElement("span");
      anchorDescription.textContent = "(".concat(split[1]);
      if (anchor.nextElementSibling) anchor.parentNode.insertBefore(anchorDescription, anchor.nextElementSibling);else anchor.parentNode.appendChild(anchorDescription);
    }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_s-6657b7","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-95fca5"], () => (__webpack_exec__("./assets/js/meaning_link.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVhbmluZ19saW5rLmpzIl0sIm5hbWVzIjpbImFuY2hvcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmNob3IiLCJjb25zb2xlIiwibG9nIiwidGV4dENvbnRlbnQiLCJzcGxpdCIsImhyZWYiLCJsZW5ndGgiLCJhbmNob3JEZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWQ7OzJDQUVxQkYsTzs7OztBQUFyQixzREFBOEI7QUFBQSxRQUFuQkcsTUFBbUI7QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNHLFdBQVAsQ0FBbUJDLEtBQW5CLENBQXlCLEdBQXpCLENBQVo7QUFDQSxRQUFJQSxLQUFLLEdBQUlKLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQkMsS0FBbkIsQ0FBeUIsR0FBekIsQ0FBYjtBQUNBSixVQUFNLENBQUNLLElBQVAsaUJBQXFCRCxLQUFLLENBQUMsQ0FBRCxDQUExQjs7QUFDQSxRQUFHQSxLQUFLLENBQUNFLE1BQU4sR0FBZSxDQUFsQixFQUFvQjtBQUNoQk4sWUFBTSxDQUFDRyxXQUFQLEdBQXFCQyxLQUFLLENBQUMsQ0FBRCxDQUExQjtBQUNBLFVBQUlHLGlCQUFpQixHQUFHVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBeEI7QUFDQUQsdUJBQWlCLENBQUNKLFdBQWxCLGNBQW9DQyxLQUFLLENBQUMsQ0FBRCxDQUF6QztBQUNBLFVBQUdKLE1BQU0sQ0FBQ1Msa0JBQVYsRUFDSVQsTUFBTSxDQUFDVSxVQUFQLENBQWtCQyxZQUFsQixDQUErQkosaUJBQS9CLEVBQWtEUCxNQUFNLENBQUNTLGtCQUF6RCxFQURKLEtBR0lULE1BQU0sQ0FBQ1UsVUFBUCxDQUFrQkUsV0FBbEIsQ0FBOEJMLGlCQUE5QjtBQUNQO0FBQ0oiLCJmaWxlIjoibWVhbmluZ19saW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lYW5pbmctYW5jaG9yXCIpO1xyXG5cclxuZm9yIChjb25zdCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gICAgY29uc29sZS5sb2coYW5jaG9yLnRleHRDb250ZW50LnNwbGl0KCcoJykpO1xyXG4gICAgbGV0IHNwbGl0ID0gIGFuY2hvci50ZXh0Q29udGVudC5zcGxpdCgnKCcpO1xyXG4gICAgYW5jaG9yLmhyZWYgKz0gYD9xPSR7c3BsaXRbMF19YDtcclxuICAgIGlmKHNwbGl0Lmxlbmd0aCA+IDEpe1xyXG4gICAgICAgIGFuY2hvci50ZXh0Q29udGVudCA9IHNwbGl0WzBdO1xyXG4gICAgICAgIGxldCBhbmNob3JEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGFuY2hvckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCgke3NwbGl0WzFdfWA7XHJcbiAgICAgICAgaWYoYW5jaG9yLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgYW5jaG9yLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGFuY2hvckRlc2NyaXB0aW9uLCBhbmNob3IubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGFuY2hvci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGFuY2hvckRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=