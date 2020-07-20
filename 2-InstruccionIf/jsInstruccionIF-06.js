function mostrar()
{

	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad < 13){
		alert('la persona es un niñe')
	}
	else if (edad >= 18){
		alert('la persona es un adulto');
	}
	else{
		alert('la persona es un adolescente');
	}

	/*tambien se puede utilizar un else if con la condicion
	para ahorrar codigo. Ej
	if (condicion){
	}
	else if (condicion){
	}
	else{
	}
	*/

}//FIN DE LA FUNCIÓN