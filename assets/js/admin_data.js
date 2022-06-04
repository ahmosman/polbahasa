let dataManageConfirmBtn = document.querySelector('.data-manage-confirm-btn');
dataManageConfirmBtn.addEventListener('click',()=>{
    let dataTextarea = document.querySelector('.data-manage textarea');
    dataManageConfirmBtn.href += `?data=${dataTextarea.value}`;
});