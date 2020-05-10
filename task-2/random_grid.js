
function main() {
    let table10 = document.createElement("table");
    table10.setAttribute('class', 'table10');
    document.querySelector(".container").appendChild(table10);
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("row");
        row.setAttribute('class', `row${i}`);
        document.querySelector(".table10").appendChild(row);
        let currentRow;
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement("td");
            cell.setAttribute('class', 'cell');
            cell.innerHTML = '<div class="active">[ ]</div>';
            currentRow = 'row' + i;
            document.querySelector(`.${currentRow}`).appendChild(cell);
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    let allCells = document.querySelectorAll(".active");
    let step = 500;
    for (let i = 0; i < 100; i++) {
        delay(step).then(() => allCells[i].setAttribute('class', '.inactive'));
        step += 500;
    }
}

main();


//second solution 

function switchCellColor() {
    // event handlers and other code here 
    const cells = document.getElementsByClassName("cell");
    setInterval(function () {
        let random = Math.floor(Math.random() * (cells.length));
        cells[random].classList.add("active");
        setTimeout(() => setActive(cells, random), 500)
        // cells[random].className -= " active";
        // delete cells[random].className;
    }, 500);
}

function setActive(cells, random) {
    cells[random].classList.remove("active");
}

function generateGrid(width, height) {
    let container = document.querySelector('.container');

    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        for (let j = 1; j <= width; j++) {
            let cell = document.createElement('div');
            cell.className = "cell";
            cell.textContent = (i * height) + j;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

generateGrid(10, 10);
switchCellColor();