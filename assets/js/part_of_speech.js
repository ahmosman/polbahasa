import * as suggestionsEvents from "./suggestions_events.js";

function partOfSpeechSuggestions(partOfSpeech){
    let partOfSpeechDiv = partOfSpeech.parentNode.parentNode;
    let posSuggestionDiv = partOfSpeech.parentNode.querySelector(".pos-suggestion-div");
    let posSuggestionUl = posSuggestionDiv.querySelector(".pos-suggestion-ul");
    suggestionsEvents.suggestionsScroller(partOfSpeech, posSuggestionUl);
    partOfSpeech.addEventListener('input',()=>{
        let oldPosError = partOfSpeechDiv.parentNode.querySelector(".edit-error");
        if(oldPosError){
            oldPosError.parentNode.removeChild(oldPosError);
        }
        if(partOfSpeech.value.length > 0){
            let posToDisplayArr = [];
            for (const posElem of partsOfSpeechArr) {
                let isElemToAdd = true;
                for (let i=0; i < partOfSpeech.value.length; i++){
                    if(partOfSpeech.value[i] !== posElem[i])
                        isElemToAdd = false;
                }
                if(isElemToAdd)
                    posToDisplayArr.push(posElem);
            }
            if(posToDisplayArr.length > 0){
                posSuggestionUl.innerHTML = "";
                posSuggestionDiv.classList.remove('hidden');
                for (const posElem of posToDisplayArr) {
                    let posSuggestionLi = document.createElement("li");
                    posSuggestionLi.textContent = posElem;
                    posSuggestionLi.addEventListener('mousedown',()=>{
                       partOfSpeech.value = posSuggestionLi.textContent;
                    });
                    posSuggestionUl.appendChild(posSuggestionLi);
                }
                suggestionsEvents.suggestionsMouseEvents(posSuggestionUl);
            }
        }else
            posSuggestionDiv.classList.add('hidden');
    });

    partOfSpeech.addEventListener('blur',()=>{
        posSuggestionDiv.classList.add('hidden');
        if(partOfSpeech.value.length <= 0){
            isError.posError = true;
            let posError = partOfSpeechDiv.parentNode.querySelector('.edit-error');
            if(!posError){
                posError = document.createElement("div");
                posError.classList.add('edit-error');
                posError.textContent = 'Musisz podać część mowy';
                partOfSpeechDiv.parentNode.insertBefore(posError, partOfSpeechDiv.nextElementSibling);
            }
        }else{
            isError.posError = false;
            let posAddMessage = partOfSpeechDiv.parentNode.querySelector('.pos-add-message');

            if(!partsOfSpeechArr.includes(partOfSpeech.value)){
                if(!posAddMessage){
                    posAddMessage = document.createElement("div");
                    posAddMessage.classList.add('pos-add-message');
                    partOfSpeechDiv.parentNode.insertBefore(posAddMessage, partOfSpeechDiv.nextElementSibling);
                    posAddMessage.innerHTML = `<span>Podana część mowy nie jest zapisana. Czy chcesz ją zapisać?</span>
                        <button type="button" class="pos-add-confirm-btn btn btn-hotpink">Tak</button>
                        <button type="button" class="pos-add-deny-btn btn btn-mediumpurple">Nie</button>`;
                    let posAddConfirmBtn = posAddMessage.querySelector('.pos-add-confirm-btn');
                    let posAddDenyBtn = posAddMessage.querySelector('.pos-add-deny-btn');
                    posAddConfirmBtn.addEventListener('click',()=>{
                       partsOfSpeechArr.push(partOfSpeech.value);
                       posAddMessage.parentNode.removeChild(posAddMessage);

                    });

                    posAddDenyBtn.addEventListener('click',()=>{
                       posAddMessage.parentNode.removeChild(posAddMessage);
                    });

                }
            }else if(posAddMessage){
                posAddMessage.parentNode.removeChild(posAddMessage);
            }
        }
    });
}
function getPartsOfSpeechCsv()
{
    let partsOfSpeechCsv = "";
    for(let i=0; i<partsOfSpeechArr.length; i++){
        partsOfSpeechCsv += partsOfSpeechArr[i];
        if(i < partsOfSpeechArr.length-1)
            partsOfSpeechCsv += ',';
    }
    return partsOfSpeechCsv;
}
export {partOfSpeechSuggestions, getPartsOfSpeechCsv};