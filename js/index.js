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
    event.target.style.border = '2px solid blue';
});

//Sample:
// document.querySelectorAll(".nav a").forEach(element => {
// 	element.addEventListener("wheel", function() {
// 		element.style.color = "pink";
// 	})
// });
// added nested events
document.querySelectorAll(".nav a").forEach(element => {
	element.addEventListener("wheel", function() {
        event.target.style.fontSize = "24px";
        event.target.style.color = "blue";
	})
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

//uses window
let loader = document.querySelector('.intro h2');
window.addEventListener('load', () => {
    loader.style.fontSize = '50px';
});

//uses window
let resizer = document.querySelector('.intro p');
window.addEventListener('resize', () => {
    resizer.style.backgroundColor = 'blue';
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







