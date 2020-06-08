const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,zebra=[1,"qwerty",3.56,true,[89,56,25,[12]]];
var gamestate="rest";
zebra.push(5)
//console.log(zebra);
zebra.pop();
console.log(zebra[4][3][0]);


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    JSON_API(); 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
}
else{
    background("#00fff6");
}
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();  
   console.log(bird.body.speed);
}

function mouseDragged(){
    
    if(gamestate==="rest"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingshot.fly();
    gamestate="in air"
}


function keyPressed(){
    if((keyCode === 32)&&(bird.body.speed<30)){
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
        bird.sam=[];
        slingshot.attach(bird.body);
        gamestate="rest";
        
    }
    
}
async function JSON_API(){
    var API=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    var JSON_DATA=await API.json()
   // console.log();
var JSON_INFO=(JSON_DATA.datetime.slice(11,13));
if(JSON_INFO>=6&&JSON_INFO<=17){
    backgroundImg = loadImage("sprites/bg.png");
}
else{
    backgroundImg = loadImage("sprites/bg1.jpg");

}
}
