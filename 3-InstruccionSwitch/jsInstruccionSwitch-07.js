function mostrar()
{
	let provincia;

	provincia = document.getElementById("txtIdDestino").value;

	switch(provincia){
		case "Bariloche":
			alert("Se encuentra al oeste");
			break;
		case "Cataratas":
			alert("Se encuentra al norte");
			break;
		case "Mar del plata":
			alert("Se encuentra al este");
			break;
		case "Ushuaia":
		alert("Se encuentra al sur");
		break;
	}

}//FIN DE LA FUNCIÓN