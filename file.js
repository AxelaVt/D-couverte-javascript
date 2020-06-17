
var pion = document.getElementById("pion");
var s = pion.style;
var x = pion.offsetLeft;
var y = pion.offsetTop;

document.onkeydown = function(event){
  var event = event || window.event,
    keyCode = event.keyCode;

console.log(x);
console.log(y);

//if (x > 755){ x = 755;}
//if (x < 0){ x = 0;}
//if (y > 755){ y = 755;}
//if (y < 0){ y = 0;}

switch (keyCode){
  case 38:  //top
  y = y-40;  //equivaut à y -= 40;
  if (y < 0){ y = 0;}
  break;

  case 39:  //right
  x = x+40;  //equivaut à x += 40;
  if (x > 750){ x = 750;}
  break;

  case 40:  //botton
  y = y+40;  //equivaut à y += 40;
  if(y > 750){ y = 750;}
  break;

  case 37:   //left
  x = x-40;  //equivaut à x -= 40;
  if (x < 0){ x = 0;}
  break;
  default:
  break;
}



  s.left = String(x) + "px";
  s.top = String(y) + "px";
}
