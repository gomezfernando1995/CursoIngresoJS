/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let NumeroRamdom

function comenzar()
{
  NumeroRamdom = Math.round(Math.random()*2+1)
  alert(NumeroRamdom)


}//FIN DE LA FUNCIÓN
function piedra()
{
  

 switch (NumeroRamdom){

        case 1: 
            alert ("WTF UN EMPATE ? (o_O)");
            break;
        case 2: 
            alert ("QUIEN LO DIRIA, EL PAPEL LE GANA A LA PIEDRA, PSS PERDISTES!!");
            break;
        case 3:
            alert ("ESOOOOOO!!! GANASTES COMPAÑERO!! LA PIEDRA LE GANA A LA TIJERA ☻");
            break;     
          }


}//FIN DE LA FUNCIÓN
function papel()
{
  switch (NumeroRamdom){

    case 1: 
        alert ("ESOOOOOO!!! GANASTES COMPAÑERO!! EL PAPEL LE PARTE LA MADRE A LA PIEDRA ☻");
        break;
    case 2: 
        alert ("WTF UN EMPATE ? (o_O)");
        break;
    case 3:
        alert ("PSS PERDISTES!!");
        break;
    }

}//FIN DE LA FUNCIÓN

function tijera()
{
	
  switch (NumeroRamdom){

    case 1: 
        alert ("TUN TUN TUNNNNN ,HAS PERDIDO ");
        break;
    case 2: 
        alert ("HAS GANADO COMPAÑERO");
        break;
    case 3:
        alert ("MM EMPATASTES :/ ");
        break;
      }

}//FIN DE LA FUNCIÓN


