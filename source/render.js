//Render.js

function SetUpRenderer(){
//Set up WebGLRenderer
  window.renderer = new THREE.WebGLRenderer(); //Window so it can be accessed through out the script

  //Set size and append it
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
}

function AnimationLoop(){
  //Load next frame
  window.requestAnimationFrame(AnimationLoop);

  //If user is not playing we don't want to animate the scene

  //If the user is playing we want to animate the scene
  if(window.GAMEINFO.paused == false){
    //Check For Controls
    UpdateMovements();

    //Render
    window.renderer.render(window.scene, window.camera);
  }
}
