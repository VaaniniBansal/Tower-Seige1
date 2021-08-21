const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Constraint= Matter.Constraint;

var ground, miniG, miniG2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17,block18,block19,block20;
var block21, block22, block23, block24, block25, block26, block27, block28, block29, block30;
var hexa_image, hexa;
var chain;

function preload(){
    hexa_image=loadImage("polygon.png");

}

function setup(){
    createCanvas(800,600);

    engine= Engine.create();
    world= engine.world; 

    ground= new Ground(400,580,1000,20)
    miniG= new Ground(640,250,220,20)
    miniG2= new Ground(330,450,250,20);

    block1= new Block(230,425,30,30)
    block2= new Block2(260,425,30,30)
    block3= new Block(290,425,30,30)
    block4= new Block2(320,425,30,30)
    block5= new Block(350,425,30,30)
    block6= new Block2(380,425,30,30)
    block7= new Block(410,425,30,30)
    block8= new Block2(440,425,30,30)

    block9= new Block(260,400,30,30)
    block10= new Block2(290,400,30,30)
    block11= new Block(320,400,30,30)
    block12= new Block2(350,400,30,30)
    block13= new Block(380,400,30,30)
    block14= new Block2(410,400,30,30)

    block15= new Block(290,375,30,30)
    block16= new Block2(320,375,30,30)
    block17= new Block(350,375,30,30)
    block18= new Block2(380,375,30,30)

    block19= new Block(320,350,30,30)
    block20= new Block2(350,350,30,30)

   // block21= new Block(610,200,30,30);
    block25= new Block(615,200,30,30);
    block22= new Block2(630,200,30,30);
    block23= new Block(650,200,30,30);
    block24= new Block2(670,200,30,30);
    block21= new Block()

    hexa=Bodies.circle(50,200,20)
    World.add(world,hexa)

    //chain= new Chain(hexa,{x:150,y:200})


Engine.run(engine);

}

function draw(){
    rectMode(CENTER);
    background(255, 206, 206);
    
    ground.display()
    miniG.display()
    miniG2.display()

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    //block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()
    // block26.display()
    // block27.display()
    // block28.display()
    // block29.display()
    // block30.display()

}
