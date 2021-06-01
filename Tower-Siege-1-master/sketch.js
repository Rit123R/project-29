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

function preload(){
 // polygon_img=loadImage("polygon.png");
 // backgroundImg=loadImage("bg.png");
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  box1 = new Box(280,275,30,40);  
  box2 = new Box(310,275,30,40);
  box3 = new Box(340,275,30,40);
  box4 = new Box(370,275,30,40);
  box5 = new Box(400,275,30,40);
  box6 = new Box(430,275,30,40);
  box7 = new Box(460,275,30,40);
  box8 = new Box(490,275,30,40);
  //level two
  box9 = new Box(310,235,30,40);
  box10 = new Box(340,235,30,40);
  box11 = new Box(370,235,30,40);
  box12 = new Box(400,235,30,40);
  box13 = new Box(430,235,30,40);
  box14 = new Box(460,235,30,40);
  //level three
  box15 = new Box(340,195,30,40);
  box16 = new Box(370,195,30,40);
  box17 = new Box(400,195,30,40);
  box18 = new Box(430,195,30,40);
  //level four
  box19 = new Box(370,155,30,40);
  box20 = new Box(400,155,30,40);
  //level five
  box21 = new Box(385,115,30,40);

  //set two 
  //level one
  boxes1 = new Box(640,175,30,40);
  boxes2 = new Box(670,175,30,40);
  boxes3 = new Box(700,175,30,40);
  boxes4 = new Box(730,175,30,40);
  boxes5 = new Box(760,175,30,40);
  //level two
  boxes6 = new Box(670,135,30,40);
  boxes7 = new Box(700,135,30,40);
  boxes8 = new Box(730,135,30,40);
  //level three
  boxes9 = new Box(700,95,30,40);

  //ball  with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
 // background(backgroundImg);  
 background("lightgreen")
  Engine.update(engine);
 
  
 // ground.display();
  strokeWeight(2);
  stroke(15);
  
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("black")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  stroke(15)
  fill("orange")
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
 stroke(15)
 fill("violet")
  box15.display();
  box16.display();
  box17.display();
  box18.display();
    stroke(15)
    fill("green")
  box19.display();
  box20.display();
 stroke(15)
 fill("blue")
  box21.display();

  stroke(15)
  fill("red")
  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  stroke(15)
  fill("yellow")
  boxes6.display();
  boxes7.display();
  boxes8.display();
  stroke(15)
  fill("pink")
  boxes9.display();
  
 //ball = loadImage(polygon_img ,ball.position.x-50,ball.position.y-80,40,40);
 // ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32 && ball.body.speed < 3){
     
    
 slingshot.attach(this.ball);
  }

}