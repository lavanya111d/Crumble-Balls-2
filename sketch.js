const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var paper1;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(500, 600, 70, 100);

	paper1 = new Paper(10, 100, 40);

	ground1 = new Ground(400, 680, 800, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  box1.display();
  paper1.display();
  ground1.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.positions, {x:40,y:-50});
	}
}


