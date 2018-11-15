//MainSource.js

/**
** GLOBAL VARS
**/
var KeyPressed = {
  "a" : "",
  "d" : ""
};

var PlayerPos = {};

class Enemy{
  constructor(ctx){
    this.ctx = ctx;
    this.x = Math.floor(Math.random() * 1700);
    this.y = Math.floor(Math.random() * 400) + 50; //Between 50 and 500, this way the object doesn't leave the play field
    this.GoingRight = true
  }

  Draw(){
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 50, this.y + 50);
    this.ctx.lineTo(this.x - 50, this.y +  50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 50, this.y + 50);
    this.ctx.lineTo(this.x + 50, this.y - 50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x - 50, this.y - 50);
    this.ctx.lineTo(this.x + 50, this.y - 50);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x - 50, this.y + 50);
    this.ctx.lineTo(this.x - 50, this.y - 50);
    this.ctx.stroke();
  }
  UpdatePosition(){

    let EnemySpeed = 5;

    if(this.x > 1640){
      this.GoingRight = false;
    }

    if(this.x < 60){
      this.GoingRight = true;
    }

    if(this.GoingRight == true){
      this.x = this.x + EnemySpeed;
    }

    if(this.GoingRight == false){
      this.x = this.x - EnemySpeed;
    }
  }

};


/**
*SET UP
**/






function Start(){

  SetUpCanvas(); //First we're gonna set the size and width of the canvas to the size and width of our browser window
  DrawMainScreen();

}

function SetUpCanvas(){

  console.log("[ -- Setting up Canvas -- ]");

  //Set Canvas
  var Canvas = document.getElementById("GameBody");

  //Get the X and Y len of window
  let x = parseInt(window.screen.width);
  let y = parseInt(window.screen.height);

  console.log("[ -- Working at X: "+x+"  and Y: "+y+" -- ]");

  //Set canvas X and Y
  Canvas.width = x;
  Canvas.height = y;
  Canvas.style.width = x;
  Canvas.style.height = y;
  Canvas.style.background = "black";

}

function DrawMainScreen(){

  var Canvas = document.getElementById("GameBody");
  var ctx = Canvas.getContext("2d");
  //Set up loop

  PlayerPos = {
    x : parseInt(Canvas.style.width) / 2,
    y : (parseInt(Canvas.style.height) / 4) * 3,
    a : 90

  }

  console.log("[ -- Our PlayerPos is: "+PlayerPos.x+", "+PlayerPos.y+" --]");

  /**
  * Draw the triangle
  **/

  ctx.strokeStyle = "white"; //style

  //--Bottom--
  ctx.beginPath();
  ctx.moveTo(PlayerPos.x + 10, PlayerPos.y);
  ctx.lineTo(PlayerPos.x - 10, PlayerPos.y);
  ctx.stroke();

  //--Portside--
  ctx.beginPath();
  ctx.moveTo(PlayerPos.x + 10, PlayerPos.y);
  ctx.lineTo(PlayerPos.x , PlayerPos.y - 10)
  ctx.stroke();

  //--Starboard--
  ctx.beginPath();
  ctx.moveTo(PlayerPos.x - 10, PlayerPos.y);
  ctx.lineTo(PlayerPos.x , PlayerPos.y - 10)
  ctx.stroke();

  enemy = new Enemy(ctx);
  console.log(enemy)

  //document.addEventListener('keydown', function(event){AddKey(event);});
  AddkeyBoardListener();
  var loop = setInterval(function(){LoopFunct(Canvas, PlayerPos, ctx);}, 10);

}







/**
** Renderer and Loop
**/

function LoopFunct(Canvas, PlayerPos, ctx){
  //Clear Screen
  ctx.clearRect(0, 0, Canvas.width, Canvas.height);

  //Check For Movement
  CheckMovement();

  //Compute Pos
  var NewPosition = UpdatePosition(PlayerPos);
  var NewEnemyPos = enemy.UpdatePosition();

  //render
  RenderPlayer(NewPosition, ctx);
  RenderStars(1000, ctx);
  enemy.Draw();
}

function RenderPlayer(PlayerPos, ctx){

  ctx.beginPath();
  ctx.moveTo(PlayerPos.x + 25, PlayerPos.y);
  ctx.lineTo(PlayerPos.x - 25, PlayerPos.y);
  ctx.stroke();

  //--Portside--
  ctx.beginPath();
  ctx.moveTo(PlayerPos.x + 25, PlayerPos.y);
  ctx.lineTo(PlayerPos.x , PlayerPos.y - 25)
  ctx.stroke();

  //--Starboard--
  ctx.beginPath();
  ctx.moveTo(PlayerPos.x - 25, PlayerPos.y);
  ctx.lineTo(PlayerPos.x , PlayerPos.y - 25)
  ctx.stroke();


}

function RenderStars(Quantity, ctx){

  for(var x = 0; x < Quantity; x ++){

    x = Math.floor(Math.random() * 1720);
    y = Math.floor(Math.random() * 1080);

    DrawStar(x, y, ctx);
  }

}

function DrawStar(x, y, ctx){
  ctx.beginPath();
  ctx.moveTo(x, y + 20);
  ctx.lineTo(x, y);
  ctx.stroke();
}


/**
** Movement
**/

function UpdatePosition(PlayerPos){
  return PlayerPos
}

function CheckMovement(){
  //Move the player
  var PlayerSpeed = 1;
  console.log(KeyPressed);

  if(KeyPressed.a != "a"){
      //Left Movement
      PlayerPos.x = PlayerPos.x + PlayerSpeed;
  }

  if(KeyPressed.d != "d"){
      //Right Movement
      PlayerPos.x = PlayerPos.x - PlayerSpeed;
  }


}

function AddkeyBoardListener(){
  document.addEventListener("keydown",function(e){
      var key = e.keyCode;

      if(key == 65){
        KeyPressed.a = "a";
      }

      if(key == 68){
          KeyPressed.d = "d";
      }
    }
  );
  document.addEventListener("keyup",function(e){
      var key = e.keyCode;

      if(key == 65){
        KeyPressed.a = "";
      }

      if(key == 68){
          KeyPressed.d = "";
      }
    }
  );


}

// Have everything start running after the resources are loaded
document.addEventListener("DOMContentLoaded", function(){
  Start();
});
