const Engine = Matter.Engine;
const World= Matter.World;
 //Events = Matter.Events,
const Bodies = Matter.Bodies;
var engine, world, drops=[];
var maxDrops=100;
var i1, i2, i3, i4, thunder;
function preload(){
    i1=loadImage("images/thunderbolt/1.png")
    i2=loadImage("images/thunderbolt/2.png")
    i3=loadImage("images/thunderbolt/3.png")
    i4=loadImage("images/thunderbolt/4.png")
}

function setup(){
   createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;
   Umbrella=new umbrella(150,350,10)
   for (var i=0; i<maxDrops;i++){
    drops.push (new Drops(random(0,400), random(0,400),5))
}
if(frameCount%50){
    thunder=createSprite(50,175,50,50)
    thunder.lifetime=10
    var num=Math.round(random(1,4))
    switch(num){
        case 1: thunder.addImage(i1)
        break;
        case 2: thunder.addImage(i2)
        break;
        case 3: thunder.addImage(i3)
        break;
        case 4: thunder.addImage(i4)
        break;
    }
}
}

function draw(){
    Engine.update(engine);
    Umbrella.display();
    drops.display();
    drops.abc();
    drawSprites();
}   

