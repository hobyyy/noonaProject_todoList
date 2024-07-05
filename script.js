let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let tabs = document.querySelectorAll(".tab-area div")
let date = document.getElementById("date");
date.innerHTML = getToday();
let mode = 'all';


inputButton.addEventListener("click", addTodo);
userInput.addEventListener("keypress", function(e) { 
  if(e.key === "Enter") {  // 엔터누를때
    addTodo();
  }   
});
for(let i=0;i<tabs.length;i++) {
  tabs[i].addEventListener("click", tabClick)
}

userInput.addEventListener("focus", function() {userInput.value = "";})
let todoList = [];
let ongoningList = [];
let finishList = [];


function addTodo() {
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
  userInput.value = "";
  
  filter();
}

function render() {
  console.log('mode###', mode)
  let list = [];
  if(mode === "all") {
    list = todoList;
  }else{
    list = filterList;
  }

  let resultHTML = '';
  console.log('list1 : ', list)
  for(let i=0;i<list.length;i++) {
    if(list[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="todo-finish">${list[i].todoContent}</div>
        <div>
          <i class="fa-regular fa-square-check icon-size" onClick = "finishTodo('${list[i].id}')"></i>
          <i class="fa-solid fa-square-xmark icon-size" onClick = "deleteTodo('${list[i].id}')"></i>
          </div>
          </div>`
        }else {
          resultHTML += `<div class="task">
          <div>${list[i].todoContent}</div>
          <div>
          <i class="fa-regular fa-square icon-size" onClick = "finishTodo('${list[i].id}')"></i>
          <i class="fa-solid fa-square-xmark icon-size" onClick = "deleteTodo('${list[i].id}')"></i>
        </div>
      </div>`
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}


function filter(event) {
  if(event) {
    mode = event.target.id;
  }
  filterList  = [];
  if(mode === "all"){
    return render();
  }else if(mode === "ongoing"){   // 진행중 
    for(i=0;i<todoList.length;i++){
      if(todoList[i].isComplete === false){   
        filterList.push(todoList[i]);
      }
    }  
    return render();
  }else if(mode === "finish"){    // 완료 
    for(i=0;i<todoList.length;i++){
      if(todoList[i].isComplete === true){   
        filterList.push(todoList[i]);
      }
    }
    return render();
  }
}
function tabClick() {  // tab click event 처리함수
  event.target.style.color = "white";
  mode = event.target.id
  for(let i=0;i<tabs.length;i++) {
    if(tabs[i].id !== mode) {
      tabs[i].style.color = "black";
    }
  }
  filter()
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
  filter();
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
  filter();
}

function randomIDGenerate() { // random ID 생성하는 함수
  return '_' + Math.random().toString(36).substr(2, 9);
}

function getToday(){  // 오늘 날짜 2024.07.04 Thu
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let week = date.toString().slice(0, 3);
  return year + "." + month + "." + day + " " + week;
}
