


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
    if (x > 800){ x = 800;} //750 à cause des borders, passage à 800 à cause du padding
    break;

    case 98:  //botton 40
    y = y+40;
    if(y > 800){ y = 800;}
    break;

    case 100:   //left 37
    x = x-40;
    if (x < 0){ x = 0;}
    break;

    case 105:  //top-right
    x = x + 40;
    y = y - 40;
    if (x > 800){ x = 800;}
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
    if (y > 800){ y = 800;}
    break;

    case 99:  //bottom-right
    x = x + 40;
    y = y + 40;
    if (x > 800){ x = 800;}
    if (y > 800){ y = 800;}
    break;

    default:
    break;
  }
  s.left = String(x) + "px";
  s.top = String(y) + "px";
}

//création des buissons

//var i = 0;
// while (i<=99) {
// var DivPlateau = document.getElementById('plateau');
// var newDiv = document.createElement("div");
// DivPlateau.appendChild(newDiv);
// let classBuisson = newDiv.classList.add("buisson");
// i++
//  }

function makeDiv(){
  var DivPlateau = document.getElementById('plateau');
  var newDiv = document.createElement("div");
  DivPlateau.appendChild(newDiv);
  newDiv.classList.add("buisson");
  // newDiv.setAttribute("id","buisson");
}


var i = 0;
while (i<=50) {
makeDiv();
//var buisson = document.getElementsByClassName('buisson');
var buisson = document.querySelector('div');
pos_x = Math.floor( Math.random() * 100 );
pos_y = Math.floor( Math.random() * 100 );
console.log(pos_x);
console.log(pos_y);
buisson.style.left = String(pos_x) + "px";
buisson.style.top = String(pos_y) + "px";
i++
}
