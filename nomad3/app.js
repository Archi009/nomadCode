// 생성한 변수로 부터 상세 조사(자식 태그들을 조사 )
// const logtinForm = document.getElementById("login-form");
// const loginInput = logtinForm.querySelector("input");
// const loginButtont = logtinForm.querySelector("button");
//위의 방법은 재사용 가능성이 있을때 사용하기 좋고 지금은 노필요.

const loginInput = document.querySelector("#login-form input");
const loginButtont = document.querySelector("#login-form button");

function loginClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name")
  } else if (username.length > 15) {
    alert("Your name is  too long")
  }
}

loginButtont.addEventListener("click", loginClick)