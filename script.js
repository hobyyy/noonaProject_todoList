let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let deleteButton = document.getElementById("delete-button");
let finishButton = document.getElementById("finish-button");
console.log('userInput : ', userInput)

inputButton.addEventListener("click", addTodo);
userInput.addEventListener("keyup", function(e) { 
  if(e.keyCode ===13 && !!userInput.value) {  // 엔터누를때 && 값이 존재할때
    console.log('value : ', !userInput.value)
    addTodo()
    userInput.value = "";
  } else if(e.keyCode ===13) { alert( '값을 입력해주세요' ); }  // 값이 입력하지 않고 엔터누를 때
});
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