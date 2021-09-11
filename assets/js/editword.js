import * as pos from './part_of_speech.js';
import * as rootword from './root_word.js';
import * as suggestionsEvents from './suggestions_events.js';

let originalWord = document.querySelector(".header-word");
let originalWordName = originalWord.textContent;
let addSentenceBtnTmpl = document.querySelector(".add-sentence-btn");
let delSentenceBtnTmpl = document.querySelector(".del-sentence-btn");
let delMeaningBtnTmpl = document.querySelector(".del-meaning-btn");
let delSpeechSectionBtnTmpl = document.querySelector(".del-speech-section-btn");
let moveUpBtnTmpl = document.querySelector(".move-up-btn");
let moveDownBtnTmpl = document.querySelector(".move-down-btn");
let addMeaningBtnTmpl = document.querySelector(".add-meaning-btn");

let partsOfSpeech = document.querySelectorAll(".part-of-speech");
let meaningsLi = document.querySelectorAll(".foreign-meaning-li");
let examples = document.querySelectorAll(".sentence-tr");
let speechSections = document.querySelectorAll(".speech-section");
let editWordSection = document.querySelector(".edit-word-section");
let parentEditWordSection = editWordSection.parentNode;
let nextSiblingEditWordSection = editWordSection.nextElementSibling;
let editPhraseDiv = document.querySelector(".edit-phrase-div1");
let phraseDescDiv = document.querySelector(".edit-phrase-desc");
let phraseTextIn = document.querySelector("#phrase-text-in");
let phraseApplyBtn = document.querySelector("#edit-phrase-apply");
let phraseCancelBtn = document.querySelector("#edit-phrase-cancel");
let addSpeechSectionBtn = document.querySelector(".add-speech-section-btn");
let undoBtn = document.querySelector(".undo-btn");

let phraseClasses = ['.header-word','.foreign-meaning-name','.example-sentence','.example-translation'];
let undoNodes = [];
let rootWordInputValue = document.querySelector('.root-word-input').value;
let rootWord = rootWordInputValue.length > 0 ? rootWordInputValue : null;

//enter updates
for (const e of examples) {
    addButtonsToExample(e);

}
for (const mli of meaningsLi) {
    addButtonsToMeaning(mli);
}
for (const sp of speechSections) {
    addButtonsToSpeechSection(sp);
}
for(const pos of partsOfSpeech){
    updatePartOfSpeech(pos);
}
let phraseDivs = getPhraseDivs();
for (const phraseDiv of phraseDivs) {
    updatePhraseDiv(phraseDiv);
}

function getButton(template){
    let btn = template.cloneNode(true);
    btn.classList.remove('hidden');
    btn.classList.add('opacity0');
    return btn;
}

//CREATING ELEMENTS
function createSentenceTable(){
    let sentenceTable = document.createElement("table");
    sentenceTable.classList.add('sentence-table');
    return sentenceTable;
}
function createSentenceTr(){
    let sentenceTr = document.createElement("tr");
    sentenceTr.classList.add("sentence-tr");
    return sentenceTr;
}
function createExampleSentence(){
    let sentence = document.createElement("td");
    sentence.classList.add("example-sentence");
    sentence.innerHTML = "<i>Wprowadź zdanie</i>";
    updatePhraseDiv(sentence);
    return sentence;
}

function createExampleTranslation(){
    let translation = document.createElement("td");
    translation.classList.add("example-translation");
    translation.innerHTML = "<i>Wprowadź tłumaczenie</i>";
    updatePhraseDiv(translation);
    return translation;
}

function createMeaning(){
    let meaningLi = document.createElement("li");
    meaningLi.classList.add("foreign-meaning-li");
    let meaningName = document.createElement("div");
    meaningName.classList.add("foreign-meaning-name");
    meaningName.innerHTML = "<i>Wprowadź tłumaczenie</i>";
    meaningLi.appendChild(meaningName);
    updatePhraseDiv(meaningName);
    addButtonsToMeaning(meaningLi);

    return meaningLi;
}

