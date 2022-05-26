import * as suggestionsEvents from './suggestions_events.js';

let searchInput = document.querySelector(".search-input-div>input");
let suggestionsDiv = document.querySelector(".suggestions-div");
let suggestionsUl = document.querySelector(".search-suggestions-ul");
let searchButton = document.querySelector(".search-input-div>button");
let fetchedWords = [];
let firstInputLetters;
suggestionsEvents.suggestionsScroller(searchInput, suggestionsUl);

searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 1) {
        if (firstInputLetters !== searchInput.value.substring(0, 2)) {
            firstInputLetters = searchInput.value.substring(0, 2);
            fetchSuggestions();
        }
        suggestionsDiv.classList.remove("suggestions-hidden");
        matchSuggestions(fetchedWords);
    } else {
        suggestionsDiv.classList.add("suggestions-hidden");
    }
});

async function fetchSuggestions() {
    let response = await fetch(`${Routing.generate('autocomplete')}?all=t&q=${searchInput.value.substring(0, 2)}`);
    let words = await response.json();
    words.sort(function (a, b) {
        return a.length - b.length;
    });
    console.log(words);
    fetchedWords = words;
    matchSuggestions(fetchedWords);
    return words;
}

function matchSuggestions(words) {
    let regexStr = `^${searchInput.value}.*`;
    let regex = new RegExp(regexStr, "gi");
    words = words.filter((word) => word.match(regex));
    suggestionsUl.innerHTML = "";
    for (const word of words) {
        suggestionsUl.innerHTML += `<li>${word}</li>`;
    }
    let suggestionsLi = suggestionsUl.querySelectorAll("li");
    for (const li of suggestionsLi) {
        li.addEventListener('click', () => {
            searchInput.value = li.textContent;
            searchButton.click();
        });
    }
    suggestionsEvents.suggestionsMouseEvents(suggestionsUl);
    suggestionsUl = document.querySelector(".search-suggestions-ul");
    if (suggestionsUl.offsetHeight >= 200) {
        suggestionsUl.classList.add("search-suggestions-scroll");
    } else {
        suggestionsUl.classList.remove("search-suggestions-scroll");
    }
}
