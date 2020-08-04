var NumeroRamdom;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;



function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
		 NumeroRamdom = Math.round(Math.random()*2+1);
		 alert(NumeroRamdom);
		ContadorDeEmpates=0;
		ContadorDeGanadas=0;
		ContadorDePerdidas=0;
		 
}//FIN DE LA FUNCIÓN
function piedra()
{  
	switch (NumeroRamdom){

        case 1: 
			alert ("WTF UN EMPATE ? (o_O)");
			 ContadorDeEmpates++;
            break;
        case 2: 
			alert ("QUIEN LO DIRIA, EL PAPEL LE GANA A LA PIEDRA, PSS PERDISTES!!");
			ContadorDePerdidas++;
            break;
        case 3:
			alert ("ESOOOOOO!!! GANASTES COMPAÑERO!! LA PIEDRA LE GANA A LA TIJERA ☻");
			ContadorDeGanadas++;
            break;     
          }


}//FIN DE LA FUNCIÓN
function papel()
{
	switch (NumeroRamdom){

		case 1: 
			alert ("ESOOOOOO!!! GANASTES COMPAÑERO!! EL PAPEL LE PARTE LA MADRE A LA PIEDRA ☻");
			ContadorDeGanadas++;
			break;
		case 2: 
			alert ("WTF UN EMPATE ? (o_O)");
			ContadorDeEmpates++;
			break;
		case 3:
			alert ("PSS PERDISTES!!");
			ContadorDePerdidas++;
			break;
		}

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (NumeroRamdom){

		case 1: 
			alert ("TUN TUN TUNNNNN ,HAS PERDIDO ");
			ContadorDePerdidas++;
			break;
		case 2: 
			alert ("HAS GANADO COMPAÑERO");
			ContadorDeGanadas++;
			break;
		case 3:
			alert ("MM EMPATASTES :/ ");
			ContadorDeEmpates++;
			break;
		  }


}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	  document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	  document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	  document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	 

}