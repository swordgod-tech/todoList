

//新增任務按鈕抓取與按下後事件設定
document.querySelector('#addnewlist')
.addEventListener('click',function (){
    
    let newlist = document.querySelector('#newList').value;
    if(newlist ===""){
        return ;
    };
    let allTable = document.querySelector('#allTable');
    let newWork = document.createElement('td');
    newWork.innerHTML = newlist;
    let newCheck = document.createElement('input');
    
    newCheck.setAttribute('type', 'checkbox');
    newWork.classList.add('textcolor');
    allTable.appendChild(newCheck);
    allTable.appendChild(newWork);
});


//新增確認欄及任務內容
function addToDo(){
    
    
}