function createSpeechSection(){

    let speechSection = document.createElement("div");
    speechSection.classList.add("speech-section");
    speechSection.innerHTML = `<div class="part-of-speech-div">
                            <div class="part-of-speech-input-div">
                                <input class="part-of-speech" placeholder="Wprowadź część mowy">                    <div class="pos-suggestion-div hidden">
                                    <ul class="pos-suggestion-ul suggestions-ul">
                                    </ul>
                            </div></div></div>
                    <ol class="foreign-word-ol"></ol>`;

    addButtonsToSpeechSection(speechSection);

    let wordList = speechSection.querySelector('.foreign-word-ol');

    addMeaning(wordList,false);
    let partOfSpeech = speechSection.querySelector('.part-of-speech');
    updatePartOfSpeech(partOfSpeech);
    return speechSection;
}

//ADDING BUTTONS TO ELEMENTS
function addButtonsToSpeechSection(speechSection){

    let partOfSpeechDiv = speechSection.querySelector('.part-of-speech-div');
    let delSpeechSectionBtn = getButton(delSpeechSectionBtnTmpl);

    let moveUpBtn = getButton(moveUpBtnTmpl);
    let moveDownBtn = getButton(moveDownBtnTmpl);

    let addMeaningBtn = getButton(addMeaningBtnTmpl);
    addMeaningBtn.classList.remove('opacity0');

    partOfSpeechDiv.appendChild(delSpeechSectionBtn);
    partOfSpeechDiv.appendChild(moveUpBtn);
    partOfSpeechDiv.appendChild(moveDownBtn);
    partOfSpeechDiv.appendChild(addMeaningBtn);

    addSpeechSectionEventListeners(speechSection);
}

function addButtonsToMeaning(meaningLi){

    let addSentenceBtn = getButton(addSentenceBtnTmpl);
    let delMeaningBtn = getButton(delMeaningBtnTmpl);
    let moveUpBtn = getButton(moveUpBtnTmpl);
    let moveDownBtn = getButton(moveDownBtnTmpl);
    let meaningName = meaningLi.querySelector(".foreign-meaning-name");
    meaningLi.insertBefore(moveDownBtn, meaningName.nextElementSibling);
    meaningLi.insertBefore(moveUpBtn, meaningName.nextElementSibling);
    meaningLi.insertBefore(delMeaningBtn, meaningName.nextElementSibling);
    meaningLi.insertBefore(addSentenceBtn, meaningName.nextElementSibling);
    addMeaningEventListeners(meaningLi);
}

function addButtonsToExample(example){

    let delSentenceBtn = getButton(delSentenceBtnTmpl);
    let moveUpBtn = getButton(moveUpBtnTmpl);
    let moveDownBtn = getButton(moveDownBtnTmpl);

    example.appendChild(delSentenceBtn);
    example.appendChild(moveUpBtn);
    example.appendChild(moveDownBtn);
    addExampleEventListeners(example);
}

//ADDING EVENT LISTENERS TO ELEMENTS

function addSpeechSectionEventListeners(speechSection){

    let delSpeechSectionBtn = speechSection.querySelector(".del-speech-section-btn");
    let moveUpBtn = speechSection.querySelector(".move-up-btn");
    let moveDownBtn = speechSection.querySelector(".move-down-btn");
    let addMeaningBtn = speechSection.querySelector(".add-meaning-btn");

    delSpeechSectionBtn.addEventListener('click',deleteParentOfParentElement);
    moveUpBtn.addEventListener('click',moveParentOfParentElementUp);
    moveDownBtn.addEventListener('click',moveParentOfParentElementDown);
    addMeaningBtn.addEventListener('click',addMeaning);

    speechSection.addEventListener('mouseover',()=>{
        delSpeechSectionBtn.classList.remove('opacity0');
        moveUpBtn.classList.remove("opacity0");
        moveDownBtn.classList.remove("opacity0");
    });
    speechSection.addEventListener('mouseout',speechSection.hideBtn = ()=>{
        delSpeechSectionBtn.classList.add('opacity0');
        moveUpBtn.classList.add("opacity0");
        moveDownBtn.classList.add("opacity0");
    });
    delSpeechSectionBtn.addEventListener('mousedown',()=>{
        speechSection.hideBtn();
        $(".tooltip").hide();
    });
}

