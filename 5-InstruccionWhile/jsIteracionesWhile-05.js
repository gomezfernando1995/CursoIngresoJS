/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	/*do{
		sexoIngresado = prompt("ingrese f ó m .");
	}while(sexoIngresado != "f"  && sexoIngresado != "m" && sexoIngresado == "null");

	document.getElementById("txtIdSexo").value= sexoIngresado;*/
	 
	 sexoIngresado = prompt("ingrese f ó m .");
	
     while (!(sexoIngresado == "f" ||  sexoIngresado == "m" )){
			        sexoIngresado = prompt("reingrese f ó m .");
		}

	document.getElementById("txtIdSexo").value= sexoIngresado;  
	
}//FIN DE LA FUNCIÓN      