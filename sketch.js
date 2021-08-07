const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  var ballOptions = {
    restitution:1,
    isStatic:true
  }
  ball = Bodies.circle(200,100,50,ballOptions);
  World.add(world,ball);

  console.log(ball.position);
  console.log(ground);

 
}

function draw() {
  background("red"); 
  Engine.update(engine);
  rectMode(CENTER); 

  rect(ground.position.x,ground.position.y,
    400,20);

    ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
  
  
}

// Engine ---> Universe
// World  ---> Earth
// Bodies ---> Bodies on the earth
// Physics engine ---> Matter.js