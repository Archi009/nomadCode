//main.js

const formSubmit = document.querySelector('#form-submit');
const fistInput = document.querySelector('#form-submit:first-child input');
const lastInput = document.querySelector('#form-submit input[name=guess]');
const hiddenBlacnk = document.querySelectorAll("#form-submit p")
const firstBlanck = hiddenBlacnk[0]
const secBlanck = hiddenBlacnk[1]


function formHandeler(event) {
  event.preventDefault();
  if(checkMax()){
    runGame()
  }
}
function runGame() {
  let randomNum = parseInt(Math.random()*fistInput.value )+1

  firstBlanck.innerText = `You chose: ${lastInput.value}, the machine choose: ${randomNum}.`
  secBlanck.innerText = matching(randomNum);
  firstBlanck.classList.remove("hidden")
  secBlanck.classList.remove("hidden")
  secBlanck.classList.add("bold")
}
function matching(randomNum) {
  if(parseInt(lastInput.value) === randomNum){
    return "You win!";
  }else{
    return "You lose!"
  }
}
function checkMax(){
  
  if(parseInt(fistInput.value) < parseInt(lastInput.value)){
    lastInput.value = ""
    lastInput.focus();
    alert("Guess number should smaller than maxiam number")
    return false
  }
  return true
  
}

formSubmit.addEventListener('submit', formHandeler);
// lastInput.addEventListener("pointerout",checkMax);