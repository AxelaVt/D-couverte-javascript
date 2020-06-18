

var pion = document.getElementById("pion");
var s = pion.style;
var x = pion.offsetLeft;
var y = pion.offsetTop;

document.onkeydown = function(event){
  var event = event || window.event,
    keyCode = event.keyCode;

console.log(x);
console.log(y);


switch (keyCode){
  case 104:  //top  38
  y = y-40;
  if (y < 0){ y = 0;}
  break;

  case 102:  //right 39
  x = x+40;
  if (x > 750){ x = 750;}
  break;

  case 98:  //botton 40
  y = y+40;
  if(y > 750){ y = 750;}
  break;

  case 100:   //left 37
  x = x-40;
  if (x < 0){ x = 0;}
  break;

  case 105:  //top-right
  x = x + 40;
  y = y - 40;
  if (x > 750){ x = 750;}
  if (y < 0){ y = 0;}
  break;

  case 103:  //top-left
  x = x - 40;
  y = y - 40;
  if (x < 0){ x = 0;}
  if (y < 0){ y = 0;}
  break;

  case 97:  //bottom-left
  x = x - 40;
  y = y + 40;
  if (x < 0){ x = 0;}
  if (y > 750){ y = 750;}
  break;

  case 99:  //bottom-right
  x = x + 40;
  y = y + 40;
  if (x > 750){ x = 750;}
  if (y > 750){ y = 750;}
  break;

  default:
  break;
}


  s.left = String(x) + "px";
  s.top = String(y) + "px";
}
