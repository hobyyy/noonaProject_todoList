let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let deleteButton = document.getElementById("delete-button");
let finishButton = document.getElementById("finish-button");
console.log('userInput : ', userInput)

inputButton.addEventListener("click", addTodo);
deleteButton.addEventListener("click", deleteTodo);
finishButton.addEventListener("click", finishTodo);

userInput.addEventListener("focus", function() {userInput.value = "";})
let todoList = [];

function addTodo() {
  todoList.push(userInput.value)
  console.log('todoList : ', todoList)
}

function deleteTodo() {

}

function finishTodo() {
  
}