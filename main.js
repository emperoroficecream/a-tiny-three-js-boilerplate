import { Scene } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.module.js';

const scene = new Scene();

var stats = new Stats();
stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.domElement );

function animate() {

	stats.begin();

	// monitored code goes here

	stats.end();

	requestAnimationFrame( animate );

}

requestAnimationFrame( animate );