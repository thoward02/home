//Intro scene

x = 10;
function SetUpScene(){

  //Set Scene and camera
  var NEAR = 1e-6, FAR = 1e27;
  window.scene = new THREE.Scene();
  window.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, FAR );
  window.camera.position.set( 0, 20, 1000 );

  //Set up  light
  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  window.scene.add( light );
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  window.scene.add( directionalLight );

  //Set Up Controls for later
  controls = new THREE.OrbitControls(window.camera);

  //Start loading in models
  StartModelLoad();
}

function StartModelLoad(){

  //Call to models.js to load a model from a like
  LoadModels(
    {
      "TestBall" : {
        "scene" : "introscene",
        "name" : "model",
        "x" : 0,
        "y" : 10,
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
        "y" : 9,
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
