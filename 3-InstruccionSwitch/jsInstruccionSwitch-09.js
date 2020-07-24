function mostrar()
{
	var estaciones;
	var destinos;

	var BariInvierno;
	var CataInvierno;
	var MarInvierno;
	var CorInvierno;

	var BariVerano;
	var CataVerano;
	var MarVerano;
	var CorVerano;

	
	estaciones = document.getElementById("txtIdEstacion").value;
	destinos   = document.getElementById("txtIdDestino").value;

	switch (estaciones && destinos){

			//Vacaciones en invierno

			case "Invierno" && "Bariloche":
				{
				
				BariInvierno = 15000*0.20+15000
				alert (`El precio del viaje a bariloche en  invierno es de ${BariInvierno}`);
				break;
				}
			case "Invierno" && "Cataratas":{

				CataInvierno = 15000 -(15000*0.10);
				alert (`El precio del viaje a las cataratas en invierno es de ${CataInvierno}`);
				break;
			}
			case "Invierno" && "Mar del plata":{

				MarInvierno = 15000-(15000*0.20);
				alert(`El precio del viaje a mar del plata en invierno es de ${MarInvierno}`);
				break;
			}
			case "Invierno" && "Cordoba":{

				CorInvierno = 15000-(15000*0.10);
				alert(`El precio del viaje a cordoba en invierno es de ${CorInvierno}`);
				break;
			}


		// Vacaciones en verano

		switch (estaciones && destinos){

		case "Verano" && "Bariloche":
			{
				
				BariVerano = 15000-(15000*0.20)
				alert (`El precio del viaje a bariloche en  verano es de ${BariVerano}`);
				break;
				}
			case "Verano" && "Cataratas":{

				CataInvierno = 15000 -(15000*0.10);
				alert (`El precio del viaje a las cataratas en invierno es de ${CataInvierno}`);
				break;
			}
			case "Verano" && "Mar del plata":{

				MarInvierno = 15000-(15000*0.20);
				alert(`El precio del viaje a mar del plata en invierno es de ${MarInvierno}`);
				break;
			}
			case "Verano" && "Cordoba":{

				CorInvierno = 15000-(15000*0.10);
				alert(`El precio del viaje a cordoba en invierno es de ${CorInvierno}`);
				break;
			}









	}


	}

}//FIN DE LA FUNCIÓN