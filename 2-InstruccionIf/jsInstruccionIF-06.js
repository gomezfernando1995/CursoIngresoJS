function mostrar()
{
	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(Edad <13)
	{
      alert("Eres niño");
	}
	else if (Edad <18)
    {
     alert("Eres Adolescente") 
    }
	else if (Edad<65)
    {
     alert("Eres adulto")
    }
    else
    { 
     alert("Eres anciano")
    }
    
    alert ("App terminada")
}//FIN DE LA FUNCIÓN