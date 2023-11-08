function gostage1(){
    document.querySelector("#game").style.display = "none"; 
    document.querySelector("#stage1").style.display = "block";
}

function backstage1(){
    document.querySelector("#stage1").style.display = "none";
    document.querySelector("#game").style.display = "block";
}

var ban = [
    [0, 0, 0, 0],
    [2, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0]
];
var ctx;
var masu;
var goal;
function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    mkban();
}

masu = new Image();
masu.src = "masu.png";
goal = new Image();
goal.src = "goal.png";
function mkban() {
    var i; 
    var j;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (ban[j][i] == 1) ctx.drawImage(masu, i*100, j*100);
            if (ban[j][i] == 2) ctx.drawImage(goal, i*100, j*100);
        }
    }
 
}