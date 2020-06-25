
var plateau = document.getElementById('plateau'); 	// variables objet
	var pion = document.getElementById('#pion');
	var x ;
  var y ;
	console.log(x);
	console.log(y);

	// programmation des touches de direction
	document.onkeydown = function(event)
	{
		if (event.keyCode == 37) gauche();
		if (event.keyCode == 39) droite();
		if (event.keyCode == 38) haut();
		if (event.keyCode == 40) bas();
	} // fin fonction

	// quatre fonctions de déplacement

	function gauche()	{
    if ( 0 < x < 760){
    x = getComputedStyle(plateau).left;
    x = parseInt(x);
    x= x-20;
    x = x + "px";
    plateau.style.left = x ;
   }
 }
	function droite() {
    if ( 0 < x < 760){
      x = getComputedStyle(plateau).left;
      x = parseInt(x); x= x+20;
      x = x+"px";
      plateau.style.left = x ;
    }
  }
  function haut() {
    if ( 0 < y < 760){
      y = getComputedStyle(plateau).top;
      y = parseInt(y);
      y= y-20;
      y = y+"px";
      plateau.style.top = y ;
    }
  }
	function bas()  {
    if ( 0 < y < 760){
    y = getComputedStyle(plateau).top;
    y = parseInt(y); y= y+20;
    y = y+"px";
    plateau.style.top = y ;
   }
}
