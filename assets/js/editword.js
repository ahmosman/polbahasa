let name = document.querySelector(".header-word");
let partOfSpeech = document.querySelector(".part-of-speech");
let addSentenceBtnTmpl = document.querySelector(".add-sentence-btn");
let delSentenceBtnTmpl = document.querySelector(".del-sentence-btn");
let delMeaningBtnTmpl = document.querySelector(".del-meaning-btn");
let meaningsLi = document.querySelectorAll(".meaning-li");
let meaningNames = document.querySelectorAll(".meaning-name");
let examples = document.querySelectorAll(".sentence-section");
let phraseClassesToIgnore = ".sentence-section, .edit-phrase-div1, .edit-phrase-div1 *, .mb-3"
let editPhraseDiv = document.querySelector(".edit-phrase-div1");
let canvas = document.createElement("canvas");
let canvasContext = canvas.getContext("2d");
for (const e of examples) {
    addDelButtonsToExample(e);

}
for (const mn of meaningNames) {
    addButtonsToMeaning(mn);
}

function addMeaning(){
    let meaningLi = document.createElement("li");
    meaningLi.classList.add("meaning-li");
    let meaningName = document.createElement("div");
    meaningName.classList.add("meaning-name");
    meaningName.innerHTML = "<i>Wprowadź tłumaczenie</i>";
    meaningLi.appendChild(meaningName);
    wordList.appendChild(meaningLi);
    addButtonsToMeaning(meaningName);
    updateElements();
}
function addButtonsToMeaning(meaningName){
    let addSentenceBtn = addSentenceBtnTmpl.cloneNode(true);
    addSentenceBtn.classList.remove('hidden');
    addSentenceBtn.classList.add('opacity0');

    addSentenceBtn.addEventListener('click',addSentence);
    let delMeaningBtn = delMeaningBtnTmpl.cloneNode(true);
    delMeaningBtn.classList.remove('hidden');
    delMeaningBtn.classList.add('opacity0');

    delMeaningBtn.addEventListener('click',deleteParentElement);
    insertAfter(delMeaningBtn,meaningName);
    insertAfter(addSentenceBtn,meaningName);
    let li = meaningName.parentNode;
    li.addEventListener('mouseover',()=>{
        addSentenceBtn.classList.remove("opacity0");
        delMeaningBtn.classList.remove("opacity0");
    });
    li.addEventListener('mouseout',()=>{
        addSentenceBtn.classList.add("opacity0");
        delMeaningBtn.classList.add("opacity0");
    });
}
function addSentence(){
    let meaningLi = this.parentNode;
    let example = document.createElement("div");

    example.classList.add("sentence-section")
    let sentence = document.createElement("div");
    sentence.classList.add("example-sentence");

    sentence.innerHTML = "<i>Wprowadź zdanie</i>";
    let translation = document.createElement("div");
    translation.classList.add("example-translation");

    translation.innerHTML = "<i>Wprowadź tłumaczenie</i>";
    example.appendChild(sentence);
    example.appendChild(translation);
    meaningLi.appendChild(example);
    addDelButtonsToExample(example);
    updateElements();
}
function deleteParentElement() {
    $(".tooltip").hide();
    let parentToDelete = this.parentNode;
    let parentOfParent = parentToDelete.parentNode;
    parentOfParent.removeChild(parentToDelete);

}
function addDelButtonsToExample(example){
    let delSentenceBtn = delSentenceBtnTmpl.cloneNode(true);
    delSentenceBtn.classList.remove('hidden');
    delSentenceBtn.classList.add('opacity0');
    example.appendChild(delSentenceBtn);
    delSentenceBtn.addEventListener('click',deleteParentElement);
    example.addEventListener('mouseover',()=>{
        delSentenceBtn.classList.remove("opacity0");
    });
    example.addEventListener('mouseout',()=>{
        delSentenceBtn.classList.add("opacity0");
    });

}
updateElements();
function updateElements(){
    let phraseDivs = document.querySelectorAll(`.edit-word-section div:not(${phraseClassesToIgnore})`);
    for (let phrase of phraseDivs) {
        phrase.addEventListener('mouseover',()=>{
            phrase.classList.add('phrase-mouseover');
        });
        phrase.addEventListener('mouseout',()=>{
            phrase.classList.remove('phrase-mouseover');
        });
        phrase.addEventListener('click',()=>{
            for (const p of phraseDivs) {
                p.classList.remove('phrase-click');
            }
            phrase.classList.add('phrase-click');
            editPhrase(phrase);
        });
    }
}


function editPhrase(phrase){
    editPhraseDiv.classList.remove("hidden");
    let classname = phrase.classList.item(0);
    let phraseDesc = "";
    switch (classname) {
        case 'header-word':
            phraseDesc = "Podaj wyrażenie, które jest tłumaczone";
            break;
        case 'meaning-name':
            phraseDesc = "Podaj tłumaczenie wyrażenia";
            break;
        case 'example-sentence':
            phraseDesc = "Podaj zdanie";
            break;
        case 'example-translation':
            phraseDesc = "Podaj tłumaczenie zdania";
            break;
        default:
            phraseDesc = "Podaj fraze";
    }

    let phraseDescDiv = document.querySelector(".edit-phrase-desc");
    let phraseTextIn = document.querySelector("#phrase-text-in");
    let applyBtn = document.querySelector("#edit-phrase-apply");
    let cancelBtn = document.querySelector("#edit-phrase-cancel");

    phraseDescDiv.textContent = phraseDesc;
    phraseTextIn.value = phrase.textContent;
    //calculate text width with canvas
    let compStyles = window.getComputedStyle(phrase);
    canvasContext.font = `${compStyles.getPropertyValue('font-size')} ${compStyles.getPropertyValue('font-family')}`;
    console.log(canvasContext.font);
    let metrics = canvasContext.measureText(phrase.textContent);
    console.log(metrics.width);
    phraseTextIn.style.width = `${metrics.width + 10}px`;

    applyBtn.addEventListener('click',()=>{
        phrase.textContent = phraseTextIn.value;
        phraseTextIn.value = '';
        phrase.classList.remove('phrase-click');
        phraseDescDiv.textContent = '';
        editPhraseDiv.classList.add("hidden");
    });
    cancelBtn.addEventListener('click',()=>{
        phraseTextIn.value = '';
        phrase.classList.remove('phrase-click');
        phraseDescDiv.textContent = '';
        editPhraseDiv.classList.add("hidden");
    });
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
    let children = element.children;
    let filteredChildren = [];
    for (const child of children) {
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


 let wordList = document.querySelector(".edit-word-ol");



let saveBtn = document.querySelector(".save-meaning-btn");
let addMeaningBtn = document.querySelector(".add-meaning-btn");
let addSentenceBtns = document.querySelectorAll(".add-sentence-btn:not(.hidden)");

saveBtn.addEventListener('mouseover', getWordJson);
addMeaningBtn.addEventListener('click',addMeaning);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//TODO: Przycisk przesuwania zdań w górę i w dół