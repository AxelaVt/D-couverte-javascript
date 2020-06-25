
// création bombe

var bomb = document.createElement("div");
bomb.id = "bomb";
bomb.style.width = GRID_SIZE + "px";
bomb.style.height = GRID_SIZE + "px";
bomb.style.position = "absolute";
bomb.style.backgroundImage = "url('bombbird.png')";
bomb.style.backgroundRepeat = "no-repeat";
bomb.style.backgroundPosition = "center";
bomb.style.zIndex = "100";
bomb.explode = -1;
