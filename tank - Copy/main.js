let canvas = document.getElementById("draw");
let ctx = canvas.getContext("2d");

document.addEventListener("keydown", key_down, false);
document.addEventListener("keyup", key_up, false);

function key_down(event) {
    if (event.code == "KeyW") {
        tank.tank_move_up = true;
    } else if (event.code == "KeyS") {
        tank.tank_move_down = true;
    } else if (event.code == "KeyA") {
        tank.tank_move_left = true;
    } else if (event.code == "KeyD") {
        tank.tank_move_right = true;
    }

    if (event.code == "KeyJ") {
        draw_bullet();
    }
}

function key_up(event) {

    if (event.code == "KeyW") {
        tank.tank_move_up = false;
    } else if (event.code == "KeyS") {
        tank.tank_move_down = false;
    } else if (event.code == "KeyA") {
        tank.tank_move_left = false;
    } else if (event.code == "KeyD") {
        tank.tank_move_right = false;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawtank();
    locate_muzzle();

    
    // enemy_tank_move();
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);