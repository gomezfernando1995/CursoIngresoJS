function mostrar()
{
	let edad;
	let EstadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil = document.getElementById("estadoCivil").focus;

   if (EstadoCivil && edad<=18)
   {
     alert("Eres soltero");
   }
   else if (EstadoCivil && edad<=18)
   {
     alert("Eres muy pequeño para no ser soltero");
   }
   else if (EstadoCivil && edad <=18)
   {
      alert("No me mientas mas niño");
   }
  
}