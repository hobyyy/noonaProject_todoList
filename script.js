let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
// let deleteButton = document.getElementById("delete-button");
// let finishButton = document.getElementById("finish-button");

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
    alert( '값을 입력해주세요' );
    return;
  }
  let todo = {
    id : randomIDGenerate(),
    todoContent : userInput.value,
    isComplete : false,
  }
  todoList.push(todo);
  console.log('todo : ', todo)
  userInput.value = "";
  
  render();
}

function render() {
  let resultHTML = '';
  // console.log('todoList')
  for(let i=0;i<todoList.length;i++) {
    if(todoList[i].isComplete == true) {
      resultHTML += `<div class="task backgroud-gray">
        <div class="todo-finish">${todoList[i].todoContent}</div>
        <div>
          <i class="fa-regular fa-square-check icon-size" onClick = "finishTodo('${todoList[i].id}')"></i>
          <i class="fa-solid fa-square-xmark icon-size" onClick = "deleteTodo('${todoList[i].id}')"></i>
          </div>
          </div>`
        }else {
          resultHTML += `<div class="task">
          <div>${todoList[i].todoContent}</div>
          <div>
          <i class="fa-regular fa-square icon-size" onClick = "finishTodo('${todoList[i].id}')"></i>
          <i class="fa-solid fa-square-xmark icon-size" onClick = "deleteTodo('${todoList[i].id}')"></i>
        </div>
      </div>`
    }

  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function finishTodo(id) {
  console.log('id : ', id)
  for(let i=0;i<todoList.length;i++){
    if(todoList[i].id==id) {
      todoList[i].isComplete = !todoList[i].isComplete;
      break;  // 찾는 순간 for문 나가기
    }
  }
  console.log('todoList : ',todoList)
  render()
}
function deleteTodo(id) {
  console.log('id : ', id)
  for(let i=0;i<todoList.length;i++){
    if(todoList[i].id==id) {
      todoList.splice(i,1)
      break;  // 찾는 순간 for문 나가기
    }
  }
  console.log('todoList : ',todoList)
  render()
}

function randomIDGenerate() { // random ID 생성하는 함수
  return '_' + Math.random().toString(36).substr(2, 9);
}