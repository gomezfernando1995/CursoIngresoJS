/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	// DECLARACION  DE VARIABLES.

	let numero;
	let seguir;
	let SumaNegativos = 0;
	let SumaPositivos = 0;
	let  p= 0;
	let  n= 0;
	let  c= 0;
	let NumerosPares = 0;
	let PromedioPositivos = 0;
	let PromedioNegativos = 0;
	let DifPosNeg;

	do {              											//COMIENZO DE CICLO DO WHILE.

		numero = parseInt (prompt ("Ingrese el numero "));      // INGRESO DE DATOS POR USUARIO.

	if (numero < 0 ){
		SumaNegativos = numero + SumaNegativos;                 //COMIENZO DE LAS DECLARACIONES CONDICIONALES.
	n++
	}	
	if (numero >= 0){
       SumaPositivos = numero + SumaPositivos;				  
	p++;
	}
	if (numero == 0){
		c++;
	}
	if (numero % 2 == 0 ){
		NumerosPares++;                                         //FIN DE LAS DECLARACIONES CONDICIONALES.
	}
    seguir = prompt ("Desea seguir ingresando numeros ? ")      //PREGUNTANDOLE AL USUARIO USUARIO SI DESEA CONTINUAR.
	}while(seguir == "si");

	PromedioPositivos = SumaPositivos / p;                     // CALCULO DE PROMEDIO DE LOS POSITIVOS. 
	PromedioNegativos = SumaNegativos/ n;                      // CALCULO DE PROMEDIO DE LOS NEGATIVOS.
	DifPosNeg = SumaPositivos - SumaNegativos;                 // DIFERENCIA ENTRE LOS NUMEROS POSITIVOS Y NEGATIVOS.

	//PromedioPositivos.toFixeed(2);
	//PromedioNegativos.toFixeed(2);
	 
	
	
	document.write(`La suma de negativos es: ${SumaNegativos}<br>`);
	document.write(`La suma de los positivos es: ${SumaPositivos}<br>`);
	document.write(`El total de numeros positivos es de: ${p}<br>`);
	document.write(`El total de numeros negativos es de: ${n}<br>`);	
	document.write(`El total de ceros ingresados es de: ${c}<br>`);	
	document.write(`El total de numeros pares es de: ${NumerosPares}<br>`);	
	document.write(`El promedio de los numeros positivos es de: ${PromedioPositivos}<br>`);	
	document.write(`El promedio de los numeros negativos es de: ${PromedioNegativos}<br>`);	
	document.write(`La diferencia de numeros positivos y negativos es de: ${DifPosNeg}<br>`);	

}//FIN DE LA FUNCIÓN