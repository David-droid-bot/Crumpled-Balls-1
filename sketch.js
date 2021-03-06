
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ball=new Paper(100,180,40);

	groundSprite=createSprite(290,650,20,100);
	groundSprite.shapeColor=color(255,0,0)
	ground1=new Ground(600,690,1200,20);
	groundSprite=createSprite(400,690,200,20);
	groundSprite.shapeColor=color(255,0,0)

	groundSprite=createSprite(510,650,20,100);
	groundSprite.shapeColor=color(255,0,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground1.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-200});
	}
}

