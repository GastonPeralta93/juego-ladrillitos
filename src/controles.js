import KeyPressing from './isKeyPressed.min.js';
	
export default class controlesManejador {

	constructor(paleta, Juego) {

			document.addEventListener('keydown', (event) => {

					switch(event.keyCode) {
						
						case 65:
							
							paleta.moverIzquierda();
							break;
							
						case 68:
							paleta.moverDerecha();
							break;
							
						case 80:
							
							Juego.palancaDePausa();
							break;
							
						case 32:
						
							Juego.empezar();
							break;
					}
			});
			
			document.addEventListener('keyup', (event) => {
										
					switch(event.keyCode) {

						case 65: 
							
							if(paleta.velocidad < 0) 
								
								paleta.frenar();
								
								if (KeyPressing.isKeyPressed(68)){
									paleta.moverDerecha();
								}
								
							break;
							
						case 68: 
						
							if(paleta.velocidad > 0)
								paleta.frenar();
								
								if (KeyPressing.isKeyPressed(65)){
									paleta.moverIzquierda();
								}
								
							break;
					}
			});		
	}
}