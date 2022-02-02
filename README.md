
# JS Flex Panel

This project is the 5th of JS-30 challenge where I learned about ```DOM, event listner```, ```flex```, ```cubic-bezer``` and ```transition end``` thing.


## Demo

[Click Here](https://skyz03.github.io/JS--FLex-Panel/)

## Features

- On click it grows the container.
- On click the text comes from the top & bottom.

## Lessons Learned

I learned the power of css and the power of clicks what is possible to do with projects list ideas with flex.<br>
More on the topic of flex grow and the power of translateY to keep out of sight and bring back with transition timing.

```
GIVING THE TRANSITION
panel > * {
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

TRANSLATE TO GO OUT OF SIGHT AND BRING IT BACK IN SIGHT WITH TRANSITION.
.panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0);
}


THE FLEX GROW ON CLICK
.panel.open {
  flex: 5;
  font-size: 40px;
}

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

```


## Optimizations

Is there an easy way to bring back the images rather than lot of CSS backgrounds and different styles.

## Screenshots

![image](https://user-images.githubusercontent.com/42742924/152200433-95c274ce-328b-4eeb-baf6-0d4b4cfff5ff.png)


## Tech Stack

**Client:** HTML, CSS/SCSS & JS

## Documentation


# Notes 

