function mostrar()
{
	let numeroIngresado;
	let paresEncontrados = 0 ;

	numeroIngresado = parseInt (prompt("ingrese un numero "));

	for (i = 1; i < numeroIngresado; i++){

		if (i % 2 == 0){
			paresEncontrados++;
			alert (i);
		}
	}

     alert (`pares encontrados ${paresEncontrados}`);
}//FIN DE LA FUNCIÓN