const container = document.getElementById('container');
const clearButton = document.getElementById('clear-grid');
const defineButton = document.getElementById('define-grid');
const colorButton = document.getElementById('color-grid');
const blackButton = document.getElementById('black-grid');
const singleDiv = document.getElementsByClassName('single-div')
const drawBlackDiv = document.getElementsByClassName('single-div');

let gridSize = 16;

function drawBlackMarker() {
    for (i = 0; i < drawBlackDiv.length; i++) {
        drawBlackDiv[i].addEventListener('mouseover', function(e) {
            this.style.backgroundColor = '';
            this.classList.add('single-div-drawn-black');
        })
    };
};

function drawColorMarker() {
    for (i = 0; i < drawBlackDiv.length; i++) {
        drawBlackDiv[i].addEventListener('mouseover', function(e) {
            this.classList.remove('single-div-drawn-black');
            this.style.backgroundColor = '#' + Math.floor(Math.random() * 255);
        })
    };
};

function clearGridofMarker() {
    for (i = 0; i < drawBlackDiv.length; i++) {
        drawBlackDiv[i].classList.remove('single-div-drawn-black');
        drawBlackDiv[i].style.backgroundColor = 'white';
    }
};

function propagateBoard() {
    for (i = 0; i < gridSize ** 2; i++) {
        let singleDiv = document.createElement('div');
        singleDiv.classList.add('single-div')
        container.appendChild(singleDiv);
    }
}

propagateBoard();
drawBlackMarker();

clearButton.addEventListener('click', function(e) {
    clearGridofMarker();
});

defineButton.addEventListener('click', function(e) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    gridSize = parseInt(prompt('How big do you want the grid? (1-64'));
    propagateBoard();
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;

});

blackButton.addEventListener('click', function(e) {
    drawBlackMarker();
});

colorButton.addEventListener('click', function(e) {
    drawColorMarker();
});