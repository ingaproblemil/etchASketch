const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        };
};

const clearBtn = document.getElementById('clear-btn');
const resetBtn= document.getElementById('reset');


function rowNum() {
  let antal = prompt("Hur många då?")
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
  clearBtn.addEventListener('click', function() {
    box.classList.remove("colored");
  })
};

resetBtn.addEventListener('click', function() {
  window.location.reload();
})



