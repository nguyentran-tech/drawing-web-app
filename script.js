const canvas = document.querySelector('canvas'),
toolBtns = document.querySelectorAll('.tool'),
ctx = canvas.getContext('2d');

// global variables with default value
let prevMouseX, prevMouseY,
isDrawing = false,
selectedTool = 'brush',
brushWidth = 5;

window.addEventListener('load', () => {
    // setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const drawRect = (e) => {
    // ctx.strokeRect(e.offsetX, e.offsetY);
}

const startDraw = () => {
    isDrawing = true;
    prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value
    prevMouseY = e.offsetY; // passing mouseY as prevMouseY
    ctx.beginPath(); // creating new path to draw
    ctx.lineWidth = brushWidth; // passing brushsize as line width
}

const drawing = (e) => {
    if (!isDrawing) return; // if isDrawing is false, return from here

    if (selectedTool === "brush") {
        ctx.lineTo(e.offsetX, e.offsetY); // create line according to the mouse pointer
        ctx.stroke(); // drawing/filling line with color
    } else if (selectedTool === "rectangle") {
        drawRect(e)
    }
}

toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove active class from the previous option and adding on current clicked option
        document.querySelector('.options .active').classList.remove('active');
        btn.classList.add('active');
        selectedTool = btn.id;
        console.log(selectedTool);
    })
})

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () => isDrawing = false);