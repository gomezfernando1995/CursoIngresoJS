function mostrar()
{
   let numeroingresado;

   
	for(i = 0 ;  ; i++){
	  
	numeroingresado = parseInt (prompt("Ingrese en que numero quiere parar"))

	    if (i == numeroingresado){
			break;
		}
	 
		alert("usted ingreso el numero" + numeroingresado);
	}
}//FIN DE LA FUNCIÓN