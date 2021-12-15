import Juego from './juego.js';

let canvas = document.getElementById("JuegoScreen");
let ctx = canvas.getContext('2d');

const JUEGO_ANCHO = 800;
const JUEGO_ALTO = 600;

let juego = new Juego(JUEGO_ANCHO, JUEGO_ALTO);
let lastTime = 0;

function juegoLoop(timestamp) {
	
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;
	
	ctx.clearRect(0, 0, JUEGO_ANCHO, JUEGO_ALTO);
	
	juego.update(deltaTime);
	juego.draw(ctx);
	
	requestAnimationFrame(juegoLoop);
}

requestAnimationFrame(juegoLoop);