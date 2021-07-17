const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(e) {
    const x = e.offestX;
    const y = e.offestY;
}

function onMouseDown(e) {
    painting = true;
}

//@todo edit
function onMouseUp(e) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}