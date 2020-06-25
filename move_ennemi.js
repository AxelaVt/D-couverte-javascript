
// déplacement des ennemis

var ennemi = document.querySelectorAll('div.ennemi');
//var ennemi = document.querySelectorAll('div#ennemi');
console.log(ennemi);

for(i = 0; i < ennemi.length; i++ ){
   var xEnnemi = ennemi[i].offsetLeft / 40;
   var yEnnemi = ennemi[i].offsetTop / 40;
   console.log(ennemi[i]);
   console.log("xEnnemi =" + xEnnemi);
   console.log("yEnnemi =" + yEnnemi);
   console.log(ennemi[i].direction);

var direction = ennemi[i].direction;

function loop(){  //60x par seconde

 if (frame === 60) {
   var frame = 0;
     switch(direction){
       case "left":
       if (yEnnemi> 0 && blockGrid[xEnnemi][yEnnemi-1].traverser)
       yEnnemi --;
       console.log("xEnnemi =" + xEnnemi);
       console.log("yEnnemi =" + yEnnemi);
         break;
       case "right":
       if (xEnnemi< H_GRID && blockGrid[xEnnemi + 1][yEnnemi].traverser)
       xEnnemi ++;  //(x < H_GRID-1 && blockGrid[x+1][y].traverser)
       console.log("xEnnemi =" + xEnnemi);
       console.log("yEnnemi =" + yEnnemi);
         break;
       case "up":
       if (yEnnemi< V_GRID && blockGrid[xEnnemi][yEnnemi + 1].traverser)
       yEnnemi ++;
       console.log("xEnnemi =" + xEnnemi);
       console.log("yEnnemi =" + yEnnemi);
         break;
       case "down":
       if (xEnnemi > 0 && blockGrid[xEnnemi-1][yEnnemi].traverser)
       xEnnemi --;
       console.log("xEnnemi =" + xEnnemi);
       console.log("yEnnemi =" + yEnnemi);

         break;
     }
     styleEnnemi.marginLeft = String(xEnnemi * GRID_SIZE) + 'px';
     styleEnnemi.marginTop = String(yEnnemi * GRID_SIZE) + 'px';
     // styleEnnemi.left = String(xEnnemi * GRID_SIZE) + 'px';
     // styleEnnemi.top = String(yEnnemi * GRID_SIZE) + 'px';

     let random = random100();
     console.log(random);
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
     console.log(direction);
   frame = 0;
   }
   frame++;
   window.requestAnimationFrame(loop);
 }
 window.requestAnimationFrame(loop);
}
