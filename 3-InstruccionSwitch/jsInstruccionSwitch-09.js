function mostrar()
{
	var estaciones;
	var destinos;
	var total;

	estaciones = document.getElementById("txtIdEstacion").value;
	destinos   = document.getElementById("txtIdDestino").value;

	 switch (estaciones){
			case "Invierno" :	
			   switch (destinos){

				case "Bariloche" :
					total= 15000*1.2;
					break;
				case "Cataratas" :		
				    total = 15000*0.9;
					break;
				case "Mar del plata" :
				    total = 15000*0.8;
					break;
				case "Cordoba":
					total = 15000*0.9;
					break;
				}
				alert (`El precio de viaje a ${destinos} en invierno $${total}`)
	}	
     switch(estaciones){  
		    case "Verano" :
				 switch (destinos){

					case "Bariloche" :
						total = 15000*0.8;			
						break;				
					case "Cataratas" :
						total = 15000*1.1;			
						break;					
					case "Mar del plata":
						total  = 15000*1.2;	
						break;		
					case "Cordoba" :
						total = 15000*1.1;
						break;
				}
				alert (`El precio de viaje a ${destinos} en verano $${total}`)
	 }
	 switch(estaciones){  	
			case "Otoño" :
				switch (destinos){
	
				case "Bariloche" :
					total = 15000*1.1;
					break;			
				case "Cataratas" :
					total= 115000*1.1;					
					break;				
				case "Mar del plata":
					total = 15000*1.1;
					break;				
				case "Cordoba" :
					total = 15000					
					break;
				}
				alert (`El precio de viaje a ${destinos} en otoño $${total}`)
 }		
 switch(estaciones){  
		case "Primavera" :
				switch (destinos){
				
				case "Bariloche" :
					total = 15000*1.1;	
					break;			
				case "Cataratas" :
					total= 15000*1.1;			
					break;	
				case "Mar del plata":
					total = 15000*1.1;			
					break;		
				case "Cordoba" :
					total = 15000				
					break;
			}
			alert (`El precio de viaje a ${destinos} en primavera $${total}`)
    }

	/*
	if (estaciones == "Invierno") {
		 if (destinos == "Bariloche" ){ 
			total= 15000*1.2;
		 }else if (destinos == "Mar del plata"){
			total = 15000*0.8;
		 }else if (destinos == "Cataratas"){
			total = 15000*0.9;
		 }else if (destinos == "Cordoba"){
			total = 15000*0.9;
		 }
		 alert (`El precio de viaje a ${destinos} en invierno $${total}`)
	}
	if (estaciones == "Verano") {
		
		if (destinos == "Bariloche" ){ 
			total = 15000*0.8;
		}else if (destinos == "Mar del plata"){
			total  = 15000*1.2;	
		}else if (destinos == "Cataratas"){
			total = 15000*1.1;	
		}else if (destinos == "Cordoba"){
			total = 15000*1.1;	
		}
		alert (`El precio de viaje a ${destinos} en verano $${total}`)
   }
   if (estaciones == "Otoño") {

		if (destinos == "Bariloche" ){ 
			total = 15000*1.1;	
		}
		else if (destinos == "Mar del plata"){
			total = 15000*1.1;	
		}
		else if (destinos == "Cataratas"){
			total= 15000*1.1;			
			}
		else if (destinos == "Cordoba"){
			total = 15000*1.1;
			
		}
	alert (`El precio de viaje a ${destinos} en otoño $${total}`)
}
if (estaciones == "Primavera") {
		
		if (destinos == "Bariloche" ) { 
				total = 15000*1.1;	
		}
		else if (destinos == "Mar del plata") {
				total = 15000*1.1;			
		}
		else if (destinos == "Cataratas") {
				total= 15000*1.1			
		}
		else if (destinos == "Cordoba") {	
				total = 15000				
		 }
	 alert (`El precio de viaje a ${destinos} en primavera $${total}`)
  }*/

}

