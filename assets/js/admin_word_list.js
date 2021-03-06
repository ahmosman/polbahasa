let searchInput = document.querySelector('.search-input>input')
let adminWordTable = document.querySelector('.admin-word-list .word-table')
let copyAdminWordTable = adminWordTable.innerHTML
let previousLabel = document.querySelector('.pagination__item.pagination__item--previous-page')
let nextLabel = document.querySelector('.pagination__item.pagination__item--next-page')

previousLabel.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'
nextLabel.innerHTML = '<i class="fa-solid fa-arrow-right-long"></i>'

searchInput.addEventListener('input', () => {
  if (searchInput.value.length > 0) {
    autocompleteWords()
  } else {
    adminWordTable.innerHTML = copyAdminWordTable
  }
})

async function autocompleteWords () {
  let response = await fetch(`${Routing.generate('autocomplete')}?q=${searchInput.value}`)
  let words = await response.json()

  if (words.length > 0 && searchInput.value.length > 0)
    displayWords(words)
  else
    adminWordTable.innerHTML = copyAdminWordTable
}

function displayWords (words) {
  $('.word-tr').remove()

  for (const word of words) {
    let adminWordTr = document.createElement('tr')
    adminWordTr.classList.add('word-tr')
    adminWordTr.innerHTML = `<td class="word-name">${word}</td>
                    <td class="word-action">
                        <a href="${Routing.generate('preview_word', { name: word })}" class="btn btn-hotpink">Podgląd</a>
                        <a href="${Routing.generate('edit_word', { name: word })}" class="btn btn-orchid">Edytuj</a>
                        <a href="${Routing.generate('delete_word', { name: word })}" class="btn btn-danger" onclick="return confirm('Czy na pewno usunąć ${word}?')">Usuń</a>
                    </td>`
    $('.admin-word-list .word-table').append(adminWordTr)
  }
}