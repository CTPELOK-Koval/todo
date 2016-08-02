'use strict'
// console.log(div);

var div = document.getElementsByClassName('myToDo')[0];

var inputText = document.createElement('input');
inputText.setAttribute('class','myToDo__textInput');
inputText.setAttribute('type','text');
inputText.setAttribute('placeholder', 'Новая задача...');
div.appendChild(inputText);

var buttonAdd = document.createElement('button');
buttonAdd.setAttribute('class','myToDo__buttonAdd');
buttonAdd.innerHTML = "Add";
div.appendChild(buttonAdd);

var ul = document.createElement('ul');
ul.setAttribute('class', 'myToDoList');
div.appendChild(ul);

var toDoCount = 0;

function func(param){
  if(param.checked){
    param.parentNode.setAttribute("class","myToDoList__item myToDoList__item_done");
  } else {
    param.parentNode.setAttribute("class","myToDoList__item");
  }
}

var add = document.getElementsByClassName('myToDo__buttonAdd')[0];
add.onclick = function() {
  if(inputText.value){
    var li = document.createElement('li');
    li.setAttribute('class','myToDoList__item');
    var select = document.createElement('input');
    select.setAttribute('type', 'checkbox');
    select.setAttribute('class', 'myToDoList__itemSelect');
    select.setAttribute('id', toDoCount);
    select.setAttribute('onclick', 'func(this)');
    li.appendChild(select);

    var text = document.createElement('label');
    text.setAttribute('for', select.id);
    text.setAttribute('class','myToDoList__itemText');
    text.innerHTML = inputText.value;
    li.appendChild(text);

    var del = document.createElement('button');
    del.setAttribute('class', 'myToDo__buttonDel');
    del.setAttribute('onclick','this.parentNode.remove()');
    del.innerHTML = "Delete"
    li.appendChild(del);

    ul.appendChild(li);
    toDoCount++;
    inputText.value = '';
  } else {
    alert("Input anything, please");
  }
}


