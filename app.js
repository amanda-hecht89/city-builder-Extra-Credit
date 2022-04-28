// import functions and grab DOM elements
const FunDrop = document.getElementById('fundrop');
const SeaDrop = document.getElementById('seadrop');
const Fun = document.getElementById('')
const Sea = document.getElementById('');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  FunDrop.addEventListener('change', () => {
    console.log('changing select', FunDrop.value);
    Fun.style.backgroundImage = `url('../assets/${FunDrop.value}.png')`;



  SeaDrop.addEventListener('change', () => {
      console.log('changing select', SeaDrop.value);
      Sea.style.backgroundImage = `url('../assets/${SeaDrop.value}.png')`; 