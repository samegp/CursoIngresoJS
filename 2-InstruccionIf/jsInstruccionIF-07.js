function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad <18 && estadoCivil != "Soltero"){
		alert('es muy pequeñe para NO ser soltero');		
	}

	


}//FIN DE LA FUNCIÓN