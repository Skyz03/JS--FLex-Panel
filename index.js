const panels = document.querySelectorAll('.panel');


//This one is for making the flex element big.
function toggleOpen() {
  this.classList.toggle('open');
}

//This one is for text.
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
