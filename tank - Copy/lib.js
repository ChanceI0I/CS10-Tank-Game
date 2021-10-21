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

function drawtank() {
    ctx.drawImage(tank_img, tank.x, tank.y, tank.size, tank.size);

    if (tank_move_up) {
        tank_img = tank.up_img;
    } else if (tank_move_down) {
        tank_img = tank.down_img;
    } else if (tank_move_left) {
        tank_img = tank.left_img;
    } else if (tank_move_right) {
        tank_img = tank.right_img;
    }
    
    if (tank_move_up) {
        if (tank.y > 0) {
            tank.y -= tank.speed;
        }
    } else if (tank_move_down) {
        if (tank.y + tank.size < canvas.height) {
            tank.y += tank.speed;
        }
    } else if (tank_move_right) {
        if (tank.x + tank.size < canvas.width) {
            tank.x += tank_speed;
        }
    } else if (tank_move_left) {
        if (tank.x > 0) {
            tank.x -= tank.speed;
        }
    }
}

function locate_muzzle() {
    if (tank.img === tank.up_img) {
        tank.muzzle_x = tank.x + tank.size/2;
        tank.muzzle_y = tank.y - 2;
    } else if (tank.img === tank.down_img) {
        tank.muzzle_x = tank.x + tank.size/2 - 2;
        tank.muzzle_y = tank.y + tank.size;
    } else if (tank.img === tank.left_img) {
        tank.muzzle_x = tank.x;
        tank.muzzle_y = tank.y + tank.size/2 -2;
    } else if (tank.img === tank.right_img) {
       tank.muzzle_x = tank.x + tank.size;
       tank.muzzle_y = tank.y + tank.size/2 - 2;
    }

}

function draw_bullet() {
    
    //make sure the direction of the bullet is correct
    if (tank.img === tank.up_img || tank.img === tank.down_img) {
        bullet.bullet_img = bullet.up_down_img;
    } else if (tank.img === tank.left_img || tank.img === tank.right_img) {
        bullet.bullet_img = bullet.left_right_img;
    }

    //locate where this muzzle is, and let the bullet shoot from the muzzle
    locate_muzzle()
    
    bullet.y = tank.muzzle_y;
    bullet.x = tank.muzzle_x;
    console.clear()
    if (tank.img === tank.up_img) {
        for (let i = 0; i < canvas.height; i += bullet.speed) {
            ctx.drawImage(bullet.bullet_img, bullet.x, bullet.y, bullet.width, bullet.length);
            bullet.y -= bullet.speed;
            
            console.log(bullet.y, bullet.x)
        }
    }
}

const tank = {
    up_img : document.getElementById("tank_up"),
    down_img : document.getElementById("tank_down"),
    left_img : document.getElementById("tank_left"),
    right_img : document.getElementById("tank_right"),
    img : document.getElementById("tank_up"),

    tank_move_up : false,
    tank_move_down : false,
    tank_move_right : false,
    tank_move_left : false,

    size : 35,
    speed : 2,
    x : 20,
    y : 20,
    muzzle_x : 0,
    muzzle_y : 0,
}

const bullet = {
    up_down_img : document.getElementById("bullet_up_down"),
    left_right_img : document.getElementById("bullet_left_right"),
    bullet_img : document.getElementById("bullet_up_down"),

    length : 5,
    width : 2,
    color : "black",
    speed : 2,
    fire : false,

    x : tank.muzzle_x,
    y : tank.muzzle_y,
}