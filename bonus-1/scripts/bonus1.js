var list = document.querySelector('ul');
var inputText = document.querySelector('input[type="text"]');

function buttonClickHandler(clickEvent){
	console.log("Got clicked");
}
var buttonElement = document.querySelector('input[type="submit"]');
buttonElement.addEventListener('click', buttonClickHandler);

function submitFormHandler(event) {
  var listItem = createTaskElement(inputText);
  console.log(event);
  event.preventDefault();
  list.appendChild(listItem);
  inputText.value = "";
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
