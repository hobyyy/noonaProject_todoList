let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let deleteButton = document.getElementById("delete-button");
let finishButton = document.getElementById("finish-button");
console.log('userInput : ', userInput)

inputButton.addEventListener("click", addTodo);
// deleteButton.addEventListener("click", deleteTodo);
// finishButton.addEventListener("click", finishTodo);

userInput.addEventListener("focus", function() {userInput.value = "";})
let todoList = [];

function addTodo() {
  todoList.push(userInput.value);
  console.log('todoList : ', todoList)
  render();
}

function deleteTodo() {

}

function finishTodo() {
  
}
function render() {
  let resultHTML = '';
  for(let i=0;i<todoList.length;i++) {
    console.log('for')
    resultHTML += `<div class="task">
      <div>${todoList[i]}</div>
      <div>
        <button id="finish-button">finish</button>
        <button id="delete-button">delete</button>
      </div>
    </div>`
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}