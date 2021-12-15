import { detectarColision } from './colisionDeteccion.js';

export default class Pelota {
	
	constructor(Juego){
		
		this.image = document.getElementById('img_pelota');
	
		this.JuegoAncho = Juego.JuegoAncho;
		this.JuegoAlto = Juego.JuegoAlto;
	
		this.Juego = Juego;
		this.tamano = 20;		
		this.reset();
	}
	
	reset() {
		this.posicion = {x: 400, y: 500};
		this.velocidad = {x: 5, y: -5};
	}
	
	draw(ctx){
		ctx.drawImage(this.image, this.posicion.x, this.posicion.y, this.tamano, this.tamano);
	}
	
	update(deltaTime){
		
		this.posicion.x += this.velocidad.x;
		this.posicion.y += this.velocidad.y;
		
		if(this.posicion.x + this.tamano > this.JuegoAncho || this.posicion.x < 0) {
			this.velocidad.x = -this.velocidad.x;
		}
		
		if(this.posicion.y < 0) {
			this.velocidad.y = -this.velocidad.y;
		}		
		
		if(this.posicion.y + this.tamano > this.JuegoAlto) {
			this.Juego.vidas--;
			this.reset();
		}		
		
		if(detectarColision(this, this.Juego.paleta)) {				
			this.velocidad.y = -this.velocidad.y;	
		}		
	}	
}