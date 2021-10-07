let canvas = document.getElementById("draw");
let ctx = canvas.getContext("2d");
let tank_up = document.getElementById("tank_up");
let tank = tank_up;
let tank_down = document.getElementById("tank_down");
let tank_left = document.getElementById("tank_left");
let tank_right = document.getElementById("tank_right");
let tank_x = 20;
let tank_y = 20;
let tank_move_up = false;
let tank_move_down = false;
let tank_move_right = false;
let tank_move_left = false;
let tank_speed = 2;
let tank_size = 35;

let bullet_size = 15;
let bullet_up_down = document.getElementById("bullet_up_down");
let bullet_left_right = document.getElementById("bullet_left_right");
let fire = false;
let bullet;
let muzzle_x;
let muzzle_y;
let bullet_y;
let bullet_x;
let bullet_width = 2;
let bullet_height = 5;
let bullet_speed = 0.5;

document.addEventListener("keydown", key_down, false);
document.addEventListener("keyup", key_up, false);
document.addEventListener("keypress", key, false);

function key_down(event) {
    if (event.code == "KeyW") {
        tank_move_up = true;
    } else if (event.code == "KeyS") {
        tank_move_down = true;
    } else if (event.code == "KeyA") {
        tank_move_left = true;
    } else if (event.code == "KeyD") {
        tank_move_right = true;
    }
}

// when you press "j" the tank should fire
function key(event) {
    if (event.code == "KeyJ") {
        draw_bullet();
        
        // bullet movement (where the problem is)
        function bullet_move() {
            if (tank === tank_up) {
                // for (i = 0; i < canvas.height ; i += bullet_speed) {
                //     bullet_y -= bullet_speed;
                // } 
                bullet_y -= bullet_speed;
            } else if (tank === tank_down) {
                // for (i = 0; i < canvas.height ; i += bullet_speed) {
                //     bullet_y += bullet_speed; 
                // } 
                bullet_y += bullet_speed;
            } else if (tank === tank_left) {
                // for (i = 0; i < canvas.width ; i += bullet_speed) {
                //     bullet_x -= bullet_speed;
                // } 
                bullet_x -= bullet_speed;
            } else if (tank === tank_right) {
                // for (i = 0; i < canvas.width ; i += bullet_speed) {
                //     bullet_x += bullet_speed;
                // } 
                bullet_x += bullet_speed;
            }
        }
        setInterval(bullet_move, 10)                          
    }
}

function key_up(event) {

    if (event.code == "KeyW") {
        tank_move_up = false;
    } else if (event.code == "KeyS") {
        tank_move_down = false;
    } else if (event.code == "KeyA") {
        tank_move_left = false;
    } else if (event.code == "KeyD") {
        tank_move_right = false;
    }
}

function drawtank() {
    ctx.drawImage(tank, tank_x, tank_y, tank_size, tank_size);

    if (tank_move_up) {
        tank = tank_up;
    } else if (tank_move_down) {
        tank = tank_down;
    } else if (tank_move_left) {
        tank = tank_left;
    } else if (tank_move_right) {
        tank = tank_right;
    }
    
    if (tank_move_up) {
        if (tank_y > 0) {
            tank_y -= tank_speed;
        }
    } else if (tank_move_down) {
        if (tank_y + tank_size < canvas.height) {
            tank_y += tank_speed;
        }
    } else if (tank_move_right) {
        if (tank_x + tank_size < canvas.width) {
            tank_x += tank_speed;
        }
    } else if (tank_move_left) {
        if (tank_x > 0) {
            tank_x -= tank_speed;
        }
    }
}

function locate_muzzle() {
    if (tank === tank_up) {
        muzzle_x = tank_x + tank_size/2;
        muzzle_y = tank_y - 2;
    } else if (tank === tank_down) {
        muzzle_x = tank_x + tank_size/2 - 2;
        muzzle_y = tank_y + tank_size;
    } else if (tank === tank_left) {
        muzzle_x = tank_x;
        muzzle_y = tank_y + tank_size/2 -2;
    } else if (tank === tank_right) {
       muzzle_x = tank_x + tank_size;
       muzzle_y = tank_y + tank_size/2 - 2;
    }

    bullet_y = muzzle_y;
    bullet_x = muzzle_x;
}

function draw_bullet() {
    
    //make sure the direction of the bullet is correct
    if (tank === tank_up || tank === tank_down) {
        bullet = bullet_up_down;
    } else if (tank === tank_left || tank === tank_right) {
        bullet = bullet_left_right;
    }

    //locate where this muzzle is, and let the bullet shoot from the muzzle
    locate_muzzle()
   
    ctx.drawImage(bullet, bullet_x, bullet_y,);

    // if (tank === tank_up) {
    //     if (bullet_x > 0 || bullet_x < ctx.width || bullet_y > 0 || bullet_y < ctx.height) {
    //         bullet_y -= bullet_speed;
    //     }
    // } else if (tank === tank_down) {
    //     if (bullet_x > 0 || bullet_x < ctx.width || bullet_y > 0 || bullet_y < ctx.height) {
    //         bullet_y += bullet_speed; 
    //     }
    // } else if (tank === tank_left) {
    //     if (bullet_x > 0 || bullet_x < ctx.width || bullet_y > 0 || bullet_y < ctx.height) {
    //         bullet_x -= bullet_speed;
    //     }
    // } else if (tank === tank_right) {
    //     if (bullet_x > 0 || bullet_x < ctx.width || bullet_y > 0 || bullet_y < ctx.height) {
    //         bullet_x += bullet_speed;
    //     }
    // }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawtank();
}
setInterval(draw, 10);
