function mostrar()
{
	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	//si no estoy fuera del rango
	
	/*if (!(Edad<13 || Edad>17))
	{
      alert("eres adolescente")
	}*/
    if (Edad >=13 && Edad <=17 )
	{
	  alert("Eres Adolescente");
	}	

	
}