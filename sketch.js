var car;
var wall;
var speed;
var weight;



function setup() {
  createCanvas(1600,800);
  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(400,200,30,30)
  car.velocityX = speed;

  wall = createSprite(1500,400,50,800)

}

function draw() {
  background('black');  

if(car.collide(wall))
{
  car.velocityX = 0
  var deformation = 0.5 * weight * speed * speed/22509;

  if(deformation > 180){
  car.shapeColor = color(255,0,0)
  }
  if(deformation < 180 && deformation > 100){
  car.shapeColor = color(230,230,0)
  }
  if(deformation < 100){
  car.shapeColor = color(0,255,0)
  }
}

 drawSprites();
}
