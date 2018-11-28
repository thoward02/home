//Controls.js | for controlling the user view

WASD = {
  "w" : "0",
  "a" : "0",
  "s" : "0",
  "d" : "0"
}

function SetUpControls(){

  //Set up Key Press events and Mouse events
  KeyPressEvents();
  MouseEvents();

}


/**
*
* This will handle WASD Capture Events
*
**/

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
      default:
        break;
    }
  }
}


/**
*
* This will handle mouse movement events
*
**/
function MouseEvents(){
  window.onmousemove = function(event){

  }
}


/**
*
* Here we will check our parameter list for any changes in movement
*
**/
function UpdateMovements(){
  //Set a speed, unit per frame
  var SPEED = 10;

  //Check for change, if change move
  if(WASD.w == 1){
    window.camera.position.x += SPEED;
  }
  if(WASD.s == 1){
    window.camera.position.x += -SPEED;
  }if(WASD.a == 1){
    window.camera.position.z += SPEED;
  }if(WASD.d == 1){
    window.camera.position.z += -SPEED;
  }


}
