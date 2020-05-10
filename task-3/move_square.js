// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();
const moves = {
    '97': moveLeft,
    '115': moveDown,
    '119': moveUp,
    '100': moveRight
};

function generateElements(count) {
    const container = document.querySelector(".container");
    for(let i=0; i<count;i++){
        for(let j=0;j<count;j++){
            let element = document.createElement("div");
            element.className = "square";
            container.appendChild(element);
        }
    }
    // event handlers and other code here
}

generateElements();
