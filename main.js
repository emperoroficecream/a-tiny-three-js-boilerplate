import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.module.js';

let container, stats;
let camera, scene, renderer;
let pointLight;

init();
animate();

function init() {
  container = document.createElement('div');
  document.body.appendChild(container);

  const aspectRatio = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 2000);

  scene = new THREE.Scene();

  // Grid
  const gridHelper = new THREE.GridHelper(1000, 40, 0x303030, 0x303030);
  gridHelper.position.y = - 75;
  scene.add(gridHelper);

  // Lights
  scene.add(new THREE.AmbientLight(0x111111));

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  stats = new Stats();
  container.appendChild(stats.domElement);

}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  window.requestAnimationFrame(animate);
  render();
  stats.update();
}