function addMeaningEventListeners(meaningLi){

    let addSentenceBtn = meaningLi.querySelector(".add-sentence-btn");
    let delMeaningBtn = meaningLi.querySelector(".del-meaning-btn");
    let moveUpBtn = meaningLi.querySelector(".move-up-btn");
    let moveDownBtn = meaningLi.querySelector(".move-down-btn");

    addSentenceBtn.addEventListener('click',addSentence);
    delMeaningBtn.addEventListener('click',deleteParentElement);
    moveUpBtn.addEventListener('click',moveParentElementUp);
    moveDownBtn.addEventListener('click',moveParentElementDown);

    meaningLi.addEventListener('mouseover',()=>{
        addSentenceBtn.classList.remove("opacity0");
        delMeaningBtn.classList.remove("opacity0");
        moveUpBtn.classList.remove("opacity0");
        moveDownBtn.classList.remove("opacity0");
    });
    meaningLi.addEventListener('mouseout',meaningLi.hideBtn = ()=>{
        addSentenceBtn.classList.add("opacity0");
        delMeaningBtn.classList.add("opacity0");
        moveUpBtn.classList.add("opacity0");
        moveDownBtn.classList.add("opacity0");
    });
    delMeaningBtn.addEventListener('mousedown',()=>{
        meaningLi.hideBtn();
        $(".tooltip").hide();
    });
}

function addExampleEventListeners(example){

    let delSentenceBtn = example.querySelector(".del-sentence-btn");
    let moveUpBtn = example.querySelector(".move-up-btn");
    let moveDownBtn = example.querySelector(".move-down-btn");

    delSentenceBtn.addEventListener('click',deleteParentElement);
    moveUpBtn.addEventListener('click',moveParentElementUp);
    moveDownBtn.addEventListener('click',moveParentElementDown);

    example.addEventListener('mouseover',()=>{
        delSentenceBtn.classList.remove("opacity0");
        moveUpBtn.classList.remove("opacity0");
        moveDownBtn.classList.remove("opacity0");
    });
    example.addEventListener('mouseout', example.hideBtn = ()=>{
        delSentenceBtn.classList.add("opacity0");
        moveUpBtn.classList.add("opacity0");
        moveDownBtn.classList.add("opacity0");
    });

    delSentenceBtn.addEventListener('mousedown',()=>{
        example.hideBtn();
        $(".tooltip").hide();
    });

}

//ADDING NEW ELEMENTS
function addMeaning(wordList,editMeaningName = true){
    //check if wordList is pointerEvent from clicked add meaning btn
    if(wordList.pointerId){
        wordList = this.parentNode.parentNode.querySelector(".foreign-word-ol");
    }
    let meaning = createMeaning();
    let sentenceTable = createSentenceTable();
    addSentence(sentenceTable, false);
    meaning.appendChild(sentenceTable);
    wordList.appendChild(meaning);
    if(editMeaningName) {
        let meaningName = meaning.querySelector('.foreign-meaning-name');
        editPhrase(meaningName);
    }
}

function addSentence(sentenceTable,editSentence = true){
    //check if sentenceTable is pointerEvent from clicked add sentence btn
    if(sentenceTable.pointerId){
        sentenceTable = this.parentNode.querySelector('.sentence-table');
    }

    let sentenceTr = createSentenceTr();

    let sentence = createExampleSentence();
    let translation = createExampleTranslation();

    sentenceTr.appendChild(sentence);
    sentenceTr.appendChild(translation);
    sentenceTable.appendChild(sentenceTr);

    addButtonsToExample(sentenceTr);
    if(editSentence)
        editPhrase(sentence);
}

function addSpeechSection(){

    let speechSection = createSpeechSection();
    let previousElement = document.querySelector(".speech-section:last-of-type") ?? originalWord;
    previousElement.parentNode.insertBefore(speechSection, previousElement.nextElementSibling);

}

function deleteElement(toDelete){
    addUndoNode();
    let parentOfToDelete = toDelete.parentNode;
    parentOfToDelete.removeChild(toDelete);
    phraseDescDiv.textContent = '';
    editPhraseDiv.classList.add("hidden");
}

function deleteParentElement(){
    deleteElement(this.parentNode);
}

function deleteParentOfParentElement(){
    deleteElement(this.parentNode.parentNode);
}

function moveElementUp(toMove){
    if(toMove.previousElementSibling !== null && toMove.previousElementSibling.classList.contains(toMove.classList[0]))
        toMove.parentNode.insertBefore(toMove,toMove.previousElementSibling);
    else{
        let lastChild = toMove.parentNode.querySelector(`.${toMove.classList[0]}:last-of-type`);
        if(toMove !== lastChild)
            swapElements(toMove,lastChild);
    }
}

