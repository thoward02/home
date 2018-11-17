//Intro scene

x = 10;
function SetUpScene(){

  //Set Scene and camera
  window.scene = new THREE.Scene();
  window.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
  window.camera.position.set( 0, 20, 100 );
  //Set Up Controls for later
  controls = new THREE.OrbitControls(window.camera);

  //Start loading in models
  StartModelLoad();
}

function StartModelLoad(){
  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  window.scene.add( light );
  //Call to models.js to load a model from a like
  LoadModels("http://127.0.0.1/resources/models/q&=introscene/q&=model");

}
