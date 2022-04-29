// import functions and grab DOM elements
const funDrop = document.getElementById('fundrop');
const seaDrop = document.getElementById('seadrop');
const foodDrop = document.getElementById('fooddrop');
const fun = document.getElementById('fun');
const sea = document.getElementById('season');
const food = document.getElementById('foodie');
const sloganEl = document.getElementById('slogan');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

// let state
let comment = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
funDrop.addEventListener('change', () => {
    console.log('changing select', funDrop.value);
    fun.style.backgroundImage = `url('./assets/${funDrop.value}.png')`;
});


seaDrop.addEventListener('change', () => {
    console.log('changing select', seaDrop.value);
    sea.style.backgroundImage = `url("./assets/${seaDrop.value}.png")`; 
});

foodDrop.addEventListener('change', () => {
    console.log('changing select', foodDrop.value);
    food.style.backgroundImage = `url('./assets/${foodDrop.value}.png')`;
});

sloganButton.addEventListener('click', () => {
    comment.push(sloganInput.value);
    sloganInput.value = '';
    displayCatchphrase();
});

function displayCatchphrase() {
    sloganEl.textContent = '';
    for (let phrase of comment) {
        const comment = document.createElement('div');
        comment.textContent = phrase;
        sloganEl.append(comment);
    }
}