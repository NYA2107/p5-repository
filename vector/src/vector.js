class Vector{

  constructor(x,y,ratio){
    this.ratio = ratio;
    this.startX = 0;
    this.startY = 0;
    this.textX = x*1;
    this.textY = -y;
    this.x = parseFloat(x)*this.ratio;
    this.y = parseFloat(y)*this.ratio;
    this.angle = atan2(this.y,this.x);
    
  }
  drawVector(name){

    strokeWeight(2);
    line(this.startX, this.startY, this.x, this.y);

    push();

    translate(this.x,this.y);
    noStroke();
    text(name + ": ("+this.textX+","+this.textY+")",5,0);
    rotate(this.angle);
    triangle(this.startX,this.startY,this.startX-10,this.startY-5,this.startX-10,this.startY+5);

    pop();

  }

}


class VectorCollection{

  constructor(ratio){
    this.list = new Array();
    this.ratio = ratio;
  }

  addVector(x,y){
    this.list.push(new Vector(x,y,this.ratio));
  }
  updateVector(x,y,i){
    this.list[i] = new Vector(x,y,this.ratio);
  }

}

class VectorController{
  

  constructor(ratio){
    this.ratio = ratio
    this.vectorCol = new VectorCollection(this.ratio);
    this.totalVector = 0;
    
  }

  addVector() {
    this.totalVector +=1

    var parent = select('#controller-container');
    var temp = createDiv(
    '<h4> VECTOR '+ this.totalVector + '</h4>'+
    '<input id="vector-x-' + this.totalVector + '" type="number" name="" value="" placeholder="Coordinate x">' + 
    '<input id="vector-y-' + this.totalVector + '" type="number" name="" value="" placeholder="Coordinate y">'
    );
    temp.id('vector-card');
    parent.child(temp);

    this.currX = select('#vector-x-'+this.totalVector).value();
    this.currY = select('#vector-y-'+this.totalVector).value();
    this.vectorCol.addVector(this.currX,this.currY);
  }

  drawResult(){
    if(this.totalVector == 0){
      return;
    }
    else{
      for(var i = 0; i < this.totalVector; i++){
        this.currX = select('#vector-x-'+(i+1)).value();
        this.currY = select('#vector-y-'+(i+1)).value();

        this.currX = this.currX;
        this.currY = -this.currY;

        this.vectorCol.updateVector(this.currX,this.currY,i);
        fill(255);
        this.vectorCol.list[i].drawVector("V" + parseInt(i+1));
      } 
    }
  }
  
}
  
