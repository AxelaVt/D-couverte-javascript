
var blockEnnemi = [];
for(var i = 0; i < 10; i++){  //10 = nb d'ennemi à créer
    let ennemi = document.createElement("div");
    posX = 0;
    posY = 0;

    while ((blockGrid[posX][posY].traverser = false) || (posX === 0 && posY ===0)) //|| (x >= 0 && x <= 1 && y >= 0 && y <= 1 || x >= (H_GRID - 2)  && x < H_GRID && y >= 0 && y <= 1 || x >= 0  && x <= 1 && y >= (V_GRID - 2) && y < V_GRID || x >= (H_GRID - 2)  && x < H_GRID && y >= (V_GRID - 2) && y < V_GRID))
    {

      posX = Math.floor(Math.random() * (H_GRID));
      posY = Math.floor(Math.random() * (V_GRID));

    }
    ennemi.style.width = "40px";
    ennemi.style.height = "40px";
    ennemi.style.display = "flex";
    ennemi.style.position = "absolute";
    //ennemi.style.backgroundImage = 'url("img/blackbird.png")';
    //ennemi.style.backgroundPosition = "center";
    ennemi.setAttribute("class", "ennemi");
    ennemi.style.zIndex = 90;
    ennemi.setAttribute("id", "ennemi"+[i]);
    ennemi.posX = posX;
    ennemi.posY = posY;
    ennemi.direction = "right";

    blockGrid[posX][posY].traverser = true;
    ennemi.style.left = (posX*GRID_SIZE).toString()+"px";
    ennemi.style.top = (posY*GRID_SIZE).toString()+"px";
    document.getElementById("plateau").appendChild(ennemi);
    blockEnnemi.push(ennemi);
}
console.log(qtBombe);
var score = 4*(10-blockEnnemi.length)-qtBombe;
var scores = document.createElement('div');
var nbEnnemi = document.createElement('div');
var nbBomb = document.createElement('div');
var scoreText = document.createTextNode("Score : " + score);
var nbEnnemiText = document.createTextNode("Ennemis : " + blockEnnemi.length);
var nbBomnText = document.createTextNode("Bombes : " + qtBombe);
scores.appendChild(scoreText);
nbEnnemi.appendChild(nbEnnemiText);
nbBomb.appendChild(nbBomnText);
document.getElementById("score").appendChild(scores);
document.getElementById("score").appendChild(nbEnnemi);
document.getElementById("score").appendChild(nbBomb);
