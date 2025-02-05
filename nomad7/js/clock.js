const clock = document.querySelector("h2#clock");

// function sayHello(){
//   console.log("hello");
// }

//interval. 일정 간격을 두고 실행하는 함수 첫번째 매개변쉬는 실행하고자 하는 함수 
// 두번째 매개 변수는 mili second단위의 초!
// setInterval(sayHello,5000)

// timeout!
// interval 과 마찬가지 방식으로 쓰이고 기능또한 두번째 매개변수 만큼의 시간을 두고 실행한다는것이 같지만,
// timeout 은 반복하지 않는다.
// setTimeout(sayHello,5000)

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = (`${hours}:${minutes}:${second}`);
}
getClock();
setInterval(getClock, 1000); //이것만 두면 화명이 로드 되고 1초 뒤에 시계가 나온다. 
// 화면로드와 동시에 시계를 나타내고 1초뒤(로직상 딱들어맞음)화면의 시간을 seInterval로 바꿔준다

// padStart, padEnd  (""String의 내장 함수"") 첫번째 매개변수에  문자열의 길이를 최소 얼마로 제한하고 싶은가?
// 두번째 매개변수에 문자열이 원하고자하는 길이 보다 짧을 때 대신 채워줄 문자는 무엇인가? {Strat는 앞에 채움, End는 뒤에 채움}