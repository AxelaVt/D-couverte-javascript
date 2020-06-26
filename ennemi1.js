var blockEnnemi = [];
for(var i = 0; i < 10; i++){  //10 = nb d'ennemi à créer
    let ennemi = document.createElement("div");

    //coordonées
    let posX = 0;
    let posY = 0;

    while (!blockGrid[posX][posY].traverser || (posX === 0 && posY ===0)) {
    posX = Math.round(getRandomInt(WINDOW_WIDTH/GRID_SIZE));
    posY = Math.round(getRandomInt(WINDOW_HEIGHT/GRID_SIZE));
    }
    blockGrid[posX][posY].traverser = false;
    // let xEnnemi = posX;
    // let yEnnemi = posY;
    // ennemi.xEnnemi = posX;
    // ennemi.yEnnemi = posY;
    ennemi.posX = posX;
    ennemi.posY = posY;
    console.log("xEnnemi =" + posX);
    console.log("yEnnemi =" + posY);
    ennemi.direction = "right";
    ennemi.style.width = "40px";
    ennemi.style.height = "40px";
    ennemi.style.display = "flex";
    ennemi.style.position = "absolute";
    ennemi.style.backgroundImage = 'url("img/blackbird.png")';
    ennemi.style.backgroundPosition = "center";
    ennemi.setAttribute("class", "ennemi");
    ennemi.id = "ennemi" + (i);
    // ennemi.offsetLeft = (posX + 1).toString()+"px";
    // ennemi.offsetLeft = (posY + 1).toString()+"px"
    ennemi.style.marginLeft = (posX*GRID_SIZE).toString()+"px";
    ennemi.style.marginTop = (posY*GRID_SIZE).toString()+"px";
    document.getElementById("plateau").appendChild(ennemi);
    blockEnnemi.push([ennemi]);
    console.log(blockEnnemi);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
