const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
//string 만 담아 놓는 변수는 이름을 대체로 대문자로만 쓴다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginSubmit(info) {
  
  info.preventDefault();
 
  console.log(info);
  const username = loginInput.value;
  //간단하게 브라우저에 정보를 저장 할 수 있다.{새로고침해도 남는다.} localStorge.setItlem("key","value"); 저장한 정보 조회 localStorge.getItem("key") 
  // 삭제 localStorge.removeItem("key ")
  //개발자 도구에서 Application 탭에 보면 localStorge 탭이 따로 있다. (홗인 가능)
  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add("hidden");
  //input에서 매개변수를 가져온다
  paintGreetings(username)

}
// 함수를 실행하는 위치에 따라서 매개변수가 달라진다.
function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit)
}else{
  //show the greetings
  //localStorge 에서 매개변수값을 가져온다.
  paintGreetings(savedUsername);
}