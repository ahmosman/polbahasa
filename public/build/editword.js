(self["webpackChunk"] = self["webpackChunk"] || []).push([["editword"],{

/***/ "./assets/js/editword.js":
/*!*******************************!*\
  !*** ./assets/js/editword.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _part_of_speech_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./part_of_speech.js */ "./assets/js/part_of_speech.js");
/* harmony import */ var _root_word_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./root_word.js */ "./assets/js/root_word.js");
/* harmony import */ var _suggestions_events_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./suggestions_events.js */ "./assets/js/suggestions_events.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var originalWord = document.querySelector(".header-word");
var originalWordName = originalWord.textContent;
var addSentenceBtnTmpl = document.querySelector(".add-sentence-btn");
var delSentenceBtnTmpl = document.querySelector(".del-sentence-btn");
var delMeaningBtnTmpl = document.querySelector(".del-meaning-btn");
var delSpeechSectionBtnTmpl = document.querySelector(".del-speech-section-btn");
var moveUpBtnTmpl = document.querySelector(".move-up-btn");
var moveDownBtnTmpl = document.querySelector(".move-down-btn");
var addMeaningBtnTmpl = document.querySelector(".add-meaning-btn");
var partsOfSpeech = document.querySelectorAll(".part-of-speech");
var meaningsLi = document.querySelectorAll(".foreign-meaning-li");
var examples = document.querySelectorAll(".sentence-tr");
var speechSections = document.querySelectorAll(".speech-section");
var editWordSection = document.querySelector(".edit-word-section");
var parentEditWordSection = editWordSection.parentNode;
var nextSiblingEditWordSection = editWordSection.nextElementSibling;
var editPhraseDiv = document.querySelector(".edit-phrase-div1");
var phraseDescDiv = document.querySelector(".edit-phrase-desc");
var phraseTextIn = document.querySelector("#phrase-text-in");
var phraseApplyBtn = document.querySelector("#edit-phrase-apply");
var phraseCancelBtn = document.querySelector("#edit-phrase-cancel");
var addSpeechSectionBtn = document.querySelector(".add-speech-section-btn");
var undoBtn = document.querySelector(".undo-btn");
var phraseClasses = ['.header-word', '.foreign-meaning-name', '.example-sentence', '.example-translation'];
var undoNodes = [];
var rootWordInputValue = document.querySelector('.root-word-input').value;
var rootWord = rootWordInputValue.length > 0 ? rootWordInputValue : null; //enter updates

var _iterator = _createForOfIteratorHelper(examples),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var e = _step.value;
    addButtonsToExample(e);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _iterator2 = _createForOfIteratorHelper(meaningsLi),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var mli = _step2.value;
    addButtonsToMeaning(mli);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var _iterator3 = _createForOfIteratorHelper(speechSections),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var sp = _step3.value;
    addButtonsToSpeechSection(sp);
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

var _iterator4 = _createForOfIteratorHelper(partsOfSpeech),
    _step4;

try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _pos3 = _step4.value;
    updatePartOfSpeech(_pos3);
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}

var phraseDivs = getPhraseDivs();

var _iterator5 = _createForOfIteratorHelper(phraseDivs),
    _step5;

try {
  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
    var phraseDiv = _step5.value;
    updatePhraseDiv(phraseDiv);
  }
} catch (err) {
  _iterator5.e(err);
} finally {
  _iterator5.f();
}

function getButton(template) {
  var btn = template.cloneNode(true);
  btn.classList.remove('hidden');
  btn.classList.add('opacity0');
  return btn;
} //CREATING ELEMENTS


function createSentenceTable() {
  var sentenceTable = document.createElement("table");
  sentenceTable.classList.add('sentence-table');
  return sentenceTable;
}

function createSentenceTr() {
  var sentenceTr = document.createElement("tr");
  sentenceTr.classList.add("sentence-tr");
  return sentenceTr;
}

function createExampleSentence() {
  var sentence = document.createElement("td");
  sentence.classList.add("example-sentence");
  sentence.innerHTML = "<i>Wprowadź zdanie</i>";
  updatePhraseDiv(sentence);
  return sentence;
}

function createExampleTranslation() {
  var translation = document.createElement("td");
  translation.classList.add("example-translation");
  translation.innerHTML = "<i>Wprowadź tłumaczenie</i>";
  updatePhraseDiv(translation);
  return translation;
}

function createMeaning() {
  var meaningLi = document.createElement("li");
  meaningLi.classList.add("foreign-meaning-li");
  var meaningName = document.createElement("div");
  meaningName.classList.add("foreign-meaning-name");
  meaningName.innerHTML = "<i>Wprowadź tłumaczenie</i>";
  meaningLi.appendChild(meaningName);
  updatePhraseDiv(meaningName);
  addButtonsToMeaning(meaningLi);
  return meaningLi;
}

function createSpeechSection() {
  var speechSection = document.createElement("div");
  speechSection.classList.add("speech-section");
  speechSection.innerHTML = "<div class=\"part-of-speech-div\">\n                            <div class=\"part-of-speech-input-div\">\n                                <input class=\"part-of-speech\" placeholder=\"Wprowad\u017A cz\u0119\u015B\u0107 mowy\">                    <div class=\"pos-suggestion-div hidden\">\n                                    <ul class=\"pos-suggestion-ul suggestions-ul\">\n                                    </ul>\n                            </div></div></div>\n                    <ol class=\"foreign-word-ol\"></ol>";
  addButtonsToSpeechSection(speechSection);
  var wordList = speechSection.querySelector('.foreign-word-ol');
  addMeaning(wordList, false);
  var partOfSpeech = speechSection.querySelector('.part-of-speech');
  updatePartOfSpeech(partOfSpeech);
  return speechSection;
} //ADDING BUTTONS TO ELEMENTS


function addButtonsToSpeechSection(speechSection) {
  var partOfSpeechDiv = speechSection.querySelector('.part-of-speech-div');
  var delSpeechSectionBtn = getButton(delSpeechSectionBtnTmpl);
  var moveUpBtn = getButton(moveUpBtnTmpl);
  var moveDownBtn = getButton(moveDownBtnTmpl);
  var addMeaningBtn = getButton(addMeaningBtnTmpl);
  addMeaningBtn.classList.remove('opacity0');
  partOfSpeechDiv.appendChild(delSpeechSectionBtn);
  partOfSpeechDiv.appendChild(moveUpBtn);
  partOfSpeechDiv.appendChild(moveDownBtn);
  partOfSpeechDiv.appendChild(addMeaningBtn);
  addSpeechSectionEventListeners(speechSection);
}

function addButtonsToMeaning(meaningLi) {
  var addSentenceBtn = getButton(addSentenceBtnTmpl);
  var delMeaningBtn = getButton(delMeaningBtnTmpl);
  var moveUpBtn = getButton(moveUpBtnTmpl);
  var moveDownBtn = getButton(moveDownBtnTmpl);
  var meaningName = meaningLi.querySelector(".foreign-meaning-name");
  meaningLi.insertBefore(moveDownBtn, meaningName.nextElementSibling);
  meaningLi.insertBefore(moveUpBtn, meaningName.nextElementSibling);
  meaningLi.insertBefore(delMeaningBtn, meaningName.nextElementSibling);
  meaningLi.insertBefore(addSentenceBtn, meaningName.nextElementSibling);
  addMeaningEventListeners(meaningLi);
}

function addButtonsToExample(example) {
  var delSentenceBtn = getButton(delSentenceBtnTmpl);
  var moveUpBtn = getButton(moveUpBtnTmpl);
  var moveDownBtn = getButton(moveDownBtnTmpl);
  example.appendChild(delSentenceBtn);
  example.appendChild(moveUpBtn);
  example.appendChild(moveDownBtn);
  addExampleEventListeners(example);
} //ADDING EVENT LISTENERS TO ELEMENTS


function addSpeechSectionEventListeners(speechSection) {
  var delSpeechSectionBtn = speechSection.querySelector(".del-speech-section-btn");
  var moveUpBtn = speechSection.querySelector(".move-up-btn");
  var moveDownBtn = speechSection.querySelector(".move-down-btn");
  var addMeaningBtn = speechSection.querySelector(".add-meaning-btn");
  delSpeechSectionBtn.addEventListener('click', deleteParentOfParentElement);
  moveUpBtn.addEventListener('click', moveParentOfParentElementUp);
  moveDownBtn.addEventListener('click', moveParentOfParentElementDown);
  addMeaningBtn.addEventListener('click', addMeaning);
  speechSection.addEventListener('mouseover', function () {
    delSpeechSectionBtn.classList.remove('opacity0');
    moveUpBtn.classList.remove("opacity0");
    moveDownBtn.classList.remove("opacity0");
  });
  speechSection.addEventListener('mouseout', speechSection.hideBtn = function () {
    delSpeechSectionBtn.classList.add('opacity0');
    moveUpBtn.classList.add("opacity0");
    moveDownBtn.classList.add("opacity0");
  });
  delSpeechSectionBtn.addEventListener('mousedown', function () {
    speechSection.hideBtn();
    $(".tooltip").hide();
  });
}

function addMeaningEventListeners(meaningLi) {
  var addSentenceBtn = meaningLi.querySelector(".add-sentence-btn");
  var delMeaningBtn = meaningLi.querySelector(".del-meaning-btn");
  var moveUpBtn = meaningLi.querySelector(".move-up-btn");
  var moveDownBtn = meaningLi.querySelector(".move-down-btn");
  addSentenceBtn.addEventListener('click', addSentence);
  delMeaningBtn.addEventListener('click', deleteParentElement);
  moveUpBtn.addEventListener('click', moveParentElementUp);
  moveDownBtn.addEventListener('click', moveParentElementDown);
  meaningLi.addEventListener('mouseover', function () {
    addSentenceBtn.classList.remove("opacity0");
    delMeaningBtn.classList.remove("opacity0");
    moveUpBtn.classList.remove("opacity0");
    moveDownBtn.classList.remove("opacity0");
  });
  meaningLi.addEventListener('mouseout', meaningLi.hideBtn = function () {
    addSentenceBtn.classList.add("opacity0");
    delMeaningBtn.classList.add("opacity0");
    moveUpBtn.classList.add("opacity0");
    moveDownBtn.classList.add("opacity0");
  });
  delMeaningBtn.addEventListener('mousedown', function () {
    meaningLi.hideBtn();
    $(".tooltip").hide();
  });
}

function addExampleEventListeners(example) {
  var delSentenceBtn = example.querySelector(".del-sentence-btn");
  var moveUpBtn = example.querySelector(".move-up-btn");
  var moveDownBtn = example.querySelector(".move-down-btn");
  delSentenceBtn.addEventListener('click', deleteParentElement);
  moveUpBtn.addEventListener('click', moveParentElementUp);
  moveDownBtn.addEventListener('click', moveParentElementDown);
  example.addEventListener('mouseover', function () {
    delSentenceBtn.classList.remove("opacity0");
    moveUpBtn.classList.remove("opacity0");
    moveDownBtn.classList.remove("opacity0");
  });
  example.addEventListener('mouseout', example.hideBtn = function () {
    delSentenceBtn.classList.add("opacity0");
    moveUpBtn.classList.add("opacity0");
    moveDownBtn.classList.add("opacity0");
  });
  delSentenceBtn.addEventListener('mousedown', function () {
    example.hideBtn();
    $(".tooltip").hide();
  });
} //ADDING NEW ELEMENTS


function addMeaning(wordList) {
  var editMeaningName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  //check if wordList is pointerEvent from clicked add meaning btn
  if (wordList.pointerId) {
    wordList = this.parentNode.parentNode.querySelector(".foreign-word-ol");
  }

  var meaning = createMeaning();
  var sentenceTable = createSentenceTable();
  addSentence(sentenceTable, false);
  meaning.appendChild(sentenceTable);
  wordList.appendChild(meaning);

  if (editMeaningName) {
    var meaningName = meaning.querySelector('.foreign-meaning-name');
    editPhrase(meaningName);
  }
}

function addSentence(sentenceTable) {
  var editSentence = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  //check if sentenceTable is pointerEvent from clicked add sentence btn
  if (sentenceTable.pointerId) {
    sentenceTable = this.parentNode.querySelector('.sentence-table');
  }

  var sentenceTr = createSentenceTr();
  var sentence = createExampleSentence();
  var translation = createExampleTranslation();
  sentenceTr.appendChild(sentence);
  sentenceTr.appendChild(translation);
  sentenceTable.appendChild(sentenceTr);
  addButtonsToExample(sentenceTr);
  if (editSentence) editPhrase(sentence);
}

function addSpeechSection() {
  var _document$querySelect;

  var speechSection = createSpeechSection();
  var previousElement = (_document$querySelect = document.querySelector(".speech-section:last-of-type")) !== null && _document$querySelect !== void 0 ? _document$querySelect : originalWord;
  previousElement.parentNode.insertBefore(speechSection, previousElement.nextElementSibling);
}

function deleteElement(toDelete) {
  addUndoNode();
  var parentOfToDelete = toDelete.parentNode;
  parentOfToDelete.removeChild(toDelete);
  phraseDescDiv.textContent = '';
  editPhraseDiv.classList.add("hidden");
}

function deleteParentElement() {
  deleteElement(this.parentNode);
}

function deleteParentOfParentElement() {
  deleteElement(this.parentNode.parentNode);
}

function moveElementUp(toMove) {
  if (toMove.previousElementSibling !== null && toMove.previousElementSibling.classList.contains(toMove.classList[0])) toMove.parentNode.insertBefore(toMove, toMove.previousElementSibling);else {
    var lastChild = toMove.parentNode.querySelector(".".concat(toMove.classList[0], ":last-of-type"));
    if (toMove !== lastChild) swapElements(toMove, lastChild);
  }
}

