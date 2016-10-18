(function() {
  'use strict'
  var list = document.querySelector('ul');
  var inputText = document.querySelector('input[type="text"]');
  var formElement = document.querySelector('form');
  var array = getStoredTasks();

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
  formElement.addEventListener('submit', submitFormHandler);

  function createTaskElement(description, done) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", function () {
      for(var i = 0; i < array.length; i++) {
        if(array[i].description === label.textContent && array[i].done === true) {
            array[i].done = false;
        }
        else if (array[i].description === label.textContent && array[i].done === false) {
          array[i].done = true;
        }

        if(done.done === true) {
          checkbox.checked = true;
        } else {
           checkbox.checked = false;
        }
      }
      storeAllTasks();
    });
    checkbox.checked = done.done;
    label.textContent = description.description;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    return listItem;
  }

  function addTasks(description) {
    var todoObj = { description: description, done: false };
    array.push(todoObj);
  }

  function renderTasks() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    for(var i = 1; i <= array.length; i++) {
      var listItem = createTaskElement(array[i - 1], array[i - 1]);
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
