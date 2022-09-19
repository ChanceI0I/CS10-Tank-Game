let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");



const Tank = {
    img : document.getElementById("tank_up"),
    size : 35,
}

function ClearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function RotateImage(x, y, width, height, angle){
    ctx.translate(x+width/2, y+height/2);
    ctx.rotate(angle);
    ctx.translate(-(x+width/2), -(y+height/2));
}

function DrawTanks(x, y, size = Tank.size, image = Tank.img) {
    ctx.drawImage(image, x, y, size, size)
}