function moveElementDown(toMove) {
  if (toMove.nextElementSibling !== null && toMove.nextElementSibling.classList.contains(toMove.classList[0])) toMove.parentNode.insertBefore(toMove.nextElementSibling, toMove);else {
    var firstChild = toMove.parentNode.querySelector(".".concat(toMove.classList[0]));
    if (toMove !== firstChild) swapElements(toMove, firstChild);
  }
}

function moveParentElementUp() {
  moveElementUp(this.parentNode);
}

function moveParentElementDown() {
  moveElementDown(this.parentNode);
}

function moveParentOfParentElementUp() {
  moveElementUp(this.parentNode.parentNode);
}

function moveParentOfParentElementDown() {
  moveElementDown(this.parentNode.parentNode);
}

function swapElements(a, b) {
  var aParent = a.parentNode;
  var bParent = b.parentNode;
  var aHolder = document.createElement("div");
  var bHolder = document.createElement("div");
  aParent.replaceChild(aHolder, a);
  bParent.replaceChild(bHolder, b);
  aParent.replaceChild(b, aHolder);
  bParent.replaceChild(a, bHolder);
}

function getPhraseDivs() {
  var phraseDivs = [];

  var _iterator6 = _createForOfIteratorHelper(phraseClasses),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var phraseClass = _step6.value;
      var selected = document.querySelectorAll(phraseClass);

      var _iterator7 = _createForOfIteratorHelper(selected),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var s = _step7.value;
          phraseDivs.push(s);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return phraseDivs;
}

function updatePartOfSpeech(partOfSpeech) {
  _part_of_speech_js__WEBPACK_IMPORTED_MODULE_19__.partOfSpeechSuggestions(partOfSpeech);
  partOfSpeech.addEventListener('focus', function () {
    phraseDescDiv.textContent = '';
    editPhraseDiv.classList.add("hidden");
    phraseDivs = getPhraseDivs();

    var _iterator8 = _createForOfIteratorHelper(phraseDivs),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var p = _step8.value;
        p.classList.remove('phrase-click');
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  });
}

function updatePhraseDiv(phraseDiv) {
  phraseDiv.addEventListener('mouseover', function () {
    phraseDiv.classList.add('phrase-mouseover');
  });
  phraseDiv.addEventListener('mouseout', function () {
    phraseDiv.classList.remove('phrase-mouseover');
  });
  phraseDiv.addEventListener('click', function () {
    editPhrase(phraseDiv);
  });
}

function editPhrase(phrase) {
  phraseDivs = getPhraseDivs();

  var _iterator9 = _createForOfIteratorHelper(phraseDivs),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var p = _step9.value;
      p.classList.remove('phrase-click');
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  editPhraseDiv.classList.remove("hidden");
  phrase.classList.add('phrase-click');
  var classname = phrase.classList.item(0);
  var phraseDesc;
  var inputDesc = "";

  switch (classname) {
    case 'header-word':
      phraseDesc = "Podaj wyrażenie, które jest tłumaczone";
      inputDesc = "Wprowadź wyrażenie";
      break;

    case 'foreign-meaning-name':
      phraseDesc = "Podaj tłumaczenie wyrażenia";
      inputDesc = "Wprowadź tłumaczenie";
      break;

    case 'example-sentence':
      phraseDesc = "Podaj zdanie";
      inputDesc = "Wprowadź zdanie";
      break;

    case 'example-translation':
      phraseDesc = "Podaj tłumaczenie zdania";
      inputDesc = "Wprowadź tłumaczenie";
      break;

    default:
      phraseDesc = "Podaj frazę";
      inputDesc = "Wprowadź frazę";
  }

  phraseTextIn.value = '';
  phraseTextIn.focus();
  phraseDescDiv.textContent = phraseDesc;

  if (phrase.textContent !== inputDesc) {
    phraseTextIn.value = phrase.textContent;
  } //want to remove eventListenters from apply elements in order to avoid impact on another phrases


  phraseTextIn.removeEventListener('keydown', phraseTextIn.fn);
  phraseApplyBtn.removeEventListener('click', phraseApplyBtn.fn); //apply phrase

  phraseTextIn.addEventListener('keydown', phraseTextIn.fn = function (e) {
    if (e.keyCode === 13) {
      applyPhrase();
    }
  });
  phraseApplyBtn.addEventListener('click', phraseApplyBtn.fn = applyPhrase); //cancel phrase

  phraseCancelBtn.addEventListener('click', function () {
    phrase.classList.remove('phrase-click');
    phraseDescDiv.textContent = '';
    editPhraseDiv.classList.add("hidden");
  });

  function applyPhrase() {
    addUndoNode();
    if (phraseTextIn.value === "") phrase.innerHTML = "<i>".concat(inputDesc, "</i>");else phrase.textContent = phraseTextIn.value;
    phrase.classList.remove('phrase-click');
    phraseDescDiv.textContent = '';
    editPhraseDiv.classList.add("hidden");

    if (classname === 'header-word') {
      checkWordExists();
    }
  }
}

function getPartsOfSpeechOrder() {
  var partsOfSpeech = document.querySelectorAll('.part-of-speech');
  var partsOfSpeechOrder = '';

  for (var i = 0; i < partsOfSpeech.length; i++) {
    if (i < partsOfSpeech.length - 1) partsOfSpeechOrder += "".concat(partsOfSpeech[i].value, ",");else partsOfSpeechOrder += "".concat(partsOfSpeech[i].value);
  }

  return partsOfSpeechOrder;
}

function getWordJson() {
  var word = document.querySelector(".header-word");
  var speechSections = document.querySelectorAll(".speech-section");
  var jsonStr = "{ \"word\": \"".concat(word.textContent, "\", \"speechSection\": {"); //adding part of speech sections

  for (var sp = 0; sp < speechSections.length; sp++) {
    var order = 0;
    jsonStr += "\"".concat(sp, "\": {");
    var partOfSpeech = speechSections[sp].querySelector(".part-of-speech"); //adding part of speech

    jsonStr += "\"partOfSpeech\": \"".concat(partOfSpeech.value, "\", \"meanings\":{"); //adding meanings

    var editWordOl = speechSections[sp].querySelector(".foreign-word-ol");

    var _meaningsLi = editWordOl.querySelectorAll(".foreign-meaning-li");

    for (var m = 0; m < _meaningsLi.length; m++) {
      jsonStr += "\"".concat(m, "\":{");

      var meaningName = _meaningsLi[m].querySelector(".foreign-meaning-name");

      jsonStr += "\"id\": \"".concat(_meaningsLi[m].id, "\",");
      jsonStr += "\"meaningName\": \"".concat(meaningName.textContent.trim(), "\",\"examples\":{"); //adding examples with translation

      var _examples = _meaningsLi[m].querySelectorAll(".sentence-tr");

      for (var e = 0; e < _examples.length; e++) {
        var sentence = _examples[e].querySelector(".example-sentence");

        var translation = _examples[e].querySelector(".example-translation");

        jsonStr += "\"".concat(e, "\": { \"sentence\":\"").concat(sentence.textContent, "\",\"translation\":\"").concat(translation.textContent, "\""); //comma for end of example

        jsonStr += e < _examples.length - 1 ? '},' : '}';
      } //closing all examples


      jsonStr += '},'; //adding meaning order

      jsonStr += "\"order\":\"".concat(++order, "\""); //comma for end of meaning

      jsonStr += m < _meaningsLi.length - 1 ? '},' : '}';
    } //closing all meanings


    jsonStr += '}'; //comma for end of meaning speech section

    jsonStr += sp < speechSections.length - 1 ? '},' : '}';
  } //closing all speech sections


  jsonStr += '},'; //adding parts of speech order

  jsonStr += "\"partsOfSpeechOrder\": \"".concat(getPartsOfSpeechOrder(), "\","); //adding root word

  jsonStr += "\"rootWord\": ".concat(rootWord ? '"' + rootWord + '"' : rootWord, ","); //adding meanings id to delete

  jsonStr += "\"toDeleteMeaningsId\": ".concat(getMeaningsIdToDelete(), ","); //adding parts of speech csv string

  jsonStr += "\"partsOfSpeechCsv\": \"".concat(_part_of_speech_js__WEBPACK_IMPORTED_MODULE_19__.getPartsOfSpeechCsv(), "\""); //closing word json

  jsonStr += '}';
  console.log(jsonStr);
  var json = JSON.parse(jsonStr);
  console.log(json);
  return jsonStr;
}

function checkForEmptyElements() {
  var partsOfSpeech = document.querySelectorAll(".part-of-speech");

  var _iterator10 = _createForOfIteratorHelper(partsOfSpeech),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var _pos = _step10.value;
      isError.emptyPosError = _pos.value.trim() === "";
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var phraseDivs = getPhraseDivs();

  var _iterator11 = _createForOfIteratorHelper(phraseDivs),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var phraseDiv = _step11.value;
      var classname = phraseDiv.classList.item(0);
      var orgDesc = void 0;

      switch (classname) {
        case 'header-word':
          orgDesc = "Wprowadź wyrażenie";
          break;

        case 'foreign-meaning-name':
          orgDesc = "Wprowadź tłumaczenie";
          break;

        case 'example-sentence':
          orgDesc = "Wprowadź zdanie";
          break;

        case 'example-translation':
          orgDesc = "Wprowadź tłumaczenie";
          break;

        default:
          orgDesc = "Wprowadź frazę";
      }

      if (phraseDiv.textContent === orgDesc) {
        isError.emptyError = true;
        return;
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }

  isError.emptyError = false;
}

function getMeaningsIdToDelete() {
  var currentMeanings = document.querySelectorAll('.foreign-meaning-li');
  var currentMeaningsId = [];
  var earlyMeaningsId = [];

  var _iterator12 = _createForOfIteratorHelper(meaningsLi),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var meaning = _step12.value;
      earlyMeaningsId.push(meaning.id);
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }

  var _iterator13 = _createForOfIteratorHelper(currentMeanings),
      _step13;

  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var _meaning = _step13.value;
      currentMeaningsId.push(_meaning.id);
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }

  var toDelete = earlyMeaningsId.filter(function (el) {
    return !currentMeaningsId.includes(el);
  });
  return JSON.stringify(toDelete);
}

var isSubmitted = false;

function saveWord() {
  return _saveWord.apply(this, arguments);
}

function _saveWord() {
  _saveWord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var wordJson, rootWordExists, rootWordInput, addingRootWordSucceed, wordNameIn, wordName, wordJsonIn;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            wordJson = getWordJson();
            _context.next = 9;
            break;

          case 4:
            _context.prev = 4;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            alert('Popraw błędy semantyczne');
            return _context.abrupt("return", false);

          case 9:
            checkForEmptyElements();

            if (!Object.values(isError).includes(true)) {
              _context.next = 13;
              break;
            }

            alert('Wypełnij wszystkie pola');
            return _context.abrupt("return", false);

          case 13:
            _context.next = 15;
            return _root_word_js__WEBPACK_IMPORTED_MODULE_20__.checkRootWordExists(rootWord);

          case 15:
            rootWordExists = _context.sent;
            rootWordInput = document.querySelector(".root-word-input");

            if (!(!rootWordExists && rootWordInput.value.length > 0)) {
              _context.next = 26;
              break;
            }

            if (confirm("Podana podstawa słowotwórcza zostanie stworzona. Czy chcesz kontynuować?")) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", false);

          case 20:
            _context.next = 22;
            return _root_word_js__WEBPACK_IMPORTED_MODULE_20__.addRootWord(rootWord);

          case 22:
            addingRootWordSucceed = _context.sent;

            if (addingRootWordSucceed) {
              _context.next = 26;
              break;
            }

            alert('Dodawanie podstawy słowotwórzczej NIE powiodło się');
            return _context.abrupt("return", false);

          case 26:
            wordNameIn = document.querySelector("#word_name");
            wordName = document.querySelector(".header-word");
            wordNameIn.value = wordName.textContent;
            wordJsonIn = document.querySelector("#word_json");
            wordJsonIn.value = wordJson;

            if (!isSubmitted) {
              $("form[name='word']").submit();
              isSubmitted = true;
            }

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _saveWord.apply(this, arguments);
}

function addUndoNode() {
  var editWordSection = document.querySelector(".edit-word-section");
  undoNodes.push(editWordSection.cloneNode(true));
}

function undoChanges() {
  if (undoNodes.length) {
    var currentEditWordSection = document.querySelector(".edit-word-section");
    parentEditWordSection.removeChild(currentEditWordSection);
    var toUndoSection = undoNodes.pop();
    parentEditWordSection.insertBefore(toUndoSection, nextSiblingEditWordSection);

    var _speechSections = toUndoSection.querySelectorAll(".speech-section");

    var _meaningsLi2 = toUndoSection.querySelectorAll(".foreign-meaning-li");

    var _examples2 = toUndoSection.querySelectorAll(".sentence-tr");

    var _partsOfSpeech = toUndoSection.querySelectorAll(".part-of-speech");

    var _phraseDivs = getPhraseDivs();

    var _iterator14 = _createForOfIteratorHelper(_speechSections),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var sp = _step14.value;
        addSpeechSectionEventListeners(sp);
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }

    var _iterator15 = _createForOfIteratorHelper(_meaningsLi2),
        _step15;

    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var mLi = _step15.value;
        addMeaningEventListeners(mLi);
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }

    var _iterator16 = _createForOfIteratorHelper(_examples2),
        _step16;

    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var e = _step16.value;
        addExampleEventListeners(e);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }

    var _iterator17 = _createForOfIteratorHelper(_partsOfSpeech),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _pos2 = _step17.value;
        updatePartOfSpeech(_pos2);
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }

    var _iterator18 = _createForOfIteratorHelper(_phraseDivs),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var phraseDiv = _step18.value;
        updatePhraseDiv(phraseDiv);
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }

  phraseDivs = getPhraseDivs();

  var _iterator19 = _createForOfIteratorHelper(phraseDivs),
      _step19;

  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var p = _step19.value;
      p.classList.remove('phrase-click');
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
}

var saveBtn = document.querySelector(".save-meaning-btn");
saveBtn.addEventListener('mouseover', getWordJson);
saveBtn.addEventListener('click', saveWord);
addSpeechSectionBtn.addEventListener('click', addSpeechSection);
undoBtn.addEventListener('click', undoChanges);

function checkWordExists() {
  return _checkWordExists.apply(this, arguments);
}

function _checkWordExists() {
  _checkWordExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var word, response, exists, wordError;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            word = document.querySelector('.header-word');
            _context2.next = 3;
            return fetch("".concat(Routing.generate('checkexist'), "?wordName=").concat(word.textContent));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();

          case 6:
            exists = _context2.sent;
            wordError = document.querySelector('.word-exists');

            if (exists && word.textContent !== originalWordName) {
              isError.wordError = true;

              if (!wordError) {
                wordError = document.createElement('div');
                wordError.classList.add('edit-error', 'word-exists');
                wordError.textContent = 'Podane wyrażenie już istnieje';
                word.parentNode.insertBefore(wordError, word.nextElementSibling);
              }
            } else {
              isError.wordError = false;
              if (wordError) wordError.parentNode.removeChild(wordError);
            }

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _checkWordExists.apply(this, arguments);
}

function rootWordsHandle() {
  return _rootWordsHandle.apply(this, arguments);
}

function _rootWordsHandle() {
  _rootWordsHandle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var rootWordSuggestionDiv, rootWordInput, rootWordSuggestionUl;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            rootWordSuggestionDiv = document.querySelector(".root-word-suggestion-div");
            rootWordInput = document.querySelector(".root-word-input");
            rootWordSuggestionUl = document.querySelector(".root-word-suggestion-ul");
            _suggestions_events_js__WEBPACK_IMPORTED_MODULE_21__.suggestionsScroller(rootWordInput, rootWordSuggestionUl);
            rootWordInput.addEventListener('input', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var rootWords, _iterator20, _step20, _rootWord, rootWordSuggestionLi, _iterator21, _step21, _loop;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(rootWordInput.value.length > 0)) {
                        _context3.next = 13;
                        break;
                      }

                      rootWordSuggestionDiv.classList.remove('hidden');
                      _context3.next = 4;
                      return _root_word_js__WEBPACK_IMPORTED_MODULE_20__.getRootWordsForAutocomplete(rootWordInput.value, rootWordSuggestionUl);

                    case 4:
                      rootWords = _context3.sent;
                      _iterator20 = _createForOfIteratorHelper(rootWords);

                      try {
                        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                          _rootWord = _step20.value;
                          rootWordSuggestionUl.innerHTML += "<li>".concat(_rootWord, "</li>");
                        }
                      } catch (err) {
                        _iterator20.e(err);
                      } finally {
                        _iterator20.f();
                      }

                      rootWordSuggestionLi = rootWordSuggestionUl.querySelectorAll("li");
                      _iterator21 = _createForOfIteratorHelper(rootWordSuggestionLi);

                      try {
                        _loop = function _loop() {
                          var li = _step21.value;
                          li.addEventListener('mousedown', function () {
                            rootWordInput.value = li.textContent;
                            rootWordSuggestionDiv.classList.add('hidden');
                          });
                        };

                        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                          _loop();
                        }
                      } catch (err) {
                        _iterator21.e(err);
                      } finally {
                        _iterator21.f();
                      }

                      _suggestions_events_js__WEBPACK_IMPORTED_MODULE_21__.suggestionsMouseEvents(rootWordSuggestionUl);
                      _context3.next = 15;
                      break;

                    case 13:
                      rootWordSuggestionDiv.classList.add('hidden');
                      $(".root-word-edit-div+span").remove();

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));
            rootWordInput.addEventListener('blur', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var rootWordExists, rootWordInfoSpan, rootWordInfoSpanMessage, rootWordInfoSpanClass;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      $(".root-word-edit-div+span").remove();
                      rootWordSuggestionDiv.classList.add('hidden');

                      if (!(rootWordInput.value.length > 0)) {
                        _context4.next = 14;
                        break;
                      }

                      rootWord = rootWordInput.value;
                      _context4.next = 6;
                      return _root_word_js__WEBPACK_IMPORTED_MODULE_20__.checkRootWordExists(rootWord);

                    case 6:
                      rootWordExists = _context4.sent;
                      rootWordInfoSpan = document.createElement("span");

                      if (rootWordExists) {
                        rootWordInfoSpanMessage = 'Znaleziono podstawę';
                        rootWordInfoSpanClass = 'root-word-found-span';
                      } else {
                        rootWordInfoSpanMessage = 'Nie znaleziono podstawy';
                        rootWordInfoSpanClass = 'root-word-not-found-span';
                      }

                      rootWordInfoSpan.textContent = rootWordInfoSpanMessage;
                      rootWordInfoSpan.classList.add(rootWordInfoSpanClass);
                      rootWordInput.parentNode.parentNode.appendChild(rootWordInfoSpan);
                      _context4.next = 15;
                      break;

                    case 14:
                      rootWord = null;

                    case 15:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            })));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _rootWordsHandle.apply(this, arguments);
}

rootWordsHandle();
$(window).ready(function () {
  $("body").on("keypress", function (event) {
    var keyPressed = event.keyCode || event.which;

    if (keyPressed === 13) {
      event.preventDefault();
      return false;
    }
  });
});

/***/ }),

/***/ "./assets/js/root_word.js":
/*!********************************!*\
  !*** ./assets/js/root_word.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRootWordsForAutocomplete": () => (/* binding */ getRootWordsForAutocomplete),
/* harmony export */   "checkRootWordExists": () => (/* binding */ checkRootWordExists),
/* harmony export */   "addRootWord": () => (/* binding */ addRootWord)
/* harmony export */ });
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






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getRootWordsForAutocomplete(_x) {
  return _getRootWordsForAutocomplete.apply(this, arguments);
}

function _getRootWordsForAutocomplete() {
  _getRootWordsForAutocomplete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(q) {
    var elementToClear,
        response,
        rootWords,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            elementToClear = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            _context.next = 3;
            return fetch("".concat(Routing.generate('autocomplete_rootwords'), "?q=").concat(q));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            rootWords = _context.sent;

            if (elementToClear) {
              elementToClear.innerHTML = "";
            }

            rootWords.sort(function (a, b) {
              return a.length - b.length;
            });
            return _context.abrupt("return", rootWords);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRootWordsForAutocomplete.apply(this, arguments);
}

function checkRootWordExists(_x2) {
  return _checkRootWordExists.apply(this, arguments);
}

function _checkRootWordExists() {
  _checkRootWordExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(Routing.generate('root_word_checkexist'), "?name=").concat(name));

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _checkRootWordExists.apply(this, arguments);
}

function addRootWord(_x3) {
  return _addRootWord.apply(this, arguments);
}

