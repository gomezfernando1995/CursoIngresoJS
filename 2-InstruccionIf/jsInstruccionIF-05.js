function mostrar()
{
	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (!(Edad > 13 && Edad < 18) )
	    {
			alert("no eres un adolescente")
		}

}
//FIN DE LA FUNCIÓN