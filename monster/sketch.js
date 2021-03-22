const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18
box19,box20 ;
var rope;
var monster;
var bg;
function preload (){
bg = loadImage("city.png")
}
function setup(){
    var canvas = createCanvas(2000,650);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1000,630,2000,20);
    ball = new BallClass(200,200,150)
    rope = new SlingShot(ball.body,{x:500,y:50})
    box1 = new BoxClass(900,100,70,70)
    box2 = new BoxClass(900,100,70,70)
    box3 = new BoxClass(900,100,70,70)
    box4 = new BoxClass(900,100,70,70)
    box5 = new BoxClass(900,100,70,70)
    box6 = new BoxClass(900,100,70,70)
    box7 = new BoxClass(800,100,70,70)
    box8= new BoxClass(800,100,70,70)
    box9 = new BoxClass(800,100,70,70)
    box10 = new BoxClass(800,100,70,70)
    box11 = new BoxClass(800,100,70,70)
    box12 = new BoxClass(800,100,70,70)
    box13= new BoxClass(700,100,70,70)
    box14= new BoxClass(700,100,70,70)
    box15= new BoxClass(700,100,70,70)
    box16= new BoxClass(700,100,70,70)
    box17= new BoxClass(700,100,70,70)
    box18= new BoxClass(700,100,70,70)
    box19= new BoxClass(700,100,70,70)
    box20= new BoxClass(700,100,70,70)
    monster = new Monster(1000,200,200,200)



}


function draw(){
    
   background(bg); 
    Engine.update(engine);
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   ball.display();   
   monster.display();
   ground.display();

}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
     
}





