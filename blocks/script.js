'use strict'

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
var array =[];

var ToDoItem = function(name) {
  this.id = toDoCount;
  this.status = false;
  this.name = name;
}

function funcAdd(param){
  if(param.checked){
    param.parentNode.setAttribute("class","myToDoList__item myToDoList__item_done");
    for (var i = array.length - 1; i >= 0; i--) {
      if(array[i].name == param.parentNode.children[1].innerHTML){
        array[i].status = true;
      }
    }
    console.log(array);
  } else {
    param.parentNode.setAttribute("class","myToDoList__item");
    for (var i = array.length - 1; i >= 0; i--) {
      if(array[i].name == param.parentNode.children[1].innerHTML){
        array[i].status = false;
      }
    }
    console.log(array);
  }
}

function funcRemove(param) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (param.parentNode.children[0].id == array[i].id) {
      array.splice(i,1);
    }
  }
  param.parentNode.remove();
  console.log(array);
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
    select.setAttribute('onclick', 'funcAdd(this)');
    li.appendChild(select);

    var text = document.createElement('label');
    text.setAttribute('for', select.id);
    text.setAttribute('class','myToDoList__itemText');
    var toDoItem = new ToDoItem(inputText.value);
    array.push(toDoItem);
    text.innerHTML = toDoItem.name;
    li.appendChild(text);

    var del = document.createElement('button');
    del.setAttribute('class', 'myToDo__buttonDel');
    del.setAttribute('onclick','funcRemove(this)');
    del.innerHTML = "Delete"
    li.appendChild(del);

    ul.appendChild(li);
    toDoCount++;
    inputText.value = '';
  } else {
    alert("Input anything, please");
  }
}


