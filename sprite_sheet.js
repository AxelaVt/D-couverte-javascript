// sprite sheet management

var x = width / 2;
var r = 136;
var step = 0;
var width = window.innerWidth;
var height = window.innerHeight;
var ratio = window.devicePixelRatio;
var sprites = new Image();
sprites.onload = animate;
sprites.src = "kisspng-sprite-angry-bird.png";

var canvas = document.createElement("canvas");
document.getElementsByClassName("pion")[0].appendChild(canvas);
canvas.id = "canvas";
canvas.width = width * ratio;
canvas.height = height * ratio;
canvas.style.width = width + "px";
canvas.style.height = width + "px";
context.scale(ratio,ratio);
context.imageSmoothingEnabled = false;

function animate(){
  draw();
  update();
  requestAnimationFrame(animate);
}

function draw(){
  context.clearRect(0,0,width,height)
  drawBird(x, height,r);
}

function drawBird (x,y,r, step){  //257*272 px
  var s = r/12;
  context.drawImage(sprites, 0*step,0*step,257,272,x-128*s,y-272*s,257*s,272*s);
}

function update(){
step = step + 0.33
  if (step >= 16) {
    step = 16 - step;
  }
}
