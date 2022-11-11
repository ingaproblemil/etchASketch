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
    let antal = prompt("Hur många då?");
    let rows = antal;
    let cols = antal;
    makeRows(rows, cols);
}

rowNum()

const boxes = document.getElementsByClassName('grid-item');
console.log(boxes); // 👉️ [div.box, div.box, div.box]

// ✅ addEventListener to all boxes
for (const box of boxes) {
  box.addEventListener('mouseover', function() {
    
    box.classList.add("colored");
  });
}

for (const box of boxes) {
  box.addEventListener('click', function() {
    
    box.classList.remove("colored");
  });
}

// function paintIt() {
//     var element = document.getElementsByClassName");
//     element.classList.add("mystyle");
//   }
