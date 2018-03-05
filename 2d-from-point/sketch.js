var canvas;
var sizePoint = 20;
var sup = new Support();
///////////////////////////////
var A = new Draw();
var B = new Draw();
var C = new Draw();
var D = new Draw();
///////////////////////////////
function run(Draw){
    Draw.setPolygon();
    Draw.setLine(); 
    Draw.setPoint(); 
} 

function keyPressed(){
  let x = mouseX;
  //formula -> fakeY = height - realY
  //there comes a cursor with real Y point,so it's mirroring. in this point the mouseY is fake.
  //mouseY here is fake because it's influenced by the formula in the Class Point
  //to get the original y when the cursor come in, we use can use the formula :
  //fakeY = realY - height --> realY = height - fakeY
  let y = height - mouseY; 
  if(key == 'A'){
    A.makePoint(x,y,sizePoint,"A");
  }
  if(key == 'B'){
    B.makePoint(x,y,sizePoint,"B");
  }
  if(key == 'C'){
    C.makePoint(x,y,sizePoint,"C");
  }
  if(key == 'D'){
    D.makePoint(x,y,sizePoint,"D");
  }
}

function mPoint(Point,x,y,name){
	Point.makePoint(x+width/2,y+height/2,sizePoint,name);
}

function setup() {
  // put setup code here
  canvas = createCanvas(1000, 480);
  canvas.parent('app');
  mPoint(A,100,100,"A"); 
  console.log("mPoint(A,100,100,'A')");
}

function draw() {
  // put drawing code here
  background(32, 50, 66);
  sup.showGrid(20,20);
  run(A);
  run(B);
  run(C);
  run(D);
  sup.showCursor();
  sup.showXY();	
}
