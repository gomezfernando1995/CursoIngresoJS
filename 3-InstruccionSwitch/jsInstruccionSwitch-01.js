function mostrar()
{
	//tomo el mes
	var mes 
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes) 
	{
        case "Enero":

		alert("que comiences bien el año!!!");
	    break;
		
		case "Marzo":
		alert ("A clases!!!");
		break;
		
		case "Julio":
		alert ("se vienen las vacaciones");	
		break;
		
		case "Diciembre":
		alert ("Felices fiestas!!!");	
		break;
	}

}
	
	
	
	
	
	
	
	
	
	
	
	
	/*if (mes == "Enero" )
	{
       alert("que comiences bien el año!!!");
	}
	else if ( mes == "Marzo")
	{
       alert ("A clases!!!");
	}
	else if ( mes == "Julio")
	{
       alert ("se vienen las vacaciones");
	}
	else if ( mes == "Diciembre")
	{
       alert ("Felices fiestas!!!");
	} */

