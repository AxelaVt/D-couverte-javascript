
var blockEnnemi = [];

for (var i = 0; i < H_GRID; i++) {
  blockEnnemi.push([]);

  for (var j = 0; j < V_GRID; j++) {
    let ennemi = document.createElement("div");
    var styleEnnemi = ennemi.style;
    var direction = "right";
    styleEnnemi.width = "40px";
    styleEnnemi.height = "40px";
    styleEnnemi.display = "flex";
    styleEnnemi.position = "absolute";
    var xEnnemi = ennemi.offsetLeft;
    var yEnnemi = ennemi.offsetTop;

    if (random100() > 97) {
      styleEnnemi.backgroundImage = 'url("img/blackbird.png")';
      styleEnnemi.backgroundPosition = "center";
      ennemi.setAttribute("class", "ennemi");
      styleEnnemi.zIndex = '90';
      ennemi.traverser = false;
      var xEnnemi = i;
      var yEnnemi = j;
    }
    else {
      ennemi.traverser = true;
  }
    ennemi.style.marginLeft = (xEnnemi * GRID_SIZE).toString() + "px";
    ennemi.style.marginTop = (yEnnemi * GRID_SIZE).toString() + "px";

    document.getElementById("plateau").appendChild(ennemi);
    blockEnnemi[i].push(ennemi);
  }
}




function random100() {
  return Math.floor(Math.random() * 100);
}
