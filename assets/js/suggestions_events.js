
function suggestionsScroller(input, suggestionsUl) {

    //scroll through suggestionsUl list using arrows, it will start over on the end

    $(input).keydown(function (e){
        if([38,40].includes(e.which)) {
            let suggestionSelected = $(suggestionsUl.querySelector('li.suggestion-selected'));
            let nextSuggestionSelected;
            let ultimateSuggestionElement;
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

            if (nextSuggestionSelected.length > 0)
                suggestionSelected = nextSuggestionSelected;
            else
                suggestionSelected = ultimateSuggestionElement;

            suggestionSelected.addClass('suggestion-selected');
        }

        //on enter down assign text from suggestion to input
        if([13].includes(e.which)){
            let suggestionSelected = $(suggestionsUl.querySelector('li.suggestion-selected'));
            if(suggestionSelected.length > 0)
                input.value = suggestionSelected.text();
            input.blur();
            $('#searching-form').submit();
        }
    });
}

//this function must be called only when li exists in ul
function suggestionsMouseEvents(suggestionsUl){

    let suggestionsLi = suggestionsUl.querySelectorAll('li');
    for (const li of suggestionsLi) {
        li.addEventListener('mouseover',()=>{

            //delete existing suggestion (if exists) in current suggestionsUl
            let suggestionSelected = suggestionsUl.querySelector('li.suggestion-selected');
            suggestionSelected ? suggestionSelected.classList.remove('suggestion-selected'):'';

            li.classList.add('suggestion-selected');
        });
        li.addEventListener('mouseout',()=>{
            li.classList.remove('suggestion-selected');
        });
    }
}

export{suggestionsScroller, suggestionsMouseEvents};