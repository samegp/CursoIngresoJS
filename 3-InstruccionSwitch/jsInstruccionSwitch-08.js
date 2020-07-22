function mostrar()
{
	let provincia;

	provincia = document.getElementById("txtIdDestino").value;

	switch(provincia){
		case "Bariloche":
		case "Ushuaia":
			alert("hace FRIO");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("hace CALOR");
			break;
	}

}//FIN DE LA FUNCIÓN