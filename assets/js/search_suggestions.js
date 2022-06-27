import * as suggestionsEvents from './suggestions_events.js'

let searchInput = document.querySelector('.search-input>input')
let suggestionsDiv = document.querySelector('.suggestions-div')
let suggestionsUl = document.querySelector('.search-suggestions-ul')
let searchButton = document.querySelector('.search-input>button')

suggestionsEvents.suggestionsScroller(searchInput, suggestionsUl)

searchInput.addEventListener('input', () => {
  if (searchInput.value.length > 0) {
    suggestionsDiv.classList.remove('opacity0')
    suggestionsUl.classList.remove('hidden')
    searchSuggestions()
  } else {
    suggestionsDiv.classList.add('opacity0')
    suggestionsUl.classList.add('hidden')
  }
})

async function searchSuggestions () {
  let response = await fetch(`${Routing.generate('autocomplete')}?all=t&q=${searchInput.value}`)
  let words = await response.json()
  words.sort(function (a, b) {
    return a.length - b.length
  })
  suggestionsUl.innerHTML = ''
  for (const word of words) {
    suggestionsUl.innerHTML += `<li>${word}</li>`
  }
  let suggestionsLi = suggestionsUl.querySelectorAll('li')
  for (const li of suggestionsLi) {
    li.addEventListener('click', () => {
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
