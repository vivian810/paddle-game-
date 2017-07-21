# paddle-game-
//canvas creater
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var y = 0;
var x = 0;
var paddleX = 202.5;
var score= 0;

var rightPressed= false;
var leftPressed= false;



document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(e){
  if(e.keyCode == 39){
    rightPressed = true;

  }
  if(e.keyCode == 37){
    leftPressed = true;
  }
}

function keyUpHandler(e){
  if(e.keyCode == 39){
    rightPressed = false;

  }
  if(e.keyCode == 37){
    leftPressed = false;
  }
}

function draw(){
  ctx.clearRect(0,0,480,320);
  //draw circle
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#90EE90";
  ctx.fill();
  ctx.closePath();

  //draw paddle
  ctx.beginPath();
  ctx.rect(paddleX,315,80,10);
  ctx.fillStyle ="#32CD32";
  ctx.fill();
  ctx.closePath();

  //draw the score
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("Score:" +score, 0, 20);

  y += 2;

  if ((y > 310 ) && ((x > paddleX)&& (x < paddleX + 80))){
    y = 0;
    x = Math.random() * (canvas.height);
      score++;
  }

  if(rightPressed){
    paddleX += 7
    if (paddleX>480)
    {
      paddleX = 0;
    }
  }

  if(leftPressed){
    paddleX -=7
    if (paddleX < 0)
    {
      paddleX = 480;
    }
  }

  if (y>320){
    y=0
    x= Math.random() *(canvas.height);
  }
}

setInterval(draw, 10);
