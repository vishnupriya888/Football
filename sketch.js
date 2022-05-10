const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0;
function preload() {
  backdrop = loadImage("back.png");
}
function setup() {
  createCanvas(529, 748);
  engine = Engine.create();
  world = engine.world;
  ball1 = new Ball(325,635);
  sling = new Slingshot(ball1.body,{ x: 325, y: 625 });
  person1 = new Person(100,300,80,80);
  person2 = new Person(200,200,80,80);
  person3 = new Person(300,300,80,80);
  person4 = new Person(256,70,80,80);


}
function draw() {
  background(backdrop);
 
  Engine.update(engine);
  ball1.display();
  sling.display();
  person1.display();
  person2.display();
  person3.display();
  person4.display();
  ball1.score();
  textSize(25);
  fill("white");
  text("Score "+score,30,30);
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}