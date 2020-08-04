/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	 
	let edadIngresada;
 	let sexoIngresado;
	let estadoCivilIngresado;
	let SueldoBruto;
	let NumeroDeLegajo;
	let Nacionalidad;
	 
	edadIngresada =parseInt(prompt(`Ingrese su edad `));
	
				while(!(edadIngresada>=18 && edadIngresada<=90) ){
						edadIngresada= parseInt(prompt(`Reingrese su edad porfavor, mayor a 18 y menor a 90 años`));
			     }

	sexoIngresado = prompt(`Ingrese su tipo de sexo, "M" si es masculino, "F" si es femenino`);
			   
				while (!(sexoIngresado == "M" || sexoIngresado == "F")){
				      sexoIngresado = prompt("Reingrese el tipo de sexo");
			     }

	estadoCivilIngresado =parseInt(prompt (`Ingrese su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos`));
		   
	             while(!(estadoCivilIngresado ==1 || estadoCivilIngresado ==2 || estadoCivilIngresado==3 || estadoCivilIngresado==4)){
							estadoCivilIngresado = parseInt (prompt (`Reingrese su estado civil,  1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos`));
				 }

	SueldoBruto = parseInt (prompt(`Ingrese su sueldo, no menor a $8000`));
				 
				while (SueldoBruto<8000){
							SueldoBruto = parseInt (prompt(`Ingrese un sueldo valido, no menos de $8000`));
				 }

	NumeroDeLegajo = parseInt (prompt(`Ingrese su legajo, 4 cifras, sin ceros a la izquierda`));
				 
				 while(!(NumeroDeLegajo>=0 && NumeroDeLegajo<=9999)){
                              NumeroDeLegajo= parseInt (prompt(`Reingrese el numero de legajo, tiene que contener 4 digitos y sin ceros a la izquierda`));
				 }

	Nacionalidad = prompt (`Ingrese si nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados`);

	             while (!(Nacionalidad=="A" || Nacionalidad=="E" || Nacionalidad=="N")){
					 Nacionalidad=prompt (`Reingrese Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados `);
				 }

	  
      document.getElementById("txtIdEdad").value = edadIngresada;
      document.getElementById("txtIdSexo").value = sexoIngresado;
      document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
      document.getElementById("txtIdSueldo").value = SueldoBruto;
      document.getElementById("txtIdLegajo").value = NumeroDeLegajo;
      document.getElementById("txtIdNacionalidad").value = Nacionalidad;

}
