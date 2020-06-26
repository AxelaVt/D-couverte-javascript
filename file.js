const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;

const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;

var blockGrid = [];
for(var i = 0; i < H_GRID; i++){
  blockGrid.push([]);

  for(var j = 0; j < V_GRID; j++){
    let block = document.createElement("div");
    block.style.width = "40px";
    block.style.height = "40px";
    block.style.display = "flex";
    block.style.position = "absolute";
    // !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2)  && i < H_GRID && j >= 0 && j <= 1 || i >= 0  && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2)  && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)


    if (random100() > 80 && !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2)  && i < H_GRID && j >= 0 && j <= 1 || i >= 0  && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2)  && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)){
      //block.style.backgroundColor = "black";  //si supérieur à valeur, passer le fond en noir,c'est un mur on ne peut pas le traverser
      block.style.backgroundImage = 'url("img/wall.png")';
      //block.style.backgroundSize = 'contain';
      block.setAttribute("class", "wall");
      block.traverser = false;
      block.style.zIndex = '90';
      }
      else if (random100() > 70 && !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2)  && i < H_GRID && j >= 0 && j <= 1 || i >= 0  && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2)  && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID))
      {
      block.style.backgroundImage = 'url("img/woodwall.png")';
      //block.style.backgroundSize = 'contain';
      block.style.zIndex = '90';
      block.setAttribute("class", "breakableWall");
      block.traverser = false;
      }
      else {
        block.style.backgroundColor = "#8bc34a";
        block.setAttribute("class", "floor"); //sinon fond en vert on peut le traverser
        block.traverser = true;
      }

      block.style.marginLeft = (i * GRID_SIZE).toString()+"px";  //  GRID_SIZE = 40
      block.style.marginTop = (j * GRID_SIZE).toString()+"px";
      document.getElementById("plateau").appendChild(block);
      blockGrid[i].push(block);
    }
  }
  console.log (blockGrid);
  // //blocks qui resteront en vert
  // blockGrid[0][0].style.backgroundColor = "#8bc34a";
  // blockGrid[0][0].traverser = true;
  // blockGrid[0][0].setAttribute("class", "floor");
  // blockGrid[1][1].style.backgroundColor = "#8bc34a";
  // blockGrid[1][1].setAttribute("class", "floor");
  // blockGrid[1][1].traverser = true;
  // blockGrid[1][0].style.backgroundColor = "#8bc34a";
  // blockGrid[1][0].setAttribute("class", "floor");
  // blockGrid[1][0].traverser = true;
  // blockGrid[0][1].style.backgroundColor = "#8bc34a";
  // blockGrid[0][1].setAttribute("class", "floor");
  // blockGrid[0][1].traverser = true;
  // blockGrid[H_GRID - 1][1].style.backgroundColor = "#8bc34a";
  // blockGrid[H_GRID - 1][1].setAttribute("class", "floor");
  // blockGrid[H_GRID - 1][1].traverser = true;


  function random100() {
    return Math.floor(Math.random() * 100);
  }
