const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);

    } else {
        ctx.lineTo(x, y);
        ctx.stroke() // 마우스 움직이는 내내 발생.
    }
}

function onMousedown(event){
    painting = true;
}




if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting); // 누를 때
    canvas.addEventListener("mouseup", stopPainting); // 놓을 때
    canvas.addEventListener("mouseleave", stopPainting);
}

// clientX,Y : 윈도우 전체의 범위 내에서 마우스 위치값.
// offsetX,Y : 설정한 canvas 범위 내에서 마우스 위치값.