async function getRootWordsForAutocomplete (q, elementToClear = false) {
  let response = await fetch(`${Routing.generate('autocomplete_rootwords')}?q=${q}`)
  let rootWords = await response.json()
  if (elementToClear) {
    elementToClear.innerHTML = ''
  }

  rootWords.sort(function (a, b) {
    return a.length - b.length
  })

  return rootWords
}

async function checkRootWordExists (name) {
  let response = await fetch(`${Routing.generate('root_word_checkexist')}?name=${name}`)
  return await response.json()
}

async function addRootWord (name) {
  let response = await fetch(`${Routing.generate('admin_root_word_add')}?name=${name}`)
  return await response.json()
}

export { getRootWordsForAutocomplete, checkRootWordExists, addRootWord }