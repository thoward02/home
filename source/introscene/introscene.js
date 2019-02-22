//Intro scene


function SetUpScene(){

  //Set Scene and camera
  var NEAR = 1e-6, FAR = 1e27;
  window.scene = new THREE.Scene();
  window.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, FAR );
  window.clock = new THREE.Clock();

  //Set Up Controls for later
  window.controls = new THREE.PointerLockControls(window.camera);

  //Add camera and controls
  window.scene.add(window.controls.getObject());
  window.player = window.controls.getObject();

  SetUpControls();

  //Set up  light
  LoadLights();


  //Start loading in models
  StartModelLoad();

}


function LoadLights(){
  //Give us some basic lighting across the scene

  //Basic Sun
  var Sun = new Lighting("Sun", 0, 0.3, 0xe6ae0f, -10, 5, 0, null, null)
  window.scene.add(Sun.object);

  //Lamp light
  var Lamp = new Lighting("SkyLamp", 1, 0.25, 0xABFFEF, 0, 450, 0, -1, 2);

  window.scene.add(Lamp.object);
}

function StartModelLoad(){

  //Call to models.js to load a model from a like
  //name == filename
  LoadModels(
    {
      "Cup" : {
        "scene" : "introscene",
        "name" : "model",
        "x" : 10,
        "y" : 11,
        "z" : 0
      },
      "Floor" : {
        "scene" : "introscene",
        "name"  : "floor",
        "x" : 0,
        "y" : -60,
        "z" : 0
      },
      "Table" : {
        "scene" : "introscene",
        "name" : "table",
        "x" : 0,
        "y" : 13,
        "z" : 0

      },
      "Building" : {
        "scene" : "introscene",
        "name" : "building",
        "doublesided" : "true",
        "x" : 0,
        "y" : -70,
        "z" : 0

      }
    }
  );
}


function FindPosition(x, y, z){
  /**
  *
  * Since 3js is so different from other renderers, this function is designed to help you understand spacial awareness. Just call it and give it an x y z cordinate and it'll place a block at said cordinate
  *
  **/

  //Create Box
  var geometry = new THREE.BoxGeometry( 10, 10, 10);

  //Colour it
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

  //Create Mesh and position it
  var cube = new THREE.Mesh( geometry, material );
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;


  window.scene.add(cube);

}
