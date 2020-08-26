let singleDiv;

// define a function to make and place a single div
function createDiv() {
    // create a div
    singleDiv = document.createElement('div');

    // give it a class of single-div
    singleDiv.classList.add('single-div');

    //add it to the container
    document.getElementById('container').appendChild(singleDiv);
}

// loop the div creation process 256 times
for (i = 0; i <= 255; i++) {
    createDiv();
}

//Loop through an array of single-divs and add event listener
let editableDivs = document.getElementsByClassName('single-div');

function drawRed() { 
for (i = 0; i < editableDivs.length; i++) {
    editableDivs[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'red';
    })
}};

drawRed();

// cleargrid button
clearButton = document.getElementById('clear-grid');

clearButton.addEventListener('click', function(event) {
    for (i = 0; i < editableDivs.length; i++) {
    editableDivs[i].style.backgroundColor = 'royalblue'
}})
