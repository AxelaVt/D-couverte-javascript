// déplacement des ennemis
var frame = 0;
function loop(){  //60x par seconde
if (frame === 60) {
  for(i = 0; i < blockEnnemi.length; i++ ){
    let ennemi = blockEnnemi[i];
    let xEnnemi = ennemi.posX;
    let yEnnemi = ennemi.posY;
    let direction = ennemi.direction;
    blockGrid[xEnnemi][yEnnemi].traverser = true;

      switch(direction){
         case "up":
         if (yEnnemi > 0 && blockGrid[xEnnemi][yEnnemi-1].traverser)
         yEnnemi --;
         ennemi.style.backgroundImage = "url('img/blackbird.png')";
         // console.log("xEnnemi =" + xEnnemi);
         // console.log("yEnnemi =" + yEnnemi);
           break;
         case "right":
         if (xEnnemi < H_GRID-1 && blockGrid[xEnnemi + 1][yEnnemi].traverser)
         xEnnemi ++;
         ennemi.style.backgroundImage = "url('img/blackbirdRight.png')";
         // console.log("xEnnemi =" + xEnnemi);
         // console.log("yEnnemi =" + yEnnemi);
           break;
         case "down":
         if (yEnnemi < V_GRID-1 && blockGrid[xEnnemi][yEnnemi + 1].traverser)
         yEnnemi ++;
         ennemi.style.backgroundImage = "url('img/blackbird.png')";
         // console.log("xEnnemi =" + xEnnemi);
         // console.log("yEnnemi =" + yEnnemi);
           break;
         case "left":
         if (xEnnemi > 0 && blockGrid[xEnnemi-1][yEnnemi].traverser)
         xEnnemi --;
         ennemi.style.backgroundImage = "url('img/blackbirdLeft.png')"
         // console.log("xEnnemi =" + xEnnemi);
         // console.log("yEnnemi =" + yEnnemi);
           break;
      }

      ennemi.style.left = String(xEnnemi * GRID_SIZE) + 'px';
      ennemi.style.top = String(yEnnemi * GRID_SIZE) + 'px';

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

       ennemi.posX = xEnnemi ;
       ennemi.posY = yEnnemi ;
       ennemi.direction = direction;
       blockGrid[xEnnemi][yEnnemi].traverser = true ;
     }
   frame = 0;
   }
   frame++;
   window.requestAnimationFrame(loop);
 }
 window.requestAnimationFrame(loop);
