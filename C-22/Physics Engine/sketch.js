const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, bodies;
var ground;
var g;
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;
  var u = {
    restitution:1.0
  }
  bodies = Bodies.rectangle(400,200,50,50,u);
  World.add(world,bodies);
  console.log(bodies);
  ground = Bodies.rectangle(400,380,800,80,{isStatic:true});
  World.add(world,ground);
 g = createSprite(400,380,800,80);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(bodies.position.x,bodies.position.y,50,50);
  g.x = ground.position.x;
  g.y = ground.position.y;
  drawSprites();
}