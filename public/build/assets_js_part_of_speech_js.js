(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_js_part_of_speech_js"],{

/***/ "./assets/js/part_of_speech.js":
/*!*************************************!*\
  !*** ./assets/js/part_of_speech.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "partOfSpeechSuggestions": () => (/* binding */ partOfSpeechSuggestions),
/* harmony export */   "getPartsOfSpeechCsv": () => (/* binding */ getPartsOfSpeechCsv)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _suggestions_events_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./suggestions_events.js */ "./assets/js/suggestions_events.js");














function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function partOfSpeechSuggestions(partOfSpeech) {
  var partOfSpeechDiv = partOfSpeech.parentNode.parentNode;
  var posSuggestionDiv = partOfSpeech.parentNode.querySelector(".pos-suggestion-div");
  var posSuggestionUl = posSuggestionDiv.querySelector(".pos-suggestion-ul");
  _suggestions_events_js__WEBPACK_IMPORTED_MODULE_13__.suggestionsScroller(partOfSpeech, posSuggestionUl);
  partOfSpeech.addEventListener('input', function () {
    var oldPosError = partOfSpeechDiv.parentNode.querySelector(".edit-error");

    if (oldPosError) {
      oldPosError.parentNode.removeChild(oldPosError);
    }

    if (partOfSpeech.value.length > 0) {
      var posToDisplayArr = [];

      var _iterator = _createForOfIteratorHelper(partsOfSpeechArr),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var posElem = _step.value;
          var isElemToAdd = true;

          for (var i = 0; i < partOfSpeech.value.length; i++) {
            if (partOfSpeech.value[i] !== posElem[i]) isElemToAdd = false;
          }

          if (isElemToAdd) posToDisplayArr.push(posElem);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (posToDisplayArr.length > 0) {
        posSuggestionUl.innerHTML = "";
        posSuggestionDiv.classList.remove('hidden');

        var _iterator2 = _createForOfIteratorHelper(posToDisplayArr),
            _step2;

        try {
          var _loop = function _loop() {
            var posElem = _step2.value;
            var posSuggestionLi = document.createElement("li");
            posSuggestionLi.textContent = posElem;
            posSuggestionLi.addEventListener('mousedown', function () {
              partOfSpeech.value = posSuggestionLi.textContent;
            });
            posSuggestionUl.appendChild(posSuggestionLi);
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        _suggestions_events_js__WEBPACK_IMPORTED_MODULE_13__.suggestionsMouseEvents(posSuggestionUl);
      }
    } else posSuggestionDiv.classList.add('hidden');
  });
  partOfSpeech.addEventListener('blur', function () {
    posSuggestionDiv.classList.add('hidden');

    if (partOfSpeech.value.length <= 0) {
      isError.posError = true;
      var posError = partOfSpeechDiv.parentNode.querySelector('.edit-error');

      if (!posError) {
        posError = document.createElement("div");
        posError.classList.add('edit-error');
        posError.textContent = 'Musisz podać część mowy';
        partOfSpeechDiv.parentNode.insertBefore(posError, partOfSpeechDiv.nextElementSibling);
      }
    } else {
      isError.posError = false;
      var posAddMessage = partOfSpeechDiv.parentNode.querySelector('.pos-add-message');

      if (!partsOfSpeechArr.includes(partOfSpeech.value)) {
        if (!posAddMessage) {
          posAddMessage = document.createElement("div");
          posAddMessage.classList.add('pos-add-message');
          partOfSpeechDiv.parentNode.insertBefore(posAddMessage, partOfSpeechDiv.nextElementSibling);
          posAddMessage.innerHTML = "<span>Podana cz\u0119\u015B\u0107 mowy nie jest zapisana. Czy chcesz j\u0105 zapisa\u0107?</span>\n                        <button type=\"button\" class=\"pos-add-confirm-btn btn btn-hotpink\">Tak</button>\n                        <button type=\"button\" class=\"pos-add-deny-btn btn btn-mediumpurple\">Nie</button>";
          var posAddConfirmBtn = posAddMessage.querySelector('.pos-add-confirm-btn');
          var posAddDenyBtn = posAddMessage.querySelector('.pos-add-deny-btn');
          posAddConfirmBtn.addEventListener('click', function () {
            partsOfSpeechArr.push(partOfSpeech.value);
            posAddMessage.parentNode.removeChild(posAddMessage);
          });
          posAddDenyBtn.addEventListener('click', function () {
            posAddMessage.parentNode.removeChild(posAddMessage);
          });
        }
      } else if (posAddMessage) {
        posAddMessage.parentNode.removeChild(posAddMessage);
      }
    }
  });
}

function getPartsOfSpeechCsv() {
  var partsOfSpeechCsv = "";

  for (var i = 0; i < partsOfSpeechArr.length; i++) {
    partsOfSpeechCsv += partsOfSpeechArr[i];
    if (i < partsOfSpeechArr.length - 1) partsOfSpeechCsv += ',';
  }

  return partsOfSpeechCsv;
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFydF9vZl9zcGVlY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N1Z2dlc3Rpb25zX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJwYXJ0T2ZTcGVlY2hTdWdnZXN0aW9ucyIsInBhcnRPZlNwZWVjaCIsInBhcnRPZlNwZWVjaERpdiIsInBhcmVudE5vZGUiLCJwb3NTdWdnZXN0aW9uRGl2IiwicXVlcnlTZWxlY3RvciIsInBvc1N1Z2dlc3Rpb25VbCIsInN1Z2dlc3Rpb25zRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9sZFBvc0Vycm9yIiwicmVtb3ZlQ2hpbGQiLCJ2YWx1ZSIsImxlbmd0aCIsInBvc1RvRGlzcGxheUFyciIsInBhcnRzT2ZTcGVlY2hBcnIiLCJwb3NFbGVtIiwiaXNFbGVtVG9BZGQiLCJpIiwicHVzaCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInBvc1N1Z2dlc3Rpb25MaSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJhZGQiLCJpc0Vycm9yIiwicG9zRXJyb3IiLCJpbnNlcnRCZWZvcmUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwb3NBZGRNZXNzYWdlIiwiaW5jbHVkZXMiLCJwb3NBZGRDb25maXJtQnRuIiwicG9zQWRkRGVueUJ0biIsImdldFBhcnRzT2ZTcGVlY2hDc3YiLCJwYXJ0c09mU3BlZWNoQ3N2Iiwic3VnZ2VzdGlvbnNTY3JvbGxlciIsImlucHV0Iiwic3VnZ2VzdGlvbnNVbCIsIiQiLCJrZXlkb3duIiwiZSIsIndoaWNoIiwic3VnZ2VzdGlvblNlbGVjdGVkIiwibmV4dFN1Z2dlc3Rpb25TZWxlY3RlZCIsInVsdGltYXRlU3VnZ2VzdGlvbkVsZW1lbnQiLCJuZXh0IiwicHJldiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiYmx1ciIsInN1Ym1pdCIsInN1Z2dlc3Rpb25zTW91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YixXQUFLLENBQUNjLElBQU47QUFDQVosT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJhLE1BQXJCO0FBQ0g7QUFDSixHQWxDRDtBQW1DSCxDLENBRUQ7OztBQUNBLFNBQVNDLHNCQUFULENBQWdDZixhQUFoQyxFQUE4QztBQUUxQyxNQUFJZ0IsYUFBYSxHQUFHaEIsYUFBYSxDQUFDaUIsZ0JBQWQsQ0FBK0IsSUFBL0IsQ0FBcEI7O0FBRjBDLDZDQUd6QkQsYUFIeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFHL0JFLEVBSCtCO0FBSXRDQSxRQUFFLENBQUNsRCxnQkFBSCxDQUFvQixXQUFwQixFQUFnQyxZQUFJO0FBRWhDO0FBQ0EsWUFBSXFDLGtCQUFrQixHQUFHTCxhQUFhLENBQUNuQyxhQUFkLENBQTRCLHdCQUE1QixDQUF6QjtBQUNBd0MsMEJBQWtCLEdBQUdBLGtCQUFrQixDQUFDekIsU0FBbkIsQ0FBNkJDLE1BQTdCLENBQW9DLHFCQUFwQyxDQUFILEdBQThELEVBQWhGO0FBRUFxQyxVQUFFLENBQUN0QyxTQUFILENBQWFPLEdBQWIsQ0FBaUIscUJBQWpCO0FBQ0gsT0FQRDtBQVFBK0IsUUFBRSxDQUFDbEQsZ0JBQUgsQ0FBb0IsVUFBcEIsRUFBK0IsWUFBSTtBQUMvQmtELFVBQUUsQ0FBQ3RDLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixxQkFBcEI7QUFDSCxPQUZEO0FBWnNDOztBQUcxQyx3REFBZ0M7QUFBQTtBQVkvQjtBQWZ5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0I3QyIsImZpbGUiOiJhc3NldHNfanNfcGFydF9vZl9zcGVlY2hfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdWdnZXN0aW9uc0V2ZW50cyBmcm9tIFwiLi9zdWdnZXN0aW9uc19ldmVudHMuanNcIjtcclxuXHJcbmZ1bmN0aW9uIHBhcnRPZlNwZWVjaFN1Z2dlc3Rpb25zKHBhcnRPZlNwZWVjaCl7XHJcbiAgICBsZXQgcGFydE9mU3BlZWNoRGl2ID0gcGFydE9mU3BlZWNoLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGxldCBwb3NTdWdnZXN0aW9uRGl2ID0gcGFydE9mU3BlZWNoLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5wb3Mtc3VnZ2VzdGlvbi1kaXZcIik7XHJcbiAgICBsZXQgcG9zU3VnZ2VzdGlvblVsID0gcG9zU3VnZ2VzdGlvbkRpdi5xdWVyeVNlbGVjdG9yKFwiLnBvcy1zdWdnZXN0aW9uLXVsXCIpO1xyXG4gICAgc3VnZ2VzdGlvbnNFdmVudHMuc3VnZ2VzdGlvbnNTY3JvbGxlcihwYXJ0T2ZTcGVlY2gsIHBvc1N1Z2dlc3Rpb25VbCk7XHJcbiAgICBwYXJ0T2ZTcGVlY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCgpPT57XHJcbiAgICAgICAgbGV0IG9sZFBvc0Vycm9yID0gcGFydE9mU3BlZWNoRGl2LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5lZGl0LWVycm9yXCIpO1xyXG4gICAgICAgIGlmKG9sZFBvc0Vycm9yKXtcclxuICAgICAgICAgICAgb2xkUG9zRXJyb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGRQb3NFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBhcnRPZlNwZWVjaC52YWx1ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgbGV0IHBvc1RvRGlzcGxheUFyciA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBvc0VsZW0gb2YgcGFydHNPZlNwZWVjaEFycikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzRWxlbVRvQWRkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHBhcnRPZlNwZWVjaC52YWx1ZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFydE9mU3BlZWNoLnZhbHVlW2ldICE9PSBwb3NFbGVtW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VsZW1Ub0FkZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaXNFbGVtVG9BZGQpXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zVG9EaXNwbGF5QXJyLnB1c2gocG9zRWxlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9zVG9EaXNwbGF5QXJyLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcG9zU3VnZ2VzdGlvblVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NTdWdnZXN0aW9uRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwb3NFbGVtIG9mIHBvc1RvRGlzcGxheUFycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NTdWdnZXN0aW9uTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zU3VnZ2VzdGlvbkxpLnRleHRDb250ZW50ID0gcG9zRWxlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NTdWdnZXN0aW9uTGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBhcnRPZlNwZWVjaC52YWx1ZSA9IHBvc1N1Z2dlc3Rpb25MaS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NTdWdnZXN0aW9uVWwuYXBwZW5kQ2hpbGQocG9zU3VnZ2VzdGlvbkxpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zRXZlbnRzLnN1Z2dlc3Rpb25zTW91c2VFdmVudHMocG9zU3VnZ2VzdGlvblVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHBvc1N1Z2dlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYXJ0T2ZTcGVlY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsKCk9PntcclxuICAgICAgICBwb3NTdWdnZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIGlmKHBhcnRPZlNwZWVjaC52YWx1ZS5sZW5ndGggPD0gMCl7XHJcbiAgICAgICAgICAgIGlzRXJyb3IucG9zRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgcG9zRXJyb3IgPSBwYXJ0T2ZTcGVlY2hEaXYucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZWRpdC1lcnJvcicpO1xyXG4gICAgICAgICAgICBpZighcG9zRXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcG9zRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgcG9zRXJyb3IuY2xhc3NMaXN0LmFkZCgnZWRpdC1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgcG9zRXJyb3IudGV4dENvbnRlbnQgPSAnTXVzaXN6IHBvZGHEhyBjesSZxZvEhyBtb3d5JztcclxuICAgICAgICAgICAgICAgIHBhcnRPZlNwZWVjaERpdi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwb3NFcnJvciwgcGFydE9mU3BlZWNoRGl2Lm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaXNFcnJvci5wb3NFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgcG9zQWRkTWVzc2FnZSA9IHBhcnRPZlNwZWVjaERpdi5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5wb3MtYWRkLW1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFwYXJ0c09mU3BlZWNoQXJyLmluY2x1ZGVzKHBhcnRPZlNwZWVjaC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXBvc0FkZE1lc3NhZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc0FkZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc0FkZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncG9zLWFkZC1tZXNzYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydE9mU3BlZWNoRGl2LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBvc0FkZE1lc3NhZ2UsIHBhcnRPZlNwZWVjaERpdi5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc0FkZE1lc3NhZ2UuaW5uZXJIVE1MID0gYDxzcGFuPlBvZGFuYSBjesSZxZvEhyBtb3d5IG5pZSBqZXN0IHphcGlzYW5hLiBDenkgY2hjZXN6IGrEhSB6YXBpc2HEhz88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicG9zLWFkZC1jb25maXJtLWJ0biBidG4gYnRuLWhvdHBpbmtcIj5UYWs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwb3MtYWRkLWRlbnktYnRuIGJ0biBidG4tbWVkaXVtcHVycGxlXCI+TmllPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zQWRkQ29uZmlybUJ0biA9IHBvc0FkZE1lc3NhZ2UucXVlcnlTZWxlY3RvcignLnBvcy1hZGQtY29uZmlybS1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zQWRkRGVueUJ0biA9IHBvc0FkZE1lc3NhZ2UucXVlcnlTZWxlY3RvcignLnBvcy1hZGQtZGVueS1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NBZGRDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBhcnRzT2ZTcGVlY2hBcnIucHVzaChwYXJ0T2ZTcGVlY2gudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBvc0FkZE1lc3NhZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3NBZGRNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc0FkZERlbnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcG9zQWRkTWVzc2FnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBvc0FkZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYocG9zQWRkTWVzc2FnZSl7XHJcbiAgICAgICAgICAgICAgICBwb3NBZGRNZXNzYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocG9zQWRkTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRQYXJ0c09mU3BlZWNoQ3N2KClcclxue1xyXG4gICAgbGV0IHBhcnRzT2ZTcGVlY2hDc3YgPSBcIlwiO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8cGFydHNPZlNwZWVjaEFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgcGFydHNPZlNwZWVjaENzdiArPSBwYXJ0c09mU3BlZWNoQXJyW2ldO1xyXG4gICAgICAgIGlmKGkgPCBwYXJ0c09mU3BlZWNoQXJyLmxlbmd0aC0xKVxyXG4gICAgICAgICAgICBwYXJ0c09mU3BlZWNoQ3N2ICs9ICcsJztcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJ0c09mU3BlZWNoQ3N2O1xyXG59XHJcbmV4cG9ydCB7cGFydE9mU3BlZWNoU3VnZ2VzdGlvbnMsIGdldFBhcnRzT2ZTcGVlY2hDc3Z9OyIsIlxyXG5mdW5jdGlvbiBzdWdnZXN0aW9uc1Njcm9sbGVyKGlucHV0LCBzdWdnZXN0aW9uc1VsKSB7XHJcblxyXG4gICAgLy9zY3JvbGwgdGhyb3VnaCBzdWdnZXN0aW9uc1VsIGxpc3QgdXNpbmcgYXJyb3dzLCBpdCB3aWxsIHN0YXJ0IG92ZXIgb24gdGhlIGVuZFxyXG5cclxuICAgICQoaW5wdXQpLmtleWRvd24oZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGlmKFszOCw0MF0uaW5jbHVkZXMoZS53aGljaCkpIHtcclxuICAgICAgICAgICAgbGV0IHN1Z2dlc3Rpb25TZWxlY3RlZCA9ICQoc3VnZ2VzdGlvbnNVbC5xdWVyeVNlbGVjdG9yKCdsaS5zdWdnZXN0aW9uLXNlbGVjdGVkJykpO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFN1Z2dlc3Rpb25TZWxlY3RlZDtcclxuICAgICAgICAgICAgbGV0IHVsdGltYXRlU3VnZ2VzdGlvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3VnZ2VzdGlvblNlbGVjdGVkID0gc3VnZ2VzdGlvblNlbGVjdGVkLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1bHRpbWF0ZVN1Z2dlc3Rpb25FbGVtZW50ID0gJChzdWdnZXN0aW9uc1VsLnF1ZXJ5U2VsZWN0b3IoJ2xpOmZpcnN0LW9mLXR5cGUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRTdWdnZXN0aW9uU2VsZWN0ZWQgPSBzdWdnZXN0aW9uU2VsZWN0ZWQucHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVsdGltYXRlU3VnZ2VzdGlvbkVsZW1lbnQgPSAkKHN1Z2dlc3Rpb25zVWwucXVlcnlTZWxlY3RvcignbGk6bGFzdC1vZi10eXBlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdWdnZXN0aW9uU2VsZWN0ZWQucmVtb3ZlQ2xhc3MoJ3N1Z2dlc3Rpb24tc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXh0U3VnZ2VzdGlvblNlbGVjdGVkLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uU2VsZWN0ZWQgPSBuZXh0U3VnZ2VzdGlvblNlbGVjdGVkO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uU2VsZWN0ZWQgPSB1bHRpbWF0ZVN1Z2dlc3Rpb25FbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgc3VnZ2VzdGlvblNlbGVjdGVkLmFkZENsYXNzKCdzdWdnZXN0aW9uLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL29uIGVudGVyIGRvd24gYXNzaWduIHRleHQgZnJvbSBzdWdnZXN0aW9uIHRvIGlucHV0XHJcbiAgICAgICAgaWYoWzEzXS5pbmNsdWRlcyhlLndoaWNoKSl7XHJcbiAgICAgICAgICAgIGxldCBzdWdnZXN0aW9uU2VsZWN0ZWQgPSAkKHN1Z2dlc3Rpb25zVWwucXVlcnlTZWxlY3RvcignbGkuc3VnZ2VzdGlvbi1zZWxlY3RlZCcpKTtcclxuICAgICAgICAgICAgaWYoc3VnZ2VzdGlvblNlbGVjdGVkLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHN1Z2dlc3Rpb25TZWxlY3RlZC50ZXh0KCk7XHJcbiAgICAgICAgICAgIGlucHV0LmJsdXIoKTtcclxuICAgICAgICAgICAgJCgnI3NlYXJjaGluZy1mb3JtJykuc3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBvbmx5IHdoZW4gbGkgZXhpc3RzIGluIHVsXHJcbmZ1bmN0aW9uIHN1Z2dlc3Rpb25zTW91c2VFdmVudHMoc3VnZ2VzdGlvbnNVbCl7XHJcblxyXG4gICAgbGV0IHN1Z2dlc3Rpb25zTGkgPSBzdWdnZXN0aW9uc1VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgICBmb3IgKGNvbnN0IGxpIG9mIHN1Z2dlc3Rpb25zTGkpIHtcclxuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCgpPT57XHJcblxyXG4gICAgICAgICAgICAvL2RlbGV0ZSBleGlzdGluZyBzdWdnZXN0aW9uIChpZiBleGlzdHMpIGluIGN1cnJlbnQgc3VnZ2VzdGlvbnNVbFxyXG4gICAgICAgICAgICBsZXQgc3VnZ2VzdGlvblNlbGVjdGVkID0gc3VnZ2VzdGlvbnNVbC5xdWVyeVNlbGVjdG9yKCdsaS5zdWdnZXN0aW9uLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25TZWxlY3RlZCA/IHN1Z2dlc3Rpb25TZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKCdzdWdnZXN0aW9uLXNlbGVjdGVkJyk6Jyc7XHJcblxyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdzdWdnZXN0aW9uLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCgpPT57XHJcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Z2dlc3Rpb24tc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0e3N1Z2dlc3Rpb25zU2Nyb2xsZXIsIHN1Z2dlc3Rpb25zTW91c2VFdmVudHN9OyJdLCJzb3VyY2VSb290IjoiIn0=