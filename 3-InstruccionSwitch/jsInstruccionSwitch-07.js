function mostrar()
{
	var puntos;
	puntos = document.getElementById("txtIdDestino").value;

	switch(puntos)  {

	case "Bariloche":
		 alert ("Se encuentra al oeste ");
		 break;
	
	case "Cataratas":
		alert("Se encuentra al norte");
		break;	     
	
	case "Mar del plata":
	    alert("Se encuentra al este");
        break;
	
	case "Ushuaia":
        alert("Se encuentra al sur");
        break;
	}
}//FIN DE LA FUNCIÓN