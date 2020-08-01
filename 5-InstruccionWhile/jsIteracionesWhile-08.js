/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
let numero;
let flag = 0;
let acumuladorDePositivos = 0;
let acumuladorDeNegativos = 1;
let seguir;

	do{
		
		numero= parseInt(prompt("Ingrese valor: "));
		
		if (numero >=0){
			acumuladorDePositivos = numero +  acumuladorDePositivos;
		}else {
			flag = 1
			acumuladorDeNegativos = numero * acumuladorDeNegativos;
		}        	
		;
	    seguir = prompt ("Quieres seguir ingresando numero?");
	}while(seguir == `si`);


	if(flag == 0) {
	acumuladorDeNegativos = 0;
  }

	document.getElementById("txtIdSuma").value = acumuladorDePositivos
	document.getElementById("txtIdProducto").value = acumuladorDeNegativos;


}//FIN DE LA FUNCIÓN