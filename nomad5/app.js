const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(info) {
   //form 태그의 submit 과정에 기본적으로 정보를 보내고 새로고침하는것인데, 그 기본 동작을 예방(막는)다 라고 보면 되겠다.
  info.preventDefault();
  //브라우저가 이벤트를 실행할때 이벤트 핸들러는 기본적으로 어떤값을 가지고 있다. 그것을 확인 해보자.
  console.log(info);
  const username = loginInput.value;
  console.log(username);
}
//이벤트 리스너의 핸들러는 직접 실행하는것{()}이 아니라 브라우저가 실행해주는것, 그 안에 정보도 담아 준다는것.
//event : }information about the event that just happened}
function handleLinkClick (event) {
  event.preventDefault();
  console.log(event);
  console.dir(event);
}
loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click",handleLinkClick)