
var blockEnnemi = [];
for(var i = 0; i < 20; i++){  //10 = nb d'ennemi à créer
    let ennemi = document.createElement("div");
    posX = 0;
    posY = 0;

    while ((blockGrid[posX][posY].traverser = false) || (posX === 0 && posY ===0)){
      posX = Math.floor(Math.random() * (H_GRID));
      posY = Math.floor(Math.random() * (V_GRID));

    }
    ennemi.style.width = "40px";
    ennemi.style.height = "40px";
    ennemi.style.display = "flex";
    ennemi.style.position = "absolute";
    ennemi.style.backgroundImage = 'url("img/blackbird.png")';
    ennemi.style.backgroundPosition = "center";
    ennemi.setAttribute("class", "ennemi");
    ennemi.posX = posX;
    ennemi.posY = posY;
    ennemi.direction = "right";

    blockGrid[posX][posY].traverser = false;
    ennemi.style.left = (posX*GRID_SIZE).toString()+"px";
    ennemi.style.top = (posY*GRID_SIZE).toString()+"px";
    document.getElementById("plateau").appendChild(ennemi);
    blockEnnemi.push(ennemi);
}
