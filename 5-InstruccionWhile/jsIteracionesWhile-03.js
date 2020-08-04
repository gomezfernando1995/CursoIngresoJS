/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada = 0;
	let CLAVE = "utn750";
	let i = 0;
	let flag = 0;
	

	/*do{	
		claveIngresada = prompt("ingrese el número clave.");	
		if(flag == 0){
			claveIngresada = prompt ("reingrese clave _");
			flag = 1;
		}
		
		i++;		
	}while(claveIngresada != CLAVE);

	

	document.write(" <center> <b> BIENVENIDO ALUMNO</b></center><br>");
	document.write(` <center> <b> Ingresates con ${i} intento/s </b></center>`); */ 
         claveIngresada = prompt ("Ingrese clave");
           
  while(claveIngresada != CLAVE){
		claveIngresada = prompt("Reingrese la clave.");	
      i++;
	}

	document.write(" <center> <b> BIENVENIDO ALUMNO</b></center><br>");
	document.write(` <center> <b> Ingresates con ${i} intento/s </b></center>`);


}//FIN DE LA FUNCIÓN

