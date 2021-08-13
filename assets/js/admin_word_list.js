let searchInput = document.querySelector(".search-input-div>input");
let adminWordTable = document.querySelector(".admin-word-table");
let copyAdminWordTable = adminWordTable.innerHTML;


searchInput.addEventListener('input', ()=>{
    if(searchInput.value.length > 0){
        autocompleteWords();
    }else{
        adminWordTable.innerHTML = copyAdminWordTable;
    }
});

async function autocompleteWords(){
    let response = await fetch(`${Routing.generate('autocomplete')}?q=${searchInput.value}`);
    let words = await response.json();

    if(words.length > 0 && searchInput.value.length > 0)
        displayWords(words);
    else
        adminWordTable.innerHTML = copyAdminWordTable;
}

function displayWords(words){
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