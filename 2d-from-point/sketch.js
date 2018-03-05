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
  let s = height-(mouseY*2);
  let x = mouseX;
  let y = mouseY+s;
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

function setup() {
  // put setup code here
  canvas = createCanvas(1000, 460);
  canvas.parent('app');
  // A.makePoint(100,100,sizePoint,"A");
  // A.makePoint(100,200,sizePoint,"A");
  // A.makePoint(300,200,sizePoint,"A");
  
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
}
