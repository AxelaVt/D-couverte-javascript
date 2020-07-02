
var frame = 0;
function loop() {
  if (frame === 60) {

    for (var i = 0; i < blockEnnemi.length; i++) {
      let ennemi = blockEnnemi[i];
      let xEnnemi = ennemi.posX;
      let yEnnemi = ennemi.posY;
      let direction = ennemi.direction;
      blockGrid[xEnnemi][yEnnemi].traverser = true ;
      possibleDirection = [];
      //possibleDirection.push('right');

      switch (direction) {
        case "up":  //on veut monter donc diminuer y
        console.log(yEnnemi)
          if (yEnnemi > 0 && blockGrid[xEnnemi][yEnnemi - 1].traverser) // si la coordonnée en y est > 0 et que la position de la case de dessus est traversable, on décremente y (position du coin supérieur gauche)
            yEnnemi--;
          if (yEnnemi > 0 && blockGrid[xEnnemi][yEnnemi - 1].traverser)//si traversable,
            possibleDirection.push("down", "up");
          if (xEnnemi < H_GRID - 1 && blockGrid[xEnnemi + 1][yEnnemi].traverser)
            possibleDirection.push("right");
          if (xEnnemi > 0 && blockGrid[xEnnemi - 1][yEnnemi].traverser)
            possibleDirection.push("left");
          break;

        case "right":
        console.log(xEnnemi)
          if (xEnnemi < H_GRID-1 && blockGrid[xEnnemi + 1][yEnnemi].traverser) //si la valeur de x <20 et que la case à droite est traversable, on augmente d'une case à droite
            xEnnemi++;
            possibleDirection.push("right", "left"); //si on ne peut pas aller right ou left
          if (yEnnemi < V_GRID-1 && blockGrid[xEnnemi][yEnnemi + 1].traverser)//si la case de dessus est traversable
            possibleDirection.push("up");
          if (yEnnemi > 0 && blockGrid[xEnnemi ][yEnnemi - 1].traverser)// si la case du sessous est traversable
            possibleDirection.push("down");
          break;

        case "down":
          console.log(yEnnemi)
          if (yEnnemi < V_GRID - 1 && blockGrid[xEnnemi][yEnnemi + 1].traverser) // case du dessus est traversable
            yEnnemi++;
            possibleDirection.push("down", "up");
          if (xEnnemi < H_GRID - 1 && blockGrid[xEnnemi + 1][yEnnemi].traverser)// case à droite traversable
            possibleDirection.push("right");
          if (xEnnemi > 0 && blockGrid[xEnnemi - 1][yEnnemi].traverser) //case à gauche traversable
            possibleDirection.push("left");
          break;

        case "left":
        console.log(xEnnemi);
          if (xEnnemi > 0 && blockGrid[xEnnemi - 1][yEnnemi].traverser) // case à gauche traversable
            xEnnemi--;
            possibleDirection.push("right", "left");
          if (yEnnemi < V_GRID - 1 && blockGrid[xEnnemi][yEnnemi + 1].traverser) // case du dessus
            possibleDirection.push("up");
          if (yEnnemi > 0 && blockGrid[xEnnemi ][yEnnemi - 1].traverser)
            possibleDirection.push("down");
          break;
      }
       ennemi.style.left = String(xEnnemi * GRID_SIZE) + 'px';
       ennemi.style.top = String(yEnnemi * GRID_SIZE) + 'px';

       //console.log(possibleDirection);
       let random = Math.round(Math.random()*possibleDirection.length);
       direction = possibleDirection[random];

      //
      // if (random < 25 && direction != "left" ) {
      //   direction = "left";
      // } else{
      //   random = Math.random()*75 + 25
      // }
      //
      // if (random >= 25 && random < 50 && direction != "right") {
      //   direction = "right";
      // }else{
      //   random = random + 25
      // }
      //
      // if (random >= 50 && random < 75 && direction != "up") {
      //   direction = "up";
      // }else{
      //   random = random -25
      // }
      //
      // if (random > 75 && direction != "down") {
      //   direction = "down";
      // }else{
      //   direction = "right";
      // }

      ennemi.posX = xEnnemi;
      ennemi.posY = yEnnemi;
      ennemi.direction = direction;
      blockGrid[xEnnemi][yEnnemi].traverser = false ;
    }

    frame = 0;
  }
  frame++;

  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
