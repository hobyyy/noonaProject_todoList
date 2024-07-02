let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let deleteButton = document.getElementById("delete-button");
let finishButton = document.getElementById("finish-button");
console.log('userInput : ', userInput)

inputButton.addEventListener("click", addTodo);
userInput.addEventListener("keypress", function(e) { 
  if(e.key === "Enter") {  // 엔터누를때
    // console.log('value : ', !userInput.value)
    addTodo();
  }   
});
// deleteButton.addEventListener("click", deleteTodo);
// finishButton.addEventListener("click", finishTodo);

userInput.addEventListener("focus", function() {userInput.value = "";})
let todoList = [];

function addTodo() {
  console.log('값1',userInput.value)
  if(!userInput.value) {  // 값을 입력하지 않았을 때
    console.log('값2',userInput.value)
    console.log('if문',!!userInput.value)
    alert( '값을 입력해주세요' );
    return;
  }
  todoList.push(userInput.value);
  console.log('todoList : ', todoList)
  userInput.value = "";
  
  render();
}

function deleteTodo() {

}

function finishTodo() {
  
}
function render() {
  let resultHTML = '';
  // console.log('todoList')
  for(let i=0;i<todoList.length;i++) {
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