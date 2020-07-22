function mostrar()
{
	//tomo el mes
	let mes = document.getElementById('txtIdMes').value;

	switch(mes){
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias");
			break;
			
//o colocar un default para los meses con 31 dias
//al default se entra cuando no hay entrada a ningun case
	}
	
	



}//FIN DE LA FUNCIÓN