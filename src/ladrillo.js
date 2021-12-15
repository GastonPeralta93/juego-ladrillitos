import { detectarColision } from './colisionDeteccion.js';

export default class Ladrillo {

	constructor(Juego, posicion) {
		
		this.image = document.getElementById("img_ladrillo");		
		this.Juego = Juego;

		this.posicion = posicion;
		this.ancho = 40;		
		this.alto = 20;	

		this.marcadoParaBorrar = false;		
	}
	
	update () {
		
		if(detectarColision(this.Juego.pelota, this)){
			
			this.Juego.pelota.velocidad.y = -this.Juego.pelota.velocidad.y;
			this.marcadoParaBorrar = true;
		}
	}
	
	draw (ctx) {
		
		ctx.drawImage(
		
			this.image,
			this.posicion.x,
			this.posicion.y,
			this.ancho,
			this.alto
		);		
	}	
}