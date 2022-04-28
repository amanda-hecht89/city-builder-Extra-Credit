// import functions and grab DOM elements
const funDrop = document.getElementById('fundrop');
const seaDrop = document.getElementById('seadrop');
const fun = document.getElementById('fun');
const sea = document.getElementById('season');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
funDrop.addEventListener('change', () => {
    console.log('changing select', funDrop.value);
    console.log(fun);
    fun.style.backgroundImage = `url('./assets/${funDrop.value}.png')`;
});


seaDrop.addEventListener('change', () => {
    console.log('changing select', seaDrop.value);
    sea.style.backgroundImage = `url("./assets/${seaDrop.value}.png")`; 
});