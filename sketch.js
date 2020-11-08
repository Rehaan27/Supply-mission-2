var helicopterIMG, helicopterSprite, packageSprite,packageIMG, boxLeft, boxRight, boxBottom;
var packageBody,ground, sideLine1, sideLine2, bottomLine, boxPosition, boxY,boxRightBody, boxBottomBody,boxLeftBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//boxPosition=width/2-100; 
	//boxY=610;
	
	boxLeft = createSprite(290,610,20,100);
	boxRight = createSprite(510,610,20,100);
	boxBottom = createSprite(400,650,200,20);

    var options = {
    'isStatic':true
	}

	boxLeftBody = Bodies.rectangle(290,610,20,100,options);
	boxRightBody = Bodies.rectangle(510,610,20,100,options);
	boxBottomBody = Bodies.rectangle(400,650,200,20,options);

	World.add(world,boxBottomBody);
	World.add(world,boxLeftBody);
	World.add(world,boxRightBody);

	boxLeft.shapeColor="red";
	boxRight.shapeColor= "red";
	boxBottom.shapeColor= "red";
	
	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);

  rectMode(CENTER);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  
  rect(packageBody.position.x,packageBody.position.y, 200, 5);

  boxLeft.x = boxLeftBody.position.x;
  boxLeft.y = boxLeftBody.position.y;

  rect(boxLeftBody.position.x,boxLeftBody.position.y,20,100);

  boxRight.x = boxRightBody.position.x;
  boxRight.y = boxRightBody.position.y; 

  rect(boxRightBody.position.x,boxRightBody.position.y,20,100);

  boxBottom.x = boxBottomBody.position.x;
  boxBottom.y = boxBottomBody.position.y;

  rect(boxBottomBody.position.x,boxBottomBody.position.y,200,20);
 
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	Matter.Body.setStatic(packageBody, false);
  }
};