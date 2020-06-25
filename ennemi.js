
var blockEnnemi = [];
for(var i = 0; i < 8; i++){  //10 = nb d'ennemi à créer
    let ennemi = document.createElement("div");
    var styleEnnemi = ennemi.style;
    var direction = "right";
    styleEnnemi.width = "40px";
    styleEnnemi.height = "40px";
    styleEnnemi.display = "flex";
    styleEnnemi.position = "absolute";
    styleEnnemi.backgroundImage = 'url("img/blackbird.png")';
    styleEnnemi.backgroundPosition = "center";
    ennemi.setAttribute("class", "ennemi");
    //ennemi.setAttribute("id", "ennemi" + string(i));
    ennemi.direction = "right";
    blockEnnemi.push([]);

    //generer deux coordonées aléatoires entier et
      posX = Math.round(getRandomInt(WINDOW_WIDTH/GRID_SIZE));
      posY = Math.round(getRandomInt(WINDOW_HEIGHT/GRID_SIZE));

    while (blockGrid[posX][posY].className !== "floor")
    //while((blockGrid[posX][posY].traverser === false)||((x===0)&&(y===0)))
    {
      posX = Math.round(getRandomInt(WINDOW_WIDTH/GRID_SIZE));
      posY = Math.round(getRandomInt(WINDOW_HEIGHT/GRID_SIZE));
    }
    var xEnnemi = (posX + 1).toString()+"px";
    var yEnnemi = (posY + 1).toString()+"px";
    //console.log(xEnnemi);
    //console.log(yEnnemi);
    styleEnnemi.marginLeft = (posX*GRID_SIZE).toString()+"px";
    styleEnnemi.marginTop = (posY*GRID_SIZE).toString()+"px";
    document.getElementById("plateau").appendChild(ennemi);
    blockEnnemi.push([ennemi]);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
