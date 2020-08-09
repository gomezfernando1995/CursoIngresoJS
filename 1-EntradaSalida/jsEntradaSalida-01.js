/*nunciado b
b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos
 el siguiente "Esto funciona de maravilla"*/

function mostrar()
{


	let nombre;
	let edad;										   
	let altura;
	let sexo;
	let dinero;
	let CantidadDeHijo;
	let NombreDeLaPersonaMasVieja;
	let promedioALturaDeMujeres;
	let nombreDelaMujerMasJoven;
	
	let AcumuladorDeMujeres;
	let i_mujeres;
	
	
	for(i = 0;i>10;i++){
		
		nombre = prompt(`ingresa tu nombre`);
		edad = parseInt(prompt("ingrese edad : "));
		while(!(edad>0 && edad<=115)){
			edad= parseInt (prompt("error,reingrese edad"))
		}
		sexo = prompt("ingrese tipo de sexo , f para femenino y m para masculino");
		while (!(sexo== "f" || sexo== "f")){
			sexo = prompt(`Error, ingrese un sexo correctamente`)
		}
		dinero = parseFloat (prompt(`ingrese dinero`));
		while(!(dinero==Number)){
			dinero=parseFloat (prompt(`error reingrese dinero`))
		}
		}
        		
		
	
		

		/*edad(0 y 115)
		altura(30 y 230)
		sexo
		Dinero(puede ser positivo o negativo, pero debe ser un número)
		CantidadDeHijos(0 y 10)
*/




	 }
	

