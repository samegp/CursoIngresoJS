/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);
    precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);
    precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

    suma = precioUno + precioDos + precioTres;

    alert('la suma total de los precios es ' + suma.toFixed(2));

}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);
    precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);
    precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

    promedio = (precioUno + precioDos + precioTres)/3;

    alert('el promedio de los tres valores ingresados es ' + promedio);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let resultadoFinal;

    precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);
    precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);
    precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

    suma = precioUno + precioDos + precioTres;
    iva = suma * .21;
    resultadoFinal = suma + iva;

    alert('el IVA es ' + iva);
    alert('la suma total, con IVA incluido, es de ' + resultadoFinal.toFixed(2));
}