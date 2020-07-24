function mostrar()
{
	let edad;
	let EstadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil = document.getElementById("estadoCivil").value;

 /* if (edad >=18 && EstadoCivil != "Soltero")
     {
      alert("Es soltero y no es menor.");
	 } */
	 
   if (!(edad < 18 || estadoCivil != "Soltero") )
   {
	alert("Es soltero y no es menor.");
   }

}//FIN DE LA FUNCIÓN