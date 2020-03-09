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

//keydown - uses document
let keyImg = document.querySelector('.intro img');
document.addEventListener('keydown', (event) => {
    if (event.key == 'a') {
        keyImg.style.border = '2px solid blue';
    }
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
    event.target.style.color = 'orange';
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

//can use window or element, plus using querySelectorAll
let scrolly = document.querySelectorAll('.text-content p');
scrolly.forEach(element => {
    window.addEventListener('scroll', () => {
        element.style.backgroundColor = 'pink';
    })
});

//uses element
// select events can be dispatched only on form <input type="text">
// and <textarea> elements
// had to add textarea to html and css to make this one work
let selecty = document.querySelector('textarea');
selecty.addEventListener('select', (event) => {
    event.target.style.color = 'red';
});

let twoClick = document.querySelector('.text-content p');
twoClick.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'orange';
});







