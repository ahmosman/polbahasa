
function getSiblingsWithClass(element, nameOfClass){
    let siblings = element.parentElement.children;
    let filteredSiblings = [];
    for (const sibling of siblings) {
        if(sibling.classList.contains(nameOfClass))
            filteredSiblings.push(sibling);
    }
    return filteredSiblings;
}
let name = document.querySelector(".header-word");
let partOfSpeech = document.querySelector(".part-of-speech");
let meanings = document.querySelectorAll(".meaning-name");
//let sentences = document.querySelectorAll(".example-sentence");

let meaningsJson = "{";

for (const m of meanings) {
    let sentences = getSiblingsWithClass(m,'example-sentence');

}
//**MEANINGS JSON**//
for (let m=0; m<meanings.length; m++){
    let sentences = getSiblingsWithClass(meanings[m],'example-sentence');
    meaningsJson += `"${m}": {"name": "${meanings[m].textContent}","sentences": {`; //**SENTENCES**//
    for (let s=0; s<sentences.length; s++){
        meaningsJson += `"${s}": "${sentences[s].textContent}"${s<sentences.length-1 ? ',' : ''}`
    }
    meaningsJson += `}`;
    //**SENTENCES**//

    meaningsJson += `}${m<meanings.length-1 ? ',' : ''}`;
}
meaningsJson += `}`;
//**MEANINGS JSON**//
console.log(meaningsJson);
let obj = JSON.parse(meaningsJson);
console.log(obj);
let json = {
    'name': name.textContent,
    'partOfSpeech': partOfSpeech.textContent,
    'meanings': obj
};
console.log(JSON.stringify(json));

let test = {
    "0": {
        "name": "zamykać",
        "sentences": {
            "0": "Did you lock the door?",
            "1": "Shall I lock up after you?",
        },
    },
    "1": {
            "name": "zamykać się",
            "sentences": {
                "0": "He locked himself in a hotel room and wouldn't let anybody in.",
            },
    },
    "2": {
        "name": "chować (w bezpiecznym miejscu)",
        "sentences": {
            "0": "He locked the dog in his room.",
            "1": "I locked my diary in a drawer.",
            "2": "I have to lock my jewellery in my boxes.",
        },
    },
}