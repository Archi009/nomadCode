const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(info) {
   //form 태그의 submit 과정에 기본적으로 정보를 보내고 새로고침하는것인데, 그 기본 동작을 예방(막는)다 라고 보면 되겠다.
  info.preventDefault();
  //브라우저가 이벤트를 실행할때 이벤트 핸들러는 기본적으로 어떤값을 가지고 있다. 그것을 확인 해보자.
  console.log(info);
  const username = loginInput.value;
  console.log(username);
}
loginForm.addEventListener("submit", onLoginSubmit)