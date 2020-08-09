/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento") 
Cantidad de bolsas,
Precio por bolsa (más de cero ),

 Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
 Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
	a)El importe total a pagar , bruto sin descuento y...
	b)el importe total a pagar con descuento(solo si corresponde)
	d)Informar el tipo con mas cantidad de bolsas.		
	f)El tipo mas caro   */




function mostrar()
{
  let producto;
  let unidadesDeBolsa;
  let PrecioPorUnidad;
  let seguir;

  let AcumuladorCemento = 0;
  let AcumuladorCal= 0;
  let AcumuladorArena= 0;
  let ContadorCemento= 0; 
  let ContadorCal= 0;
  let ContadorArena= 0;
  let AcumuladorPrecioArena = 0;
  let AcumuladorPrecioCal = 0;
  let AcumuladorPrecioCemento = 0;

  let TotalAPagarSinDescuento;
  let TotalAPagarConDescuento15;
  let TotalAPagarConDescuento30;

  let ProductoConMasCantidad;
  let ProductoMasCaro;
  let SumaDeUnidades;

  do{

    producto = prompt ("¿Que desea comprar, cemento, cal o arena?");
    while(!(producto == "cemento" || producto== "cal" || producto == "arena")){
             producto= prompt ("Error, ingreso un producto inexistente, elija entre cemento,cal o arena");
    }
    unidadesDeBolsa = parseInt(prompt("Ingrese unidades deseadas"));
    while(!(unidadesDeBolsa>=1 && unidadesDeBolsa<=1000)){
             unidadesDeBolsa= parseInt( prompt ("Error, ingrese una cantidad valida"));
    }
    PrecioPorUnidad = parseFloat(prompt("Ingrese el precio por unidad"));
    while(!(PrecioPorUnidad>=1 )){
             PrecioPorUnidad= parseFloat( prompt ("Error, ingrese un precio valido"));
    }

    switch(producto){

       case "arena":
          AcumuladorArena += unidadesDeBolsa;
          AcumuladorPrecioArena += PrecioPorUnidad;
          ContadorArena++;
          break;
       
       case "cal":
          AcumuladorCal += unidadesDeBolsa;
          AcumuladorPrecioCal += PrecioPorUnidad;
          ContadorCal++;
          break;
       
       case "cemento":
          AcumuladorCemento += unidadesDeBolsa;
          AcumuladorPrecioCemento += PrecioPorUnidad;
          ContadorCemento++;
          break;
    }


    seguir = prompt("¿Desea seguir ingresando Productos?");
  }while(seguir == "si");

 TotalAPagarSinDescuento = (AcumuladorPrecioCemento*AcumuladorCemento)+(AcumuladorPrecioArena*AcumuladorArena )+(AcumuladorPrecioCal*AcumuladorCal);
 SumaDeUnidades = AcumuladorArena+AcumuladorCal+AcumuladorCemento;  

   if(AcumuladorArena>=10 || AcumuladorCal>=10 || AcumuladorCemento>=10 || SumaDeUnidades>=10 ){
      TotalAPagarConDescuento15 = TotalAPagarSinDescuento*0.85;
   }else if (AcumuladorArena >= 30 || AcumuladorCal>=30 || AcumuladorCemento>=30 || SumaDeUnidades>=30 ){
       TotalAPagarConDescuento30 = TotalAPagarSinDescuento*0.7;
   }

   if (AcumuladorArena > AcumuladorCal && AcumuladorArena> AcumuladorCemento){
      ProductoConMasCantidad = "arena";
   }else if (AcumuladorCal>AcumuladorArena && AcumuladorCal>=AcumuladorCemento){
      ProductoConMasCantidad = "cal";
   }else {
      ProductoConMasCantidad = "cemento"
   }

    if (AcumuladorPrecioArena> AcumuladorPrecioCal && AcumuladorPrecioArena> AcumuladorPrecioCemento){
    ProductoMasCaro = "arena";
    }else if (AcumuladorPrecioCal>AcumuladorPrecioArena && AcumuladorPrecioCal>=AcumuladorPrecioCemento){
    ProductoMasCaro = "cal";
    }else {
    ProductoMasCaro = "cemento"
    }

      alert (`A - Èl importe total a pagar bruto sin descuento es de $${TotalAPagarSinDescuento}`);
      
      if (TotalAPagarConDescuento15){
               alert(`B-El total a pagar con un descuento del 15% es de $${TotalAPagarConDescuento15}`);       
      }else if (TotalAPagarConDescuento30){
              alert(`B--El total a pagar con un descuento del 30% es de $${TotalAPagarConDescuento30}`);
      }else {
               alert(`B-No te corresponde descuento`);
      }
      
      alert (`C- El tipo con mas bolsas es de ${ProductoConMasCantidad}`);
      alert (`D- El producto mas caro es  ${ProductoMasCaro}`);  

}
