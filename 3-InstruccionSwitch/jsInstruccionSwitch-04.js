function mostrar()
{
	var mes 
	mes = document.getElementById("txtIdMes").value;

	switch(mes) 
	{
		case "Febrero":
		    alert(" Este mes no tiene más de 29 días.")
		break;
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		    alert ("Este mes tiene 30 dias");
		break;

	    default:
			alert("Este mes tiene 31 dias")
	}	
		
}//FIN DE LA FUNCIÓN