/*  Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: <br>
el tipo (validar "barbijo" , "jabón" o "alcohol") , <br>
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y el fabricante. 
Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
b) Del tipo con mas unidades, el promedio por compra <br>
c) Cuántas unidades de jabones hay en total */
 
function mostrar(){


    let  unidades;
    let  Fabricante;
    let  Marca;
    let  Precio; 
    let  Producto;
   
    let AcumuladorAlcohol = 0;
    let AcumuladorBarbijo = 0;
    let AcumuladorJabon   = 0;
    let ContadorAlcohol   = 0;
    let ContadorBarbijo   = 0;
    let ContadorJabon     = 0;
    
    let PrecioDeAlcoholBarato;
    let CantidadDeAlcoholBarato;
    let FabricanteAlcoholBarato;
    let promedioCompra;
    let mayorTipo;
    let FlagAlcohol = 0;
    let MensajeAlcohol = "No se compraron Alcoholes";
    let MensajeBar;
    let MensajeJabon;

    alert (`PORFAVOR RESPETE LAS INSTRUCCIONES, DE LO CONTRARIO SE MOSTRARA ERROR, GRACIAS`)

    for (i = 0; i < 5; i++){


      
   
       Producto = prompt (`Escriba el producto que desea ingresar, alcohol, barbijo, jabon`);
       while(!(Producto == "alcohol" || Producto == "barbijo" || Producto == "jabon" )){
                 Producto = prompt (` Error!!, ingrese producto correcto, alcohol, barbijo, jabon :`)
       }

       Precio = parseInt(prompt (`Ingrese el precio del producto, tiene que ser entre $100 y $300`));
       while(!(Precio>99 && Precio<301 )){
                Precio = parseInt (prompt (` Error!!, ingrese un precio entre 100 y $300 :`));
       }

       unidades = prompt (`Escriba la cantidad de unidades, no mas de 1000 unidades`);
       while(!(unidades>0 && unidades<1001 )){
                 unidades = prompt (` Error!!, ingrese las unidades correctas, no menos de 1 y no mas de 1000 :`);
       }

       Marca = prompt(`Ingrese la marca`);
       Fabricante = prompt(`Ingrese el fabricante`);
    
       

       switch (Producto){
               
               case "alcohol":
                   AcumuladorAlcohol += unidades;
                   ContadorAlcohol++;

                    if (FlagAlcohol == 0 || PrecioDeAlcoholBarato > Precio){

                        PrecioDeAlcoholBarato = Precio;
                        CantidadDeAlcoholBarato = unidades;
                        FabricanteAlcoholBarato = Fabricante;
                        FlagAlcohol = 1; 
                    }

                   break;

               case "barbijo":
                    AcumuladorBarbijo += unidades;
                    ContadorBarbijo++
                    break;
               
               case "jabon":
                    AcumuladorJabon += unidades;
                    ContadorJabon++;
                    break;
                }  
}
if(AcumuladorAlcohol>AcumuladorBarbijo || AcumuladorAlcohol>AcumuladorJabon){
     mayorTipo = "alcohol";
     promedioCompra = AcumuladorAlcohol/ContadorAlcohol;

} else if(AcumuladorBarbijo>AcumuladorJabon || AcumuladorBarbijo >= AcumuladorAlcohol){
       mayorTipo = "barbijo" ;
       promedioCompra = AcumuladorBarbijo/ContadorBarbijo;

}else {
        mayorTipo = "jabon";
        promedioCompra= AcumuladorJabon/ContadorJabon;
}

if (FlagAlcohol == 1){
   MensajeAlcohol ="A - Fabricante de alcohol barato :"+FabricanteAlcoholBarato+
    "\nCantidad "+ CantidadDeAlcoholBarato+
    "\nPrecio "+ PrecioDeAlcoholBarato;
}

MensajeBar = "B- Tipo con mas unidades "+mayorTipo+" Promedio "+ promedioCompra;
MensajeJabon = "C- Unidades de jabon " + AcumuladorJabon;

alert (MensajeAlcohol+"\n"+MensajeBar+"\n"+MensajeJabon);

}