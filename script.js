const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        };
};

function rowNum() {
    let antal = prompt("Hur många då?")
    let rows = antal;
    let cols = antal;
    makeRows(rows, cols);
}

rowNum()
// makeRows(16, 16);


