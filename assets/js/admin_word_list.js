let searchInput = document.querySelector(".search-input-div>input");
let adminWordTable = document.querySelector(".admin-word-table");
let copyAdminWordTable = adminWordTable.innerHTML;
let previousLabel = document.querySelector(".pagination__item.pagination__item--previous-page");
let nextLabel = document.querySelector(".pagination__item.pagination__item--next-page");
previousLabel.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>';
nextLabel.innerHTML = '<i class="fa-solid fa-arrow-right-long"></i>';
let fetchedWords = [];
let firstInputLetters;
searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 1) {
        if (firstInputLetters !== searchInput.value.substring(0, 2)) {
            firstInputLetters = searchInput.value.substring(0, 2);
            fetchWords();
        }
        displayWords(fetchedWords);
    } else {
        adminWordTable.innerHTML = copyAdminWordTable;
    }
});

async function fetchWords() {
    let response = await fetch(`${Routing.generate('autocomplete')}?q=${searchInput.value.substring(0, 2)}`);
    fetchedWords = await response.json();

    if (fetchedWords.length > 0 && searchInput.value.length > 1)
        displayWords(fetchedWords);
    else
        adminWordTable.innerHTML = copyAdminWordTable;
}

function displayWords(words) {
    let regexStr = `^${searchInput.value}.*`;
    let regex = new RegExp(regexStr, "gi");
    words = words.filter((word) => word.match(regex));
    if(words.length > 0)
        $(".admin-word-tr").remove();
    for (const word of words) {
        let adminWordTr = document.createElement("tr");
        adminWordTr.classList.add("admin-word-tr");
        adminWordTr.innerHTML = `<td class="word-name-td">${word}</td>
                    <td class="word-action-td">
                        <a href="${Routing.generate('preview_word', {name: word})}" class="btn btn-hotpink">Podgląd</a>
                        <a href="${Routing.generate('edit_word', {name: word})}" class="btn btn-orchid">Edytuj</a>
                        <a href="${Routing.generate('delete_word', {name: word})}" class="btn btn-danger" onclick="return confirm('Czy na pewno usunąć ${word.text}?')">Usuń</a>
                    </td>`;
        $(".admin-word-table").append(adminWordTr);
    }
}