
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bottom = new Dustbin(1090, 450, 200, 20);
	bottom.shapeColor = "red";

	side1 = new Dustbin(1000, 400, 20, 100);
	side1.shapeColor = "red";

	side2 = new Dustbin(1180, 400, 20, 100);
	side2.shapeColor = "red";


	var ground_options ={
        isStatic: true
	}

	ground = new Ground(450,480,1900,20);

	paper = new Paper(150,150,20);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();

  paper.display();

  bottom.display();
  side1.display();
  side2.display();


   drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y: -85})
	}
  }
  

