function mostrar()
{
	let EdadIngresada;
	let Permiso
	
	EdadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	Permiso = EdadIngresada >= 15
	
	if  (Permiso)
	{ 
		  alert("Bienvenido chico/ca")
	}
	else
	{
          alert ("Sos menor volve en unos años")
	}
}