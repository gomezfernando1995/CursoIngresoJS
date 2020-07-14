/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let NombreSelecto = prompt("Dame tu nombre"); //Aca se declara el nombre que se elija y se carga en la variable
    alert("Tu te llamas " + NombreSelecto );     // mensaje con la variable elegida
}