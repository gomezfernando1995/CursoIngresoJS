function mostrar()
{
	var puntos;
	puntos = document.getElementById("txtIdDestino").value;

	if (puntos == "Bariloche"){
		 alert ("Se encuentra al oeste ");
	}
	
	else if   (puntos == "Cataratas"){
		alert("Se encuentra al norte");
	}    
	
	else if  (puntos ==  "Mar del plata"){
	    alert("Se encuentra al este");
 	}
	
	else if (puntos == "Ushuaia"){
        alert("Se encuentra al sur");
	}
		
	
	/*switch(puntos)  {

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
	} */
}//FIN DE LA FUNCIÓN