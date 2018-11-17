//source/main.js
window.host = "127.0.0.1"; //This will be easier on me later <3

function On_Ready(){
  //Start Up
  console.log("[ -- Start -- ]")

  //Set up Scene
  console.log("[ -- Setting up Renderer -- ]");
  SetUpRenderer();

  console.log("[ -- Setting up Scene -- ]");
  SetUpScene();

  //Animate
  console.log("[ -- Setting up Animation Loop -- ]");
  AnimationLoop();

  console.log("[ -- Finished set up -- ]");

}

document.addEventListener("DOMContentLoaded", function(){
  console.log('[ -- Ready | Starting... -- ]')
  On_Ready();
});
