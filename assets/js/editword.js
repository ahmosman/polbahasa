let name = document.querySelector(".header-word");
let partOfSpeech = document.querySelector(".part-of-speech");
let meaningNames = document.querySelectorAll(".meaning-name");
let meaningsLi = document.querySelectorAll(".meaning-li");
updateElements();
function updateElements(){
    let divs = document.querySelectorAll(".edit-word-section div:not(.sentence-section)");
    for (let div of divs) {
        div.addEventListener('mouseover',()=>{
            div.classList.add('edit-hover');
        });
        div.addEventListener('mouseout',()=>{
            div.classList.remove('edit-hover');
        })
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
 function getWordJson()
 {
     let meaningsJson = "{";
     for (const m of meaningNames) {
         let sentences = getSiblingsWithClass(m,'example-sentence');
     }
//**MEANINGS JSON**//
     for (let m=0; m<meaningNames.length; m++){
         let sentences = getSiblingsWithClass(meaningNames[m],'example-sentence');
         meaningsJson += `"${m}": {"name": "${meaningNames[m].textContent}","sentences": {`; //**SENTENCES**//
         for (let s=0; s<sentences.length; s++){
             meaningsJson += `"${s}": "${sentences[s].textContent}"${s<sentences.length-1 ? ',' : ''}`
         }
         meaningsJson += `}`;
         //**SENTENCES**//

         meaningsJson += `}${m<meaningNames.length-1 ? ',' : ''}`;
     }
     meaningsJson += `}`;
//**MEANINGS JSON**//
     console.log(meaningsJson);

     let json = {
         'name': name.textContent,
         'partOfSpeech': partOfSpeech.textContent,
         'meanings': JSON.parse(meaningsJson)
     };
     console.log(JSON.stringify(json));
 }


let wordList = document.querySelector(".edit-word-ol");

function addMeaning(){
    let meaningLi = document.createElement("li");
    meaningLi.classList.add("meaning-li");
    let meaningName = document.createElement("div");
    meaningName.classList.add("meaning-name");
    meaningName.innerHTML = "<i>Wprowadź znaczenie</i>";
    meaningLi.appendChild(meaningName);
    wordList.appendChild(meaningLi);
    updateElements();
}

let saveBtn = document.querySelector(".save-meaning-btn");
let addMeaningBtn = document.querySelector(".add-meaning-btn")
saveBtn.addEventListener('mouseover', getWordJson);
addMeaningBtn.addEventListener('click',addMeaning);
