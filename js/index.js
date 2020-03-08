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

