//Paste your code from task-2.js here :)
(function() {
  'use strict'
  var list = document.querySelector('ul');
  var inputText = document.querySelector('input[type="text"]');
  var array = [];

  function buttonClickHandler(clickEvent){
  	console.log("Got clicked");
  }
  var buttonElement = document.querySelector('input[type="submit"]');
  buttonElement.addEventListener('click', buttonClickHandler);

  function submitFormHandler(event) {
    renderTasks();
    inputText.value = "";
    event.preventDefault();
  }
  var formElement = document.querySelector('form');
  formElement.addEventListener('submit', submitFormHandler);

  function createTaskElement(description) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    checkbox.type = "checkbox";
    label.textContent = description.value;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    return listItem;
  }

  function addTasks(description) {
    var todoObj = { description: description.value };
    array.push(todoObj);
    return array;
  }

  function renderTasks() {
    if( inputText.value === "") {
      alert("Please type your task.");
      return;
    }
    else {
      var listItem = createTaskElement(inputText);
      var tasks = addTasks(inputText);
      console.log(tasks);
      list.appendChild(listItem);
    }
  }
})();
