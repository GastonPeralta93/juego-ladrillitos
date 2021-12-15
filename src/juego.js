import controlesManejador from './controles.js';
import { construirNivel, nivel1, nivel2 } from './niveles.js';
import Paleta from './paleta.js';
import Pelota from './pelota.js';
import Ladrillo from './ladrillo.js';

const JuegoESTADO = {
	
	PAUSADO: 0,
	CORRIENDO: 1,
	MENU: 2,
	JUEGOTERMINADO: 3,
	NUEVONIVEL: 4
}

export default class Juego {
	
	constructor(JuegoAncho, JuegoAlto) {
	
		this.JuegoAncho = JuegoAncho;
		this.JuegoAlto = JuegoAlto;
		
		this.Juegoestado = JuegoESTADO.MENU;
		
		this.paleta = new Paleta(this);
		this.pelota = new Pelota(this);
		
		this.JuegoObjetos = [];
		this.ladrillos = [];
		this.niveles = [nivel1, nivel2];
		this.nivelActual = 0;		
		this.vidas = 3;
		
		new controlesManejador(this.paleta, this);
	}	
	
	empezar(){
		
		if(this.Juegoestado !== JuegoESTADO.MENU && this.Juegoestado !== JuegoESTADO.NUEVONIVEL) return;
		
		this.ladrillos = construirNivel(this, this.niveles[this.nivelActual]);
		this.pelota.reset();
													
		this.JuegoObjetos = [this.pelota, this.paleta];		
		this.Juegoestado = JuegoESTADO.CORRIENDO;	
	}
	
	update(deltaTime){
		
		if(this.vidas === 0) this.Juegoestado = JuegoESTADO.JUEGOTERMINADO;
		
		if(this.Juegoestado === JuegoESTADO.PAUSADO 
		|| this.Juegoestado === JuegoESTADO.MENU 
		|| this.Juegoestado === JuegoESTADO.JUEGOTERMINADO) {
			return;
		}
		
		if(this.ladrillos.length === 0) {
			this.nivelActual++;
			this.Juegoestado = JuegoESTADO.NUEVONIVEL;
			this.empezar();
		}
			
		[...this.JuegoObjetos, ...this.ladrillos].forEach(objeto => objeto.update(deltaTime));

		this.ladrillos = this.ladrillos.filter(ladrillo => !ladrillo.marcadoParaBorrar);
	}
	
	draw(ctx){

		[...this.JuegoObjetos, ...this.ladrillos].forEach(objeto => objeto.draw(ctx));	
		
		if (this.Juegoestado === JuegoESTADO.PAUSADO) {
			
			ctx.rect(0, 0, this.JuegoAncho, this.JuegoAlto);
			ctx.fillStyle = "rgba(0,0,0,0.5)";
			ctx.fill();
			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Pausado", this.JuegoAncho / 2, this.JuegoAlto / 2);	
		}
		
		if (this.Juegoestado === JuegoESTADO.MENU) {
			
			ctx.rect(0, 0, this.JuegoAncho, this.JuegoAlto);
			ctx.fillStyle = "rgba(0,0,0,1)";
			ctx.fill();
			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Apreta ESPACIO para Comenzar", this.JuegoAncho / 2, this.JuegoAlto / 2);
		}
		
		if (this.Juegoestado === JuegoESTADO.JUEGOTERMINADO) {
			
			ctx.rect(0, 0, this.JuegoAncho, this.JuegoAlto);
			ctx.fillStyle = "rgba(0,0,0,1)";
			ctx.fill();
			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("GAME OVER", this.JuegoAncho / 2, this.JuegoAlto / 2);
		}
	}
	
	palancaDePausa() {

		if(this.Juegoestado == JuegoESTADO.PAUSADO) {
			this.Juegoestado = JuegoESTADO.CORRIENDO;
		} else {
			this.Juegoestado = JuegoESTADO.PAUSADO;
		}
	}
}