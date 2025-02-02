//app.js

const test = document.querySelector("div.title:first-child h1");
const test2 = document.querySelector("div.titlea h1");
// console.log(title);



function handleTitleClick() {
  // console.log("run");
  const clickedClass = "active" // 작성 혹은  수정시에 실수를 줄이기 위해 변수에 담아 사용하자
  //javascript를 이용해 css의 class 를 조작 하여 사용하려한다. class를 조작 할 때 element 내의 class를 바꿔 버리면
  //기존 class의 style을 사용할 수 없으므로 class 가 아닌 기존 class를 배열처럼 다룰 수있게 도와주는 classList를 불러와 사용한다.
  if (test.classList.contains(clickedClass)) {
    test.classList.remove(clickedClass);
  } else {
    test.classList.add(clickedClass);
  }
}

function handleTitleClick2() {
  //위의 상황과 똑같은 일을 classList의 toggle method가 다 처리 해준다.
  test2.classList.toggle("active");
}

test.addEventListener("click", handleTitleClick);
 console.log(document.querySelector("div.titlea h1"));
test2.addEventListener("click", handleTitleClick2);
