

var pion = document.getElementById('pion');
  var stylePion = pion.style;
  stylePion.backgroundImage = 'url("img/pinkbird.png")';
  stylePion.backgroundPosition = "center";
  var x = pion.offsetLeft;
  var y = pion.offsetTop;


//pawn movement management
document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;
 console.log("code : " + keyCode);
 console.log(x);
 console.log(y);
  switch(keyCode){
    case 38: // top
      if (y > 0 && blockGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      y = y - GRID_SIZE;
      // if (y > 0 && blockGrid[x][y-1].traverser) //(y > 0 && blockGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      // y--; //y = y - GRID_SIZE;
      break;
    case 39: //right
      if (x < WINDOW_WIDTH && blockGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      //if (x < H_GRID-1 && blockGrid[x+1][y].traverser)
      //x++; //x = x + GRID_SIZE;
      break;
    case 40: //bottom
      if (y < WINDOW_HEIGHT && blockGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      // if (y < V_GRID-1 && blockGrid[x][y+1].traverser)
      // y++;
      break;
    case 37: // left
      if (x > 0 && blockGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
      // if (x > 0 && blockGrid[x-1][y].traverser)
      // x--; //
      break;
    case 66: // touche B
      createBomb();
      break;
  }

  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
  bomb.style.left = String(x) + 'px';
  bomb.style.top = String(y) + 'px';
  console.log(bomb.style.left);
  console.log( "top "+bomb.style.top);
}

// fonction creation de la bomb
function createBomb(){
  var bomb = document.createElement("div");
  var styleBomb = bomb.style;
  bomb.id = "bomb";
  styleBomb.width = GRID_SIZE + "px";
  styleBomb.height = GRID_SIZE + "px";
  styleBomb.position = "absolute";
  styleBomb.backgroundImage = "url('img/bombbird.png')";
  styleBomb.backgroundRepeat = "no-repeat";
  styleBomb.backgroundPosition = "center";
  bomb.style.left = stylePion.left;
  bomb.style.top = stylePion.top;
  document.getElementById("plateau").appendChild(bomb);
  //styleBomb.zIndex = "100";
  //bomb.explode = -1;
}

function explodeBomb() {
  if (document.getElementById("bomb")) {
    document.getElementById("bomb").style.backgroundImage = "url('img/mettre image')";
  }

  setTimeout(disparitionBombe, 1500);
}
