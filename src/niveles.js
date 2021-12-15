import Ladrillo from './ladrillo.js';

export function construirNivel(Juego, nivel) {

		let ladrillos = [];		
		
		nivel.forEach((fila, filaIndex) => {
			fila.forEach((ladri, ladriIndex) => {
			
				if(ladri === 1) {

					let posicion = { 
						x: 40 * ladriIndex, 
						y: 60 + 20 * filaIndex
					}; 
										
					ladrillos.push(new Ladrillo(Juego, posicion));
				}	
			});
		});
	return ladrillos;
}

export const nivel1 = [
	
	  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const nivel2 = [
	
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],	
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],	
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];