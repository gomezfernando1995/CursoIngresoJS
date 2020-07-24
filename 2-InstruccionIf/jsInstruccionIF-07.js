function mostrar()
{
	let edad;
	let EstadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil = document.getElementById("estadoCivil").value;

  if (edad <=18 && EstadoCivil != "Soltero")
     {
      alert("Eres muy pequeño para no ser soltero");
     }

}