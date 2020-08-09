/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado"
 o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{

	//DECLARACION DE VARIABLES

   let nombre;
   let edad;
   let sexo;                                    
   let estadoCivil;
   let temperaturaCorporal;

   let ContadorSoltero = 0;
   let ContadorSolteroHombre = 0;
   let ContadorCasado = 0;
   let ContadorViudo= 0;
   let ContadorViudoSoltero= 0;
   let ContadorMayorSoltero = 0;
   let ContadorMayorCasado = 0;
   let ContadorMayorViudo = 0;
   let acumuladorDeHombresSolteros = 0;

   let TotalDeMayorDeEdad;
   let NombreConMasTemp;
   let MayorTemperatura;
   let FlagPNombre = 0;
   let PromedioDeHombresSolteros;

   let seguir;

   //FIN DE DECLARACION DE VARIABLES

   alert(`BIENVENIDO A AEROLINEAS UNDEFINED`);

	//Pedido de datos con un bucle do while para ingresar datos como tanto quiera el usuario.
   do{
		nombre = prompt(`Ingrese su nombre`);
		
			edad = parseInt(prompt(`Ingrese su edad`));
		while (!(edad>1 && edad<100)){
			 edad= parseInt(prompt (`Error, ingrese una edad valida `));
		} 
		
			  sexo = prompt("Ingrese tipo de sexo , F para femenino o M para masculino")
		while(!(sexo == "F" || sexo== "M")){
			  sexo =  prompt(`Error, ingrese un tipo de sexo valido , "F" Para Femenino o "M" para masculino`);
		}
	
			estadoCivil = prompt(`Ingrese estado civil : "soltero", "casado" o "viudo"`)
		while (!(estadoCivil== "soltero" || estadoCivil=="casado" || estadoCivil=="viudo" )){
		    estadoCivil = prompt(`Error, ingrese un estado civil valido : "soltero", "casado" o "viudo" `);
		}
		
	    temperaturaCorporal = parseFloat(prompt(`Ingrese su temperatura corporal `));
		while (!(temperaturaCorporal>36 && temperaturaCorporal<41)){
			 temperaturaCorporal= parseFloat(prompt (`Error, ingrese una temperatura corporal correcta `));
		} 															
																			//FINALIZACION DE PEDIDO DE DATOS

       if (FlagPNombre == 0 || temperaturaCorporal>MayorTemperatura){
			NombreConMasTemp = nombre;
			MayorTemperatura = temperaturaCorporal;	
			FlagPNombre = 1;											//ASIGNACION DEL NOMBRE AL QUE TENGA MAYOR TEMPERATURA
	   }

       switch (estadoCivil){
			  
		    case "soltero" :
						  	ContadorSoltero++;
						 	if (sexo == "M"){
							ContadorSolteroHombre++;
							acumuladorDeHombresSolteros+=edad;
							}
							if(edad>60 && temperaturaCorporal>38){
									ContadorMayorSoltero++;
							}
			break;

			case "casado":
							ContadorCasado++;
							if(edad>60 && temperaturaCorporal>38){
									ContadorMayorCasado++;
							}
			break;

			case "viudo":
							if(sexo == "M"){
							   ContadorViudoSoltero++;
							}if (edad>18){
                     	       ContadorViudo++;
							}
							 if(edad>60 && temperaturaCorporal>38){
									ContadorMayorViudo++;
							}
			break; 
	   }

	 seguir = prompt (`¿Desea seguir ingresando datos ? `)
   }while(seguir== "si")
	
 

PromedioDeHombresSolteros = acumuladorDeHombresSolteros/ContadorSolteroHombre;
TotalDeMayorDeEdad = ContadorMayorSoltero+ContadorMayorCasado+ContadorMayorViudo; 

alert (`La persona con mas temperatura se llama : ${NombreConMasTemp}`);
if (ContadorViudo){
alert  (`El total de mayores viudos es de : ${ContadorViudo}`);
}else {
	alert (`No hay mayores viudos`);
}
if (estadoCivil == "soltero" && sexo=="M"){
	alert  (`La cantidad de hombres que hay solteros : ${ContadorSolteroHombre}`);
}else if(estadoCivil == "viudo" && sexo== "M" ){
	alert  (`La cantidad de hombres que hay viudos. : ${ContadorViudoSoltero}`);
}else {

	 alert (`No existen ni hombres solteros ni hombres viudos`)
}

if (TotalDeMayorDeEdad){
alert  (`El total de persona de 60 años con mas de 38 grados es : ${TotalDeMayorDeEdad}`);
}else {
	alert  (`No se encontraron Adultos con mayor temperatura`);
}
if(PromedioDeHombresSolteros){
alert  (`El promedio de edad entre los hombres solteros es de ${PromedioDeHombresSolteros}`);
}else {
	alert (`No se ingresaron hombres solteros`)
}
}