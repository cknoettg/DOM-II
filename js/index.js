// Your code goes here
//Sample:
// let sampleButton = document.querySelector('.sampleButton');
// sampleButton.addEventListener('click', (event) => {
//   alert('You Clicked the Sample Button!')
// })

let mouseTitle = document.querySelector('.logo-heading');
mouseTitle.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
});

//keydown not working
let keyImg = document.querySelector('.intro img');
keyImg.addEventListener('keydown', (event) => {
    if (event.code == "KeyA") {
        event.target.style.border = '2px solid blue';
    }
});

//NodeList's don't have eventListeners - so this only works on first a
//Expand to work on all nav a's
let navWheel = document.querySelector('.nav a');
navWheel.addEventListener('wheel', (event) => {    
        event.target.style.fontSize = '24px';
});

//has a boolean as final condition and html must be modified to
//draggable="true"
let dragp = document.querySelector('.intro p');
dragp.addEventListener('drag', (event) => {
    event.target.style.color = 'green';
}, false);

let loadImg = document.querySelector('.img-content img');
loadImg.addEventListener('load', (event) => {
    event.target.style.border = '2px solid red';
});

//uses window - not working
let focusp = document.body;
focusp.addEventListener('load', (event) => {
    event.target.style.backgroundColor = 'blue';
});

//uses window - not working
//let resizer = document.body;
window.addEventListener('resize', (event) => {
    event.target.style.backgroundColor = 'blue';
});

//uses document - not working
let scrolly = document.querySelector('.text-content p');
scrolly.addEventListener('scroll', (event) => {
    event.target.style.backgroundColor = 'green';
});

//uses element - not working
let selecty = document.querySelector('.text-content p');
selecty.addEventListener('select', (event) => {
    event.target.style.backgroundColor = 'pink';
});

let twoClick = document.querySelector('.text-content p');
twoClick.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'orange';
});







