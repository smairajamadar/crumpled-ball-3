const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball,g2,w1,w2,w3;

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    w1 = new Wall1(700,370,150,10)
    w2 = new Wall2(780,350,10,50)
    w3 = new Wall3(620,350,10,50)    
    g2 = new Ground(400,390,900,20)    
   
    var ball_options ={
        restitution: 0.3,        
        friction:0.5,
        density:1.2
    }

    ball = Bodies.circle(20,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("pink")
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    
    
     w1.display();
     w2.display();
     w3.display();
     g2.display();
   
          
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        
    Matter.Body.applyForce(ball,ball.position,{x:65,y:-65})
    }
}

