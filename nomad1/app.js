
//app.js

let title = document.querySelector(".title h1");
// console.log(title);

function handleTitleOn(){
  title.innerText = "The mouse is here!!";
  // console.dir(title.style.color);
  title.style.color = "#FF4500";
}

function handleTitleOut(){
  title.innerText = "The mouse is out!!"
  title.style.color = "#FFD700";
}

function handleRightClick(e) {
  if (e.button === 2){
  title.innerText = "That was a right click!!"
  title.style.color = "#9370DB"
  }
}
  function handleResizing(){
    title.innerText = "You just resized!!"
    title.style.color = "#20B2AA"
  }



title.addEventListener("mouseenter", handleTitleOn);
title.addEventListener("mouseout", handleTitleOut);
window.addEventListener("mousedown", handleRightClick);
window.addEventListener("resize", handleResizing);