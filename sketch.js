var bullet;
var wall;
var speed;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(332,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50,30);
  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
background("black");  
bullet.velocityX=speed;

if(wall.x-bullet.x<=(bullet.width+wall.width)/2){
  bullet.velocityX=0;

  var damage=(0.5*weight*speed*speed/(thickness*thickness*thickness))

  if (damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if (damage<10){
    wall.shapeColor=color(0,255,0);
  }

}
drawSprites();
}