
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
    // else if (random100() > 96) {
    //   block.style.backgroundColor = "red";
    //   //block.style.backgroundImage = 'url("")';
    //   block.setAttribute("class", "ennemi");
    //   block.traverser = false;
    // }
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
blockGrid[0][0].style.backgroundColor = "green";
//blockGrid[0][0].block.traverser = true;
blockGrid[1][1].style.backgroundColor = "green";
//blockGrid[1][1].block.traverser = true;
blockGrid[1][0].style.backgroundColor = "green";
//blockGrid[1][0].block.traverser = true;

var blockEnnemi = [];
for(var i = 0; i < 10; i++){  //10 = nb d'ennemi à créer
    blockEnnemi.push([]);
    let ennemi = document.createElement("div");
    ennemi.style.width = "40px";
    ennemi.style.height = "40px";
    ennemi.style.display = "flex";
    ennemi.style.position = "absolute";
    ennemi.style.backgroundColor = "red";
    //ennemi.style.backgroundImage = 'url("")';
    ennemi.setAttribute("class", "ennemi");

    var styleEnnemi = ennemi.style;
    //generer deux coordonées aléatoires
    posX = getRandomInt(WINDOW_WIDTH - GRID_SIZE);
    posY = getRandomInt(WINDOW_HEIGHT - GRID_SIZE);
    console.log(posX);
    console.log(posY);
    //recup les positions des walls et breackablewalls
    var wallXY = document.getElementsByClassName("wall");
    var breakableWallXY = document.getElementsByClassName("breakableWall");
    // recup seulemnt des données de position
    var wallX = [];
    var wallY = [];
    var breakableWallX = [];
    var breakableWallY = [];
    for(i = 0; i < wallXY.length; i++)	{
    	wallX += " , " + wallXY[i].offsetLeft;
      wallY += " , " + wallXY[i].offsetTop;
    }
    for(i = 0; i < breakableWallXY.length; i++)	{
      breakableWallX += " , " + breakableWallXY[i].offsetLeft;
      breakableWallY += " , " + breakableWallXY[i].offsetTop;
    }

    console.log(wallX);
    console.log(wallY);
    console.log(breakableWallX);
    console.log(breakableWallY);

    // compare les données de position des wall et de l'ennemi
    for (var i = 0; i < wallX.length; i++) {
      wallX[i]
     for (var i = 0; i < breakableWallX.length; i++) {
      breakableWallX[i]
        if ((wallX[i]- V_GRID <=  posX <= wallX[i]+ V_GRID) || (breakableWallX[i]- V_GRID <= posX <= breakableWallX[i]+ V_GRID)) {
          posX = getRandomInt(WINDOW_WIDTH - GRID_SIZE);
        }
        posX = posX;
      }
    }

    for (var i = 0; i < wallY.length; i++) {
      wallY[i]
     for (var i = 0; i < breakableWallY.length; i++) {
      breakableWallY[i]
        if ((wallY[i]- H_GRID <=  posY <= wallY[i]+ H_GRID) || (breakableWallY[i]- H_GRID <= posY <= breakableWallY[i]+ H_GRID)){
          posY = getRandomInt(WINDOW_HEIGHT - GRID_SIZE);
        }
        posY = posY;
      }
    }

    styleEnnemi.marginLeft = (posX).toString()+"px";
    styleEnnemi.marginTop = (posY).toString()+"px";
    document.getElementById("plateau").appendChild(ennemi);

    //blockEnnemi[i].push(ennemi);

 }

//
// var frame = 0;
// function loop(){  //60x par seconde
//   if (frame === 60) {
//     switch(direction){
//       case "left":
//         if (yEnnemi > 0 && blockGrid[xEnnemi][yEnnemi-1].traverser)
//         yEnnemi--;
//         break;
//       case "right":
//         if (xEnnemi < H_GRID-1 && blockGrid[xEnnemi+1][yEnnemi].traverser)
//         xEnnemi++;
//         break;
//       case "up":
//         if (yEnnemi < V_GRID-1 && blockGrid[xEnnemi][yEnnemi+1].traverser)
//         yEnnemi++;
//         break;
//       case "down":
//         if (xEnnemi > 0 && blockGrid[xEnnemi-1][yEnnemi].traverser)
//         xEnnemi--;
//         break;
//     }
//
//     styleEnnemi.left = String(xEnnemi * GRID_SIZE) + 'px';
//     styleEnnemi.top = String(yEnnemi * GRID_SIZE) + 'px';
//
//     let random = random100();
//
//       if (random < 25) {
//         direction = "left";
//       }
//
//       if (random >= 25 && random < 50) {
//         direction = "right";
//       }
//
//       if (random >= 50 && random < 75) {
//         direction = "up";
//       }
//
//       if (random > 75) {
//         direction = "down";
//       }
//
//       frame = 0;
//     }
//   frame++;
//   window.requestAnimationFrame(loop);
// }
// window.requestAnimationFrame(loop);

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
