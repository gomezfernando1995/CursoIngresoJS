function mostrar()
{
	
	var puntos;
	puntos = document.getElementById("txtIdDestino").value;

	if (puntos == "Bariloche"){
		alert ("hace frio");
   }
   
   else if   (puntos == "Cataratas"){
	   alert("hace calor");
   }    
   
   else if  (puntos == "Mar del plata"){
	   alert("hace calor");
	}
   
   else if (puntos == "Ushuaia"){
	   alert("hace frio");
   }
	
	
	
	/* switch(puntos){

	case "Bariloche":
		 alert ("Hace frio ");
		 break;
	
	case "Cataratas":
		alert("Hace calor");
		break;	     
	
	case "Mar del plata":
	    alert("Hace calor");
        break;
	
	case "Ushuaia":
        alert("Hace frio");
        break;
  }*/
}//FIN DE LA FUNCIÓN