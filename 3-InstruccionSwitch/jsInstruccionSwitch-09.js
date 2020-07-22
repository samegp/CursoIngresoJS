function mostrar()
{
	let tarifa = 15000;
	let estacion;
	let localidad;
	let porcentaje = tarifa * 0.1;
	let porcentajeDos = tarifa * 0.2;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;

	switch(estacion){

		case "Invierno":
			switch (localidad){
				case "Bariloche":
					precioFinal = tarifa + porcentajeDos;
					alert(`el precio final es de ${precioFinal}`);
					break;

				case "Cataratas":
				case "Cordoba":
					precioFinal = tarifa - porcentaje;
					alert(`el precio final es de ${precioFinal}`);
					break;

				case "Mar del plata":
					precioFinal = tarifa - porcentajeDos;
					alert(`el precio final es de ${precioFinal}`);
					break;
			}
			break;
		case "Verano":
			switch (localidad){
				case "Bariloche":
					precioFinal = tarifa - porcentajeDos;
					alert(`el precio final es de ${precioFinal}`);
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = tarifa + porcentaje;
					alert(`el precio final es de ${precioFinal}`);
					break;
				case "Mar del plata":
					precioFinal = tarifa + porcentajeDos;
					alert(`el precio final es de ${precioFinal}`);
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (localidad){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = tarifa + porcentaje;
					alert(`el precio final es de ${precioFinal}`);
					break;
				case "Cordoba":
					alert(`el precio es de ${tarifa}`);
					break;

			}
			break;
		
	}
}