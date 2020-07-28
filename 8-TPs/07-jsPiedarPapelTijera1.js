/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	


}//FIN DE LA FUNCIÓN
function piedra()
{
	

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN


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

