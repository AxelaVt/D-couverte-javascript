
// déplacement des ennemis
var ennemi = document.querySelector('div.ennemi');
console.log(ennemi);
var direction = "right";
for(i = 0; i <= ennemi.lenght; i++ ){
console.log(i);
console.log(ennemi);
  var xEnnemi = ennemi[i].offsetLeft;
  var yEnnemi = ennemi[i].offsetTop;
  console.log(xEnnemi);
  console.log(yEnnemi);
}
var frame = 0;
function loop(){  //60x par seconde
  //console.log("test");
  if (frame === 60) {
    switch(direction){
      case "left":
      if (yEnnemi> 0 && blockGrid[xEnnemi / GRID_SIZE][yEnnemi/ GRID_SIZE -1].traverser)
      yEnnemi= yEnnemi- GRID_SIZE;
        break;
      case "right":
      if (xEnnemi< WINDOW_WIDTH && blockGrid[xEnnemi / GRID_SIZE +1][yEnnemi/ GRID_SIZE].traverser)
      xEnnemi = xEnnemi + GRID_SIZE;
        break;
      case "up":
      if (yEnnemi< WINDOW_HEIGHT && blockGrid[xEnnemi / GRID_SIZE][yEnnemi/ GRID_SIZE +1].traverser)
      yEnnemi= yEnnemi+ GRID_SIZE;
        break;
      case "down":
      if (xEnnemi > 0 && blockGrid[xEnnemi / GRID_SIZE -1][yEnnemi/ GRID_SIZE].traverser)
      xEnnemi = xEnnemi - GRID_SIZE;
        break;
    }
    styleEnnemi.left = String(xEnnemi * GRID_SIZE) + 'px';
    styleEnnemi.top = String(yEnnemi * GRID_SIZE) + 'px';

    let random = random100();
    if (0 < random < 25 ) {
      direction = "left";
    }
    if (25 <= random < 50 ){
      direction = "right";
    }
    if (50 <= random < 75 ){
      direction = "up";
    }
    if (random > 75){
      direction = "down";
    }
  frame = 0;
  }
  frame++;
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
