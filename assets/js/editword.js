let name = document.querySelector(".header-word");
let addSentenceBtnTmpl = document.querySelector(".add-sentence-btn");
let delSentenceBtnTmpl = document.querySelector(".del-sentence-btn");
let delMeaningBtnTmpl = document.querySelector(".del-meaning-btn");
let delSpeechSectionBtnTmpl = document.querySelector(".del-speech-section-btn");
let moveUpBtnTmpl = document.querySelector(".move-up-btn");
let moveDownBtnTmpl = document.querySelector(".move-down-btn");
let addMeaningBtnTmpl = document.querySelector(".add-meaning-btn");

let meaningsLi = document.querySelectorAll(".meaning-li");
let meaningNames = document.querySelectorAll(".meaning-name");
let examples = document.querySelectorAll(".sentence-section");
let speechSections = document.querySelectorAll(".speech-section");

let editPhraseDiv = document.querySelector(".edit-phrase-div1");
let phraseDescDiv = document.querySelector(".edit-phrase-desc");
let phraseTextIn = document.querySelector("#phrase-text-in");
let phraseApplyBtn = document.querySelector("#edit-phrase-apply");
let phraseCancelBtn = document.querySelector("#edit-phrase-cancel");
let addspeechSectionBtn = document.querySelector(".add-speech-section-btn");

let phraseClassesToIgnore = ":not(.sentence-section):not(.edit-phrase-div1):not(.edit-phrase-div1 *):not(.mb-3)";
let phraseClasses = ['.header-word','.part-of-speech','.meaning-name','.example-sentence','.example-translation'];

