function mostrar()
{
	let Edad;
	
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	
	
	if  (Edad >= 18)
	{ 
		  alert("Bienvenidos eres mayor de edad");
	}
	else 
	{
         alert("Lo siento eres menor de edad");
	}
		  
	alert ("Fin del programa")

}//FIN DE LA FUNCIÓN