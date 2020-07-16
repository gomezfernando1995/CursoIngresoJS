/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let PrecioUno;
    let PrecioDos;
    let PrecioTres;
    let Suma;

    PrecioUno  = parseFloat(document.getElementById("txtIdPrecioUno").value);
    PrecioDos  = parseFloat(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    Suma   = PrecioUno + PrecioDos + PrecioTres ;
    Suma   = Suma.toFixed(2)

    alert ("La suma de los precios es de $"+ Suma);
}
function Promedio () 
{
	let PrecioUno;
    let PrecioDos;
    let PrecioTres;
    let PrecioSumado;
    let Promedio
    
    PrecioUno  = parseInt(document.getElementById("txtIdPrecioUno").value);
    PrecioDos  = parseInt(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    PrecioSumado = PrecioUno + PrecioDos + PrecioTres;
    Promedio = PrecioSumado/3;
    PrecioSumado = PrecioSumado.toFixed(2);
    
    alert("La suma de los precios es de $"+PrecioSumado)
    alert("El promedio de sus producto es " + Promedio)
}
function PrecioFinal () 
{
	let PrecioUno;
    let PrecioDos;
    let PrecioTres;
    let PrecioSumado;
    let Iva21
    let PrecioFinal

    PrecioUno  = parseInt(document.getElementById("txtIdPrecioUno").value);
    PrecioDos  = parseInt(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    PrecioSumado = PrecioUno + PrecioDos + PrecioTres;
    Iva21 = PrecioSumado* 0.21;
    PrecioFinal = PrecioSumado + Iva21;
    
    PrecioSumado = PrecioSumado.toFixed(2);
    Iva21 = Iva21.toFixed(2);
    PrecioFinal = PrecioFinal.toFixed(2);


    
    alert ("La suma de los precios es de $"+ PrecioSumado);
    alert ("El Iva 21% de sus producto es de $"+ Iva21);
    alert ("El precio final de sus productos es de $" + PrecioFinal);

}