function moveElementDown(toMove){
    if(toMove.nextElementSibling !== null && toMove.nextElementSibling.classList.contains(toMove.classList[0]))
        toMove.parentNode.insertBefore(toMove.nextElementSibling, toMove);
    else {
        let firstChild = toMove.parentNode.querySelector(`.${toMove.classList[0]}`);
        if(toMove !== firstChild)
            swapElements(toMove,firstChild);
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


function swapElements(a,b) {
    let aParent = a.parentNode;
    let bParent = b.parentNode;
    let aHolder = document.createElement("div");
    let bHolder = document.createElement("div");

    aParent.replaceChild(aHolder,a);
    bParent.replaceChild(bHolder,b);

    aParent.replaceChild(b,aHolder);
    bParent.replaceChild(a,bHolder);
}

function getPhraseDivs(){
    let phraseDivs = [];
    for (const phraseClass of phraseClasses) {
        let selected = document.querySelectorAll(phraseClass);
        for (const s of selected)
            phraseDivs.push(s);
    }
    return phraseDivs;
}

function updatePartOfSpeech(partOfSpeech){
    pos.partOfSpeechSuggestions(partOfSpeech);
    partOfSpeech.addEventListener('focus',()=>{
        phraseDescDiv.textContent = '';
        editPhraseDiv.classList.add("hidden");
        phraseDivs = getPhraseDivs();
        for (const p of phraseDivs)
            p.classList.remove('phrase-click');
    });
}

function updatePhraseDiv(phraseDiv){

    phraseDiv.addEventListener('mouseover',()=>{
        phraseDiv.classList.add('phrase-mouseover');
    });
    phraseDiv.addEventListener('mouseout',()=>{
        phraseDiv.classList.remove('phrase-mouseover');
    });
    phraseDiv.addEventListener('click',()=>{
        editPhrase(phraseDiv);
    });
}

function editPhrase(phrase){

    phraseDivs = getPhraseDivs();
    for (const p of phraseDivs)
        p.classList.remove('phrase-click');
    editPhraseDiv.classList.remove("hidden");

    phrase.classList.add('phrase-click');
    let classname = phrase.classList.item(0);
    let phraseDesc;
    let inputDesc = "";
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

    if(phrase.textContent !== inputDesc){
        phraseTextIn.value = phrase.textContent;
    }

    //want to remove eventListenters from apply elements in order to avoid impact on another phrases
    phraseTextIn.removeEventListener('keydown',phraseTextIn.fn);
    phraseApplyBtn.removeEventListener('click',phraseApplyBtn.fn);

    //apply phrase
    phraseTextIn.addEventListener('keydown',phraseTextIn.fn = (e)=>{
        if(e.keyCode === 13){
            applyPhrase();
        }
    });
    phraseApplyBtn.addEventListener('click',phraseApplyBtn.fn = applyPhrase);

    //cancel phrase
    phraseCancelBtn.addEventListener('click',()=>{
        phrase.classList.remove('phrase-click');
        phraseDescDiv.textContent = '';
        editPhraseDiv.classList.add("hidden");
    });
    function applyPhrase(){
        addUndoNode();
        if(phraseTextIn.value === "")
            phrase.innerHTML = `<i>${inputDesc}</i>`;
        else
            phrase.textContent = phraseTextIn.value;

        phrase.classList.remove('phrase-click');
        phraseDescDiv.textContent = '';
        editPhraseDiv.classList.add("hidden");
        if(classname === 'header-word'){
            checkWordExists();
        }
    }
}

function getPartsOfSpeechOrder(){
    let partsOfSpeech = document.querySelectorAll('.part-of-speech');
    let partsOfSpeechOrder = '';
    for (let i=0; i<partsOfSpeech.length; i++){
        if(i < partsOfSpeech.length-1)
            partsOfSpeechOrder += `${partsOfSpeech[i].value},`;
        else
            partsOfSpeechOrder += `${partsOfSpeech[i].value}`;
    }
    return partsOfSpeechOrder;
}

function getWordJson() {
let word = document.querySelector(".header-word");
let speechSections = document.querySelectorAll(".speech-section");

let jsonStr = `{ "word": "${word.textContent}", "speechSection": {`;

//adding part of speech sections
for (let sp = 0; sp < speechSections.length; sp++){
    let order = 0;
    jsonStr += `"${sp}": {`;
    let partOfSpeech = speechSections[sp].querySelector(".part-of-speech");

    //adding part of speech
    jsonStr += `"partOfSpeech": "${partOfSpeech.value}", "meanings":{`;

    //adding meanings
    let editWordOl = speechSections[sp].querySelector(".foreign-word-ol");
    let meaningsLi = editWordOl.querySelectorAll(".foreign-meaning-li");
    for (let m=0; m<meaningsLi.length; m++){
        jsonStr += `"${m}":{`;
        let meaningName = meaningsLi[m].querySelector(".foreign-meaning-name");
        jsonStr += `"id": "${meaningsLi[m].id}",`;
        jsonStr += `"meaningName": "${meaningName.textContent.trim()}","examples":{`;

        //adding examples with translation
        let examples = meaningsLi[m].querySelectorAll(".sentence-tr");
        for(let e=0; e<examples.length; e++){
            let sentence = examples[e].querySelector(".example-sentence");
            let translation = examples[e].querySelector(".example-translation");
            jsonStr += `"${e}": { "sentence":"${sentence.textContent}","translation":"${translation.textContent}"`;
            //comma for end of example
            jsonStr += e < examples.length-1 ? '},' : '}';
        }
        //closing all examples
        jsonStr += '},';
        //adding meaning order
        jsonStr += `"order":"${++order}"`;
        //comma for end of meaning
        jsonStr += m < meaningsLi.length-1 ? '},' : '}';
    }
    //closing all meanings
    jsonStr += '}';
    //comma for end of meaning speech section
    jsonStr += sp < speechSections.length-1 ? '},': '}';
}
//closing all speech sections
    jsonStr += '},';
//adding parts of speech order
    jsonStr += `"partsOfSpeechOrder": "${getPartsOfSpeechOrder()}",`;
//adding root word
    jsonStr += `"rootWord": ${rootWord ? '"'+rootWord+'"':rootWord},`;
//adding meanings id to delete
    jsonStr += `"toDeleteMeaningsId": ${getMeaningsIdToDelete()},`;
//adding parts of speech csv string
    jsonStr += `"partsOfSpeechCsv": "${pos.getPartsOfSpeechCsv()}"`;
//closing word json
    jsonStr += '}';


 console.log(jsonStr);

 let json = JSON.parse(jsonStr);
 console.log(json);
return jsonStr;
}

function checkForEmptyElements(){

    let partsOfSpeech = document.querySelectorAll(".part-of-speech");
    for (const pos of partsOfSpeech) {
        isError.emptyPosError = pos.value.trim() === "";
    }
    let phraseDivs = getPhraseDivs();
    for (const phraseDiv of phraseDivs) {
        let classname = phraseDiv.classList.item(0);
        let orgDesc;
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
        if(phraseDiv.textContent === orgDesc){
            isError.emptyError = true;
            return;
        }
    }
    isError.emptyError = false;

}
function getMeaningsIdToDelete(){
    let currentMeanings = document.querySelectorAll('.foreign-meaning-li');
    let currentMeaningsId = []
    let earlyMeaningsId = [];

    for (const meaning of meaningsLi) {
        earlyMeaningsId.push(meaning.id);
    }
     for (const meaning of currentMeanings) {
         currentMeaningsId.push(meaning.id);
    }

    let toDelete = earlyMeaningsId.filter((el)=>{
         return !currentMeaningsId.includes(el);
     });
    return JSON.stringify(toDelete);
}

let isSubmitted = false;

async function saveWord(){
    let wordJson;

    try{
        wordJson = getWordJson();
    }catch (e){
        console.log(e);
        alert('Popraw błędy semantyczne');
        return false;
    }

    checkForEmptyElements();
    if(Object.values(isError).includes(true)){
        alert('Wypełnij wszystkie pola');
        return false;
    }

    let rootWordExists = await rootword.checkRootWordExists(rootWord);
    let rootWordInput = document.querySelector(".root-word-input");
    if(!rootWordExists && rootWordInput.value.length > 0)
    {
        if(!confirm("Podana podstawa słowotwórcza zostanie stworzona. Czy chcesz kontynuować?"))
            return false;
        let addingRootWordSucceed = await rootword.addRootWord(rootWord);
        if(!addingRootWordSucceed) {
            alert('Dodawanie podstawy słowotwórzczej NIE powiodło się');
            return false;
        }
    }
    let wordNameIn = document.querySelector("#word_name");
    let wordName = document.querySelector(".header-word");
    wordNameIn.value = wordName.textContent;

    let wordJsonIn = document.querySelector("#word_json");
    wordJsonIn.value = wordJson;

    if(!isSubmitted) {
        $("form[name='word']").submit();
        isSubmitted = true;
    }
}

function addUndoNode(){
    let editWordSection = document.querySelector(".edit-word-section");
    undoNodes.push(editWordSection.cloneNode(true));
}

function undoChanges(){
    if(undoNodes.length){

        let currentEditWordSection = document.querySelector(".edit-word-section");
        parentEditWordSection.removeChild(currentEditWordSection);

        let toUndoSection = undoNodes.pop();
        parentEditWordSection.insertBefore(toUndoSection, nextSiblingEditWordSection);

        let speechSections = toUndoSection.querySelectorAll(".speech-section");
        let meaningsLi = toUndoSection.querySelectorAll(".foreign-meaning-li");
        let examples = toUndoSection.querySelectorAll(".sentence-tr");
        let partsOfSpeech = toUndoSection.querySelectorAll(".part-of-speech");
        let phraseDivs = getPhraseDivs();

        for (const sp of speechSections)
            addSpeechSectionEventListeners(sp);

        for (const mLi of meaningsLi)
            addMeaningEventListeners(mLi);

        for (const e of examples)
            addExampleEventListeners(e);

        for (const pos of partsOfSpeech)
            updatePartOfSpeech(pos);

        for (const phraseDiv of phraseDivs)
            updatePhraseDiv(phraseDiv);
    }
    phraseDivs = getPhraseDivs();
    for (const p of phraseDivs)
        p.classList.remove('phrase-click');
}

let saveBtn = document.querySelector(".save-meaning-btn");

saveBtn.addEventListener('mouseover', getWordJson);
saveBtn.addEventListener('click',saveWord);
addSpeechSectionBtn.addEventListener('click',addSpeechSection);
undoBtn.addEventListener('click',undoChanges);

async function checkWordExists(){
    let word = document.querySelector('.header-word');
    let response = await fetch(`${Routing.generate('checkexist')}?wordName=${word.textContent}`);
    let exists = await response.json();
    let wordError = document.querySelector('.word-exists');
    if(exists && (word.textContent !== originalWordName)){
        isError.wordError = true;
        if(!wordError){
            wordError = document.createElement('div');
            wordError.classList.add('edit-error', 'word-exists');
            wordError.textContent = 'Podane wyrażenie już istnieje';
            word.parentNode.insertBefore(wordError, word.nextElementSibling);
        }
    }else{
        isError.wordError = false;
        if(wordError)
            wordError.parentNode.removeChild(wordError);
    }
}


async function rootWordsHandle(){
    let rootWordSuggestionDiv = document.querySelector(".root-word-suggestion-div");
    let rootWordInput = document.querySelector(".root-word-input");
    let rootWordSuggestionUl = document.querySelector(".root-word-suggestion-ul");

    suggestionsEvents.suggestionsScroller(rootWordInput, rootWordSuggestionUl);

    rootWordInput.addEventListener('input',async () => {
        if (rootWordInput.value.length > 0) {
            rootWordSuggestionDiv.classList.remove('hidden');
            let rootWords = await rootword.getRootWordsForAutocomplete(rootWordInput.value, rootWordSuggestionUl);

            for (const rootWord of rootWords) {
                rootWordSuggestionUl.innerHTML += `<li>${rootWord}</li>`;
            }
            let rootWordSuggestionLi = rootWordSuggestionUl.querySelectorAll("li");
            for (const li of rootWordSuggestionLi) {
                li.addEventListener('mousedown', ()=>{
                    rootWordInput.value = li.textContent;
                    rootWordSuggestionDiv.classList.add('hidden');
                });
            }
            suggestionsEvents.suggestionsMouseEvents(rootWordSuggestionUl);
        }else{
            rootWordSuggestionDiv.classList.add('hidden');
            $(".root-word-edit-div+span").remove();
        }
    });

    rootWordInput.addEventListener('blur', async ()=>{
        $(".root-word-edit-div+span").remove();
        rootWordSuggestionDiv.classList.add('hidden');
        if (rootWordInput.value.length > 0) {
            rootWord = rootWordInput.value;
            let rootWordExists = await rootword.checkRootWordExists(rootWord);
            let rootWordInfoSpan = document.createElement("span");
            let rootWordInfoSpanMessage;
            let rootWordInfoSpanClass;
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
        }else {
            rootWord = null;
        }
    });
}
rootWordsHandle();


$(window).ready(function() {
    $("body").on("keypress", function (event) {
        let keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
    });
});