/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos= 0;
let flag = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.round(Math.random() * 99 + 1);
    alert(numeroSecreto );
    document.getElementById("txtIdNumero").focus();
    //contadorIntentos = 0;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    flag= 1;

  }
	
function verificar(){
  let numero;
  
  if (flag == 0){
    alert("Primero debes presionar el boton comenzar");
  }
  else{
    
    contadorIntentos++;
    alert ("verificado");
    numero = parseInt(document.getElementById("txtIdNumero").value);
    
    if( numeroSecreto == numero){

	switch (contadorIntentos)	

	case 1 :{
		 ("Uusted es un campeon")
		 break;
	 }
	case 2 :{


	}
		
		
	else if( numeroSecreto < numero){
      document.getElementById("txtIdIntentos").value = contadorIntentos;
      alert ("Se paso...")
    }
    else {
      document.getElementById("txtIdIntentos").value = contadorIntentos;
      alert ("Falta...")
    }
    
    document.getElementById("txtIdNumero").value = "";
    document.getElementById("txtIdNumero").focus();

