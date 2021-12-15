export function detectarColision(pelota, juegoObjeto) {
		
	let ladoAbajoDePelota = pelota.posicion.y + pelota.tamano;
	
	let ladoArribaDePelota = pelota.posicion.y;
	
	let ladoArribaDeObjeto = juegoObjeto.posicion.y;
	
	let ladoIzquierdoDeObjeto = juegoObjeto.posicion.x;
	
	let ladoDerechoDeObjeto = juegoObjeto.posicion.x + juegoObjeto.ancho;
	
	let ladoAbajoDeObjeto = juegoObjeto.posicion.y + juegoObjeto.alto;
	
	if ( 
		ladoAbajoDePelota >= ladoArribaDeObjeto &&
		ladoArribaDePelota <= ladoAbajoDeObjeto &&
		pelota.posicion.x >= ladoIzquierdoDeObjeto &&
		pelota.posicion.x + pelota.tamano <= ladoDerechoDeObjeto
	) {
		return true;
	} else {
		return false;
	}	
}