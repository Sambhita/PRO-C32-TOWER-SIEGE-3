const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

var gameState = "onSling"
var bg = "sprites/Night 1.jpeg";

function preload(){
  backImage();
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,500);
  ground = new Ground();
  stand1 = new Stand(380,450,270,10);
  stand2 = new Stand(650,250,190,10);
 

  //stand1
  //level one
  block1 = new Block(280,410,30,40);  
  block2 = new Block(310,410,30,40);
  block3 = new Block(340,410,30,40);
  block4 = new Block(370,410,30,40);
  block5 = new Block(400,410,30,40);
  block6 = new Block(430,410,30,40);
  block7 = new Block(460,410,30,40);
  block8 = new Block(490,410,30,40);
  //level two
  block9 = new Block(310,380,30,40);
  block10 = new Block(340,380,30,40);
  block11 = new Block(370,380,30,40);
  block12 = new Block(400,380,30,40);
  block13 = new Block(430,380,30,40);
  block14 = new Block(460,380,30,40);
  //level three
  block15 = new Block(340,340,30,40);
  block16 = new Block(370,340,30,40);
  block17 = new Block(400,340,30,40);
  block18 = new Block(430,340,30,40);
  //level four
  block19 = new Block(370,300,30,40);
  block20 = new Block(400,300,30,40);
  //level five
  block21 = new Block(385,240,30,40);

  //stand2
  //level one
  block22 = new Block(590,150,30,40)
  block23 = new Block(620,150,30,40)
  block24 = new Block(650,150,30,40)
  block25 = new Block(680,150,30,40)
  block26 = new Block(710,150,30,40)

  //level two
  block27 = new Block(620,110,30,40)
  block28 = new Block(650,110,30,40)
  block29 = new Block(680,110,30,40)

  //level three
  block30 = new Block(650,70,30,40)

  //ball  with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:150,y:200});

}

function draw() {
  if(backImage)
    background(backImage);
  
  Engine.update(engine);
 
  strokeWeight(2);
  stroke(15);
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("#B76CFD")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("#ff6700")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("#FF2281")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("#39FF14")
  block19.display();
  block20.display();
 stroke(15)
 fill("blue")
  block21.display();
  

  stroke(15)
 fill("#7df9ff")
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();

 stroke(15)
 fill("#39FF14")
 block27.display();
 block28.display();
 block29.display();

 stroke(15)
 fill("yellow")
 block30.display();

  fill("white");
  textSize(30);
  text("drag the ball and release it to hit the blocks ",150,50)

  let c = color('red');
  fill(c);
  noStroke();
  ellipse(ball.position.x,ball.position.y,25);
  slingShot.display();
}

function mouseDragged(){
  if(gameState === "onSling" ){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  slingShot.fly();
  gameState = "offSling";
}

function keyPressed(){
  if(keyCode===32)
  slingShot.attach(this.ball);
  Matter.Body.setPosition(this.bird, {x:200,y:50});
  gameState = "onSling";
}

async function backImage(){
  var response = await fetch("https//worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=0900 && hour<=1900){
      bg = "sprites/Morning.jpeg";
  }
  else{
      bg = "sprites/Night 1.jpeg";
  }
  BackG = loadImage(bg);
}
