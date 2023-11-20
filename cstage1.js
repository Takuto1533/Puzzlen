function gostage1(){
    document.querySelector("#game").style.display = "none"; 
    document.querySelector("#stage1").style.display = "block";
}

function backstage1(){
    document.querySelector("#stage1").style.display = "none";
    document.querySelector("#game").style.display = "block";
}

var ban = [
    [0, 0, 0, 0, 0, 0],
    [0, 2, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0]
];
var ctx;
var white;
var masu;
var goal;
var komaG;

var posx;
var posy;

white = new Image();
white.src = "white.png"; 
masu = new Image();
masu.src = "masu.png";
goal = new Image();
goal.src = "goal.png";
komaG = new Image();
komaG.src = "komaG.png";

function init() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.setAttribute("tabindex", 0);
    canvas.addEventListener("keydown", Onkeydown, false);

    posx = 4; posy = 2;
    ban[posy][posx] = 4;
    mkban();
}

function mkban() {
    var x; 
    var y;
    for (y = 0; y < 4; y++) {
        for (x = 0; x < 6; x++) {
            if (ban[y][x] == 0) ctx.drawImage(white, x*100, y*100);
            if (ban[y][x] == 1 || ban[y][x] == 5) ctx.drawImage(masu, x*100, y*100);
            if (ban[y][x] == 2) ctx.drawImage(goal, x*100, y*100);
            if (ban[y][x] == 3 || ban[y][x] == 4) ctx.drawImage(komaG, x*100, y*100);
        }
    }
 
}

function Onkeydown(e) {
    console.log('##');
    if (e.key === 'ArrowRight') {
        if (ban[posy][posx + 1] == 1 || ban[posy][posx - 1] == 2) {
            ban[posy][posx] -= 3;
            posx++;
            ban[posy][posx] += 3;
        }       
    }
    if (e.key === 'ArrowLeft') {
        if (ban[posy][posx - 1] == 1 || ban[posy][posx - 1] == 2 ) {
            ban[posy][posx] -= 3;
            posx--;
            ban[posy][posx] += 3;
        } 
    }
    if (e.key === 'ArrowUp') {
        if (ban[posy - 1][posx] == 1 || ban[posy - 1][posx] == 2 ) {
            ban[posy][posx] -= 3;
            posy--;
            ban[posy][posx] += 3;
        } 
    }
    if (e.key === 'ArrowDown') {
        if (ban[posy + 1][posx] == 1 || ban[posy + 1][posx] == 2 ) {
            ban[posy][posx] -= 3;
            posy++;
            ban[posy][posx] += 3;
        } 
    }    
    mkban();
    chkclear();
}

function chkclear() {
    var x;
    var y;
    var count = 0;
    for (y = 0; y < 4; y++) {
        for (x = 0; x < 6; x++) {
            if (ban[y][x] == 2) 
            count++;
        }  
    }
    if (count == 0) {
        ctx.fillStyle = "red";
        ctx.font = "50px serif";
        ctx.fillText("ステージ　クリア", 100, 100);
    }
 } 

