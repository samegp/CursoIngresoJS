function mostrar()
{

/*esta es la manera */

let edad;

edad = parseInt(document.getElementById('txtIdEdad').value);

if (!(edad >= 13 && edad <= 17)){

	alert('la persona NO es adolescente')
}

/* if (edad < 13 || edad > 17) {
alert('no es un adolescente')
}
asi deberia resolverse de manera directa
*/

}