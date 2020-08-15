<style>
  .body{
    position: fixed;
    z-index: -20;
  }
</style>


<div class="body"> 
<div id="container"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r50/three.min.js"></script>
</div>


<script>
import { onMount } from 'svelte';
onMount(()=>{
var container = document.getElementById('container');
var renderer = new THREE.WebGLRenderer({antialias: true});
var camera = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,0.1,10000);
var scene = new THREE.Scene();
var mouseX = 0, mouseY = 0;

// Added that code Implementation from a forked one 
// https://codepen.io/teddarcuri/pen/jbEbyZ
// Many Thanks to @teddarcuri
// Uncomment code below for tunnel steering!
// You will fly through the walls like in Mario Kart, haha.
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;
// document.addEventListener( 'mousemove', onDocumentMouseMove, false );

scene.add(camera);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// 
window.addEventListener( 'resize', onWindowResize, false );
/////////////////////////////////////////

// Console
var Controls = function() {
  this.speed = .1;
  this.rotation = .01;
};
//
//var text = new Controls(),
 //   gui = new dat.GUI();
  //  gui.add(text, 'speed', 0, 10);
   // gui.add(text, 'rotation',0,15);

/////////////////////////////////////////

// Normalmaterial
var normalMaterial = new THREE.MeshNormalMaterial({});


// Torus
function Torus(f){
  this.b = new THREE.Mesh(new THREE.TorusGeometry( 160, 75, 2, 13),normalMaterial);
  this.b.position.x = 57*Math.cos(f);
  this.b.position.y = 57*Math.sin(f);
  this.b.position.z = f*1.25;
  this.b.rotation.z = f*0.03;
}
		
var numTorus = 80;
var tabTorus = [];
for(var i=0; i<numTorus; i++){
  tabTorus.push(new Torus(-i*13));
  scene.add(tabTorus[i].b);
}	


// Update
function update(){
  for(var i=0; i<numTorus; i++){
    tabTorus[i].b.position.z+=.1;
    tabTorus[i].b.rotation.z+=i*.01/10000;
    if(tabTorus[i].b.position.z>0)
    {
      tabTorus[i].b.position.z=-1000;
    }
  }
}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove(event) {
    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );
}



// Render
function render() {
  requestAnimationFrame( render);

  camera.position.x += ( mouseX - camera.position.x ) * .05;
  camera.position.y += ( - mouseY - camera.position.y ) * .05;

  renderer.render(scene, camera);
  update();
}

render();
});
</script>