function mostrar()
{
	let notas;

	notas = Math.round(Math.random() * (9 + 1));

	if (notas >= 9){
		alert('EXCELENTE, su nota es: ' + notas);
	}
	else if (notas <4){
		alert('vamos, la proxima se puede, su nota es: ' + notas);
	}
	else{
		alert('APROBO, su nota es: ' + notas);
	}

}//FIN DE LA FUNCIÓN