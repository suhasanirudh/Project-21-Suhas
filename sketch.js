var canvas;
var music;

var object1 
var object2
var object3
var object4
var box1



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    object1 = createSprite (720,590,180,30);
    object1.shapeColor = "green";

    object2 = createSprite (520,590,180,30);
    object2.shapeColor = "maroon";

    object3 = createSprite (320,590,180,30);
    object3.shapeColor = "orange";

    object4 = createSprite (120,590,180,30);
    object4.shapeColor = "blue";

    box1 = createSprite (30,30,30,30);
    box1.shapeColor = "white";
    box1.velocityX = 3;
    box1.velocityY = 3; 

}

function draw() {
    background("gray");


    createEdgeSprites ();
  
    bounceOff (object1,box1);
    bounceOff (object2,box1);
    bounceOff (object3,box1);
    bounceOff (object4,box1);
    bounceOff (EdgeSprites,box1);
    
    if (box1.isTouching(object1));
       box1.changeColor = "green";

    if (box1.isTouching(object2));
       box1.changeColor = "maroon";
       music.play ();   
    
    if (box1.isTouching(object3));
       box1.changeColor = "yellow";
       box1.velocityX = 0;
       box1.velocityY = 0;
       music.stop ();
       
    if (box1.isTouching(object4));
       box1.changeColor = "blue";   







    
    drawSprites ();
}

function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }
