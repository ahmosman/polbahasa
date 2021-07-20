let searchInput = document.querySelector(".search-input-div>input");
let suggestionsDiv = document.querySelector(".suggestions-div");
let suggestionsUl = document.querySelector(".suggestions-ul");
let searchButton = document.querySelector(".search-input-div>button");
searchInput.addEventListener('input', ()=>{
    if(searchInput.value.length > 0){
        suggestionsDiv.classList.remove("hidden");
        searchSuggestions();
    }else{
        suggestionsDiv.classList.add("hidden");
    }
});


async function searchSuggestions() {
    let response = await fetch(`${Routing.generate('autocomplete')}?all=t&q=${searchInput.value}`);
    let words = await response.json();
    words.sort(function (a,b){
        return a.length - b.length;
    });
    suggestionsUl.innerHTML = "";
    for (const word of words) {
        suggestionsUl.innerHTML += `<li class="suggestions-li">${word}</li>`;
    }
    let suggestionsLi = suggestionsUl.querySelectorAll(".suggestions-li");
    for (const li of suggestionsLi) {
        li.addEventListener('click',()=>{
               searchInput.value = li.textContent;
               searchButton.click();
            });
    }

}
