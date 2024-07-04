let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let tabs = document.querySelectorAll(".tab-area div")
let date = document.getElementById("date");
let darkMode = document.getElementById("dark-mode");
let lightMode = document.getElementById("light-mode");
date.innerHTML = getToday();
console.log('darkMode.innerHTML : ', darkMode.outerHTML )
let darkModeEnabled = false;


darkMode.addEventListener("click", function() {
  darkModeEnabled = !darkModeEnabled;
  if (darkModeEnabled) {
    darkMode.outerHTML = `<i id="dark-mode" class="fa-regular fa-moon"></i>`
  } else {
    lightMode.outerHTML = `<i id="light-mode" class="fa-solid fa-sun"></i>`
  }
  applyDarkMode(darkModeEnabled);
});




inputButton.addEventListener("click", addTodo);
// darkMode.addEventListener("click", changeDarkmode);
userInput.addEventListener("keypress", function(e) { 
  if(e.key === "Enter") {  // 엔터누를때
    // console.log('value : ', !userInput.value)
    addTodo();
  }   
});
for(let i=0;i<tabs.length;i++) {
  tabs[i].addEventListener("click", filter);
  // tabs[i].addEventListener("click", function(e) {
  //   if(t)
  //   console.log(e)
  // });
}

userInput.addEventListener("focus", function() {userInput.value = "";})
let todoList = [];

function addTodo() {
  // console.log('값1',userInput.value)
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
  // console.log('todo : ', todo)
  userInput.value = "";
  
  render(todoList);
}

function render(list) {
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
  let ongoningList = [];
  let finishList = [];
  mode = event.target.id;
  tabClick(event, mode);  // tabClick 이벤트 여기서 처리
  if(mode === "all"){
    return render(todoList);
  }else if(mode === "ongoing"){   // 진행중 
    console.log('mode : ',mode)
    for(i=0;i<todoList.length;i++){
      if(todoList[i].isComplete === false){   
        ongoningList.push(todoList[i]);
      }
    }  
    return render(ongoningList);
  }else if(mode === "finish"){    // 완료 
    console.log('mode : ',mode)
    for(i=0;i<todoList.length;i++){
      if(todoList[i].isComplete === true){   
        finishList.push(todoList[i]);
      }
    }
    return render(finishList);
  }
}
function tabClick(event, mode) {  // tab click event 처리함수
  event.target.style.color = "white";
  for(let i=0;i<tabs.length;i++) {
    if(tabs[i].id !== mode) {
      tabs[i].style.color = "black";
    }
  }
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
  render(todoList);
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
  render(todoList);
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

function changeDarkmode() {
  console.log('hello')
}




function applyDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add("dark-mode"); // ダークモードクラスを追加
        document.body.classList.remove("light-mode"); // ライトモードクラスを削除
    } else {
        document.body.classList.add("light-mode"); // ライトモードクラスを追加
        document.body.classList.remove("dark-mode"); // ダークモードクラスを削除
    }
}