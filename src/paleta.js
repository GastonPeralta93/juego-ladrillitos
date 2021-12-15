export default class Paleta { 

	constructor(Juego) {
		
		this.JuegoAncho = Juego.JuegoAncho;
		this.ancho = 150;
		this.alto = 20;	
		
		this.maxVelocidad = 7;
		this.velocidad = 0;
		
		this.posicion = {
			x: Juego.JuegoAncho / 2 - this.ancho / 2,
			y: Juego.JuegoAlto - this.alto - 10
		}; 
	}	
	
	moverIzquierda() {
		this.velocidad = -this.maxVelocidad;
	}
	
	moverDerecha() {
		this.velocidad = this.maxVelocidad;
	}
	
	frenar() {
		this.velocidad = 0;
	}
	
	draw(ctx) {
		ctx.fillStyle = '#328fff';
		ctx.fillRect(this.posicion.x, this.posicion.y, this.ancho, this.alto);	
	}
	
	update(deltaTime) {
		
		this.posicion.x += this.velocidad;
		if(this.posicion.x < 0) this.posicion.x = 0; 
		if (this.posicion.x + this.ancho > this.JuegoAncho)
			this.posicion.x = this.JuegoAncho - this.ancho;
	}
}