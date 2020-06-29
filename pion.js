

var pion = document.getElementById('pion');
  var stylePion = pion.style;
  stylePion.backgroundImage = 'url("img/pinkbird.png")';
  stylePion.backgroundPosition = "center";
  var x = pion.offsetLeft ;
  var y = pion.offsetTop;


//pawn movement management
document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;
 console.log("code : " + keyCode);
 // console.log(x);
 // console.log(y);
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
      setTimeout(explodeBomb, 3000);

      break;
      // default
    default:
      return;
  }

  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';

}


// fonction creation de la bombe
function createBomb(){
  var bomb = document.createElement("div");
  var styleBomb = bomb.style;
  bomb.id = "bomb";
  styleBomb.width = GRID_SIZE + "px";
  styleBomb.height = GRID_SIZE + "px";
  styleBomb.position = "absolute";
  //styleBomb.backgroundImage = "url('img/bombbird.png')";
  //styleBomb.backgroundRepeat = "no-repeat";
  //styleBomb.backgroundPosition = "center";
  bomb.style.left = String(x) + 'px';
  bomb.style.top = String(y) + 'px';
  var pos = blockGrid[x/40][y/40];
  document.getElementById("plateau").appendChild(bomb);
  blockGrid[x/40][y/40].traverser = false;
  var positionBomb = [];
  positionBomb.push(pos);
  console.log(positionBomb);
  console.log(bomb.style.left);
  console.log( "top" + bomb.style.top);
}

// fonction explosion de la bombe
function explodeBomb() {
  if (document.getElementById("bomb")) {
    let bomb = document.getElementById("bomb");
    bomb.classList.add("explode");
    //bomb.style.backgroundImage = "url('img/explosion.gif')";
    console.log(bomb);
    let xB = (bomb.style.left.slice(0,-2))/GRID_SIZE;
    let yB = (bomb.style.top.slice(0,-2))/GRID_SIZE;
    console.log(xB);
    console.log(yB);
    positionArround = [blockGrid[xB-1][yB-1], blockGrid[xB][yB-1], blockGrid[xB+1][yB-1], blockGrid[xB+1][yB], blockGrid[xB-1][yB], blockGrid[xB-1][yB+1], blockGrid[xB][yB+1], blockGrid[xB+1][yB+1]];

    for (var i = 0; i < positionArround.length; i++) {
      // for (var j = 0; j < blockEnnemi.length; j++) {
      //   //console.log(blockEnnemi[j]);
      // }
      // //console.log (positionArround[i].className);
      // if (positionArround[i].left === blockEnnemi[j].left && positionArround[i].top === blockEnnemi[j].top ){
      //   positionArround[i].style.backgroundImage = "url('img/birddead.png') ";
      //   setTimeout(timer, 3000);
      //   positionArround[i].style.backgroundColor = "#7ff709";
      //   positionArround[i].traverser = true;

       if (positionArround[i].className === "breakableWall"){
          positionArround[i].classList.add("fire");
          setTimeout(timer, 5000);
          positionArround[i].classList.remove("breakableWall");
          positionArround[i].classList.remove("fire");
          positionArround[i].classList.add("floor");
          positionArround[i].traverser = "true";
      }
    }
  }

  setTimeout(deleteBomb, 2000);
}


function deleteBomb() {
    blockGrid[xb][yb].traverser = true;
    //document.getElementById("bomb").remove();
    bomb.classList.remove("explode");
    bomb.classList.add("floor");
    bomb.id.remove("bomb");
  }



function timer() {
return;
}