//enter updates
for (const e of examples) {
    addButtonsToExample(e);

}
for (const mn of meaningNames) {
    addButtonsToMeaning(mn);
}
for (const sp of speechSections) {
    addButtonsToSpeechSection(sp);
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
function addButtonsToSpeechSection(speechSection, newSection = false){
    let partOfSpeech = getChildrenWithClass(speechSection,'part-of-speech');

    let delSpeechSectionBtn = getButton(delSpeechSectionBtnTmpl);
    delSpeechSectionBtn.addEventListener('click',deleteParentElement);

    let moveUpBtn = getButton(moveUpBtnTmpl);
    moveUpBtn.addEventListener('click',moveParentElementUp);

    let moveDownBtn = getButton(moveDownBtnTmpl);
    moveDownBtn.addEventListener('click',moveParentElementDown);

    let addMeaningBtn = getButton(addMeaningBtnTmpl);
    addMeaningBtn.classList.remove('opacity0');

    addMeaningBtn.addEventListener('click',addMeaning);
    if(newSection) {
        speechSection.appendChild(delSpeechSectionBtn);
        speechSection.appendChild(moveUpBtn);
        speechSection.appendChild(moveDownBtn);
        speechSection.appendChild(addMeaningBtn);
    }
    else {
        speechSection.insertBefore(addMeaningBtn, partOfSpeech.nextElementSibling);
        speechSection.insertBefore(moveDownBtn, partOfSpeech.nextElementSibling);
        speechSection.insertBefore(moveUpBtn, partOfSpeech.nextElementSibling);
        speechSection.insertBefore(delSpeechSectionBtn, partOfSpeech.nextElementSibling);
    }

    speechSection.addEventListener('mouseover',()=>{
        delSpeechSectionBtn.classList.remove('opacity0');
        moveUpBtn.classList.remove("opacity0");
        moveDownBtn.classList.remove("opacity0");
    });
    speechSection.addEventListener('mouseout',()=>{
        delSpeechSectionBtn.classList.add('opacity0');
        moveUpBtn.classList.add("opacity0");
        moveDownBtn.classList.add("opacity0");
    })
}

function addButtonsToMeaning(meaningName){
    let addSentenceBtn = getButton(addSentenceBtnTmpl);
    addSentenceBtn.addEventListener('click',addSentence);

    let delMeaningBtn = getButton(delMeaningBtnTmpl);
    delMeaningBtn.addEventListener('click',deleteParentElement);

    let moveUpBtn = getButton(moveUpBtnTmpl);
    moveUpBtn.addEventListener('click',moveParentElementUp);

    let moveDownBtn = getButton(moveDownBtnTmpl);
    moveDownBtn.addEventListener('click',moveParentElementDown);

    insertAfter(moveDownBtn,meaningName);
    insertAfter(moveUpBtn,meaningName);
    insertAfter(delMeaningBtn,meaningName);
    insertAfter(addSentenceBtn,meaningName);
    insertAfter(addSentenceBtn,meaningName);

    let li = meaningName.parentNode;
    li.addEventListener('mouseover',()=>{
        addSentenceBtn.classList.remove("opacity0");
        delMeaningBtn.classList.remove("opacity0");
        moveUpBtn.classList.remove("opacity0");
        moveDownBtn.classList.remove("opacity0");
    });
    li.addEventListener('mouseout',()=>{
        addSentenceBtn.classList.add("opacity0");
        delMeaningBtn.classList.add("opacity0");
        moveUpBtn.classList.add("opacity0");
        moveDownBtn.classList.add("opacity0");
    });
}

function addButtonsToExample(example){
    let delSentenceBtn = getButton(delSentenceBtnTmpl);
    delSentenceBtn.addEventListener('click',deleteParentElement);

    let moveUpBtn = getButton(moveUpBtnTmpl);
    moveUpBtn.addEventListener('click',moveParentElementUp);

    let moveDownBtn = getButton(moveDownBtnTmpl);
    moveDownBtn.addEventListener('click',moveParentElementDown);

    example.appendChild(delSentenceBtn);
    example.appendChild(moveUpBtn);
    example.appendChild(moveDownBtn);

    example.addEventListener('mouseover',()=>{
        delSentenceBtn.classList.remove("opacity0");
        moveUpBtn.classList.remove("opacity0");
        moveDownBtn.classList.remove("opacity0");
    });
    example.addEventListener('mouseout',()=>{
        delSentenceBtn.classList.add("opacity0");
        moveUpBtn.classList.add("opacity0");
        moveDownBtn.classList.add("opacity0");
    });
}
function addMeaning(){
    let wordList = this.nextElementSibling;
    let meaningLi = document.createElement("li");
    meaningLi.classList.add("meaning-li");
    let meaningName = document.createElement("div");
    meaningName.classList.add("meaning-name");
    meaningName.innerHTML = "<i>Wprowadź tłumaczenie</i>";
    meaningName.dataset.text = meaningName.textContent;
    updatePhraseDiv(meaningName);
    meaningLi.appendChild(meaningName);
    wordList.appendChild(meaningLi);
    addButtonsToMeaning(meaningName);
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
    let partOfSpeech = document.createElement("div");
    partOfSpeech.classList.add("part-of-speech");
    partOfSpeech.innerHTML = '<i>Wprowadź część mowy</i>';
    updatePhraseDiv(partOfSpeech);
    let editWordOl = document.createElement("ol");
    editWordOl.classList.add("edit-word-ol");

    speechSection.appendChild(partOfSpeech);
    addButtonsToSpeechSection(speechSection,true);
    speechSection.appendChild(editWordOl);

    let previousSpeechSection = document.querySelectorAll('.speech-section');
    previousSpeechSection = previousSpeechSection[previousSpeechSection.length - 1];
    console.log(previousSpeechSection);
    if(previousSpeechSection) {
        previousSpeechSection.parentNode.insertBefore(speechSection, previousSpeechSection.nextElementSibling);
    }else{
        insertAfter(speechSection,name);
    }
    editPhrase(partOfSpeech);

}

function deleteParentElement() {
    $(".tooltip").hide();
    let parentToDelete = this.parentNode;
    let parentOfParent = parentToDelete.parentNode;
    parentOfParent.removeChild(parentToDelete);
    phraseDescDiv.textContent = '';
    editPhraseDiv.classList.add("hidden");

}
function deleteElement(element){
    let parent = element.parentNode;
    parent.removeChild(element);
}


function moveParentElementUp(){
    let toMove = this.parentNode;
    console.log(toMove);
    console.log(toMove.previousElementSibling);
    if(toMove.previousElementSibling !== null && toMove.previousElementSibling.classList.contains(toMove.classList[0]))
        toMove.parentNode.insertBefore(toMove,toMove.previousElementSibling);
    else{
        let lastChild = getLastChildWithClass(toMove.parentNode, toMove.classList[0]);
        if(toMove !== lastChild)
            swapElements(toMove,lastChild);
    }

}
function moveParentElementDown(){
    let toMove = this.parentNode;
    console.log(toMove);
    console.log(toMove.nextElementSibling);
    if(toMove.nextElementSibling !== null && toMove.nextElementSibling.classList.contains(toMove.classList[0]))
        toMove.parentNode.insertBefore(toMove.nextElementSibling, toMove);
    else {
        let firstChild = getFirstChildWithClass(toMove.parentNode, toMove.classList[0]);
        if(toMove !== firstChild)
            swapElements(toMove,firstChild);
    }
}
function getFirstChildWithClass(element, _class){
    for (let i = 0; i < element.children.length; i++){
        if(element.children[i].classList.contains(_class))
            return element.children[i];
    }
    return null;
}
function getLastChildWithClass(element, _class){
    console.log(element.children);
    for (let i = element.children.length-1; i >= 0; i--){

        console.log(i);
        console.log(element.children[i]);
        if(element.children[i].classList.contains(_class))
            return element.children[i];
    }
    return null;
}
function swapElements(a,b)
{
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
    let phraseDesc = "";
    let inputDesc = "";
    switch (classname) {
        case 'header-word':
            phraseDesc = "Podaj wyrażenie, które jest tłumaczone";
            inputDesc = "Wprowadź wyrażenie";
            break;
        case 'part-of-speech':
            phraseDesc = "Podaj część mowy";
            inputDesc = "Wprowadź część mowy";
            break;
        case 'meaning-name':
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
        if(phraseTextIn.value === "")
            phrase.innerHTML = `<i>${inputDesc}</i>`;
        else
            phrase.textContent = phraseTextIn.value;

        phrase.classList.remove('phrase-click');
        phraseDescDiv.textContent = '';
        editPhraseDiv.classList.add("hidden");
    }
}

function getSiblingsWithClass(element, nameOfClass){

    let siblings = element.parentElement.children;
    let filteredSiblings = [];
    for (const sibling of siblings) {
        if(sibling.classList.contains(nameOfClass))
            filteredSiblings.push(sibling);
    }
    return filteredSiblings;
}
function getChildrenWithClass(element, nameOfClass, singleIsNotCollection = true){
    let filteredChildren = [];
    for (const child of element.children) {
        if(child.classList.contains(nameOfClass))
            filteredChildren.push(child);
    }
    if(singleIsNotCollection){
        filteredChildren = filteredChildren.length > 1 ? filteredChildren : filteredChildren[0];
    }
    return filteredChildren;
}

function getWordJson()
{
 let meaningsJsonStr = "{";
 let meaningsLi = document.querySelectorAll(".meaning-li");
 for (let m=0; m<meaningsLi.length; m++){
     meaningsJsonStr += `"${m}":{`;
     let meaningName = getChildrenWithClass(meaningsLi[m],'meaning-name');
     meaningsJsonStr += `"name": "${meaningName.textContent}","examples":{`;
     let examples = getChildrenWithClass(meaningsLi[m],'sentence-section',false);
    for(let e=0; e<examples.length; e++){
        let sentence = getChildrenWithClass(examples[e],'example-sentence');
        let translation = getChildrenWithClass(examples[e], 'example-translation');
        meaningsJsonStr += `"${e}": { "sentence":"${sentence.textContent}","translation":"${translation.textContent}"`;
        //comma for end of example
        meaningsJsonStr += e < examples.length-1 ? '},' : '}';
    }
    //closing all examples
     meaningsJsonStr += '}';
     //comma for end of meaning
     meaningsJsonStr += m < meaningsLi.length-1 ? '},' : '}';
 }
 //closing all meanings
 meaningsJsonStr += '}';


 let test = {
    "0":{
        'name': 'zamykać się',
        'examples': {
            "0": {
                'sentence': "He locked himself in a hotel room and wouldn&#039;t let anybody in.",
                'tranlation': "On zamknął się w pokoju hotelowym i nikogo nie wpuszczał."
            },
            "1":{
                'sentence': "He locked himself in a hotel room and wouldn&#039;t let anybody in.",
                'tranlation': "On zamknął się w pokoju hotelowym i nikogo nie wpuszczał."
            }
        }
    }
 }
// //**MEANINGS JSON**//
//      for (let m=0; m<meaningNames.length; m++){
//          let sentences = getSiblingsWithClass(meaningNames[m],'example-sentence');
//          meaningsJsonStr += `"${m}": {"name": "${meaningNames[m].textContent}","sentences": {`; //**SENTENCES**//
//          for (let s=0; s<sentences.length; s++){
//              meaningsJsonStr += `"${s}": "${sentences[s].textContent}"${s<sentences.length-1 ? ',' : ''}`
//          }
//          meaningsJsonStr += `}`;
//          //**SENTENCES**//
//
//          meaningsJsonStr += `}${m<meaningNames.length-1 ? ',' : ''}`;
//      }
//      meaningsJsonStr += `}`;
// //**MEANINGS JSON**//
 console.log(meaningsJsonStr);

 let meaningsJson = JSON.parse(meaningsJsonStr);
 console.log(meaningsJson);
return meaningsJsonStr;
}





let saveBtn = document.querySelector(".save-meaning-btn");

saveBtn.addEventListener('mouseover', getWordJson);
addspeechSectionBtn.addEventListener('click',addSpeechSection);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//TODO: Przycisk przesuwania zdań w górę i w dół