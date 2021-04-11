const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var holder,ground;
var stand1,stand2;
var slingShot;
var polygon_Img;
function preload(){

  polygon_Img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,250,30,40);
  console.log(block1);
  block2 = new Block(330,250,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //level four
  block16 = new Block(390,155,30,40);
  // layer1
  block17 = new Block(620,100,30,40);
  block18 = new Block(650,100,30,40);
  block19 = new Block(680,100,30,40);
  block20 = new Block(710,100,30,40);
  block21 = new Block(740,100,30,40);
  block22 = new Block(770,100,30,40);
  //layer2
  block23 = new Block(650,50,30,40);
  block24 = new Block(680,50,30,40);
  block25 = new Block(710,50,30,40);
  block26 = new Block(740,50,30,40);
  //layer3
  block27 = new Block(680,0,30,40);
  block28 = new Block(710,0,30,40);
  //layer4
  block29 = new Block(695,-50,30,40);




  //polygon holder with slings
  var options = {
    density:1,
    friction:10
  }
  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);

  slingShot = new Sling(this.polygon,{x:170,y:200});
  
  /*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
		Engine.run(engine);
		Render.run(render);*/




  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill(255, 158, 0);
  textFont("algerian");
  text("drag  the  smiley  stone  and  release  it,  to  launch  it  towards  the  blocks",5,20);
  

  ground.display();
  fill(112, 224, 0);
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill(255, 10, 84);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(255, 71, 126);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(255, 92, 138);
  block13.display();
  block14.display();
  block15.display();
  fill(255, 112, 150);
  block16.display();
  fill(0, 150, 199);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill(0, 180, 216);
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  fill(72, 202, 228);
  block27.display();
  block28.display();
  fill(144, 224, 239);
  block29.display();

 

  imageMode(CENTER);
  image(polygon_Img,polygon.position.x,polygon.position.y,200,100);

  slingShot.display();


}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(this.polygon);
  }
}