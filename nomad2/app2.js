function changBack() {
  if (window.innerWidth > 718) {
    boddy.classList.remove('violet');
    boddy.classList.add('lemon');
  } else if (window.innerWidth <= 718 && window.innerWidth > 312) {
    boddy.classList.remove('lemon');
    boddy.classList.remove('corn');
    boddy.classList.add('violet');
  } else {
    boddy.classList.remove('violet');
    boddy.classList.add('corn');
  }
}

window.addEventListener('resize', changBack);
