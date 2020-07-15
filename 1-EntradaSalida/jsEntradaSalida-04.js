/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
   let nombre   // declaramos variable

   nombre = prompt("ingrese su nombre");  // de la funcion prompt le asignamos a la varible un dato 

   document.getElementById("txtIdNombre").value = nombre;  // le enviamos el dato de la variable al documento html para que se muestre en el casillero 
	
	
}

