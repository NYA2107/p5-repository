var canvas;
var vector = new VectorController();
var click = 0;


///////////////////////////////
var sum = new SumVector();
var tooglesum = 0;

function toogleSum(){
	tooglesum++;
	if(tooglesum % 2 == 0){
		sum.hide();
	}
	else{
		sum.show(vector);
	}
}
///////////////////////////////
function callVector(){
	vector.addVector();
}
//////////////////////////////


function setup() {
  // put setup code here
  canvas = createCanvas(1000, 480);
  canvas.parent('app');
}

function draw() {
  // put drawing code here
  background(32, 50, 66);
  fill(255);

  push();
  translate(width/2,height/2);

  sum.loopSum();
  stroke(255);
  vector.loopVector();

  pop();

}