
	function mostrar()
	{
		var estaciones;
		var destinos;
	
	
		estaciones = document.getElementById("txtIdEstacion").value;
		destinos   = document.getElementById("txtIdDestino").value;
	
		switch (estaciones){
	
		    case "Invierno" :
			
				   switch (destinos){
	
					case "Bariloche" :
				        alert ("Se viaja");
						break;
						
					case "Cataratas" :
					case "Mar del plata":
			        case "Cordoba":
						alert("No se viaja");
						break;
					}
		}	
		 switch(estaciones){  
				
				case "Verano" :
	
					switch (destinos){
						
						case "Cordoba" :
						case "Bariloche" :	
							
						    alert ("No se viaja");
							break;
					    
						case "Cataratas" :
						case "Mar del plata" :	
							
						    alert("Se Viaja");
							break;
					}
		 }
		 switch(estaciones){  
				
		    	case "Otoño" :
		
				switch (destinos){
		
					case "Bariloche" :
					case "Cataratas" :
					case "Mar del plata":	
					case "Cordoba" :
								alert("Se viaja");
								break;
				}
	 }		
	 switch(estaciones){  
				
		case "Primavera":
	
			switch (destinos){
	
				case "Bariloche" :
					alert ("No se viaja");
					break;
			
				case "Cataratas" :		
				case "Mar del plata":	
				case "Cordoba" :
				
					alert("Se viaja");
					break;
			}
		}
	}
//FIN DE LA FUNCIÓN