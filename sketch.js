
var END = 0;
var PLAY = 1;
var gameState = PLAY;

var boy,boyImg;
var road,roadImg;
var obstacle1,obstacle1Img;
var obstacle2,obstacle2Img;
var obstacle3,obstacle3Img;
var onstacle4,obstacle4Img;

var collidedSound;

var gameOver,restart;

var score=0;

var obstaclesGroup;

function preload(){
boyImg = loadImage("boy.png");
roadImg = loadImage("road.png");
gameOverImg = loadImage("game over.png");
restartImg = loadImage("restart.png");
obstacleImg = loadImage("obstacle.png");
obstacle2Img = loadImage("obstacle2.png");
obstacle3Img = loadImage("obstacle3.png");
obstacle4Img = loadImage("obstacle4.png");

collidedSound = loadSound("sfx-impact20.mp3");

}

function setup() {
 createCanvas(700,700);
 background(road);

 road = createSprite(700,700,40,40);
 road.addAnimation(groundImg);

 boy = createSprite(30,675,40,40);
 boy.addAnimation(boyImg);
 boy.scale = 0.4;

 gameOver = createSprite(350,350,40,40);
 gameOver.addAnimation(gameOverImg);
 gameOver.scale = 0.5;

 restart = createSprite(350,370,40,40);
 restart.addAnimation(restartImg);
 restart.scale = 0.5;

 

}

function draw() {
 background(groundImg);
 fill("maroon");
 textSize(20);
 text("score: ", score = 0,30,30);

 if(gameState==PLAY){

     boy.x = mouseWorld.x;

     gameOver.visible = false;
     restart.visible = false;

     boy.velocityY = boy.velocityY + 0.8;

     if (road.y < 0){
        road.y = ground.height/2;
      }

     road.velocityX = -(4 + 3* score/100)
     score = score + Math.round(getFrameRate()/60);

     spawnObstacles();

      if(boy.isTouching(obstacles)){
          gameState = END;
      }

     if(gameState==END){
         gameOver.visible = true;
         restart.visible = true;
         boy.setVelocityX = 0;
         obstaclesGroup.setVelocityY = 0;
         road.setVelocityY = 0;
     }
        }

        if(mousePressedOver(restart)){
            reset();
        }


}

 function spawnObstacles() {
    if (frameCount % 100===0){
        obstacle = createSprite(400,365,40,40);
        obstacle.addImage(obstaclesGroup)
        obstacle.scale = 0.4;
        obstacle.setVelocityY = 3;

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: obstacle.addImage(obstacle1);
            break;
            case 2: obstacle.addImage(obstacle2);
            break;
            case 3: obstacle.addImage(obstacle3);
            break;
            case 4: obstacle.addImage(obstacle4);
            break;
            default: break;
        }
        obstaclesGroup.add(obstacle);
        obstacle.scale = 0.5;
        obstacle.lifetime = 234;
    }
}

function reset(){
    gameState = PLAY;
    obstaclesGroup.destroyEach();
    score = 0;
}



















