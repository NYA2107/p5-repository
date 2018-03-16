var canvas;
var totalLine = 0;
var Vx;
var Vy;

function addVector() {
  totalLine += 1;
  var parent = select('#controller-container')
  var temp = createDiv(
  	'<input id="vector-x-' + totalLine + '" type="number" name="" value="" placeholder="Coordinate x">' + 
  	'<input id="vector-y-' + totalLine + '" type="number" name="" value="" placeholder="Coordinate y">'
  	);
  temp.id('vector-card');
  parent.child(temp);
}


function loop1(){
	if(totalLine == 0){
		return;
	}
	else{
		Vx = document.getElementById('vector-x-1');
  		Vy = document.getElementById('vector-y-1');
		if(Vx.value == null || Vy.value == null){
			return;
		}
		else{
  			ellipse(Vx.value, Vy.value, 20,20);
		}
		
	}
}

class Vector{

  constructor(x,y){
    this.startX = 0;
    this.startY = 0;
    this.x = x;
    this.y = y;
  }

  drawVector(){
    line(this.startX, this.startY, this.x,this.y);
  }

}

class VectorCollection{
  
}

function setup() {
  // put setup code here
  canvas = createCanvas(1000, 480);
  canvas.parent('app');
}

function draw() {
  // put drawing code here
  background(32, 50, 66);
  fill(255);
  loop1();
}