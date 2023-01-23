const container = document.getElementById("container");

function makegrid(rows, cols) {
    let oldcells = [...document.getElementsByClassName('grid-cell')];
    function deleteold(oldcell) { //to get fresh draw pad with each button press
        oldcell.remove();
    }
    oldcells.forEach(deleteold);

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
       // cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-cell";
    };
    let gcells = [...document.getElementsByClassName('grid-cell')];
    const makeColor = event => event.target.style.backgroundColor = random_rgba();

function colorize(gcell) {
    gcell.addEventListener("mouseover", makeColor);
}; //colorize on mouseover
gcells.forEach(colorize);
};

makegrid(16, 16);

let gridSize = 16;
function NewGrid(){
    gridSize = prompt("Enter new grid size");
    if (gridSize > 100){ //limit grid size to 100
        gridSize = 100;
    }
    makegrid(gridSize, gridSize);
} // button functionality to generate new grid

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
} //get random RGB color 