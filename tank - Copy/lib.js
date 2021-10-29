let up = 0, down = 0, left = 0, right = 0;
let raf;
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

function locate_bullet() {
    bullet.x = tank.muzzle_x;
    bullet.y = tank.muzzle_y;
}



function draw_bullet() {
    
    function reset_animation() {
        cancelAnimationFrame(raf);
    }
    
    if (tank.img === tank.up_img) {
        reset_animation();
        locate_bullet();
        function bullet_move_up() {
            ctx.fillStyle = bullet.color;
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.length);
            bullet.y -= bullet.speed;
            raf = requestAnimationFrame(bullet_move_up);  
        }
        raf = requestAnimationFrame(bullet_move_up);
        
    } else if (tank.img === tank.down_img) {  
        reset_animation();
        locate_bullet();
        function bullet_move_down() {
            ctx.fillStyle = bullet.color;
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.length);
            bullet.y += bullet.speed;
            raf = requestAnimationFrame(bullet_move_down);
        }
        raf = requestAnimationFrame(bullet_move_down);
        
    } else if (tank.img === tank.left_img) {
        reset_animation();
        locate_bullet();
        function bullet_move_left() {
            ctx.fillStyle = bullet.color;
            ctx.fillRect(bullet.x, bullet.y, bullet.length, bullet.width);
            bullet.x -= bullet.speed;
            raf = requestAnimationFrame(bullet_move_left);
        }
        raf = requestAnimationFrame(bullet_move_left);

    } else if (tank.img === tank.right_img) {
        reset_animation();
        locate_bullet();
        function bullet_move_right() {
            ctx.fillStyle = bullet.color;
            ctx.fillRect(bullet.x, bullet.y, bullet.length, bullet.width);
            bullet.x += bullet.speed;
            raf = requestAnimationFrame(bullet_move_right);
        }
        raf = requestAnimationFrame(bullet_move_right);
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

    x : 0,
    y : 0,    
}

const enemy_tank = {
    up_img : document.getElementById("enemy_tank_up"),
    down_img : document.getElementById("enemy_tank_down"),
    left_img : document.getElementById("enemy_tank_left"),
    right_img : document.getElementById("enemy_tank_right"),
    img : document.getElementById("enemy_tank_up"),

    tank_move_up : false,
    tank_move_down : false,
    tank_move_right : false,
    tank_move_left : false,

    size : 35,
    speed : 1,
    x : 300,
    y : 300,
}

function choose_direction() {
    let num = Math.random();

    console.log(num)
    console.log("up: ", enemy_tank.tank_move_up, "down: ", enemy_tank.tank_move_down, "left: ", enemy_tank.tank_move_left, "right: ",enemy_tank.tank_move_right)

    if (0 < num && num <= 0.25) {
        enemy_tank.tank_move_up = true;
        enemy_tank.tank_move_down = false;
        enemy_tank.tank_move_left = false;
        enemy_tank.tank_move_right = false;
        up ++;
    } else if (0.25 < num && num <= 0.50 ) {
        enemy_tank.tank_move_up = false;
        enemy_tank.tank_move_down = true;
        enemy_tank.tank_move_left = false;
        enemy_tank.tank_move_right = false;
        down ++;
    } else if (0.50 < num && num <= 0.75) {
        enemy_tank.tank_move_up = false;
        enemy_tank.tank_move_down = false;
        enemy_tank.tank_move_left = true;
        enemy_tank.tank_move_right = false;
        left ++;
    } else if (0.75 < num && num <= 1.00) {
        enemy_tank.tank_move_up = false;
        enemy_tank.tank_move_down = false;
        enemy_tank.tank_move_left = false;
        enemy_tank.tank_move_right = true;
        right ++;
    }
    console.log("up: ", up, "down: ", down, "left: ", left, "right", right)

}


function enemy_tank_move() {
    ctx.drawImage(enemy_tank.img, enemy_tank.x, enemy_tank.y, enemy_tank.size, enemy_tank.size);

    choose_direction();
    let num = (Math.random())*5000
    console.log(num)
    if (enemy_tank.tank_move_up) {
        enemy_tank.img = enemy_tank.up_img;
        if (enemy_tank.y > 0) {
            setTimeout(function(){cancelAnimationFrame(raf)}, num)
            function move_up() {
                enemy_tank.y -= enemy_tank.speed;
                raf = requestAnimationFrame(move_up);
            }
            raf = requestAnimationFrame(move_up);
            
        } else {
            choose_direction();
        }
    } else if (enemy_tank.tank_move_down) {
        enemy_tank.img = enemy_tank.up_img;
        if (enemy_tank.y + enemy_tank.size < canvas.height) {
            setTimeout(function(){cancelAnimationFrame(raf)}, num)
            function move_down() {
                enemy_tank.y += enemy_tank.speed;
                raf = requestAnimationFrame(move_down);
            }
            raf = requestAnimationFrame(move_down);
            
        } else {
            choose_direction();
        }
    } else if (enemy_tank.tank_move_right) {
        enemy_tank.img = enemy_tank.right_img;
        if (enemy_tank.x + enemy_tank.size < canvas.width) {
            setTimeout(function(){cancelAnimationFrame(raf)}, num)
            function move_right() {
                enemy_tank.x += enemy_tank.speed;
                raf = requestAnimationFrame(move_right);
            }
            raf = requestAnimationFrame(move_right);
            
        } else {
            choose_direction()
        }
    } else if (enemy_tank.tank_move_left) {
        enemy_tank.img = enemy_tank.left_img;
        if (enemy_tank.x > 0) {
            setTimeout(function(){cancelAnimationFrame(raf)}, num)
            function move_left() {
                enemy_tank.x -= enemy_tank.speed;
                raf = requestAnimationFrame(move_left);
            }
            raf = requestAnimationFrame(move_left);
            
        } else {
            choose_direction()
        }
    }

}