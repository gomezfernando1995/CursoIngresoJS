function mostrar()
{
	/*let a = parseInt(prompt("Ingrese valor"));
	let b = parseInt(prompt("Ingrese valor"));
	let c = parseInt(prompt("Ingrese valor"));
	let d = parseInt(prompt("Ingrese valor"));
    let e =  parseInt(prompt("Ingrese valor"));
	let suma;
	let promedio;
	
	suma = a+b+c+d+e;
	promedio = suma/5;

 document.getElementById("txtIdSuma").value = suma;
 document.getElementById("txtIdPromedio").value = promedio;*/

let numero;
let promedio;
let i = 0;
let acumulador = 0;

while (i<5){
	numero= parseInt(prompt("Ingrese valor: "));
	acumulador = acumulador + numero;
	i++;
}
promedio = acumulador  / 5 ;

document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN
