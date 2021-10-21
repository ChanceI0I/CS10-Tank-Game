let canvas = document.getElementById("draw");
let ctx = canvas.getContext("2d");
// let tank_up = document.getElementById("tank_up");
// let tank = tank_up;
// let tank_down = document.getElementById("tank_down");
// let tank_left = document.getElementById("tank_left");
// let tank_right = document.getElementById("tank_right");
// let tank_x = 20;
// let tank_y = 20;
// let tank_move_up = false;
// let tank_move_down = false;
// let tank_move_right = false;
// let tank_move_left = false;
// let tank_speed = 2;
// let tank_size = 35;

// let bullet_size = 15;
// let bullet_up_down = document.getElementById("bullet_up_down");
// let bullet_left_right = document.getElementById("bullet_left_right");
// let fire = false;
// let bullet;
// let muzzle_x;
// let muzzle_y;
// let bullet_y;
// let bullet_x;
// let bullet_width = 2;
// let bullet_height = 5;
// let bullet_speed = 0.1;

// let enemy_target = document.getElementById("enemy_target");
// let enemy_explode = document.getElementById("enemy_explode");
// let enemy_x = Math.random() * 1000;
// let enemy_y = Math.random() * 1000;
// let enemy_size = 30;
// let enemy_pic = enemy_target;
// let enemy_dead = false;

document.addEventListener("keydown", key_down, false);
document.addEventListener("keyup", key_up, false);

key_down(event);
key_up(event);
drawtank();
locate_muzzle(); 
draw_bullet();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawtank();
}
setInterval(draw, 10);