function _addRootWord() {
  _addRootWord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(name) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("".concat(Routing.generate('admin_root_word_add'), "?name=").concat(name));

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.json();

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _addRootWord.apply(this, arguments);
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_s-6657b7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ec52f8","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-0200e9","assets_js_part_of_speech_js"], () => (__webpack_exec__("./assets/js/editword.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZWRpdHdvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Jvb3Rfd29yZC5qcyJdLCJuYW1lcyI6WyJvcmlnaW5hbFdvcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcmlnaW5hbFdvcmROYW1lIiwidGV4dENvbnRlbnQiLCJhZGRTZW50ZW5jZUJ0blRtcGwiLCJkZWxTZW50ZW5jZUJ0blRtcGwiLCJkZWxNZWFuaW5nQnRuVG1wbCIsImRlbFNwZWVjaFNlY3Rpb25CdG5UbXBsIiwibW92ZVVwQnRuVG1wbCIsIm1vdmVEb3duQnRuVG1wbCIsImFkZE1lYW5pbmdCdG5UbXBsIiwicGFydHNPZlNwZWVjaCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWFuaW5nc0xpIiwiZXhhbXBsZXMiLCJzcGVlY2hTZWN0aW9ucyIsImVkaXRXb3JkU2VjdGlvbiIsInBhcmVudEVkaXRXb3JkU2VjdGlvbiIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZ0VkaXRXb3JkU2VjdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsImVkaXRQaHJhc2VEaXYiLCJwaHJhc2VEZXNjRGl2IiwicGhyYXNlVGV4dEluIiwicGhyYXNlQXBwbHlCdG4iLCJwaHJhc2VDYW5jZWxCdG4iLCJhZGRTcGVlY2hTZWN0aW9uQnRuIiwidW5kb0J0biIsInBocmFzZUNsYXNzZXMiLCJ1bmRvTm9kZXMiLCJyb290V29yZElucHV0VmFsdWUiLCJ2YWx1ZSIsInJvb3RXb3JkIiwibGVuZ3RoIiwiZSIsImFkZEJ1dHRvbnNUb0V4YW1wbGUiLCJtbGkiLCJhZGRCdXR0b25zVG9NZWFuaW5nIiwic3AiLCJhZGRCdXR0b25zVG9TcGVlY2hTZWN0aW9uIiwicG9zIiwidXBkYXRlUGFydE9mU3BlZWNoIiwicGhyYXNlRGl2cyIsImdldFBocmFzZURpdnMiLCJwaHJhc2VEaXYiLCJ1cGRhdGVQaHJhc2VEaXYiLCJnZXRCdXR0b24iLCJ0ZW1wbGF0ZSIsImJ0biIsImNsb25lTm9kZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNyZWF0ZVNlbnRlbmNlVGFibGUiLCJzZW50ZW5jZVRhYmxlIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVNlbnRlbmNlVHIiLCJzZW50ZW5jZVRyIiwiY3JlYXRlRXhhbXBsZVNlbnRlbmNlIiwic2VudGVuY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVFeGFtcGxlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGlvbiIsImNyZWF0ZU1lYW5pbmciLCJtZWFuaW5nTGkiLCJtZWFuaW5nTmFtZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlU3BlZWNoU2VjdGlvbiIsInNwZWVjaFNlY3Rpb24iLCJ3b3JkTGlzdCIsImFkZE1lYW5pbmciLCJwYXJ0T2ZTcGVlY2giLCJwYXJ0T2ZTcGVlY2hEaXYiLCJkZWxTcGVlY2hTZWN0aW9uQnRuIiwibW92ZVVwQnRuIiwibW92ZURvd25CdG4iLCJhZGRNZWFuaW5nQnRuIiwiYWRkU3BlZWNoU2VjdGlvbkV2ZW50TGlzdGVuZXJzIiwiYWRkU2VudGVuY2VCdG4iLCJkZWxNZWFuaW5nQnRuIiwiaW5zZXJ0QmVmb3JlIiwiYWRkTWVhbmluZ0V2ZW50TGlzdGVuZXJzIiwiZXhhbXBsZSIsImRlbFNlbnRlbmNlQnRuIiwiYWRkRXhhbXBsZUV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbGV0ZVBhcmVudE9mUGFyZW50RWxlbWVudCIsIm1vdmVQYXJlbnRPZlBhcmVudEVsZW1lbnRVcCIsIm1vdmVQYXJlbnRPZlBhcmVudEVsZW1lbnREb3duIiwiaGlkZUJ0biIsIiQiLCJoaWRlIiwiYWRkU2VudGVuY2UiLCJkZWxldGVQYXJlbnRFbGVtZW50IiwibW92ZVBhcmVudEVsZW1lbnRVcCIsIm1vdmVQYXJlbnRFbGVtZW50RG93biIsImVkaXRNZWFuaW5nTmFtZSIsInBvaW50ZXJJZCIsIm1lYW5pbmciLCJlZGl0UGhyYXNlIiwiZWRpdFNlbnRlbmNlIiwiYWRkU3BlZWNoU2VjdGlvbiIsInByZXZpb3VzRWxlbWVudCIsImRlbGV0ZUVsZW1lbnQiLCJ0b0RlbGV0ZSIsImFkZFVuZG9Ob2RlIiwicGFyZW50T2ZUb0RlbGV0ZSIsInJlbW92ZUNoaWxkIiwibW92ZUVsZW1lbnRVcCIsInRvTW92ZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjb250YWlucyIsImxhc3RDaGlsZCIsInN3YXBFbGVtZW50cyIsIm1vdmVFbGVtZW50RG93biIsImZpcnN0Q2hpbGQiLCJhIiwiYiIsImFQYXJlbnQiLCJiUGFyZW50IiwiYUhvbGRlciIsImJIb2xkZXIiLCJyZXBsYWNlQ2hpbGQiLCJwaHJhc2VDbGFzcyIsInNlbGVjdGVkIiwicyIsInB1c2giLCJwIiwicGhyYXNlIiwiY2xhc3NuYW1lIiwiaXRlbSIsInBocmFzZURlc2MiLCJpbnB1dERlc2MiLCJmb2N1cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmbiIsImtleUNvZGUiLCJhcHBseVBocmFzZSIsImNoZWNrV29yZEV4aXN0cyIsImdldFBhcnRzT2ZTcGVlY2hPcmRlciIsInBhcnRzT2ZTcGVlY2hPcmRlciIsImkiLCJnZXRXb3JkSnNvbiIsIndvcmQiLCJqc29uU3RyIiwib3JkZXIiLCJlZGl0V29yZE9sIiwibSIsImlkIiwidHJpbSIsImdldE1lYW5pbmdzSWRUb0RlbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiY2hlY2tGb3JFbXB0eUVsZW1lbnRzIiwiaXNFcnJvciIsImVtcHR5UG9zRXJyb3IiLCJvcmdEZXNjIiwiZW1wdHlFcnJvciIsImN1cnJlbnRNZWFuaW5ncyIsImN1cnJlbnRNZWFuaW5nc0lkIiwiZWFybHlNZWFuaW5nc0lkIiwiZmlsdGVyIiwiZWwiLCJpbmNsdWRlcyIsInN0cmluZ2lmeSIsImlzU3VibWl0dGVkIiwic2F2ZVdvcmQiLCJ3b3JkSnNvbiIsImFsZXJ0IiwiT2JqZWN0IiwidmFsdWVzIiwicm9vdHdvcmQiLCJyb290V29yZEV4aXN0cyIsInJvb3RXb3JkSW5wdXQiLCJjb25maXJtIiwiYWRkaW5nUm9vdFdvcmRTdWNjZWVkIiwid29yZE5hbWVJbiIsIndvcmROYW1lIiwid29yZEpzb25JbiIsInN1Ym1pdCIsInVuZG9DaGFuZ2VzIiwiY3VycmVudEVkaXRXb3JkU2VjdGlvbiIsInRvVW5kb1NlY3Rpb24iLCJwb3AiLCJtTGkiLCJzYXZlQnRuIiwiZmV0Y2giLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJyZXNwb25zZSIsImV4aXN0cyIsIndvcmRFcnJvciIsInJvb3RXb3Jkc0hhbmRsZSIsInJvb3RXb3JkU3VnZ2VzdGlvbkRpdiIsInJvb3RXb3JkU3VnZ2VzdGlvblVsIiwic3VnZ2VzdGlvbnNFdmVudHMiLCJyb290V29yZHMiLCJyb290V29yZFN1Z2dlc3Rpb25MaSIsImxpIiwicm9vdFdvcmRJbmZvU3BhbiIsInJvb3RXb3JkSW5mb1NwYW5NZXNzYWdlIiwicm9vdFdvcmRJbmZvU3BhbkNsYXNzIiwid2luZG93IiwicmVhZHkiLCJvbiIsImV2ZW50Iiwia2V5UHJlc3NlZCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJnZXRSb290V29yZHNGb3JBdXRvY29tcGxldGUiLCJxIiwiZWxlbWVudFRvQ2xlYXIiLCJzb3J0IiwiY2hlY2tSb290V29yZEV4aXN0cyIsIm5hbWUiLCJhZGRSb290V29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQUlDLGdCQUFnQixHQUFHSCxZQUFZLENBQUNJLFdBQXBDO0FBQ0EsSUFBSUMsa0JBQWtCLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBekI7QUFDQSxJQUFJSSxrQkFBa0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUF6QjtBQUNBLElB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QUFKLG1CQUFxRDBCLElBQXJELEVBRDlCOztBQUFBO0FBQ1F6QixvQkFEUjtBQUFBO0FBQUEsbUJBRWlCQSxRQUFRLENBQUN2QyxJQUFULEVBRmpCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQUtlaUUsVzs7Ozs7eUVBQWYsa0JBQTJCRCxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN5QjVCLEtBQUssV0FBSUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHFCQUFqQixDQUFKLG1CQUFvRDBCLElBQXBELEVBRDlCOztBQUFBO0FBQ1F6QixvQkFEUjtBQUFBO0FBQUEsbUJBRWlCQSxRQUFRLENBQUN2QyxJQUFULEVBRmpCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJlZGl0d29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcyBmcm9tICcuL3BhcnRfb2Zfc3BlZWNoLmpzJztcclxuaW1wb3J0ICogYXMgcm9vdHdvcmQgZnJvbSAnLi9yb290X3dvcmQuanMnO1xyXG5pbXBvcnQgKiBhcyBzdWdnZXN0aW9uc0V2ZW50cyBmcm9tICcuL3N1Z2dlc3Rpb25zX2V2ZW50cy5qcyc7XHJcblxyXG5sZXQgb3JpZ2luYWxXb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItd29yZFwiKTtcclxubGV0IG9yaWdpbmFsV29yZE5hbWUgPSBvcmlnaW5hbFdvcmQudGV4dENvbnRlbnQ7XHJcbmxldCBhZGRTZW50ZW5jZUJ0blRtcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1zZW50ZW5jZS1idG5cIik7XHJcbmxldCBkZWxTZW50ZW5jZUJ0blRtcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbC1zZW50ZW5jZS1idG5cIik7XHJcbmxldCBkZWxNZWFuaW5nQnRuVG1wbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsLW1lYW5pbmctYnRuXCIpO1xyXG5sZXQgZGVsU3BlZWNoU2VjdGlvbkJ0blRtcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbC1zcGVlY2gtc2VjdGlvbi1idG5cIik7XHJcbmxldCBtb3ZlVXBCdG5UbXBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlLXVwLWJ0blwiKTtcclxubGV0IG1vdmVEb3duQnRuVG1wbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZS1kb3duLWJ0blwiKTtcclxubGV0IGFkZE1lYW5pbmdCdG5UbXBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbWVhbmluZy1idG5cIik7XHJcblxyXG5sZXQgcGFydHNPZlNwZWVjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFydC1vZi1zcGVlY2hcIik7XHJcbmxldCBtZWFuaW5nc0xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlaWduLW1lYW5pbmctbGlcIik7XHJcbmxldCBleGFtcGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VudGVuY2UtdHJcIik7XHJcbmxldCBzcGVlY2hTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3BlZWNoLXNlY3Rpb25cIik7XHJcbmxldCBlZGl0V29yZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtd29yZC1zZWN0aW9uXCIpO1xyXG5sZXQgcGFyZW50RWRpdFdvcmRTZWN0aW9uID0gZWRpdFdvcmRTZWN0aW9uLnBhcmVudE5vZGU7XHJcbmxldCBuZXh0U2libGluZ0VkaXRXb3JkU2VjdGlvbiA9IGVkaXRXb3JkU2VjdGlvbi5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbmxldCBlZGl0UGhyYXNlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXBocmFzZS1kaXYxXCIpO1xyXG5sZXQgcGhyYXNlRGVzY0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1waHJhc2UtZGVzY1wiKTtcclxubGV0IHBocmFzZVRleHRJbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhyYXNlLXRleHQtaW5cIik7XHJcbmxldCBwaHJhc2VBcHBseUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1waHJhc2UtYXBwbHlcIik7XHJcbmxldCBwaHJhc2VDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcGhyYXNlLWNhbmNlbFwiKTtcclxubGV0IGFkZFNwZWVjaFNlY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1zcGVlY2gtc2VjdGlvbi1idG5cIik7XHJcbmxldCB1bmRvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bmRvLWJ0blwiKTtcclxuXHJcbmxldCBwaHJhc2VDbGFzc2VzID0gWycuaGVhZGVyLXdvcmQnLCcuZm9yZWlnbi1tZWFuaW5nLW5hbWUnLCcuZXhhbXBsZS1zZW50ZW5jZScsJy5leGFtcGxlLXRyYW5zbGF0aW9uJ107XHJcbmxldCB1bmRvTm9kZXMgPSBbXTtcclxubGV0IHJvb3RXb3JkSW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290LXdvcmQtaW5wdXQnKS52YWx1ZTtcclxubGV0IHJvb3RXb3JkID0gcm9vdFdvcmRJbnB1dFZhbHVlLmxlbmd0aCA+IDAgPyByb290V29yZElucHV0VmFsdWUgOiBudWxsO1xyXG5cclxuLy9lbnRlciB1cGRhdGVzXHJcbmZvciAoY29uc3QgZSBvZiBleGFtcGxlcykge1xyXG4gICAgYWRkQnV0dG9uc1RvRXhhbXBsZShlKTtcclxuXHJcbn1cclxuZm9yIChjb25zdCBtbGkgb2YgbWVhbmluZ3NMaSkge1xyXG4gICAgYWRkQnV0dG9uc1RvTWVhbmluZyhtbGkpO1xyXG59XHJcbmZvciAoY29uc3Qgc3Agb2Ygc3BlZWNoU2VjdGlvbnMpIHtcclxuICAgIGFkZEJ1dHRvbnNUb1NwZWVjaFNlY3Rpb24oc3ApO1xyXG59XHJcbmZvcihjb25zdCBwb3Mgb2YgcGFydHNPZlNwZWVjaCl7XHJcbiAgICB1cGRhdGVQYXJ0T2ZTcGVlY2gocG9zKTtcclxufVxyXG5sZXQgcGhyYXNlRGl2cyA9IGdldFBocmFzZURpdnMoKTtcclxuZm9yIChjb25zdCBwaHJhc2VEaXYgb2YgcGhyYXNlRGl2cykge1xyXG4gICAgdXBkYXRlUGhyYXNlRGl2KHBocmFzZURpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ1dHRvbih0ZW1wbGF0ZSl7XHJcbiAgICBsZXQgYnRuID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHkwJyk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG59XHJcblxyXG4vL0NSRUFUSU5HIEVMRU1FTlRTXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbnRlbmNlVGFibGUoKXtcclxuICAgIGxldCBzZW50ZW5jZVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgc2VudGVuY2VUYWJsZS5jbGFzc0xpc3QuYWRkKCdzZW50ZW5jZS10YWJsZScpO1xyXG4gICAgcmV0dXJuIHNlbnRlbmNlVGFibGU7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU2VudGVuY2VUcigpe1xyXG4gICAgbGV0IHNlbnRlbmNlVHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBzZW50ZW5jZVRyLmNsYXNzTGlzdC5hZGQoXCJzZW50ZW5jZS10clwiKTtcclxuICAgIHJldHVybiBzZW50ZW5jZVRyO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUV4YW1wbGVTZW50ZW5jZSgpe1xyXG4gICAgbGV0IHNlbnRlbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgc2VudGVuY2UuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtc2VudGVuY2VcIik7XHJcbiAgICBzZW50ZW5jZS5pbm5lckhUTUwgPSBcIjxpPldwcm93YWTFuiB6ZGFuaWU8L2k+XCI7XHJcbiAgICB1cGRhdGVQaHJhc2VEaXYoc2VudGVuY2UpO1xyXG4gICAgcmV0dXJuIHNlbnRlbmNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFeGFtcGxlVHJhbnNsYXRpb24oKXtcclxuICAgIGxldCB0cmFuc2xhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgIHRyYW5zbGF0aW9uLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLXRyYW5zbGF0aW9uXCIpO1xyXG4gICAgdHJhbnNsYXRpb24uaW5uZXJIVE1MID0gXCI8aT5XcHJvd2FkxbogdMWCdW1hY3plbmllPC9pPlwiO1xyXG4gICAgdXBkYXRlUGhyYXNlRGl2KHRyYW5zbGF0aW9uKTtcclxuICAgIHJldHVybiB0cmFuc2xhdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVhbmluZygpe1xyXG4gICAgbGV0IG1lYW5pbmdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIG1lYW5pbmdMaS5jbGFzc0xpc3QuYWRkKFwiZm9yZWlnbi1tZWFuaW5nLWxpXCIpO1xyXG4gICAgbGV0IG1lYW5pbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lYW5pbmdOYW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JlaWduLW1lYW5pbmctbmFtZVwiKTtcclxuICAgIG1lYW5pbmdOYW1lLmlubmVySFRNTCA9IFwiPGk+V3Byb3dhZMW6IHTFgnVtYWN6ZW5pZTwvaT5cIjtcclxuICAgIG1lYW5pbmdMaS5hcHBlbmRDaGlsZChtZWFuaW5nTmFtZSk7XHJcbiAgICB1cGRhdGVQaHJhc2VEaXYobWVhbmluZ05hbWUpO1xyXG4gICAgYWRkQnV0dG9uc1RvTWVhbmluZyhtZWFuaW5nTGkpO1xyXG5cclxuICAgIHJldHVybiBtZWFuaW5nTGk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNwZWVjaFNlY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgc3BlZWNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzcGVlY2hTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzcGVlY2gtc2VjdGlvblwiKTtcclxuICAgIHNwZWVjaFNlY3Rpb24uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwYXJ0LW9mLXNwZWVjaC1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0LW9mLXNwZWVjaC1pbnB1dC1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJwYXJ0LW9mLXNwZWVjaFwiIHBsYWNlaG9sZGVyPVwiV3Byb3dhZMW6IGN6xJnFm8SHIG1vd3lcIj4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3Mtc3VnZ2VzdGlvbi1kaXYgaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcy1zdWdnZXN0aW9uLXVsIHN1Z2dlc3Rpb25zLXVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJmb3JlaWduLXdvcmQtb2xcIj48L29sPmA7XHJcblxyXG4gICAgYWRkQnV0dG9uc1RvU3BlZWNoU2VjdGlvbihzcGVlY2hTZWN0aW9uKTtcclxuXHJcbiAgICBsZXQgd29yZExpc3QgPSBzcGVlY2hTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mb3JlaWduLXdvcmQtb2wnKTtcclxuXHJcbiAgICBhZGRNZWFuaW5nKHdvcmRMaXN0LGZhbHNlKTtcclxuICAgIGxldCBwYXJ0T2ZTcGVlY2ggPSBzcGVlY2hTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0LW9mLXNwZWVjaCcpO1xyXG4gICAgdXBkYXRlUGFydE9mU3BlZWNoKHBhcnRPZlNwZWVjaCk7XHJcbiAgICByZXR1cm4gc3BlZWNoU2VjdGlvbjtcclxufVxyXG5cclxuLy9BRERJTkcgQlVUVE9OUyBUTyBFTEVNRU5UU1xyXG5mdW5jdGlvbiBhZGRCdXR0b25zVG9TcGVlY2hTZWN0aW9uKHNwZWVjaFNlY3Rpb24pe1xyXG5cclxuICAgIGxldCBwYXJ0T2ZTcGVlY2hEaXYgPSBzcGVlY2hTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0LW9mLXNwZWVjaC1kaXYnKTtcclxuICAgIGxldCBkZWxTcGVlY2hTZWN0aW9uQnRuID0gZ2V0QnV0dG9uKGRlbFNwZWVjaFNlY3Rpb25CdG5UbXBsKTtcclxuXHJcbiAgICBsZXQgbW92ZVVwQnRuID0gZ2V0QnV0dG9uKG1vdmVVcEJ0blRtcGwpO1xyXG4gICAgbGV0IG1vdmVEb3duQnRuID0gZ2V0QnV0dG9uKG1vdmVEb3duQnRuVG1wbCk7XHJcblxyXG4gICAgbGV0IGFkZE1lYW5pbmdCdG4gPSBnZXRCdXR0b24oYWRkTWVhbmluZ0J0blRtcGwpO1xyXG4gICAgYWRkTWVhbmluZ0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5MCcpO1xyXG5cclxuICAgIHBhcnRPZlNwZWVjaERpdi5hcHBlbmRDaGlsZChkZWxTcGVlY2hTZWN0aW9uQnRuKTtcclxuICAgIHBhcnRPZlNwZWVjaERpdi5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pO1xyXG4gICAgcGFydE9mU3BlZWNoRGl2LmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKTtcclxuICAgIHBhcnRPZlNwZWVjaERpdi5hcHBlbmRDaGlsZChhZGRNZWFuaW5nQnRuKTtcclxuXHJcbiAgICBhZGRTcGVlY2hTZWN0aW9uRXZlbnRMaXN0ZW5lcnMoc3BlZWNoU2VjdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbnNUb01lYW5pbmcobWVhbmluZ0xpKXtcclxuXHJcbiAgICBsZXQgYWRkU2VudGVuY2VCdG4gPSBnZXRCdXR0b24oYWRkU2VudGVuY2VCdG5UbXBsKTtcclxuICAgIGxldCBkZWxNZWFuaW5nQnRuID0gZ2V0QnV0dG9uKGRlbE1lYW5pbmdCdG5UbXBsKTtcclxuICAgIGxldCBtb3ZlVXBCdG4gPSBnZXRCdXR0b24obW92ZVVwQnRuVG1wbCk7XHJcbiAgICBsZXQgbW92ZURvd25CdG4gPSBnZXRCdXR0b24obW92ZURvd25CdG5UbXBsKTtcclxuICAgIGxldCBtZWFuaW5nTmFtZSA9IG1lYW5pbmdMaS5xdWVyeVNlbGVjdG9yKFwiLmZvcmVpZ24tbWVhbmluZy1uYW1lXCIpO1xyXG4gICAgbWVhbmluZ0xpLmluc2VydEJlZm9yZShtb3ZlRG93bkJ0biwgbWVhbmluZ05hbWUubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgIG1lYW5pbmdMaS5pbnNlcnRCZWZvcmUobW92ZVVwQnRuLCBtZWFuaW5nTmFtZS5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgbWVhbmluZ0xpLmluc2VydEJlZm9yZShkZWxNZWFuaW5nQnRuLCBtZWFuaW5nTmFtZS5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgbWVhbmluZ0xpLmluc2VydEJlZm9yZShhZGRTZW50ZW5jZUJ0biwgbWVhbmluZ05hbWUubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgIGFkZE1lYW5pbmdFdmVudExpc3RlbmVycyhtZWFuaW5nTGkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRCdXR0b25zVG9FeGFtcGxlKGV4YW1wbGUpe1xyXG5cclxuICAgIGxldCBkZWxTZW50ZW5jZUJ0biA9IGdldEJ1dHRvbihkZWxTZW50ZW5jZUJ0blRtcGwpO1xyXG4gICAgbGV0IG1vdmVVcEJ0biA9IGdldEJ1dHRvbihtb3ZlVXBCdG5UbXBsKTtcclxuICAgIGxldCBtb3ZlRG93bkJ0biA9IGdldEJ1dHRvbihtb3ZlRG93bkJ0blRtcGwpO1xyXG5cclxuICAgIGV4YW1wbGUuYXBwZW5kQ2hpbGQoZGVsU2VudGVuY2VCdG4pO1xyXG4gICAgZXhhbXBsZS5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pO1xyXG4gICAgZXhhbXBsZS5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bik7XHJcbiAgICBhZGRFeGFtcGxlRXZlbnRMaXN0ZW5lcnMoZXhhbXBsZSk7XHJcbn1cclxuXHJcbi8vQURESU5HIEVWRU5UIExJU1RFTkVSUyBUTyBFTEVNRU5UU1xyXG5cclxuZnVuY3Rpb24gYWRkU3BlZWNoU2VjdGlvbkV2ZW50TGlzdGVuZXJzKHNwZWVjaFNlY3Rpb24pe1xyXG5cclxuICAgIGxldCBkZWxTcGVlY2hTZWN0aW9uQnRuID0gc3BlZWNoU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLmRlbC1zcGVlY2gtc2VjdGlvbi1idG5cIik7XHJcbiAgICBsZXQgbW92ZVVwQnRuID0gc3BlZWNoU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLm1vdmUtdXAtYnRuXCIpO1xyXG4gICAgbGV0IG1vdmVEb3duQnRuID0gc3BlZWNoU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLm1vdmUtZG93bi1idG5cIik7XHJcbiAgICBsZXQgYWRkTWVhbmluZ0J0biA9IHNwZWVjaFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIi5hZGQtbWVhbmluZy1idG5cIik7XHJcblxyXG4gICAgZGVsU3BlZWNoU2VjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGVsZXRlUGFyZW50T2ZQYXJlbnRFbGVtZW50KTtcclxuICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbW92ZVBhcmVudE9mUGFyZW50RWxlbWVudFVwKTtcclxuICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtb3ZlUGFyZW50T2ZQYXJlbnRFbGVtZW50RG93bik7XHJcbiAgICBhZGRNZWFuaW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRNZWFuaW5nKTtcclxuXHJcbiAgICBzcGVlY2hTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKCk9PntcclxuICAgICAgICBkZWxTcGVlY2hTZWN0aW9uQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHkwJyk7XHJcbiAgICAgICAgbW92ZVVwQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5MFwiKTtcclxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eTBcIik7XHJcbiAgICB9KTtcclxuICAgIHNwZWVjaFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHNwZWVjaFNlY3Rpb24uaGlkZUJ0biA9ICgpPT57XHJcbiAgICAgICAgZGVsU3BlZWNoU2VjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5MCcpO1xyXG4gICAgICAgIG1vdmVVcEJ0bi5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eTBcIik7XHJcbiAgICAgICAgbW92ZURvd25CdG4uY2xhc3NMaXN0LmFkZChcIm9wYWNpdHkwXCIpO1xyXG4gICAgfSk7XHJcbiAgICBkZWxTcGVlY2hTZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKCk9PntcclxuICAgICAgICBzcGVlY2hTZWN0aW9uLmhpZGVCdG4oKTtcclxuICAgICAgICAkKFwiLnRvb2x0aXBcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE1lYW5pbmdFdmVudExpc3RlbmVycyhtZWFuaW5nTGkpe1xyXG5cclxuICAgIGxldCBhZGRTZW50ZW5jZUJ0biA9IG1lYW5pbmdMaS5xdWVyeVNlbGVjdG9yKFwiLmFkZC1zZW50ZW5jZS1idG5cIik7XHJcbiAgICBsZXQgZGVsTWVhbmluZ0J0biA9IG1lYW5pbmdMaS5xdWVyeVNlbGVjdG9yKFwiLmRlbC1tZWFuaW5nLWJ0blwiKTtcclxuICAgIGxldCBtb3ZlVXBCdG4gPSBtZWFuaW5nTGkucXVlcnlTZWxlY3RvcihcIi5tb3ZlLXVwLWJ0blwiKTtcclxuICAgIGxldCBtb3ZlRG93bkJ0biA9IG1lYW5pbmdMaS5xdWVyeVNlbGVjdG9yKFwiLm1vdmUtZG93bi1idG5cIik7XHJcblxyXG4gICAgYWRkU2VudGVuY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFNlbnRlbmNlKTtcclxuICAgIGRlbE1lYW5pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRlbGV0ZVBhcmVudEVsZW1lbnQpO1xyXG4gICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtb3ZlUGFyZW50RWxlbWVudFVwKTtcclxuICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtb3ZlUGFyZW50RWxlbWVudERvd24pO1xyXG5cclxuICAgIG1lYW5pbmdMaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCgpPT57XHJcbiAgICAgICAgYWRkU2VudGVuY2VCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHkwXCIpO1xyXG4gICAgICAgIGRlbE1lYW5pbmdCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHkwXCIpO1xyXG4gICAgICAgIG1vdmVVcEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eTBcIik7XHJcbiAgICAgICAgbW92ZURvd25CdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHkwXCIpO1xyXG4gICAgfSk7XHJcbiAgICBtZWFuaW5nTGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLG1lYW5pbmdMaS5oaWRlQnRuID0gKCk9PntcclxuICAgICAgICBhZGRTZW50ZW5jZUJ0bi5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eTBcIik7XHJcbiAgICAgICAgZGVsTWVhbmluZ0J0bi5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eTBcIik7XHJcbiAgICAgICAgbW92ZVVwQnRuLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5MFwiKTtcclxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eTBcIik7XHJcbiAgICB9KTtcclxuICAgIGRlbE1lYW5pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoKT0+e1xyXG4gICAgICAgIG1lYW5pbmdMaS5oaWRlQnRuKCk7XHJcbiAgICAgICAgJChcIi50b29sdGlwXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFeGFtcGxlRXZlbnRMaXN0ZW5lcnMoZXhhbXBsZSl7XHJcblxyXG4gICAgbGV0IGRlbFNlbnRlbmNlQnRuID0gZXhhbXBsZS5xdWVyeVNlbGVjdG9yKFwiLmRlbC1zZW50ZW5jZS1idG5cIik7XHJcbiAgICBsZXQgbW92ZVVwQnRuID0gZXhhbXBsZS5xdWVyeVNlbGVjdG9yKFwiLm1vdmUtdXAtYnRuXCIpO1xyXG4gICAgbGV0IG1vdmVEb3duQnRuID0gZXhhbXBsZS5xdWVyeVNlbGVjdG9yKFwiLm1vdmUtZG93bi1idG5cIik7XHJcblxyXG4gICAgZGVsU2VudGVuY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRlbGV0ZVBhcmVudEVsZW1lbnQpO1xyXG4gICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtb3ZlUGFyZW50RWxlbWVudFVwKTtcclxuICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxtb3ZlUGFyZW50RWxlbWVudERvd24pO1xyXG5cclxuICAgIGV4YW1wbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoKT0+e1xyXG4gICAgICAgIGRlbFNlbnRlbmNlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5MFwiKTtcclxuICAgICAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHkwXCIpO1xyXG4gICAgICAgIG1vdmVEb3duQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5MFwiKTtcclxuICAgIH0pO1xyXG4gICAgZXhhbXBsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGV4YW1wbGUuaGlkZUJ0biA9ICgpPT57XHJcbiAgICAgICAgZGVsU2VudGVuY2VCdG4uY2xhc3NMaXN0LmFkZChcIm9wYWNpdHkwXCIpO1xyXG4gICAgICAgIG1vdmVVcEJ0bi5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eTBcIik7XHJcbiAgICAgICAgbW92ZURvd25CdG4uY2xhc3NMaXN0LmFkZChcIm9wYWNpdHkwXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGVsU2VudGVuY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoKT0+e1xyXG4gICAgICAgIGV4YW1wbGUuaGlkZUJ0bigpO1xyXG4gICAgICAgICQoXCIudG9vbHRpcFwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbi8vQURESU5HIE5FVyBFTEVNRU5UU1xyXG5mdW5jdGlvbiBhZGRNZWFuaW5nKHdvcmRMaXN0LGVkaXRNZWFuaW5nTmFtZSA9IHRydWUpe1xyXG4gICAgLy9jaGVjayBpZiB3b3JkTGlzdCBpcyBwb2ludGVyRXZlbnQgZnJvbSBjbGlja2VkIGFkZCBtZWFuaW5nIGJ0blxyXG4gICAgaWYod29yZExpc3QucG9pbnRlcklkKXtcclxuICAgICAgICB3b3JkTGlzdCA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWlnbi13b3JkLW9sXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IG1lYW5pbmcgPSBjcmVhdGVNZWFuaW5nKCk7XHJcbiAgICBsZXQgc2VudGVuY2VUYWJsZSA9IGNyZWF0ZVNlbnRlbmNlVGFibGUoKTtcclxuICAgIGFkZFNlbnRlbmNlKHNlbnRlbmNlVGFibGUsIGZhbHNlKTtcclxuICAgIG1lYW5pbmcuYXBwZW5kQ2hpbGQoc2VudGVuY2VUYWJsZSk7XHJcbiAgICB3b3JkTGlzdC5hcHBlbmRDaGlsZChtZWFuaW5nKTtcclxuICAgIGlmKGVkaXRNZWFuaW5nTmFtZSkge1xyXG4gICAgICAgIGxldCBtZWFuaW5nTmFtZSA9IG1lYW5pbmcucXVlcnlTZWxlY3RvcignLmZvcmVpZ24tbWVhbmluZy1uYW1lJyk7XHJcbiAgICAgICAgZWRpdFBocmFzZShtZWFuaW5nTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNlbnRlbmNlKHNlbnRlbmNlVGFibGUsZWRpdFNlbnRlbmNlID0gdHJ1ZSl7XHJcbiAgICAvL2NoZWNrIGlmIHNlbnRlbmNlVGFibGUgaXMgcG9pbnRlckV2ZW50IGZyb20gY2xpY2tlZCBhZGQgc2VudGVuY2UgYnRuXHJcbiAgICBpZihzZW50ZW5jZVRhYmxlLnBvaW50ZXJJZCl7XHJcbiAgICAgICAgc2VudGVuY2VUYWJsZSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc2VudGVuY2UtdGFibGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2VudGVuY2VUciA9IGNyZWF0ZVNlbnRlbmNlVHIoKTtcclxuXHJcbiAgICBsZXQgc2VudGVuY2UgPSBjcmVhdGVFeGFtcGxlU2VudGVuY2UoKTtcclxuICAgIGxldCB0cmFuc2xhdGlvbiA9IGNyZWF0ZUV4YW1wbGVUcmFuc2xhdGlvbigpO1xyXG5cclxuICAgIHNlbnRlbmNlVHIuYXBwZW5kQ2hpbGQoc2VudGVuY2UpO1xyXG4gICAgc2VudGVuY2VUci5hcHBlbmRDaGlsZCh0cmFuc2xhdGlvbik7XHJcbiAgICBzZW50ZW5jZVRhYmxlLmFwcGVuZENoaWxkKHNlbnRlbmNlVHIpO1xyXG5cclxuICAgIGFkZEJ1dHRvbnNUb0V4YW1wbGUoc2VudGVuY2VUcik7XHJcbiAgICBpZihlZGl0U2VudGVuY2UpXHJcbiAgICAgICAgZWRpdFBocmFzZShzZW50ZW5jZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNwZWVjaFNlY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgc3BlZWNoU2VjdGlvbiA9IGNyZWF0ZVNwZWVjaFNlY3Rpb24oKTtcclxuICAgIGxldCBwcmV2aW91c0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwZWVjaC1zZWN0aW9uOmxhc3Qtb2YtdHlwZVwiKSA/PyBvcmlnaW5hbFdvcmQ7XHJcbiAgICBwcmV2aW91c0VsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BlZWNoU2VjdGlvbiwgcHJldmlvdXNFbGVtZW50Lm5leHRFbGVtZW50U2libGluZyk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVFbGVtZW50KHRvRGVsZXRlKXtcclxuICAgIGFkZFVuZG9Ob2RlKCk7XHJcbiAgICBsZXQgcGFyZW50T2ZUb0RlbGV0ZSA9IHRvRGVsZXRlLnBhcmVudE5vZGU7XHJcbiAgICBwYXJlbnRPZlRvRGVsZXRlLnJlbW92ZUNoaWxkKHRvRGVsZXRlKTtcclxuICAgIHBocmFzZURlc2NEaXYudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGVkaXRQaHJhc2VEaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUGFyZW50RWxlbWVudCgpe1xyXG4gICAgZGVsZXRlRWxlbWVudCh0aGlzLnBhcmVudE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQYXJlbnRPZlBhcmVudEVsZW1lbnQoKXtcclxuICAgIGRlbGV0ZUVsZW1lbnQodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlRWxlbWVudFVwKHRvTW92ZSl7XHJcbiAgICBpZih0b01vdmUucHJldmlvdXNFbGVtZW50U2libGluZyAhPT0gbnVsbCAmJiB0b01vdmUucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnModG9Nb3ZlLmNsYXNzTGlzdFswXSkpXHJcbiAgICAgICAgdG9Nb3ZlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRvTW92ZSx0b01vdmUucHJldmlvdXNFbGVtZW50U2libGluZyk7XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGxldCBsYXN0Q2hpbGQgPSB0b01vdmUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGAuJHt0b01vdmUuY2xhc3NMaXN0WzBdfTpsYXN0LW9mLXR5cGVgKTtcclxuICAgICAgICBpZih0b01vdmUgIT09IGxhc3RDaGlsZClcclxuICAgICAgICAgICAgc3dhcEVsZW1lbnRzKHRvTW92ZSxsYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlRWxlbWVudERvd24odG9Nb3ZlKXtcclxuICAgIGlmKHRvTW92ZS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG51bGwgJiYgdG9Nb3ZlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnModG9Nb3ZlLmNsYXNzTGlzdFswXSkpXHJcbiAgICAgICAgdG9Nb3ZlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRvTW92ZS5uZXh0RWxlbWVudFNpYmxpbmcsIHRvTW92ZSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgZmlyc3RDaGlsZCA9IHRvTW92ZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoYC4ke3RvTW92ZS5jbGFzc0xpc3RbMF19YCk7XHJcbiAgICAgICAgaWYodG9Nb3ZlICE9PSBmaXJzdENoaWxkKVxyXG4gICAgICAgICAgICBzd2FwRWxlbWVudHModG9Nb3ZlLGZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlUGFyZW50RWxlbWVudFVwKCkge1xyXG4gICAgbW92ZUVsZW1lbnRVcCh0aGlzLnBhcmVudE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlUGFyZW50RWxlbWVudERvd24oKSB7XHJcbiAgICBtb3ZlRWxlbWVudERvd24odGhpcy5wYXJlbnROb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZVBhcmVudE9mUGFyZW50RWxlbWVudFVwKCkge1xyXG4gICAgbW92ZUVsZW1lbnRVcCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVQYXJlbnRPZlBhcmVudEVsZW1lbnREb3duKCkge1xyXG4gICAgbW92ZUVsZW1lbnREb3duKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN3YXBFbGVtZW50cyhhLGIpIHtcclxuICAgIGxldCBhUGFyZW50ID0gYS5wYXJlbnROb2RlO1xyXG4gICAgbGV0IGJQYXJlbnQgPSBiLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgYUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgYkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgYVBhcmVudC5yZXBsYWNlQ2hpbGQoYUhvbGRlcixhKTtcclxuICAgIGJQYXJlbnQucmVwbGFjZUNoaWxkKGJIb2xkZXIsYik7XHJcblxyXG4gICAgYVBhcmVudC5yZXBsYWNlQ2hpbGQoYixhSG9sZGVyKTtcclxuICAgIGJQYXJlbnQucmVwbGFjZUNoaWxkKGEsYkhvbGRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBocmFzZURpdnMoKXtcclxuICAgIGxldCBwaHJhc2VEaXZzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHBocmFzZUNsYXNzIG9mIHBocmFzZUNsYXNzZXMpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBocmFzZUNsYXNzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIHBocmFzZURpdnMucHVzaChzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwaHJhc2VEaXZzO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJ0T2ZTcGVlY2gocGFydE9mU3BlZWNoKXtcclxuICAgIHBvcy5wYXJ0T2ZTcGVlY2hTdWdnZXN0aW9ucyhwYXJ0T2ZTcGVlY2gpO1xyXG4gICAgcGFydE9mU3BlZWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywoKT0+e1xyXG4gICAgICAgIHBocmFzZURlc2NEaXYudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBlZGl0UGhyYXNlRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgcGhyYXNlRGl2cyA9IGdldFBocmFzZURpdnMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcGhyYXNlRGl2cylcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdwaHJhc2UtY2xpY2snKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQaHJhc2VEaXYocGhyYXNlRGl2KXtcclxuXHJcbiAgICBwaHJhc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoKT0+e1xyXG4gICAgICAgIHBocmFzZURpdi5jbGFzc0xpc3QuYWRkKCdwaHJhc2UtbW91c2VvdmVyJyk7XHJcbiAgICB9KTtcclxuICAgIHBocmFzZURpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsKCk9PntcclxuICAgICAgICBwaHJhc2VEaXYuY2xhc3NMaXN0LnJlbW92ZSgncGhyYXNlLW1vdXNlb3ZlcicpO1xyXG4gICAgfSk7XHJcbiAgICBwaHJhc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgZWRpdFBocmFzZShwaHJhc2VEaXYpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQaHJhc2UocGhyYXNlKXtcclxuXHJcbiAgICBwaHJhc2VEaXZzID0gZ2V0UGhyYXNlRGl2cygpO1xyXG4gICAgZm9yIChjb25zdCBwIG9mIHBocmFzZURpdnMpXHJcbiAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdwaHJhc2UtY2xpY2snKTtcclxuICAgIGVkaXRQaHJhc2VEaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHJcbiAgICBwaHJhc2UuY2xhc3NMaXN0LmFkZCgncGhyYXNlLWNsaWNrJyk7XHJcbiAgICBsZXQgY2xhc3NuYW1lID0gcGhyYXNlLmNsYXNzTGlzdC5pdGVtKDApO1xyXG4gICAgbGV0IHBocmFzZURlc2M7XHJcbiAgICBsZXQgaW5wdXREZXNjID0gXCJcIjtcclxuICAgIHN3aXRjaCAoY2xhc3NuYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnaGVhZGVyLXdvcmQnOlxyXG4gICAgICAgICAgICBwaHJhc2VEZXNjID0gXCJQb2RhaiB3eXJhxbxlbmllLCBrdMOzcmUgamVzdCB0xYJ1bWFjem9uZVwiO1xyXG4gICAgICAgICAgICBpbnB1dERlc2MgPSBcIldwcm93YWTFuiB3eXJhxbxlbmllXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2ZvcmVpZ24tbWVhbmluZy1uYW1lJzpcclxuICAgICAgICAgICAgcGhyYXNlRGVzYyA9IFwiUG9kYWogdMWCdW1hY3plbmllIHd5cmHFvGVuaWFcIjtcclxuICAgICAgICAgICAgaW5wdXREZXNjID0gXCJXcHJvd2FkxbogdMWCdW1hY3plbmllXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2V4YW1wbGUtc2VudGVuY2UnOlxyXG4gICAgICAgICAgICBwaHJhc2VEZXNjID0gXCJQb2RhaiB6ZGFuaWVcIjtcclxuICAgICAgICAgICAgaW5wdXREZXNjID0gXCJXcHJvd2FkxbogemRhbmllXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2V4YW1wbGUtdHJhbnNsYXRpb24nOlxyXG4gICAgICAgICAgICBwaHJhc2VEZXNjID0gXCJQb2RhaiB0xYJ1bWFjemVuaWUgemRhbmlhXCI7XHJcbiAgICAgICAgICAgIGlucHV0RGVzYyA9IFwiV3Byb3dhZMW6IHTFgnVtYWN6ZW5pZVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBwaHJhc2VEZXNjID0gXCJQb2RhaiBmcmF6xJlcIjtcclxuICAgICAgICAgICAgaW5wdXREZXNjID0gXCJXcHJvd2FkxbogZnJhesSZXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcGhyYXNlVGV4dEluLnZhbHVlID0gJyc7XHJcbiAgICBwaHJhc2VUZXh0SW4uZm9jdXMoKTtcclxuICAgIHBocmFzZURlc2NEaXYudGV4dENvbnRlbnQgPSBwaHJhc2VEZXNjO1xyXG5cclxuICAgIGlmKHBocmFzZS50ZXh0Q29udGVudCAhPT0gaW5wdXREZXNjKXtcclxuICAgICAgICBwaHJhc2VUZXh0SW4udmFsdWUgPSBwaHJhc2UudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy93YW50IHRvIHJlbW92ZSBldmVudExpc3RlbnRlcnMgZnJvbSBhcHBseSBlbGVtZW50cyBpbiBvcmRlciB0byBhdm9pZCBpbXBhY3Qgb24gYW5vdGhlciBwaHJhc2VzXHJcbiAgICBwaHJhc2VUZXh0SW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicscGhyYXNlVGV4dEluLmZuKTtcclxuICAgIHBocmFzZUFwcGx5QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwaHJhc2VBcHBseUJ0bi5mbik7XHJcblxyXG4gICAgLy9hcHBseSBwaHJhc2VcclxuICAgIHBocmFzZVRleHRJbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyxwaHJhc2VUZXh0SW4uZm4gPSAoZSk9PntcclxuICAgICAgICBpZihlLmtleUNvZGUgPT09IDEzKXtcclxuICAgICAgICAgICAgYXBwbHlQaHJhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHBocmFzZUFwcGx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxwaHJhc2VBcHBseUJ0bi5mbiA9IGFwcGx5UGhyYXNlKTtcclxuXHJcbiAgICAvL2NhbmNlbCBwaHJhc2VcclxuICAgIHBocmFzZUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBwaHJhc2UuY2xhc3NMaXN0LnJlbW92ZSgncGhyYXNlLWNsaWNrJyk7XHJcbiAgICAgICAgcGhyYXNlRGVzY0Rpdi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGVkaXRQaHJhc2VEaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gYXBwbHlQaHJhc2UoKXtcclxuICAgICAgICBhZGRVbmRvTm9kZSgpO1xyXG4gICAgICAgIGlmKHBocmFzZVRleHRJbi52YWx1ZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgcGhyYXNlLmlubmVySFRNTCA9IGA8aT4ke2lucHV0RGVzY308L2k+YDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHBocmFzZS50ZXh0Q29udGVudCA9IHBocmFzZVRleHRJbi52YWx1ZTtcclxuXHJcbiAgICAgICAgcGhyYXNlLmNsYXNzTGlzdC5yZW1vdmUoJ3BocmFzZS1jbGljaycpO1xyXG4gICAgICAgIHBocmFzZURlc2NEaXYudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBlZGl0UGhyYXNlRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgaWYoY2xhc3NuYW1lID09PSAnaGVhZGVyLXdvcmQnKXtcclxuICAgICAgICAgICAgY2hlY2tXb3JkRXhpc3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJ0c09mU3BlZWNoT3JkZXIoKXtcclxuICAgIGxldCBwYXJ0c09mU3BlZWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtb2Ytc3BlZWNoJyk7XHJcbiAgICBsZXQgcGFydHNPZlNwZWVjaE9yZGVyID0gJyc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8cGFydHNPZlNwZWVjaC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYoaSA8IHBhcnRzT2ZTcGVlY2gubGVuZ3RoLTEpXHJcbiAgICAgICAgICAgIHBhcnRzT2ZTcGVlY2hPcmRlciArPSBgJHtwYXJ0c09mU3BlZWNoW2ldLnZhbHVlfSxgO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcGFydHNPZlNwZWVjaE9yZGVyICs9IGAke3BhcnRzT2ZTcGVlY2hbaV0udmFsdWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJ0c09mU3BlZWNoT3JkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdvcmRKc29uKCkge1xyXG5sZXQgd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXdvcmRcIik7XHJcbmxldCBzcGVlY2hTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3BlZWNoLXNlY3Rpb25cIik7XHJcblxyXG5sZXQganNvblN0ciA9IGB7IFwid29yZFwiOiBcIiR7d29yZC50ZXh0Q29udGVudH1cIiwgXCJzcGVlY2hTZWN0aW9uXCI6IHtgO1xyXG5cclxuLy9hZGRpbmcgcGFydCBvZiBzcGVlY2ggc2VjdGlvbnNcclxuZm9yIChsZXQgc3AgPSAwOyBzcCA8IHNwZWVjaFNlY3Rpb25zLmxlbmd0aDsgc3ArKyl7XHJcbiAgICBsZXQgb3JkZXIgPSAwO1xyXG4gICAganNvblN0ciArPSBgXCIke3NwfVwiOiB7YDtcclxuICAgIGxldCBwYXJ0T2ZTcGVlY2ggPSBzcGVlY2hTZWN0aW9uc1tzcF0ucXVlcnlTZWxlY3RvcihcIi5wYXJ0LW9mLXNwZWVjaFwiKTtcclxuXHJcbiAgICAvL2FkZGluZyBwYXJ0IG9mIHNwZWVjaFxyXG4gICAganNvblN0ciArPSBgXCJwYXJ0T2ZTcGVlY2hcIjogXCIke3BhcnRPZlNwZWVjaC52YWx1ZX1cIiwgXCJtZWFuaW5nc1wiOntgO1xyXG5cclxuICAgIC8vYWRkaW5nIG1lYW5pbmdzXHJcbiAgICBsZXQgZWRpdFdvcmRPbCA9IHNwZWVjaFNlY3Rpb25zW3NwXS5xdWVyeVNlbGVjdG9yKFwiLmZvcmVpZ24td29yZC1vbFwiKTtcclxuICAgIGxldCBtZWFuaW5nc0xpID0gZWRpdFdvcmRPbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVpZ24tbWVhbmluZy1saVwiKTtcclxuICAgIGZvciAobGV0IG09MDsgbTxtZWFuaW5nc0xpLmxlbmd0aDsgbSsrKXtcclxuICAgICAgICBqc29uU3RyICs9IGBcIiR7bX1cIjp7YDtcclxuICAgICAgICBsZXQgbWVhbmluZ05hbWUgPSBtZWFuaW5nc0xpW21dLnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWlnbi1tZWFuaW5nLW5hbWVcIik7XHJcbiAgICAgICAganNvblN0ciArPSBgXCJpZFwiOiBcIiR7bWVhbmluZ3NMaVttXS5pZH1cIixgO1xyXG4gICAgICAgIGpzb25TdHIgKz0gYFwibWVhbmluZ05hbWVcIjogXCIke21lYW5pbmdOYW1lLnRleHRDb250ZW50LnRyaW0oKX1cIixcImV4YW1wbGVzXCI6e2A7XHJcblxyXG4gICAgICAgIC8vYWRkaW5nIGV4YW1wbGVzIHdpdGggdHJhbnNsYXRpb25cclxuICAgICAgICBsZXQgZXhhbXBsZXMgPSBtZWFuaW5nc0xpW21dLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VudGVuY2UtdHJcIik7XHJcbiAgICAgICAgZm9yKGxldCBlPTA7IGU8ZXhhbXBsZXMubGVuZ3RoOyBlKyspe1xyXG4gICAgICAgICAgICBsZXQgc2VudGVuY2UgPSBleGFtcGxlc1tlXS5xdWVyeVNlbGVjdG9yKFwiLmV4YW1wbGUtc2VudGVuY2VcIik7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvbiA9IGV4YW1wbGVzW2VdLnF1ZXJ5U2VsZWN0b3IoXCIuZXhhbXBsZS10cmFuc2xhdGlvblwiKTtcclxuICAgICAgICAgICAganNvblN0ciArPSBgXCIke2V9XCI6IHsgXCJzZW50ZW5jZVwiOlwiJHtzZW50ZW5jZS50ZXh0Q29udGVudH1cIixcInRyYW5zbGF0aW9uXCI6XCIke3RyYW5zbGF0aW9uLnRleHRDb250ZW50fVwiYDtcclxuICAgICAgICAgICAgLy9jb21tYSBmb3IgZW5kIG9mIGV4YW1wbGVcclxuICAgICAgICAgICAganNvblN0ciArPSBlIDwgZXhhbXBsZXMubGVuZ3RoLTEgPyAnfSwnIDogJ30nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2Nsb3NpbmcgYWxsIGV4YW1wbGVzXHJcbiAgICAgICAganNvblN0ciArPSAnfSwnO1xyXG4gICAgICAgIC8vYWRkaW5nIG1lYW5pbmcgb3JkZXJcclxuICAgICAgICBqc29uU3RyICs9IGBcIm9yZGVyXCI6XCIkeysrb3JkZXJ9XCJgO1xyXG4gICAgICAgIC8vY29tbWEgZm9yIGVuZCBvZiBtZWFuaW5nXHJcbiAgICAgICAganNvblN0ciArPSBtIDwgbWVhbmluZ3NMaS5sZW5ndGgtMSA/ICd9LCcgOiAnfSc7XHJcbiAgICB9XHJcbiAgICAvL2Nsb3NpbmcgYWxsIG1lYW5pbmdzXHJcbiAgICBqc29uU3RyICs9ICd9JztcclxuICAgIC8vY29tbWEgZm9yIGVuZCBvZiBtZWFuaW5nIHNwZWVjaCBzZWN0aW9uXHJcbiAgICBqc29uU3RyICs9IHNwIDwgc3BlZWNoU2VjdGlvbnMubGVuZ3RoLTEgPyAnfSwnOiAnfSc7XHJcbn1cclxuLy9jbG9zaW5nIGFsbCBzcGVlY2ggc2VjdGlvbnNcclxuICAgIGpzb25TdHIgKz0gJ30sJztcclxuLy9hZGRpbmcgcGFydHMgb2Ygc3BlZWNoIG9yZGVyXHJcbiAgICBqc29uU3RyICs9IGBcInBhcnRzT2ZTcGVlY2hPcmRlclwiOiBcIiR7Z2V0UGFydHNPZlNwZWVjaE9yZGVyKCl9XCIsYDtcclxuLy9hZGRpbmcgcm9vdCB3b3JkXHJcbiAgICBqc29uU3RyICs9IGBcInJvb3RXb3JkXCI6ICR7cm9vdFdvcmQgPyAnXCInK3Jvb3RXb3JkKydcIic6cm9vdFdvcmR9LGA7XHJcbi8vYWRkaW5nIG1lYW5pbmdzIGlkIHRvIGRlbGV0ZVxyXG4gICAganNvblN0ciArPSBgXCJ0b0RlbGV0ZU1lYW5pbmdzSWRcIjogJHtnZXRNZWFuaW5nc0lkVG9EZWxldGUoKX0sYDtcclxuLy9hZGRpbmcgcGFydHMgb2Ygc3BlZWNoIGNzdiBzdHJpbmdcclxuICAgIGpzb25TdHIgKz0gYFwicGFydHNPZlNwZWVjaENzdlwiOiBcIiR7cG9zLmdldFBhcnRzT2ZTcGVlY2hDc3YoKX1cImA7XHJcbi8vY2xvc2luZyB3b3JkIGpzb25cclxuICAgIGpzb25TdHIgKz0gJ30nO1xyXG5cclxuXHJcbiBjb25zb2xlLmxvZyhqc29uU3RyKTtcclxuXHJcbiBsZXQganNvbiA9IEpTT04ucGFyc2UoanNvblN0cik7XHJcbiBjb25zb2xlLmxvZyhqc29uKTtcclxucmV0dXJuIGpzb25TdHI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yRW1wdHlFbGVtZW50cygpe1xyXG5cclxuICAgIGxldCBwYXJ0c09mU3BlZWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYXJ0LW9mLXNwZWVjaFwiKTtcclxuICAgIGZvciAoY29uc3QgcG9zIG9mIHBhcnRzT2ZTcGVlY2gpIHtcclxuICAgICAgICBpc0Vycm9yLmVtcHR5UG9zRXJyb3IgPSBwb3MudmFsdWUudHJpbSgpID09PSBcIlwiO1xyXG4gICAgfVxyXG4gICAgbGV0IHBocmFzZURpdnMgPSBnZXRQaHJhc2VEaXZzKCk7XHJcbiAgICBmb3IgKGNvbnN0IHBocmFzZURpdiBvZiBwaHJhc2VEaXZzKSB7XHJcbiAgICAgICAgbGV0IGNsYXNzbmFtZSA9IHBocmFzZURpdi5jbGFzc0xpc3QuaXRlbSgwKTtcclxuICAgICAgICBsZXQgb3JnRGVzYztcclxuICAgICAgICBzd2l0Y2ggKGNsYXNzbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdoZWFkZXItd29yZCc6XHJcbiAgICAgICAgICAgICAgICBvcmdEZXNjID0gXCJXcHJvd2Fkxbogd3lyYcW8ZW5pZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZvcmVpZ24tbWVhbmluZy1uYW1lJzpcclxuICAgICAgICAgICAgICAgIG9yZ0Rlc2MgPSBcIldwcm93YWTFuiB0xYJ1bWFjemVuaWVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdleGFtcGxlLXNlbnRlbmNlJzpcclxuICAgICAgICAgICAgICAgIG9yZ0Rlc2MgPSBcIldwcm93YWTFuiB6ZGFuaWVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdleGFtcGxlLXRyYW5zbGF0aW9uJzpcclxuICAgICAgICAgICAgICAgIG9yZ0Rlc2MgPSBcIldwcm93YWTFuiB0xYJ1bWFjemVuaWVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgb3JnRGVzYyA9IFwiV3Byb3dhZMW6IGZyYXrEmVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwaHJhc2VEaXYudGV4dENvbnRlbnQgPT09IG9yZ0Rlc2Mpe1xyXG4gICAgICAgICAgICBpc0Vycm9yLmVtcHR5RXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNFcnJvci5lbXB0eUVycm9yID0gZmFsc2U7XHJcblxyXG59XHJcbmZ1bmN0aW9uIGdldE1lYW5pbmdzSWRUb0RlbGV0ZSgpe1xyXG4gICAgbGV0IGN1cnJlbnRNZWFuaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlaWduLW1lYW5pbmctbGknKTtcclxuICAgIGxldCBjdXJyZW50TWVhbmluZ3NJZCA9IFtdXHJcbiAgICBsZXQgZWFybHlNZWFuaW5nc0lkID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBtZWFuaW5nIG9mIG1lYW5pbmdzTGkpIHtcclxuICAgICAgICBlYXJseU1lYW5pbmdzSWQucHVzaChtZWFuaW5nLmlkKTtcclxuICAgIH1cclxuICAgICBmb3IgKGNvbnN0IG1lYW5pbmcgb2YgY3VycmVudE1lYW5pbmdzKSB7XHJcbiAgICAgICAgIGN1cnJlbnRNZWFuaW5nc0lkLnB1c2gobWVhbmluZy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRvRGVsZXRlID0gZWFybHlNZWFuaW5nc0lkLmZpbHRlcigoZWwpPT57XHJcbiAgICAgICAgIHJldHVybiAhY3VycmVudE1lYW5pbmdzSWQuaW5jbHVkZXMoZWwpO1xyXG4gICAgIH0pO1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRvRGVsZXRlKTtcclxufVxyXG5cclxubGV0IGlzU3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlV29yZCgpe1xyXG4gICAgbGV0IHdvcmRKc29uO1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHdvcmRKc29uID0gZ2V0V29yZEpzb24oKTtcclxuICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgYWxlcnQoJ1BvcHJhdyBixYLEmWR5IHNlbWFudHljem5lJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRm9yRW1wdHlFbGVtZW50cygpO1xyXG4gICAgaWYoT2JqZWN0LnZhbHVlcyhpc0Vycm9yKS5pbmNsdWRlcyh0cnVlKSl7XHJcbiAgICAgICAgYWxlcnQoJ1d5cGXFgm5paiB3c3p5c3RraWUgcG9sYScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcm9vdFdvcmRFeGlzdHMgPSBhd2FpdCByb290d29yZC5jaGVja1Jvb3RXb3JkRXhpc3RzKHJvb3RXb3JkKTtcclxuICAgIGxldCByb290V29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb290LXdvcmQtaW5wdXRcIik7XHJcbiAgICBpZighcm9vdFdvcmRFeGlzdHMgJiYgcm9vdFdvcmRJbnB1dC52YWx1ZS5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCFjb25maXJtKFwiUG9kYW5hIHBvZHN0YXdhIHPFgm93b3R3w7NyY3phIHpvc3RhbmllIHN0d29yem9uYS4gQ3p5IGNoY2VzeiBrb250eW51b3dhxIc/XCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGFkZGluZ1Jvb3RXb3JkU3VjY2VlZCA9IGF3YWl0IHJvb3R3b3JkLmFkZFJvb3RXb3JkKHJvb3RXb3JkKTtcclxuICAgICAgICBpZighYWRkaW5nUm9vdFdvcmRTdWNjZWVkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdEb2Rhd2FuaWUgcG9kc3Rhd3kgc8WCb3dvdHfDs3J6Y3plaiBOSUUgcG93aW9kxYJvIHNpxJknKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCB3b3JkTmFtZUluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3JkX25hbWVcIik7XHJcbiAgICBsZXQgd29yZE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci13b3JkXCIpO1xyXG4gICAgd29yZE5hbWVJbi52YWx1ZSA9IHdvcmROYW1lLnRleHRDb250ZW50O1xyXG5cclxuICAgIGxldCB3b3JkSnNvbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3JkX2pzb25cIik7XHJcbiAgICB3b3JkSnNvbkluLnZhbHVlID0gd29yZEpzb247XHJcblxyXG4gICAgaWYoIWlzU3VibWl0dGVkKSB7XHJcbiAgICAgICAgJChcImZvcm1bbmFtZT0nd29yZCddXCIpLnN1Ym1pdCgpO1xyXG4gICAgICAgIGlzU3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVW5kb05vZGUoKXtcclxuICAgIGxldCBlZGl0V29yZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtd29yZC1zZWN0aW9uXCIpO1xyXG4gICAgdW5kb05vZGVzLnB1c2goZWRpdFdvcmRTZWN0aW9uLmNsb25lTm9kZSh0cnVlKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZG9DaGFuZ2VzKCl7XHJcbiAgICBpZih1bmRvTm9kZXMubGVuZ3RoKXtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRFZGl0V29yZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtd29yZC1zZWN0aW9uXCIpO1xyXG4gICAgICAgIHBhcmVudEVkaXRXb3JkU2VjdGlvbi5yZW1vdmVDaGlsZChjdXJyZW50RWRpdFdvcmRTZWN0aW9uKTtcclxuXHJcbiAgICAgICAgbGV0IHRvVW5kb1NlY3Rpb24gPSB1bmRvTm9kZXMucG9wKCk7XHJcbiAgICAgICAgcGFyZW50RWRpdFdvcmRTZWN0aW9uLmluc2VydEJlZm9yZSh0b1VuZG9TZWN0aW9uLCBuZXh0U2libGluZ0VkaXRXb3JkU2VjdGlvbik7XHJcblxyXG4gICAgICAgIGxldCBzcGVlY2hTZWN0aW9ucyA9IHRvVW5kb1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbChcIi5zcGVlY2gtc2VjdGlvblwiKTtcclxuICAgICAgICBsZXQgbWVhbmluZ3NMaSA9IHRvVW5kb1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlaWduLW1lYW5pbmctbGlcIik7XHJcbiAgICAgICAgbGV0IGV4YW1wbGVzID0gdG9VbmRvU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbnRlbmNlLXRyXCIpO1xyXG4gICAgICAgIGxldCBwYXJ0c09mU3BlZWNoID0gdG9VbmRvU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhcnQtb2Ytc3BlZWNoXCIpO1xyXG4gICAgICAgIGxldCBwaHJhc2VEaXZzID0gZ2V0UGhyYXNlRGl2cygpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHNwIG9mIHNwZWVjaFNlY3Rpb25zKVxyXG4gICAgICAgICAgICBhZGRTcGVlY2hTZWN0aW9uRXZlbnRMaXN0ZW5lcnMoc3ApO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG1MaSBvZiBtZWFuaW5nc0xpKVxyXG4gICAgICAgICAgICBhZGRNZWFuaW5nRXZlbnRMaXN0ZW5lcnMobUxpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlIG9mIGV4YW1wbGVzKVxyXG4gICAgICAgICAgICBhZGRFeGFtcGxlRXZlbnRMaXN0ZW5lcnMoZSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHBhcnRzT2ZTcGVlY2gpXHJcbiAgICAgICAgICAgIHVwZGF0ZVBhcnRPZlNwZWVjaChwb3MpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHBocmFzZURpdiBvZiBwaHJhc2VEaXZzKVxyXG4gICAgICAgICAgICB1cGRhdGVQaHJhc2VEaXYocGhyYXNlRGl2KTtcclxuICAgIH1cclxuICAgIHBocmFzZURpdnMgPSBnZXRQaHJhc2VEaXZzKCk7XHJcbiAgICBmb3IgKGNvbnN0IHAgb2YgcGhyYXNlRGl2cylcclxuICAgICAgICBwLmNsYXNzTGlzdC5yZW1vdmUoJ3BocmFzZS1jbGljaycpO1xyXG59XHJcblxyXG5sZXQgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZS1tZWFuaW5nLWJ0blwiKTtcclxuXHJcbnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZ2V0V29yZEpzb24pO1xyXG5zYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzYXZlV29yZCk7XHJcbmFkZFNwZWVjaFNlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFNwZWVjaFNlY3Rpb24pO1xyXG51bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx1bmRvQ2hhbmdlcyk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja1dvcmRFeGlzdHMoKXtcclxuICAgIGxldCB3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci13b3JkJyk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtSb3V0aW5nLmdlbmVyYXRlKCdjaGVja2V4aXN0Jyl9P3dvcmROYW1lPSR7d29yZC50ZXh0Q29udGVudH1gKTtcclxuICAgIGxldCBleGlzdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBsZXQgd29yZEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmQtZXhpc3RzJyk7XHJcbiAgICBpZihleGlzdHMgJiYgKHdvcmQudGV4dENvbnRlbnQgIT09IG9yaWdpbmFsV29yZE5hbWUpKXtcclxuICAgICAgICBpc0Vycm9yLndvcmRFcnJvciA9IHRydWU7XHJcbiAgICAgICAgaWYoIXdvcmRFcnJvcil7XHJcbiAgICAgICAgICAgIHdvcmRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB3b3JkRXJyb3IuY2xhc3NMaXN0LmFkZCgnZWRpdC1lcnJvcicsICd3b3JkLWV4aXN0cycpO1xyXG4gICAgICAgICAgICB3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnUG9kYW5lIHd5cmHFvGVuaWUganXFvCBpc3RuaWVqZSc7XHJcbiAgICAgICAgICAgIHdvcmQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod29yZEVycm9yLCB3b3JkLm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaXNFcnJvci53b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBpZih3b3JkRXJyb3IpXHJcbiAgICAgICAgICAgIHdvcmRFcnJvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHdvcmRFcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiByb290V29yZHNIYW5kbGUoKXtcclxuICAgIGxldCByb290V29yZFN1Z2dlc3Rpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvb3Qtd29yZC1zdWdnZXN0aW9uLWRpdlwiKTtcclxuICAgIGxldCByb290V29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb290LXdvcmQtaW5wdXRcIik7XHJcbiAgICBsZXQgcm9vdFdvcmRTdWdnZXN0aW9uVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvb3Qtd29yZC1zdWdnZXN0aW9uLXVsXCIpO1xyXG5cclxuICAgIHN1Z2dlc3Rpb25zRXZlbnRzLnN1Z2dlc3Rpb25zU2Nyb2xsZXIocm9vdFdvcmRJbnB1dCwgcm9vdFdvcmRTdWdnZXN0aW9uVWwpO1xyXG5cclxuICAgIHJvb3RXb3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAocm9vdFdvcmRJbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJvb3RXb3JkU3VnZ2VzdGlvbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgbGV0IHJvb3RXb3JkcyA9IGF3YWl0IHJvb3R3b3JkLmdldFJvb3RXb3Jkc0ZvckF1dG9jb21wbGV0ZShyb290V29yZElucHV0LnZhbHVlLCByb290V29yZFN1Z2dlc3Rpb25VbCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJvb3RXb3JkIG9mIHJvb3RXb3Jkcykge1xyXG4gICAgICAgICAgICAgICAgcm9vdFdvcmRTdWdnZXN0aW9uVWwuaW5uZXJIVE1MICs9IGA8bGk+JHtyb290V29yZH08L2xpPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJvb3RXb3JkU3VnZ2VzdGlvbkxpID0gcm9vdFdvcmRTdWdnZXN0aW9uVWwucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpIG9mIHJvb3RXb3JkU3VnZ2VzdGlvbkxpKSB7XHJcbiAgICAgICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RXb3JkSW5wdXQudmFsdWUgPSBsaS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICByb290V29yZFN1Z2dlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdWdnZXN0aW9uc0V2ZW50cy5zdWdnZXN0aW9uc01vdXNlRXZlbnRzKHJvb3RXb3JkU3VnZ2VzdGlvblVsKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcm9vdFdvcmRTdWdnZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKFwiLnJvb3Qtd29yZC1lZGl0LWRpditzcGFuXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJvb3RXb3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGFzeW5jICgpPT57XHJcbiAgICAgICAgJChcIi5yb290LXdvcmQtZWRpdC1kaXYrc3BhblwiKS5yZW1vdmUoKTtcclxuICAgICAgICByb290V29yZFN1Z2dlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgaWYgKHJvb3RXb3JkSW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByb290V29yZCA9IHJvb3RXb3JkSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCByb290V29yZEV4aXN0cyA9IGF3YWl0IHJvb3R3b3JkLmNoZWNrUm9vdFdvcmRFeGlzdHMocm9vdFdvcmQpO1xyXG4gICAgICAgICAgICBsZXQgcm9vdFdvcmRJbmZvU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBsZXQgcm9vdFdvcmRJbmZvU3Bhbk1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGxldCByb290V29yZEluZm9TcGFuQ2xhc3M7XHJcbiAgICAgICAgICAgIGlmIChyb290V29yZEV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgcm9vdFdvcmRJbmZvU3Bhbk1lc3NhZ2UgPSAnWm5hbGV6aW9ubyBwb2RzdGF3xJknO1xyXG4gICAgICAgICAgICAgICAgcm9vdFdvcmRJbmZvU3BhbkNsYXNzID0gJ3Jvb3Qtd29yZC1mb3VuZC1zcGFuJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvb3RXb3JkSW5mb1NwYW5NZXNzYWdlID0gJ05pZSB6bmFsZXppb25vIHBvZHN0YXd5JztcclxuICAgICAgICAgICAgICAgIHJvb3RXb3JkSW5mb1NwYW5DbGFzcyA9ICdyb290LXdvcmQtbm90LWZvdW5kLXNwYW4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvb3RXb3JkSW5mb1NwYW4udGV4dENvbnRlbnQgPSByb290V29yZEluZm9TcGFuTWVzc2FnZTtcclxuICAgICAgICAgICAgcm9vdFdvcmRJbmZvU3Bhbi5jbGFzc0xpc3QuYWRkKHJvb3RXb3JkSW5mb1NwYW5DbGFzcyk7XHJcbiAgICAgICAgICAgIHJvb3RXb3JkSW5wdXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHJvb3RXb3JkSW5mb1NwYW4pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcm9vdFdvcmQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbnJvb3RXb3Jkc0hhbmRsZSgpO1xyXG5cclxuXHJcbiQod2luZG93KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoXCJib2R5XCIpLm9uKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGtleVByZXNzZWQgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmIChrZXlQcmVzc2VkID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIlxyXG5hc3luYyBmdW5jdGlvbiBnZXRSb290V29yZHNGb3JBdXRvY29tcGxldGUocSwgZWxlbWVudFRvQ2xlYXIgPSBmYWxzZSl7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtSb3V0aW5nLmdlbmVyYXRlKCdhdXRvY29tcGxldGVfcm9vdHdvcmRzJyl9P3E9JHtxfWApO1xyXG4gICAgbGV0IHJvb3RXb3JkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmKGVsZW1lbnRUb0NsZWFyKXtcclxuICAgICAgICBlbGVtZW50VG9DbGVhci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJvb3RXb3Jkcy5zb3J0KGZ1bmN0aW9uIChhLGIpe1xyXG4gICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJvb3RXb3JkcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tSb290V29yZEV4aXN0cyhuYW1lKXtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1JvdXRpbmcuZ2VuZXJhdGUoJ3Jvb3Rfd29yZF9jaGVja2V4aXN0Jyl9P25hbWU9JHtuYW1lfWApO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkUm9vdFdvcmQobmFtZSl7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9yb290X3dvcmRfYWRkJyl9P25hbWU9JHtuYW1lfWApO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IHtnZXRSb290V29yZHNGb3JBdXRvY29tcGxldGUsIGNoZWNrUm9vdFdvcmRFeGlzdHMsIGFkZFJvb3RXb3JkfSJdLCJzb3VyY2VSb290IjoiIn0=