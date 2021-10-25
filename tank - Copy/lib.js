function drawtank() {
    
    ctx.drawImage(tank.img, tank.x, tank.y, tank.size, tank.size);

    if (tank.tank_move_up) {
        tank.img = tank.up_img;
    } else if (tank.tank_move_down) {
        tank.img = tank.down_img;
    } else if (tank.tank_move_left) {
        tank.img = tank.left_img;
    } else if (tank.tank_move_right) {
        tank.img = tank.right_img;
    }
    
    if (tank.tank_move_up) {
        if (tank.y > 0) {
            tank.y -= tank.speed;
        }
    } else if (tank.tank_move_down) {
        if (tank.y + tank.size < canvas.height) {
            tank.y += tank.speed;
        }
    } else if (tank.tank_move_right) {
        if (tank.x + tank.size < canvas.width) {
            tank.x += tank.speed;
        }
    } else if (tank.tank_move_left) {
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
    // console.log("fire")

  

    // console.log(tank.img)
    // console.log(tank.muzzle_x, tank.muzzle_y)
    // console.log(bullet.x, bullet.y, bullet.speed)
    // console.log(bullet.width, bullet.length)

    // if (tank.img === tank.up_img) {
    //     function bullet_move_up() {
    //         ctx.fillStyle = bullet.color;
    //         ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.length);
    //         bullet.y -= bullet.speed
    //         requestAnimationFrame(bullet_move_up);
    //     }
    //     requestAnimationFrame(bullet_move_up);
    // }
    

    
    if (tank.img === tank.up_img) {
        console.log("up")
        // ctx.moveTo(tank.muzzle_x, tank.muzzle_y)
        bullet.x = tank.muzzle_x;
        bullet.y = tank.muzzle_y;
        function bullet_move_up() {
            ctx.fillStyle = bullet.color;
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.length);
            bullet.y -= bullet.speed;
            requestAnimationFrame(bullet_move_up);
        }
        requestAnimationFrame(bullet_move_up);
    } else if (tank.img === tank.down_img) {
            console.log("down")
            // ctx.moveTo(tank.muzzle_x, tank.muzzle_y)
            bullet.x = tank.muzzle_x;
            bullet.y = tank.muzzle_y;
            function bullet_move_down() {
                ctx.fillStyle = bullet.color;
                ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.length);
                bullet.y += bullet.speed;
            requestAnimationFrame(bullet_move_down);
        }
        requestAnimationFrame(bullet_move_down);
    } else if (tank.img === tank.left_img) {
            console.log("left")
            // ctx.moveTo(tank.muzzle_x, tank.muzzle_y)
            bullet.x = tank.muzzle_x;
            bullet.y = tank.muzzle_y;
            function bullet_move_left() {
                ctx.fillStyle = bullet.color;
                ctx.fillRect(bullet.x, bullet.y, bullet.length, bullet.width);
                bullet.x -= bullet.speed;
            requestAnimationFrame(bullet_move_left);
        }
        requestAnimationFrame(bullet_move_left);
    } else if (tank.img === tank.right_img) {
            console.log("right")
            // ctx.moveTo(tank.muzzle_x, tank.muzzle_y)
            bullet.x = tank.muzzle_x;
            bullet.y = tank.muzzle_y;
            function bullet_move_right() {
                ctx.fillStyle = bullet.color;
                ctx.fillRect(bullet.x, bullet.y, bullet.length, bullet.width);
                bullet.x += bullet.speed;
        requestAnimationFrame(bullet_move_right);
    }
    requestAnimationFrame(bullet_move_right);
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
    
    length : 7,
    width : 2,
    color : "red",
    speed : 3,
    fire : false,

    x : tank.muzzle_x,
    y : tank.muzzle_y,
}
