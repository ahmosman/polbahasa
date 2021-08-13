import * as pos from './part_of_speech.js';

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
let examples = document.querySelectorAll(".sentence-section");
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

let phraseClassesToIgnore = ":not(.sentence-section):not(.edit-phrase-div1):not(.edit-phrase-div1 *):not(.mb-3)";
let phraseClasses = ['.header-word','.foreign-meaning-name','.example-sentence','.example-translation'];
let undoNodes = [];

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

function addMeaning(){
    let wordList = this.parentNode.parentNode.querySelector(".foreign-word-ol");
    let meaningLi = document.createElement("li");
    meaningLi.classList.add("foreign-meaning-li");
    let meaningName = document.createElement("div");
    meaningName.classList.add("foreign-meaning-name");
    meaningName.innerHTML = "<i>Wprowadź tłumaczenie</i>";
    meaningName.dataset.text = meaningName.textContent;
    updatePhraseDiv(meaningName);
    meaningLi.appendChild(meaningName);
    wordList.appendChild(meaningLi);
    addButtonsToMeaning(meaningLi);
    editPhrase(meaningName);
}

function addSentence(){
    let meaningLi = this.parentNode;
    let example = document.createElement("div");
    example.classList.add("sentence-section")

    let sentence = document.createElement("div");
    sentence.classList.add("example-sentence");
    sentence.innerHTML = "<i>Wprowadź zdanie</i>";
    sentence.dataset.text = sentence.textContent;
    updatePhraseDiv(sentence);
    let translation = document.createElement("div");
    translation.classList.add("example-translation");
    translation.innerHTML = "<i>Wprowadź tłumaczenie</i>";
    translation.dataset.text = translation.textContent;
    updatePhraseDiv(translation);

    example.appendChild(sentence);
    example.appendChild(translation);
    meaningLi.appendChild(example);

    addButtonsToExample(example);
    editPhrase(sentence);
}

function addSpeechSection(){

    let speechSection = document.createElement("div");
    speechSection.classList.add("speech-section");
    speechSection.innerHTML = `<div class="part-of-speech-div">
                    <span class="part-of-speech-span">
                    <input class="part-of-speech" placeholder="Wprowadź część mowy">
                    </span>
                    </div>
                    <ol class="foreign-word-ol"></ol>`;

    addButtonsToSpeechSection(speechSection);

    let previousElement = document.querySelector(".speech-section:last-of-type") ?? originalWord;

    previousElement.parentNode.insertBefore(speechSection, previousElement.nextElementSibling);

    let partOfSpeech = speechSection.querySelector('.part-of-speech');
    updatePartOfSpeech(partOfSpeech);
    partOfSpeech.focus();

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
console.log(getPartsOfSpeechOrder());
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
        let examples = meaningsLi[m].querySelectorAll(".sentence-section");
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
    console.log(JSON.stringify(toDelete));
    return JSON.stringify(toDelete);
}

function saveWord(){
    if(Object.values(isError).includes(true)){
        alert('Wypełnij wymagane pola');
        return false;
    }
    let wordNameIn = document.querySelector("#word_name");
    let wordName = document.querySelector(".header-word");
    wordNameIn.value = wordName.textContent;

    let wordJsonIn = document.querySelector("#word_json");
    wordJsonIn.value = getWordJson();
    $("form[name='word']").submit();
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
        let examples = toUndoSection.querySelectorAll(".sentence-section");
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




$(window).ready(function() {
    $("body").on("keypress", function (event) {
        let keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
    });
});