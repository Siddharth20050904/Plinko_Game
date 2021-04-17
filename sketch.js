const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,800,480,10);
  ground2 = new Ground(480,400,10,800);
  ground3 = new Ground(240,0,480,10);
  ground4 = new Ground(0,400,10,800);
  for (var k = 0; k <= width;k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var o = 15; o <= width; o = o+50){
    plinkos.push(new Plinko(o,175))
  }
}

function draw(){
  background(0);
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  for (var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  for (var j = 0; j <plinkos.length; j++){
    plinkos[j].display();
  }
  for (var o = 0; o <plinkos.length; o++){
    plinkos[o].display();
  }
  if(frameCount%30===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var s = 0; s <particles.length; s++){
    particles[s].display();
  }
}