
const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;

const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;

var pion = document.getElementById('pion');
var stylePion = pion.style;
var x = pion.offsetLeft;
var y = pion.offsetTop;

var ennemi = document.getElementsByClassName('ennemi');
var styleEnnemi = ennemi.style;
var xEnnemi = ennemi.offsetLeft;
var yEnnemi = ennemi.offsetTop;
var direction = "right";

var blockGrid = [];
for(var i = 0; i < H_GRID; i++){
  blockGrid.push([]);

  for(var j = 0; j < V_GRID; j++){
    let block = document.createElement("div");
    block.style.width = "40px";
    block.style.height = "40px";
    block.style.display = "flex";
    block.style.position = "absolute";

    if (random100() > 80){
      block.style.backgroundColor = "black";  //si supérieur à 90, passer le fond en noir,c'est un mur on ne peut pas le traverser
      //block.style.backgroundImage = 'url("")';
      block.setAttribute("class", "wall");
      block.traverser = false;

    } else if (random100() > 70) {
      block.style.backgroundColor = "#ff9800";
      //block.style.backgroundImage = 'url("")';
      block.setAttribute("class", "breakableWall");
      block.traverser = false;
    }
    else {
      block.style.backgroundColor = "green";  //sinon fond en vert on peut le traverser
      //block.style.backgroundImage = 'url("")';
      block.traverser = true;
    }

    block.style.marginLeft = (i * GRID_SIZE).toString()+"px";  //  GRID_SIZE = 40
    block.style.marginTop = (j * GRID_SIZE).toString()+"px";

    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);

  }
}
// blockGrid[0][0].style.backgroundColor = "green";
// blockGrid[0][0].block.traverser = true;
// blockGrid[1][1].style.backgroundColor = "green";
// blockGrid[1][1].block.traverser = true;
// blockGrid[1][0].style.backgroundColor = "green";
// blockGrid[1][0].block.traverser = true;

var ennemi = [];
for(var i = 0; i < 10; i++){  //10 = nb d'ennemi à créer
    ennemi.push([]);
    let blockEnnemi = document.createElement("div");
    blockEnnemi.style.width = "40px";
    blockEnnemi.style.height = "40px";
    blockEnnemi.style.display = "flex";
    blockEnnemi.style.position = "absolute";
    blockEnnemi.style.backgroundColor = "red";
    blockEnnemi.setAttribute("class", "ennemi");

    var styleEnnemi = ennemi.style;
    //generer deux coordonées aléatoires
    posX = getRandomInt(WINDOW_WIDTH - GRID_SIZE);
    posY = getRandomInt(WINDOW_HEIGHT - GRID_SIZE);
    console.log(posX);
    console.log(posY);

    var wallX = document.getElementsByClassName("wall").offsetLeft;
    var wallY = document.getElementsByClassName("wall").offsetTop;
    var breakableWallX = document.getElementsByClassName("breakableWall").offsetLeft;
    var breakableWallY = document.getElementsByClassName("breakableWall").offsetTop;


      while (((posX + GRID_SIZE) === wallX) && ((posY + GRID_SIZE) === wallY)){
        posX = getRandomInt(WINDOW_WIDTH - GRID_SIZE);
        posY = getRandomInt(WINDOW_HEIGHT - GRID_SIZE);
      }
      posX = posX;
      posY = posY;


      while ( ((posX + GRID_SIZE) === breakableWallX) && ((posY + GRID_SIZE) === breakableWallY) ){
        posX = getRandomInt(WINDOW_WIDTH - GRID_SIZE);
        posY = getRandomInt(WINDOW_HEIGHT - GRID_SIZE);
      }
      posX = posX;
      posY = posY;


    blockEnnemi.style.marginLeft = (posX).toString()+"px";
    blockEnnemi.style.marginTop = (posY).toString()+"px";
    document.getElementById("plateau").appendChild(blockEnnemi);

    ennemi[i].push(blockEnnemi);
    console.log(ennemi);

 }




var frame = 0;
function loop(){  //60x par seconde
  //console.log("test");
  if (frame === 60) {
    switch(direction){
      case "left":
        if (yEnnemi > 0 && blockGrid[xEnnemi][yEnnemi-1].traverser)
        yEnnemi--;
        break;
      case "right":
        if (xEnnemi < H_GRID-1 && blockGrid[xEnnemi+1][yEnnemi].traverser)
        xEnnemi++;
        break;
      case "up":
        if (yEnnemi < V_GRID-1 && blockGrid[xEnnemi][yEnnemi+1].traverser)
        yEnnemi++;
        break;
      case "down":
        if (xEnnemi > 0 && blockGrid[xEnnemi-1][yEnnemi].traverser)
        xEnnemi--;
        break;
    }

    styleEnnemi.left = String(xEnnemi * GRID_SIZE) + 'px';
    styleEnnemi.top = String(yEnnemi * GRID_SIZE) + 'px';

    let random = random100();

      if (random < 25) {
        direction = "left";
      }

      if (random >= 25 && random < 50) {
        direction = "right";
      }

      if (random >= 50 && random < 75) {
        direction = "up";
      }

      if (random > 75) {
        direction = "down";
      }

      frame = 0;
    }
  frame++;
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);

//pawn movement management
document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;
  switch(keyCode){
    case 38:
      if (y > 0 && blockGrid[x][y-1].traverser)
      y--; // ou y-=40;
      break;
    case 39:  //right
      if (x < H_GRID-1 && blockGrid[x+1][y].traverser)
      x++;
      break;
    case 40:
      if (y < V_GRID-1 && blockGrid[x][y+1].traverser)
      y++;
      break;
    case 37:   //left
      if (x > 0 && blockGrid[x-1][y].traverser)
      x--;
      break;
  }
  stylePion.left = String(x * GRID_SIZE) + 'px';
  stylePion.top = String(y * GRID_SIZE) + 'px';
}

function randomColor(){
  return "#" + ((1<<24)*Math.random()|0).toString(16);
}

function random100() {
  return Math.floor(Math.random() * 100);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
