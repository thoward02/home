//Intro scene

x = 10;
function SetUpScene(){

  //Set Scene and camera
  window.scene = new THREE.Scene();
  window.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
  window.camera.position.set( 0, 20, 100 );

  //Set up  light
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
        "y" : -100,
        "z" : 0
      }
    }
  );
}
