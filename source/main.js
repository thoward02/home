//source/main.js


class OpenerScene{
  constructor(renderer){

    //Set the renderer
    this.renderer = renderer;

    //Set Scene and Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    //Preset Geom
    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh(this.geometry, this.material );

    //animation
    this.animate = function () {
      //Load next frame
      window.requestAnimationFrame(window.animate);
      //Check For Changes

      this.cube.rotation.z += 0.01; //To ensure the cube isnt frozen
      this.cube.rotation.x += 0.2;
      //Render
      this.renderer.render(this.scene, this.camera);

    }
  }

  PostSetUp() {
    //Add Object
    this.scene.add(this.cube);

    //Camera Pos
    this.camera.position.z = 5;

  }


}

function On_Ready(){
  //Start Up
  console.log("[ -- Start -- ]")

  //Set up Scene

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  //Set up opener class
  OpenScene = new OpenerScene(renderer);
  OpenScene.PostSetUp();

  //Animate
  window.animate = function(){

    OpenScene.animate(); //Holy fudge this is actually so dirty. requestAnimationFrame doesn't like calling back to a class function, so by attatching a parent funct to the main window, we give requestAnimationFrame a path to callback to

  }
  window.animate();
}



document.addEventListener("DOMContentLoaded", function(){
  console.log('[ -- Ready | Starting... -- ]')
  On_Ready();
});
