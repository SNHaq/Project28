
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
boyImage=loadImage("Plucking mangoes/boy.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,640,20,20);
	boy.addImage("boy", boyImage);
	boy.scale = 0.08;

	tree1 = new Tree(600,500,50,150)
	mango1 = new Mango(630,350,50,50);
	mango2 = new Mango(600,430,50,50);
	mango3 = new Mango(570,370,50,50);
	mango4 = new Mango(680,400,30,50);
	mango5 = new Mango(520,450,50,80);
	mango6 = new Mango(700,470,50,50)
	ground = new Ground(400,700,800,50);
	stone1 = new Stone(160,570,50,50);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0,200,250);

 detectCollision(stone1, mango1);
 tree1.display(); 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 ground.display();
 stone1.display();

 function mouseDragged(){
	Matter.body.setPosition(stone1.body, {x: mouseX, y: mouseY})
 }
  
 function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stone1BodePosition = lstone.body.position
	
	var distance = dist(stone1.body.position.x, stone1.body.position.y, mango1.body.position.x, mango1.body.position.y)
	if(distance<=lmango.r+lstone.r){
	mango1.isStatic = false
	}
	}
	
 drawSprites();
}