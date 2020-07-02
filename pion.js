

var pion = document.getElementById('pion');
  pion.style.backgroundImage = 'url("img/joueur.png")';
  pion.style.backgroundPosition = "center";
  var x = pion.offsetLeft;
  var y = pion.offsetTop;


//pawn movement management
document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;

  switch(keyCode){
    case 38: // top
      if (y > 0 && blockGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      y = y - GRID_SIZE;
      pion.style.backgroundImage = 'url("img/joueur.png")';
      // if (y > 0 && blockGrid[x][y-1].traverser) //(y > 0 && blockGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      // y--; //y = y - GRID_SIZE;
      break;
    case 39: //right
      if (x < WINDOW_WIDTH && blockGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      pion.style.backgroundImage = 'url("img/right.png")';
      //if (x < H_GRID-1 && blockGrid[x+1][y].traverser)
      //x++; //x = x + GRID_SIZE;
      break;
    case 40: //bottom
      if (y < WINDOW_HEIGHT && blockGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      pion.style.backgroundImage = 'url("img/joueur.png")';
      // if (y < V_GRID-1 && blockGrid[x][y+1].traverser)
      // y++;
      break;
    case 37: // left
      if (x > 0 && blockGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
      pion.style.backgroundImage = 'url("img/left.png")';
      // if (x > 0 && blockGrid[x-1][y].traverser)
      // x--; //
      break;
    case 32: // touche espace
      createBomb();
      setTimeout(explodeBomb, 3000);

      break;
      // default
    default:
      return;
  }

  pion.style.left = String(x) + 'px';
  pion.style.top = String(y) + 'px';

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
}

// for (var v = 0; i < blockEnnemi.length; v++) {
//   console.log(blockEnnemi[v]);
// }

// fonction explosion de la bombe
function explodeBomb() {
  if (document.getElementById("bomb")) {
    let bomb = document.getElementById("bomb");
    bomb.classList.add("explode");
    //bomb.style.backgroundImage = "url('img/explosion.gif')";
    let xB = (bomb.style.left.slice(0,-2))/GRID_SIZE;
    let yB = (bomb.style.top.slice(0,-2))/GRID_SIZE;
    console.log("xb = "+ xB);
    console.log("yb = "+ yB);

    if ((xB !==0) && (yB !==0)){
      positionArround = [blockGrid[xB-1][yB-1], blockGrid[xB][yB-1], blockGrid[xB+1][yB-1], blockGrid[xB+1][yB], blockGrid[xB-1][yB], blockGrid[xB-1][yB+1], blockGrid[xB][yB+1], blockGrid[xB+1][yB+1]];
    }
    if (xB === 0){
    positionArround = [blockGrid[xB][yB-1], blockGrid[xB+1][yB-1], blockGrid[xB+1][yB], blockGrid[xB][yB+1], blockGrid[xB+1][yB+1]];
    }
    if (yB === 0){
      positionArround = [blockGrid[xB+1][yB], blockGrid[xB-1][yB], blockGrid[xB-1][yB+1], blockGrid[xB][yB+1], blockGrid[xB+1][yB+1]];
    }
    if (xB === H_GRID-1){
      positionArround = [blockGrid[xB-1][yB-1], blockGrid[xB][yB-1], blockGrid[xB-1][yB], blockGrid[xB-1][yB+1], blockGrid[xB][yB+1]];
    }
    if (yB === V_GRID-1){
      positionArround = [blockGrid[xB-1][yB-1], blockGrid[xB][yB-1], blockGrid[xB+1][yB-1], blockGrid[xB+1][yB], blockGrid[xB-1][yB]];
    }

    // vérifie si des ennemis ou le pion sont placés dans les 5 ou 8 cases autour de la bombe
    for (var i = 0; i < positionArround.length; i++) {
      for (var j = 0; j < blockEnnemi.length; j++) {
        var compteurEnnemi = blockEnnemi.length;
        if (positionArround[i].style.left.slice(0,-2)/GRID_SIZE === blockEnnemi[j].style.left.slice(0,-2)/GRID_SIZE && positionArround[i].style.top.slice(0,-2)/GRID_SIZE === blockEnnemi[j].style.top.slice(0,-2)/GRID_SIZE )
        {
        blockEnnemi[j].classList.add("dead");
        setTimeout(deleteEnnemi(j), 3000);
        blockEnnemi[j].remove();
        var compteurEnnemi = blockEnnemi.length;
        console.log(compteurEnnemi);
        }
        //si le pion est trop prêt de la bombe
        if (x/GRID_SIZE === positionArround[i].style.left.slice(0,-2)/GRID_SIZE && y/GRID_SIZE === positionArround[i].style.top.slice(0,-2)/GRID_SIZE ) {
          document.getElementById("pion");
          pion.classList.add("explode");
          setTimeout(timer(), 2000);
          pion.classList.remove("explode");
          pion.style.backgroundImage = 'url("img/piondead.png")';
          setTimeout(gameOver(), 1000);
          // let param = pion;
          // setTimeout(floor(param), 2000);
          //pion.removeAttribute("id");
        }
      }
    }
    // vérif toutes les positions autour de la bombe
    for (var i = 0; i < positionArround.length; i++) {
     if (positionArround[i].className === "breakableWall"){
        positionArround[i].classList.add("fire");
        setTimeout(deleteWall(i), 5000);
      }
    }
    setTimeout(deleteBomb, 2000);
  }
}



function deleteBomb() {
  let xB = (bomb.style.left.slice(0,-2))/GRID_SIZE;
  let yB = (bomb.style.top.slice(0,-2))/GRID_SIZE;
  document.getElementById("bomb");
  bomb.classList.remove("explode");
  bomb.removeAttribute("id");
  let param =blockGrid[xB][yB];
  setTimeout(floor(param), 5000);
  }

  function deleteWall(i) {
    positionArround[i].classList.remove("breakableWall");
    positionArround[i].classList.remove("fire");
    let param = positionArround[i];
    setTimeout(floor(param), 5000);
  }

  function deleteEnnemi(j) {
    blockEnnemi[j].classList.remove("ennemi");
    blockEnnemi[j].classList.remove("dead");
    blockEnnemi[j].removeAttribute("id");
    blockEnnemi[j].style.backgroundImage ="url('')";
    let param = blockEnnemi[j];
    blockEnnemi[j].remove();
    setTimeout(floor(param), 5000);
  }

  // function gameOver(){
  //   window.alert("Game over");
  // }

  function gameOver()
      {
        window.open("gameover.htm","fenetrevolante","toolbar=no, location=no, directories=no, status=yes,<BR>scrollbars=yes, resizable=no, width="+300+", height="+200+", left="+300+", top="+50+"");
      }

  function floor(param){
    param.classList.add("floor");
    param.traverser = true;
  }

  function timer() {
    var counter = 10000;
   if(counter !== 0)
   counter--;
    else {
       finish();
     }
   }
