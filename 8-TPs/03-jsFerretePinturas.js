/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let F;
    let C;

    F = parseInt(document.getElementById("txtIdTemperatura").value);
    C = (F - 32)/1.8;
    C = C.toFixed(1);
    

    alert (`${F} Fahrenheit son ${C} Centigrados`);
}

function CentigradosFahrenheit () 
{
    let F;
    let C;

    C = parseInt(document.getElementById("txtIdTemperatura").value);
    F = (C * 1.8) + 32;
    F = F.toFixed(1);
    

    alert (`${C} Centigrados son ${F} Fahrenheit `);
}
	

