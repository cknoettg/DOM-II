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

let keyImg = document.querySelector('.intro img');
keyImg.addEventListener('keydown', (event) => {
    if (event.code == "KeyA") {
        event.target.style.border = '2px solid blue';
    }
});

//NodeList's don't have eventListeners - so this only works on first a
//Expanded to work on all nav a's
let navWheel = document.querySelectorAll('.nav a');
navWheel.forEach(anchor => anchor.addEventListener('wheel', (event) => {    
        event.target.style.fontSize = '24px';
}));

//has a boolean as final condition and html must be modified to
//draggable="true"
let dragp = document.querySelector('.intro p');
dragp.addEventListener('drag', (event) => {
    event.target.style.color = 'green';
}, false);
