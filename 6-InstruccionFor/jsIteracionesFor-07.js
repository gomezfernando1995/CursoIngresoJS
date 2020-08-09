function mostrar()
{
	let numeroIngresado;
	let paresEncontrados = 0 ;

	numeroIngresado = parseInt (prompt("ingrese un numero "));

	for (i = 1; i < numeroIngresado; i++){

		if (numeroIngresado % i == 0){
			paresEncontrados++;
			alert (i);
		}
	}

     alert (`Total de divisores ${paresEncontrados}`);

}//FIN DE LA FUNCIÓN 