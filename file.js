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

    let random = random100();
    //block.style.backgroundColor = "#8bc34a";
    block.setAttribute("class", "floor");
    block.traverser = true;

    if (random < 12 && !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2)  && i < H_GRID && j >= 0 && j <= 1 || i >= 0  && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2)  && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)) //10
    {

      block.style.backgroundImage = 'url("img/wall.png")';
      block.style.backgroundSize = 'contain';
      block.setAttribute("class", "wall");
      block.traverser = false;
      block.style.zIndex = '90';
      }
      else if (random > 88 && !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2)  && i < H_GRID && j >= 0 && j <= 1 || i >= 0  && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2)  && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID))  //90
      {
      //block.style.backgroundImage = 'url("img/woodwall.png")';
      //block.style.backgroundSize = 'contain';
      block.style.zIndex = '90';
      block.setAttribute("class", "breakableWall");
      block.traverser = false;
      }

      block.style.left = (i * GRID_SIZE).toString()+"px";  //  GRID_SIZE = 40
      block.style.top = (j * GRID_SIZE).toString()+"px";
      document.getElementById("plateau").appendChild(block);
      blockGrid[i].push(block);
    }
  }

blockGrid[10][10].style.backgroundImage = "url('img/cagebd.jpg')";
blockGrid[10][10].traverser = false;
blockGrid[10][10].ClassName = "birdCageClosed";
blockGrid[10][9].style.backgroundImage = "url('img/cagehd.jpg')";
blockGrid[10][9].traverser = false;
blockGrid[10][9].ClassName = "birdCageClosed";
blockGrid[9][9].style.backgroundImage = "url('img/cagehg.jpg')";
blockGrid[9][9].traverser = false;
blockGrid[9][9].ClassName = "birdCageClosed";
blockGrid[9][10].style.backgroundImage = "url('img/cagebg.jpg')";
blockGrid[9][10].traverser = false;
blockGrid[9][10].ClassName = "birdCageClosed";




function random100() {
  return Math.floor(Math.random() * 100);
}
