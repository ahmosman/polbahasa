import {getRootWordsForAutocomplete} from "./root_word.js";

let searchInput = document.querySelector(".search-input-div>input");
let adminWordTable = document.querySelector(".admin-word-table");
let copyAdminWordTable = adminWordTable.innerHTML;


searchInput.addEventListener('input', ()=>{
    if(searchInput.value.length > 0){
        displayRootWords();
    }else{
        adminWordTable.innerHTML = copyAdminWordTable;
    }
});

async function displayRootWords(){
    let rootWords = await getRootWordsForAutocomplete(searchInput.value);

    if(rootWords.length > 0 && searchInput.value.length > 0) {
        $(".admin-word-tr").remove();
        for (const rootWord of rootWords) {
            let adminWordTr = document.createElement("tr");
            adminWordTr.classList.add("admin-word-tr");
            adminWordTr.innerHTML = `<td class="word-name-td">${rootWord}</td>
                    <td class="word-action-td">
                        <a href="${Routing.generate('admin_root_word_edit', {name: rootWord})}" class="btn btn-orchid">Edytuj</a>
                        <a href="${Routing.generate('admin_root_word_delete', {name: rootWord})}" class="btn btn-danger" onclick="return confirm('Czy na pewno usunąć ${rootWord.text}?')">Usuń</a>
                    </td>`;
            $(".admin-word-table").append(adminWordTr);
        }
    }else
        adminWordTable.innerHTML = copyAdminWordTable;
}
