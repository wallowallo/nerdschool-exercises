//Paste your code from task-2.js here :)
(function() {
  'use strict'
  var list = document.querySelector('ul');
  var inputText = document.querySelector('input[type="text"]');
  var array = getStoredTasks();

  function buttonClickHandler(clickEvent){
  	console.log("Got clicked");
  }
  var buttonElement = document.querySelector('input[type="submit"]');
  buttonElement.addEventListener('click', buttonClickHandler);

  function submitFormHandler(event) {
    if( inputText.value === "") {
      alert("Please type your task.");
      return;
    }
    addTasks(inputText.value);
    renderTasks();
    storeAllTasks();
    inputText.value = "";
    event.preventDefault();
  }
  var formElement = document.querySelector('form');
  formElement.addEventListener('submit', submitFormHandler);

  function createTaskElement(description) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement("input");
    checkbox.addEventListener("click", storeAllTasks);
    var label = document.createElement("label");
    checkbox.type = "checkbox";
    label.textContent = description.description;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    return listItem;
  }

  function checkDone() {

  }

  function addTasks(description) {
    var todoObj = { description: description, done: false };
    array.push(todoObj);
    return array;
  }

  function renderTasks() {
    var listItem;
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    for(var i = 1; i <= array.length; i++) {
      listItem = createTaskElement(array[i - 1]);
      list.appendChild(listItem);
    }
  }

  function storeAllTasks() {
    if(array.length === 0) {
      return;
    }
    else {
    var storing = localStorage.setItem("nerdschool-todo-tasks", JSON.stringify(array));
    }
  }

   function getStoredTasks() {
    var value = localStorage.getItem("nerdschool-todo-tasks");
    return value ? JSON.parse(value) : [];
  }
  window.onload = renderTasks;
})();
