//Controls.js | for controlling the user view

function SetUpControls(){

  //Set up Key Press events and Mouse events
  KeyPressEvents();

  //Set up Pause
  window.GAMEINFO.pauseGame = function(){
    window.GAMEINFO.paused = true;
    window.controls.unlock();

    //Replace the start screen with game
    document.getElementById("body").style.display = "block";

  }

  //Set up unpause
  window.GAMEINFO.unpauseGame = function(){
    window.GAMEINFO.paused = false;
    window.controls.lock();

    //Replace the start screen with game
    document.getElementById("body").style.display = "none";
  }

  //Pauses the game when someone alt tabs
  window.onblur = function(){
    //if not paused, pause
    if(window.GAMEINFO.paused == false){

      window.GAMEINFO.pauseGame();

    }

  }
}


/**
*
* This will handle WASD Capture Events
*
**/

WASD = {
  "w" : "0",
  "a" : "0",
  "s" : "0",
  "d" : "0"
}


function KeyPressEvents(){
  //KEYCODES
  //W = 87, A = 65, S = 83, D = 68

  //Set up event for when key is pressed
  //This is to start movement
  window.onkeydown = function(key){
    var code = key.keyCode;
    switch(code){
      case 87:
        WASD.w = "1"
        break;
      case 65:
        WASD.a = "1"
        break;
      case 83:
        WASD.s = "1"
        break;
      case 68:
        WASD.d = "1"
        break;
      default:
        break;
    }
  }

  //Set up an event when a key is let go
  //This is to stop movement
  window.onkeyup = function(key){
    var code = key.keyCode;
    switch(code){
      //Adding in the escape key
      case 192:

      //Pause and unpause
      if(window.GAMEINFO.paused == true){
        window.GAMEINFO.unpauseGame();
      }
      if(window.GAMEINFO.paused == false){
        window.GAMEINFO.pauseGame();
      }

      case 87:
        WASD.w = "0"
        break;
      case 65:
        WASD.a = "0"
        break;
      case 83:
        WASD.s = "0"
        break;
      case 68:
        WASD.d = "0"
        break;
        break;
      default:
        break;

    }
  }
}



/**
*
* Here we will check our parameter list for any changes in movement
*
**/

var previoustime = 0;

var velocity = new THREE.Vector3();
var direction = new THREE.Vector3();

function UpdateMovements(){

  if(window.GAMEINFO.paused == false){
      //Set a speed, unit per frame
      var SPEED = 10000;

      var time = performance.now();
      var delta = (time - previoustime) / 1000;

      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;

      direction.z = WASD.w - WASD.s;
      direction.x = WASD.a - WASD.d;
      direction.normalize();

      if(WASD.w == 1 || WASD.s == 1 ){
        velocity.z -= direction.z * SPEED * delta;
      }

      if(WASD.a == 1 || WASD.d == 1){
        velocity.x -= direction.x * SPEED * delta;
      }
      window.player.translateX( velocity.x * delta );
      window.player.translateZ( velocity.z * delta );


      previoustime = time;
  }

}
