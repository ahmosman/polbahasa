import * as suggestionsEvents from './suggestions_events.js'

let searchInput = document.querySelector('.search-input>input')
let suggestionsDiv = document.querySelector('.suggestions-div')
let suggestionsUl = document.querySelector('.search-suggestions-ul')
let searchButton = document.querySelector('.search-input>button')

suggestionsEvents.suggestionsScroller(searchInput, suggestionsUl)

searchInput.addEventListener('focus', () => {
    suggestionsDiv.classList.remove('hidden')
})

searchInput.addEventListener('blur', () => {
    suggestionsDiv.classList.add('hidden')
})

searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        suggestionsUl.classList.remove('hidden')
        searchSuggestions().then(words => updateSuggestions(words))
    } else {
        suggestionsUl.innerHTML = ''
        suggestionsUl.classList.add('hidden')
    }
})

async function searchSuggestions() {
    let response = await fetch(`${Routing.generate('autocomplete')}?all=t&q=${searchInput.value}`)
    let suggestions = await response.json()
    suggestions.sort(function (a, b) {
        return a.length - b.length
    })
    return suggestions
}

function updateSuggestions(suggestions) {
    suggestionsUl.innerHTML = ''
    for (const suggestion of suggestions) {
        suggestionsUl.innerHTML += `<li>${suggestion}</li>`
    }
    let suggestionsLi = suggestionsUl.querySelectorAll('li')
    for (const li of suggestionsLi) {
        li.addEventListener('mousedown', () => {
            searchInput.value = li.textContent
            searchButton.click()
        })
    }
    suggestionsEvents.suggestionsMouseEvents(suggestionsUl)
    suggestionsUl = document.querySelector('.search-suggestions-ul')
    if (suggestionsUl.offsetHeight >= 185) {
        suggestionsUl.classList.add('search-suggestions-scroll')
    } else {
        suggestionsUl.classList.remove('search-suggestions-scroll')
    }
}
