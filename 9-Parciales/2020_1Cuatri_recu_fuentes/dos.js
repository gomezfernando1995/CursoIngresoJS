/*nunciado  a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()*/


function mostrar()
 {
 
 
     let nombre;
     let edad;										   
     let altura;
     let sexo;
     
     let UltimoNombreHombre;
     let NombreDeLaPersonaMasAlta;

     let FlagAdolescente = 0;
     let flagHombresAdultos= 0;
     let flagMujeres = 0;
     let NombreDelAdolescente
     let contadorDevueltas=0;
     let contadorDevueltasHombre=0;
     let contadorDevueltaMujer = 0;
     
     
     do{
         
         nombre = prompt(`ingresa tu nombre`);
         
         edad = parseInt(prompt("ingrese edad : "));
         while(!(edad>0 && edad<=115)){
             edad= parseInt (prompt("error,reingrese edad"));
         }
         
         sexo = prompt("ingrese tipo de sexo , f para femenino y m para masculino");
         while (!(sexo== "f" || sexo== "m")){
             sexo = prompt(`Error, ingrese un sexo correctamente`);
         }    
         
        altura = parseFloat( prompt (`Ingrese su altura`));
         while (!(altura>=30 && altura<=230)){
          altura = parseFloat( prompt (`ReIngrese su altura`));
         }

         switch (sexo){

                    case "f": 
                        contadorDevueltaMujer++;
                         if (flagMujeres == 0 || altura > NombreDeLaPersonaMasAlta){
                            NombreDeLaPersonaMasAlta= nombre;
                    }    
                    break;

                    case "m":
                        contadorDevueltasHombre++;
                          if (flagHombresAdultos == 0 || contadorDevueltas >= contadorDevueltasHombre){
                                       UltimoNombreHombre = nombre;
                        }
                    break;
                     }
     
    
                     if (FlagAdolescente == 0 && (edad>=13 && edad<18)){
         NombreDelAdolescente = nombre;
         FlagAdolescente = 1;
          }
       
          contadorDevueltas++;

            seguir = prompt ("desea seguir?");
    }while(seguir ==  "si")


        if (sexo == "f"){
            console.log (`el nombre de la más alta de las mujeres es ${NombreDeLaPersonaMasAlta}`);
        }    
        else {
            console.log (`No se ingresaron mujeres`);
        }
        if(sexo == "m"){    
         console.log (` el nombre del  más viejo de los hombres ${UltimoNombreHombre} `);
        }else {
            console.log (` No se ingresaron hombres `);
        }
         if(edad>=13 && edad<18){
           console.log (`el nombre del primer adolescente ingresado  ${NombreDelAdolescente}`);
         }else {
             console.log(`No se ingresaron adolescentes`);
         }
 }


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
 el siguiente "Esto funciona de maravilla"

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
     let EdadMasvieja = 0;
     let AcumuladorDeMujeres = 0;;
     let i_mujeres = 0;
     
     
     for(i = 0;i<3;i++){
         
         nombre = prompt(`ingresa tu nombre`);
         
         edad = parseInt(prompt("ingrese edad : "));
         while(!(edad>0 && edad<=115)){
             edad= parseInt (prompt("error,reingrese edad"));
         }
         
         sexo = prompt("ingrese tipo de sexo , f para femenino y m para masculino");
         while (!(sexo== "f" || sexo== "m")){
             sexo = prompt(`Error, ingrese un sexo correctamente`);
         }    
         
        altura = parseFloat( prompt (`Ingrese su altura`));
         while (!(altura>=30 && altura<=230)){
          altura = parseFloat( prompt (`ReIngrese su altura`));
         }
        
         dinero = parseFloat (prompt(`ingrese dinero`));
         
         CantidadDeHijo= prompt (`Cuantos hijos tiene?`);
         while (!(CantidadDeHijo>=0 && CantidadDeHijo<=10)){
             CantidadDeHijo = prompt (`Error, reingrese cantidad de hijos`);
         }
        
         
          if (edad>EdadMasvieja){
            EdadMasvieja = edad;
            NombreDeLaPersonaMasVieja = nombre;
          }

          switch (sexo){
                     
                case "f":
                  i_mujeres++;
                  AcumuladorDeMujeres+=altura;

                         if (edad<18){
                             nombreDelaMujerMasJoven = nombre;
                             }
                             break;
         }                   
                             
         promedioALturaDeMujeres = AcumuladorDeMujeres/i_mujeres;
    
      }
     
      console.log(`Èsto funciona de maravilla`);
      console.log(`La persona mas vieja es : ${NombreDeLaPersonaMasVieja}`);
      
      if (promedioALturaDeMujeres != 0){
                 console.log(`No se ingresaron mujeres`);
      }else{
      console.log(`El promedio de la altura de las mujeres es : ${promedioALturaDeMujeres}`);
      }

      if (nombreDelaMujerMasJoven != 0){
            console.log(`No se ingresaron mujeres`);
      }else{
            console.log(`El nombre de la mujer mas joven es : ${nombreDelaMujerMasJoven}`);
      }

 
    }*/