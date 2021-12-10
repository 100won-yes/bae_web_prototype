const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// 이런식으로 변수를 만들어서 선택자를 불러올수도 있다.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
  // JSON.stringify() -> ()에 어떤 값이 들어오던 string처리 해주는 함수 
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  // 버튼을 누르면 버튼만이 아닌 li자체를 지우기 위해서 선택하는 방법
  // target(click된 HTML element)을 지정하고 parentElement(그 부모요소)를 선택하면 li가 선택됨
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  // 위 줄의 의미 : ❌클릭한 li(number이기에 string로 변경)의 id와 다른 toDo는 남겨놓는다.
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // forEach는 ()안의 함수 item을 각각 실행하게 해준다.
}

