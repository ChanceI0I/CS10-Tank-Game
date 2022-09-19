
function draw() {

    ClearCanvas();

    DrawTanks(Tank.x=50,Tank.y=50)
    RotateImage(Tank.x, Tank.y)
 
    requestAnimationFrame(draw)
}
requestAnimationFrame(draw);

