
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
stylePion.backgroundImage = 'url("img/pinkbird.png")';
stylePion.backgroundPosition = "center";
var x = pion.offsetLeft;
var y = pion.offsetTop;

var ennemi = document.getElementById('ennemi');
var styleEnnemi = ennemi.style;
var xEnnemi = ennemi.offsetLeft;
var yEnnemi = ennemi.offsetTop;
var direction = "right";

// var bombe = document.createElement("div");
// bombe.style.width = GRID_SIZE + "px";
// bombe.style.height = GRID_SIZE + "px";
// bombe.style.position = "absolute";
// bombe.style.backgroundImage = "url('bomb.png')";
// bombe.style.backgroundRepeat = "no-repeat";
// bombe.style.backgroundSize = "contain";
// bombe.style.backgroundPosition = "center";
// bombe.style.zIndex = "100";
// bombe.id = "bombe";
// bombe.explode = -1;

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
      //block.style.backgroundColor = "black";  //si supérieur à valeur, passer le fond en noir,c'est un mur on ne peut pas le traverser
      block.style.backgroundImage = 'url("img/wall.png")';
      block.style.backgroundSize = 'contain';
      //block.style.border = 'thick solid grey 1px';
      block.setAttribute("class", "wall");
      block.traverser = false;
      //block.style.zIndex = '90';
      }
      else if (random100() > 70) {
      block.style.backgroundImage = 'url("img/woodwall.png")';
      block.style.backgroundSize = 'contain';
      //block.style.zIndex = '90';
      block.setAttribute("class", "breakableWall");
      block.traverser = false;
      }
      else if (random100() > 94) {
      block.style.backgroundImage = 'url("img/blackbird.png")';
      block.setAttribute("class", "ennemi");
      //block.style.zIndex = '90';
      block.traverser = false;
    }
    else {
      block.style.backgroundColor = "#8bc34a";  //sinon fond en vert on peut le traverser
      block.traverser = true;
    }

    block.style.marginLeft = (i * GRID_SIZE).toString()+"px";  //  GRID_SIZE = 40
    block.style.marginTop = (j * GRID_SIZE).toString()+"px";

    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);

  }
}

blockGrid[0][0].style.backgroundColor = "#8bc34a";
blockGrid[0][0].block.traverser = true;
blockGrid[1][1].style.backgroundColor = "#8bc34a";
blockGrid[1][1].block.traverser = true;
blockGrid[1][0].style.backgroundColor = "#8bc34a";
blockGrid[1][0].block.traverser = true;
blockGrid[0][1].style.backgroundColor = "#8bc34a";
blockGrid[0][1].block.traverser = true;
blockGrid[H_GRID - 1][1].style.backgroundColor = "#8bc34a";
blockGrid[H_GRID - 1][1].traverser = true;

var frame = 0;
function loop(){  //60x par seconde
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//pawn movement management
document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode; // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, x et y.
  console.log(keyCode);
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
    case 66: // touche "b"
      createBomb();
      break;
  }
  stylePion.Left = String(x * GRID_SIZE) + 'px';
  stylePion.top = String(y * GRID_SIZE) + 'px';
}

function random100() {
  return Math.floor(Math.random() * 100);
}

// function randomColor() {
//   return "#" + ((1 << 24) * Math.random() | 0).toString(16);
// }
