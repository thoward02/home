//Model.js
window.loader = new THREE.FBXLoader(); //as soon as we link the lib, this command is ran

function LoadModels(ModelLink){
  /**
  *
  * loader.load(Object_to_load,Done_Loading, Load_Progress, On_Error)
  *
  **/

  window.loader.load(
    ModelLink,
    function(mod){
      mod.receiveShadow = true;
      mod.castShadow = true;
      mod.position.x = -50;
      mod.position.y = -10;
      mod.position.z = 10;
      console.log(mod)
      window.scene.add( mod );
    },
    undefined,
    function(err){
      console.log("[ --  Err when loading model: "+err+" -- ]");
    }

  );
}
