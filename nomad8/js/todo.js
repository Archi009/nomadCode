//todo.js

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos" 

let toDos = [];



function saveToDos (){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}//JSON.strigify() => 객체나 배열따위를 JSON 형태의 String으로 바꿔준다.  
//localStroge 에서 불러온 JSON형태의 String을 다시 Javasctipt에서 활용할 수있게 하려면 JSON.parse()를 이용하면 된다..

function deleteTodo(event){
  const li = event.target.parentElement
  toDos = toDos.filter((toDo) => (toDo.id !== parseInt(item.id)) ) //toDos에 toDos배열에서 필터한 값을 넣어주겠다. 필터에는 매번 돌아갈때 마다 함수가 실행되는데,
  //그 함수의 매개변수 값으로 그순서의 값을 toDos 에서 가져와 id를 삭제한 id와 비교해서 boolean 값을 반환한다. true면 fillter함수의 기능에 따라 반환하고 아니면 반환하지 않는다.
  li.remove()
}

function paintToDo(newTodo){
//  console.log("iwillpaint"+newTodo); 
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText="✖️"
  button.addEventListener("click",deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li)

}

function handleToDoSubmit (event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id: Date.now()
  }//String 배열로 저장하면 돌아왔을때 필요한 값을 구분 하기 힘들기 때문에 객체를 배열에 담아 id값으로 구분
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(); //localStroge에 저장하고있지만 새로고침 하고 새로운 todo 를 입력하면 스토리지 안의 정보가 사라진다
  //1회성 인가?

}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);



if(savedToDos != null){
  const parsedToDos =JSON.parse(savedToDos);
  toDos = parsedToDos //직전 list의 값을 받아오지만, 직전보다 이전의 값을 저장하지 않아서 또 새로고침을 하면 직전만 받아온다
  // 따라서 직전 값을 미리 배열에 넣어준다.
  parsedToDos.forEach((item) => paintToDo(item));
}




