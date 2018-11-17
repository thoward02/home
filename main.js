//express webserver

//Express
var express = require("express");
var app = express();

//Body Parse
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//File System
var fs = require("fs");

/**
*  -- Pathing --
*  protocol://host/resources/models/q?=MODELNAME = PATH for calling a model, fbx format, MODELNAME == Modelfilename
*
*  protocol://host/ = Main Page
*
**/

//Home Page
app.get("/", function(request, response){
  console.log("[ -- User Went To Home Page -- ]");
  response.end("<html>TEST</html>"); //I'll fix this with a main page later
});


//Host Play file
app.get("/playhome/", function(request, response){

  console.log("[ -- A User Started Playing -- ]");
  //This will let people play home in their browser C:
  fs.readFile("./index.html", function(err, data){
    if(err){
      console.log("[ -- User Incountered an err: "+ err +" -- ]");
      response.end(err);
    }else{
      response.end(data);
    }

  });
});



/**
*
* RESOURCE SECTION
*
**/

//Inflate.min.js -- used for FBXLoader
app.get("/source/Inflate.min.js", function(request, response){
  //Load File
  fs.readFile("./source/Inflate.min.js", function(err, data){
    if(err){
      console.log("[ -- User hit Err: "+err+", While Loading Inflate.min.js-- ]");
    }else{
      response.end(data);
    }
  });
});


//Load the main script that powers the game
app.get("/source/main.js", function(request, response){
  //Load File
  fs.readFile("./source/main.js", function(err, data){
    if(err){
      console.log("[ -- User hit Err: "+err+", While Loading main.js-- ]");
    }else{
      response.end(data);
    }
  });
});

//Load the model handler
app.get("/source/models.js", function(request, response){
  //Load File
  fs.readFile("./source/models.js", function(err, data){
    if(err){
      console.log("[ -- User hit Err: "+err+", While Loading model.js-- ]");
    }else{
      response.end(data);
    }
  });
});

//load the renderer handler
app.get("/source/render.js", function(request, response){
  //Load File
  fs.readFile("./source/render.js", function(err, data){
    if(err){
      console.log("[ -- User hit Err: "+err+", While Loading render.js-- ]");
    }else{
      response.end(data);
    }
  });
});

//Load Models

app.get("/resources/models/q&=:scene/q&=:model", function(request, response){
  //Set up Model Vars along with pathing
  var model = request.params.model;
  var scene = request.params.scene;
  var pathing = "./source/"+ String(scene) +"/models/"+ String(model) +".fbx";

  console.log('[ -- User Requested Model: '+ model +' -- ]');
  //Fetch File and return it
  fs.readFile(pathing, function(err, data){
    if(err){
      console.log(err);
      response.end("<html>"+err+"</html>");
    }else{
      response.end(data);
    }

  });
});


/**
*
* LOAD SCENES
*
**/

//intro scene
app.get("/source/introscene/introscene.js", function(request,response){
  //Load File
  fs.readFile("./source/introscene/introscene.js", function(err, data){
    if(err){
      console.log("[ -- User hit Err: "+err+", While Loading introscene/introscene.js-- ]");
    }else{
      response.end(data);
    }
  });
});





//If req outside bounds stated here, return to home page
app.get("*", function(request, response){
  console.log("[-- User Attempted To Load Unindexed Command : Unindexed Command = "+String(request.url)+" --]")

  //Will catch any unindexed get requests
  response.redirect("/"); //return home
});

//Start app on port 80, local host
app.listen("80", "127.0.0.1", function(){

  console.log("[-- Started --]");

});
