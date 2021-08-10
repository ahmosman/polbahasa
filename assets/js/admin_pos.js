let posManageConfirmBtn = document.querySelector('.pos-manage-confirm-btn');
posManageConfirmBtn.addEventListener('click',()=>{
    let posManageTextarea = document.querySelector('.pos-manage-div textarea');
    posManageConfirmBtn.href += `?posCsv=${posManageTextarea.value}`;
});