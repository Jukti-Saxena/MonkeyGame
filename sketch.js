var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;

function preload(){
  
  //loading the Images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
}

function setup() {
  //creating canvas
  createCanvas(600,400);
  //creating monkey sprite
  monkey=createSprite(50,350,40,40)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  //creating the ground
  ground=createSprite(300,390,600,20);
  ground.velocityX=-6;
  
  //creating the groups
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  //creating variable for score or survival time
  survivalTime=0;
  }


function draw() {
  //giving background value
background("green");
  
  //giving scrolling effect to the ground
  if (ground.x < 150){
      ground.x = ground.width/2;
    }
  
  //making the monkey jump
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  //giving gravity to the monkey
  monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
  
  //displaying the survival time
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  //calling the fruit and obstacle functions
  fruits();
  obstacles();
 drawSprites();
}

//creating the fruits function
function fruits(){
 if(frameCount%80==0) {
   banana=createSprite(300,200,40,40);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.velocityX=-4;
   banana.lifetime=100;
   banana.scale=0.1;
   
   //adding banana to the food group 
   FoodGroup.add(banana);
 }
  }

//creating the obstacles function
function obstacles(){
  if(frameCount%300==0){
    obstacle = createSprite(600,340,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=140;
    obstacle.velocityX=-4;
    obstacle.scale=0.3;
  }
}



