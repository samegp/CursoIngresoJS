/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en tempF debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 tempF son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en tempF (ej.: "0  centígrados son 32 tempF ").
*/
function FahrenheitCentigrados () 
{
    let tempF;
    let tempC;

    tempF = parseFloat(document.getElementById('txtIdTemperatura').value);

    tempC = (tempF - 32) / 1.8;

    alert(`la conversion de ${tempF} grados Fahrenheit a grados centigrados resulta en ${tempC.toFixed(3)}`);
}

function CentigradosFahrenheit () 
{
    let tempF;
    let tempC;

    tempC = parseFloat(document.getElementById('txtIdTemperatura').value);

    tempF = tempC * 1.8 + 32;

    alert(`la conversion de ${tempC} grados Centigrados a grados fahrenheit resulta en ${tempF.toFixed(3)}`);
    
}