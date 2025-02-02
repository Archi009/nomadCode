const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

const superEventHandler = {
  handleTitleOn: function () {
    title.innerText = 'The mouse is here!!';
    // console.dir(title.style.color);
    title.style.color = colors[0];
  },

  handleTitleOut: function () {
    title.innerText = 'The mouse is out!!';
    title.style.color = colors[1];
  },

  handleRightClick: function (e) {
    if (e.button === 2) {
      title.innerText = 'That was a right click!!';
      title.style.color = colors[2];
    }
  },
  handleResizing: function () {
    title.innerText = 'You just resized!!';
    title.style.color = colors[3];
  },
};
let title = document.querySelector(".title h1");
title.addEventListener('mouseenter', superEventHandler.handleTitleOn);
title.addEventListener('mouseout', superEventHandler.handleTitleOut);
window.addEventListener('mousedown', superEventHandler.handleRightClick);
window.addEventListener('resize', superEventHandler.handleResizing);