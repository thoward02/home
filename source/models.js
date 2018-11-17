//Model.js
window.loader = new THREE.FBXLoader(); //as soon as we link the lib, this command is ran

function LoadModels(ModelsToBeLoaded){
  /**
  *
  * ModelsToBeLoader = {model1 : modelname, mode2 : name}
  * loader = loader.load(Object_to_load,Done_Loading, Load_Progress, On_Error)
  *
  **/
  for(var item in ModelsToBeLoaded){
    //Get Names etc
    model = ModelsToBeLoaded[item]
    var PathName = "/resources/models/q&="+model.scene+"/q&="+model.name

    //Load Model
    window.loader.load(
      
      PathName,

      function(mod){
        //Set Name
        mod.name = model.name;
        //Set Shadows
        mod.receiveShadow = true;
        mod.castShadow = true;

        //Set Position
        mod.position.x = model.x;
        mod.position.y = model.y;
        mod.position.z = model.z;
        console.log("MOD" + mod.name +"  Mod pos "+mod.position.y);

        //Add Object to Scene
        window.scene.add( mod );
      },

      undefined,

      function(err){
        console.log("[ --  Err when loading model: "+err+" -- ]");
      }

    );

  }
}
