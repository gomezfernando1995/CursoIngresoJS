/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	
let numero;
let promedio;
let i = 0;
let acumulador = 0;
let seguir;

	do{
		
		numero= parseInt(prompt("Ingrese valor: "));
		acumulador = acumulador + numero;
		i++;
	    seguir = prompt ("Quieres seguir ingresando numero?");
	}while(seguir == `si`);

	alert (`Ingreso ${i} numero `)
	promedio = acumulador / i;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
		
}//FIN DE LA FUNCIÓN