(self["webpackChunk"] = self["webpackChunk"] || []).push([["search_suggestions"],{

/***/ "./assets/js/search_suggestions.js":
/*!*****************************************!*\
  !*** ./assets/js/search_suggestions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _suggestions_events_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./suggestions_events.js */ "./assets/js/suggestions_events.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var searchInput = document.querySelector(".search-input-div>input");
var suggestionsDiv = document.querySelector(".suggestions-div");
var suggestionsUl = document.querySelector(".search-suggestions-ul");
var searchButton = document.querySelector(".search-input-div>button");
_suggestions_events_js__WEBPACK_IMPORTED_MODULE_15__.suggestionsScroller(searchInput, suggestionsUl);
searchInput.addEventListener('input', function () {
  if (searchInput.value.length > 0) {
    suggestionsDiv.classList.remove("hidden");
    searchSuggestions();
  } else {
    suggestionsDiv.classList.add("hidden");
  }
});

function searchSuggestions() {
  return _searchSuggestions.apply(this, arguments);
}

function _searchSuggestions() {
  _searchSuggestions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, words, _iterator, _step, word, suggestionsLi, _iterator2, _step2, _loop;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(Routing.generate('autocomplete'), "?all=t&q=").concat(searchInput.value));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            words = _context.sent;
            words.sort(function (a, b) {
              return a.length - b.length;
            });
            suggestionsUl.innerHTML = "";
            _iterator = _createForOfIteratorHelper(words);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                word = _step.value;
                suggestionsUl.innerHTML += "<li>".concat(word, "</li>");
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            suggestionsLi = suggestionsUl.querySelectorAll("li");
            _iterator2 = _createForOfIteratorHelper(suggestionsLi);

            try {
              _loop = function _loop() {
                var li = _step2.value;
                li.addEventListener('click', function () {
                  searchInput.value = li.textContent;
                  searchButton.click();
                });
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _suggestions_events_js__WEBPACK_IMPORTED_MODULE_15__.suggestionsMouseEvents(suggestionsUl);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _searchSuggestions.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/suggestions_events.js":
/*!*****************************************!*\
  !*** ./assets/js/suggestions_events.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "suggestionsScroller": () => (/* binding */ suggestionsScroller),
/* harmony export */   "suggestionsMouseEvents": () => (/* binding */ suggestionsMouseEvents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }














function suggestionsScroller(input, suggestionsUl) {
  //scroll through suggestionsUl list using arrows, it will start over on the end
  $(input).keydown(function (e) {
    if ([38, 40].includes(e.which)) {
      var suggestionSelected = $(suggestionsUl.querySelector('li.suggestion-selected'));
      var nextSuggestionSelected;
      var ultimateSuggestionElement;

      switch (e.which) {
        case 40:
          nextSuggestionSelected = suggestionSelected.next();
          ultimateSuggestionElement = $(suggestionsUl.querySelector('li:first-of-type'));
          break;

        case 38:
          nextSuggestionSelected = suggestionSelected.prev();
          ultimateSuggestionElement = $(suggestionsUl.querySelector('li:last-of-type'));
          break;
      }

      suggestionSelected.removeClass('suggestion-selected');
      if (nextSuggestionSelected.length > 0) suggestionSelected = nextSuggestionSelected;else suggestionSelected = ultimateSuggestionElement;
      suggestionSelected.addClass('suggestion-selected');
    } //on enter down assign text from suggestion to input


    if ([13].includes(e.which)) {
      var _suggestionSelected = $(suggestionsUl.querySelector('li.suggestion-selected'));

      if (_suggestionSelected.length > 0) input.value = _suggestionSelected.text();
      input.blur();
      $('#searching-form').submit();
    }
  });
} //this function must be called only when li exists in ul


function suggestionsMouseEvents(suggestionsUl) {
  var suggestionsLi = suggestionsUl.querySelectorAll('li');

  var _iterator = _createForOfIteratorHelper(suggestionsLi),
      _step;

  try {
    var _loop = function _loop() {
      var li = _step.value;
      li.addEventListener('mouseover', function () {
        //delete existing suggestion (if exists) in current suggestionsUl
        var suggestionSelected = suggestionsUl.querySelector('li.suggestion-selected');
        suggestionSelected ? suggestionSelected.classList.remove('suggestion-selected') : '';
        li.classList.add('suggestion-selected');
      });
      li.addEventListener('mouseout', function () {
        li.classList.remove('suggestion-selected');
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}



/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-sort.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-sort.js ***!
  \******************************************************/
/***/ ((module) => {

// TODO: use something more complex like timsort?
var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    mergeSort(array.slice(0, middle), comparefn),
    mergeSort(array.slice(middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  var result = [];

  while (lindex < llength || rindex < rlength) {
    if (lindex < llength && rindex < rlength) {
      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    } else {
      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    }
  } return result;
};

module.exports = mergeSort;


/***/ }),

/***/ "./node_modules/core-js/internals/engine-ff-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-ff-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ie-or-edge.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ie-or-edge.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var UA = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-webkit-version.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-webkit-version.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "./node_modules/core-js/internals/array-sort.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var FF = __webpack_require__(/*! ../internals/engine-ff-version */ "./node_modules/core-js/internals/engine-ff-version.js");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ "./node_modules/core-js/internals/engine-is-ie-or-edge.js");
var V8 = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ "./node_modules/core-js/internals/engine-webkit-version.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return String(x) > String(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aFunction(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);

    var items = [];
    var arrayLength = toLength(array.length);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) items.push(array[index]);
    }

    items = internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_s-6657b7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ec52f8"], () => (__webpack_exec__("./assets/js/search_suggestions.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhcmNoX3N1Z2dlc3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdWdnZXN0aW9uc19ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1mZi12ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtaWUtb3ItZWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXdlYmtpdC12ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIl0sIm5hbWVzIjpbInNlYXJjaElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3VnZ2VzdGlvbnNEaXYiLCJzdWdnZXN0aW9uc1VsIiwic2VhcmNoQnV0dG9uIiwic3VnZ2VzdGlvbnNFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZWFyY2hTdWdnZXN0aW9ucyIsImFkZCIsImZldGNoIiwiUm91dGluZyIsImdlbmVyYXRlIiwicmVzcG9uc2UiLCJqc29uIiwid29yZHMiLCJzb3J0IiwiYSIsImIiLCJpbm5lckhUTUwiLCJ3b3JkIiwic3VnZ2VzdGlvbnNMaSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaSIsInRleHRDb250ZW50IiwiY2xpY2siLCJzdWdnZXN0aW9uc1Njcm9sbGVyIiwiaW5wdXQiLCIkIiwia2V5ZG93biIsImUiLCJpbmNsdWRlcyIsIndoaWNoIiwic3VnZ2VzdGlvblNlbGVjdGVkIiwibmV4dFN1Z2dlc3Rpb25TZWxlY3RlZCIsInVsdGltYXRlU3VnZ2VzdGlvbkVsZW1lbnQiLCJuZXh0IiwicHJldiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiYmx1ciIsInN1Ym1pdCIsInN1Z2dlc3Rpb25zTW91c2VFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBbEI7QUFDQSxJQUFJQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBckI7QUFDQSxJQUFJRSxhQUFhLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBcEI7QUFDQSxJQUFJRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBbkI7QUFFQUksd0VBQUEsQ0FBc0NOLFdBQXRDLEVBQW1ESSxhQUFuRDtBQUVBSixXQUFXLENBQUNPLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQUk7QUFDdEMsTUFBR1AsV0FBVyxDQUFDUSxLQUFaLENBQWtCQyxNQUFsQixHQUEyQixDQUE5QixFQUFnQztBQUM1Qk4sa0JBQWMsQ0FBQ08sU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsUUFBaEM7QUFDQUMscUJBQWlCO0FBQ3BCLEdBSEQsTUFHSztBQUNEVCxrQkFBYyxDQUFDTyxTQUFmLENBQXlCRyxHQUF6QixDQUE2QixRQUE3QjtBQUNIO0FBQ0osQ0FQRDs7U0FTZUQsaUI7Ozs7OytFQUFmO0FBQUE7O0FBQUE7QUFBQTtB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RUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQsa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0IsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLDZCQUE2QixrQkFBa0IsRUFBRTs7QUFFakQsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsK0NBQStDO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJzZWFyY2hfc3VnZ2VzdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdWdnZXN0aW9uc0V2ZW50cyBmcm9tICcuL3N1Z2dlc3Rpb25zX2V2ZW50cy5qcyc7XHJcblxyXG5sZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dC1kaXY+aW5wdXRcIik7XHJcbmxldCBzdWdnZXN0aW9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VnZ2VzdGlvbnMtZGl2XCIpO1xyXG5sZXQgc3VnZ2VzdGlvbnNVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN1Z2dlc3Rpb25zLXVsXCIpO1xyXG5sZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaW5wdXQtZGl2PmJ1dHRvblwiKTtcclxuXHJcbnN1Z2dlc3Rpb25zRXZlbnRzLnN1Z2dlc3Rpb25zU2Nyb2xsZXIoc2VhcmNoSW5wdXQsIHN1Z2dlc3Rpb25zVWwpO1xyXG5cclxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKT0+e1xyXG4gICAgaWYoc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgc3VnZ2VzdGlvbnNEaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBzZWFyY2hTdWdnZXN0aW9ucygpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgc3VnZ2VzdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hTdWdnZXN0aW9ucygpIHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1JvdXRpbmcuZ2VuZXJhdGUoJ2F1dG9jb21wbGV0ZScpfT9hbGw9dCZxPSR7c2VhcmNoSW5wdXQudmFsdWV9YCk7XHJcbiAgICBsZXQgd29yZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB3b3Jkcy5zb3J0KGZ1bmN0aW9uIChhLGIpe1xyXG4gICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgICBzdWdnZXN0aW9uc1VsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcclxuICAgICAgICBzdWdnZXN0aW9uc1VsLmlubmVySFRNTCArPSBgPGxpPiR7d29yZH08L2xpPmA7XHJcbiAgICB9XHJcbiAgICBsZXQgc3VnZ2VzdGlvbnNMaSA9IHN1Z2dlc3Rpb25zVWwucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xyXG4gICAgZm9yIChjb25zdCBsaSBvZiBzdWdnZXN0aW9uc0xpKSB7XHJcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gbGkudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgIHNlYXJjaEJ1dHRvbi5jbGljaygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3VnZ2VzdGlvbnNFdmVudHMuc3VnZ2VzdGlvbnNNb3VzZUV2ZW50cyhzdWdnZXN0aW9uc1VsKTtcclxufVxyXG4iLCJcclxuZnVuY3Rpb24gc3VnZ2VzdGlvbnNTY3JvbGxlcihpbnB1dCwgc3VnZ2VzdGlvbnNVbCkge1xyXG5cclxuICAgIC8vc2Nyb2xsIHRocm91Z2ggc3VnZ2VzdGlvbnNVbCBsaXN0IHVzaW5nIGFycm93cywgaXQgd2lsbCBzdGFydCBvdmVyIG9uIHRoZSBlbmRcclxuXHJcbiAgICAkKGlucHV0KS5rZXlkb3duKGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBpZihbMzgsNDBdLmluY2x1ZGVzKGUud2hpY2gpKSB7XHJcbiAgICAgICAgICAgIGxldCBzdWdnZXN0aW9uU2VsZWN0ZWQgPSAkKHN1Z2dlc3Rpb25zVWwucXVlcnlTZWxlY3RvcignbGkuc3VnZ2VzdGlvbi1zZWxlY3RlZCcpKTtcclxuICAgICAgICAgICAgbGV0IG5leHRTdWdnZXN0aW9uU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIGxldCB1bHRpbWF0ZVN1Z2dlc3Rpb25FbGVtZW50O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN1Z2dlc3Rpb25TZWxlY3RlZCA9IHN1Z2dlc3Rpb25TZWxlY3RlZC5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdWx0aW1hdGVTdWdnZXN0aW9uRWxlbWVudCA9ICQoc3VnZ2VzdGlvbnNVbC5xdWVyeVNlbGVjdG9yKCdsaTpmaXJzdC1vZi10eXBlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3VnZ2VzdGlvblNlbGVjdGVkID0gc3VnZ2VzdGlvblNlbGVjdGVkLnByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICB1bHRpbWF0ZVN1Z2dlc3Rpb25FbGVtZW50ID0gJChzdWdnZXN0aW9uc1VsLnF1ZXJ5U2VsZWN0b3IoJ2xpOmxhc3Qtb2YtdHlwZScpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3VnZ2VzdGlvblNlbGVjdGVkLnJlbW92ZUNsYXNzKCdzdWdnZXN0aW9uLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dFN1Z2dlc3Rpb25TZWxlY3RlZC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvblNlbGVjdGVkID0gbmV4dFN1Z2dlc3Rpb25TZWxlY3RlZDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvblNlbGVjdGVkID0gdWx0aW1hdGVTdWdnZXN0aW9uRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25TZWxlY3RlZC5hZGRDbGFzcygnc3VnZ2VzdGlvbi1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9vbiBlbnRlciBkb3duIGFzc2lnbiB0ZXh0IGZyb20gc3VnZ2VzdGlvbiB0byBpbnB1dFxyXG4gICAgICAgIGlmKFsxM10uaW5jbHVkZXMoZS53aGljaCkpe1xyXG4gICAgICAgICAgICBsZXQgc3VnZ2VzdGlvblNlbGVjdGVkID0gJChzdWdnZXN0aW9uc1VsLnF1ZXJ5U2VsZWN0b3IoJ2xpLnN1Z2dlc3Rpb24tc2VsZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgIGlmKHN1Z2dlc3Rpb25TZWxlY3RlZC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBzdWdnZXN0aW9uU2VsZWN0ZWQudGV4dCgpO1xyXG4gICAgICAgICAgICBpbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgICAgICQoJyNzZWFyY2hpbmctZm9ybScpLnN1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL3RoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgb25seSB3aGVuIGxpIGV4aXN0cyBpbiB1bFxyXG5mdW5jdGlvbiBzdWdnZXN0aW9uc01vdXNlRXZlbnRzKHN1Z2dlc3Rpb25zVWwpe1xyXG5cclxuICAgIGxldCBzdWdnZXN0aW9uc0xpID0gc3VnZ2VzdGlvbnNVbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gICAgZm9yIChjb25zdCBsaSBvZiBzdWdnZXN0aW9uc0xpKSB7XHJcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoKT0+e1xyXG5cclxuICAgICAgICAgICAgLy9kZWxldGUgZXhpc3Rpbmcgc3VnZ2VzdGlvbiAoaWYgZXhpc3RzKSBpbiBjdXJyZW50IHN1Z2dlc3Rpb25zVWxcclxuICAgICAgICAgICAgbGV0IHN1Z2dlc3Rpb25TZWxlY3RlZCA9IHN1Z2dlc3Rpb25zVWwucXVlcnlTZWxlY3RvcignbGkuc3VnZ2VzdGlvbi1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzdWdnZXN0aW9uU2VsZWN0ZWQgPyBzdWdnZXN0aW9uU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnc3VnZ2VzdGlvbi1zZWxlY3RlZCcpOicnO1xyXG5cclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnc3VnZ2VzdGlvbi1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywoKT0+e1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdzdWdnZXN0aW9uLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydHtzdWdnZXN0aW9uc1Njcm9sbGVyLCBzdWdnZXN0aW9uc01vdXNlRXZlbnRzfTsiLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiLy8gVE9ETzogdXNlIHNvbWV0aGluZyBtb3JlIGNvbXBsZXggbGlrZSB0aW1zb3J0P1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxudmFyIG1lcmdlU29ydCA9IGZ1bmN0aW9uIChhcnJheSwgY29tcGFyZWZuKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBtaWRkbGUgPSBmbG9vcihsZW5ndGggLyAyKTtcbiAgcmV0dXJuIGxlbmd0aCA8IDggPyBpbnNlcnRpb25Tb3J0KGFycmF5LCBjb21wYXJlZm4pIDogbWVyZ2UoXG4gICAgbWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsIG1pZGRsZSksIGNvbXBhcmVmbiksXG4gICAgbWVyZ2VTb3J0KGFycmF5LnNsaWNlKG1pZGRsZSksIGNvbXBhcmVmbiksXG4gICAgY29tcGFyZWZuXG4gICk7XG59O1xuXG52YXIgaW5zZXJ0aW9uU29ydCA9IGZ1bmN0aW9uIChhcnJheSwgY29tcGFyZWZuKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBpID0gMTtcbiAgdmFyIGVsZW1lbnQsIGo7XG5cbiAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICBqID0gaTtcbiAgICBlbGVtZW50ID0gYXJyYXlbaV07XG4gICAgd2hpbGUgKGogJiYgY29tcGFyZWZuKGFycmF5W2ogLSAxXSwgZWxlbWVudCkgPiAwKSB7XG4gICAgICBhcnJheVtqXSA9IGFycmF5Wy0tal07XG4gICAgfVxuICAgIGlmIChqICE9PSBpKyspIGFycmF5W2pdID0gZWxlbWVudDtcbiAgfSByZXR1cm4gYXJyYXk7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIGNvbXBhcmVmbikge1xuICB2YXIgbGxlbmd0aCA9IGxlZnQubGVuZ3RoO1xuICB2YXIgcmxlbmd0aCA9IHJpZ2h0Lmxlbmd0aDtcbiAgdmFyIGxpbmRleCA9IDA7XG4gIHZhciByaW5kZXggPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKGxpbmRleCA8IGxsZW5ndGggfHwgcmluZGV4IDwgcmxlbmd0aCkge1xuICAgIGlmIChsaW5kZXggPCBsbGVuZ3RoICYmIHJpbmRleCA8IHJsZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGNvbXBhcmVmbihsZWZ0W2xpbmRleF0sIHJpZ2h0W3JpbmRleF0pIDw9IDAgPyBsZWZ0W2xpbmRleCsrXSA6IHJpZ2h0W3JpbmRleCsrXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmRleCA8IGxsZW5ndGggPyBsZWZ0W2xpbmRleCsrXSA6IHJpZ2h0W3JpbmRleCsrXSk7XG4gICAgfVxuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlU29ydDtcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIGZpcmVmb3ggPSB1c2VyQWdlbnQubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvaSk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFmaXJlZm94ICYmICtmaXJlZm94WzFdO1xuIiwidmFyIFVBID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gL01TSUV8VHJpZGVudC8udGVzdChVQSk7XG4iLCJ2YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciB3ZWJraXQgPSB1c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLyk7XG5cbm1vZHVsZS5leHBvcnRzID0gISF3ZWJraXQgJiYgK3dlYmtpdFsxXTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluY2x1ZGVzO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2luY2x1ZGVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaW50ZXJuYWxTb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNvcnQnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBGRiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtZmYtdmVyc2lvbicpO1xudmFyIElFX09SX0VER0UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWllLW9yLWVkZ2UnKTtcbnZhciBWOCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIFdFQktJVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtd2Via2l0LXZlcnNpb24nKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdGVzdC5zb3J0O1xuXG4vLyBJRTgtXG52YXIgRkFJTFNfT05fVU5ERUZJTkVEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pO1xuLy8gVjggYnVnXG52YXIgRkFJTFNfT05fTlVMTCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KG51bGwpO1xufSk7XG4vLyBPbGQgV2ViS2l0XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3NvcnQnKTtcblxudmFyIFNUQUJMRV9TT1JUID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZmVhdHVyZSBkZXRlY3Rpb24gY2FuIGJlIHRvbyBzbG93LCBzbyBjaGVjayBlbmdpbmVzIHZlcnNpb25zXG4gIGlmIChWOCkgcmV0dXJuIFY4IDwgNzA7XG4gIGlmIChGRiAmJiBGRiA+IDMpIHJldHVybjtcbiAgaWYgKElFX09SX0VER0UpIHJldHVybiB0cnVlO1xuICBpZiAoV0VCS0lUKSByZXR1cm4gV0VCS0lUIDwgNjAzO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGNvZGUsIGNociwgdmFsdWUsIGluZGV4O1xuXG4gIC8vIGdlbmVyYXRlIGFuIGFycmF5IHdpdGggbW9yZSA1MTIgZWxlbWVudHMgKENoYWtyYSBhbmQgb2xkIFY4IGZhaWxzIG9ubHkgaW4gdGhpcyBjYXNlKVxuICBmb3IgKGNvZGUgPSA2NTsgY29kZSA8IDc2OyBjb2RlKyspIHtcbiAgICBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuXG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICBjYXNlIDY2OiBjYXNlIDY5OiBjYXNlIDcwOiBjYXNlIDcyOiB2YWx1ZSA9IDM7IGJyZWFrO1xuICAgICAgY2FzZSA2ODogY2FzZSA3MTogdmFsdWUgPSA0OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHZhbHVlID0gMjtcbiAgICB9XG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCA0NzsgaW5kZXgrKykge1xuICAgICAgdGVzdC5wdXNoKHsgazogY2hyICsgaW5kZXgsIHY6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRlc3Quc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYi52IC0gYS52OyB9KTtcblxuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0ZXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNociA9IHRlc3RbaW5kZXhdLmsuY2hhckF0KDApO1xuICAgIGlmIChyZXN1bHQuY2hhckF0KHJlc3VsdC5sZW5ndGggLSAxKSAhPT0gY2hyKSByZXN1bHQgKz0gY2hyO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCAhPT0gJ0RHQkVGSEFDSUpLJztcbn0pO1xuXG52YXIgRk9SQ0VEID0gRkFJTFNfT05fVU5ERUZJTkVEIHx8ICFGQUlMU19PTl9OVUxMIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFTVEFCTEVfU09SVDtcblxudmFyIGdldFNvcnRDb21wYXJlID0gZnVuY3Rpb24gKGNvbXBhcmVmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gLTE7XG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkgcmV0dXJuIDE7XG4gICAgaWYgKGNvbXBhcmVmbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gK2NvbXBhcmVmbih4LCB5KSB8fCAwO1xuICAgIHJldHVybiBTdHJpbmcoeCkgPiBTdHJpbmcoeSkgPyAxIDogLTE7XG4gIH07XG59O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29ydFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICBpZiAoY29tcGFyZWZuICE9PSB1bmRlZmluZWQpIGFGdW5jdGlvbihjb21wYXJlZm4pO1xuXG4gICAgdmFyIGFycmF5ID0gdG9PYmplY3QodGhpcyk7XG5cbiAgICBpZiAoU1RBQkxFX1NPUlQpIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZCA/IG5hdGl2ZVNvcnQuY2FsbChhcnJheSkgOiBuYXRpdmVTb3J0LmNhbGwoYXJyYXksIGNvbXBhcmVmbik7XG5cbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB2YXIgYXJyYXlMZW5ndGggPSB0b0xlbmd0aChhcnJheS5sZW5ndGgpO1xuICAgIHZhciBpdGVtc0xlbmd0aCwgaW5kZXg7XG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGluZGV4IGluIGFycmF5KSBpdGVtcy5wdXNoKGFycmF5W2luZGV4XSk7XG4gICAgfVxuXG4gICAgaXRlbXMgPSBpbnRlcm5hbFNvcnQoaXRlbXMsIGdldFNvcnRDb21wYXJlKGNvbXBhcmVmbikpO1xuICAgIGl0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuICAgIGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGl0ZW1zTGVuZ3RoKSBhcnJheVtpbmRleF0gPSBpdGVtc1tpbmRleCsrXTtcbiAgICB3aGlsZSAoaW5kZXggPCBhcnJheUxlbmd0aCkgZGVsZXRlIGFycmF5W2luZGV4KytdO1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=