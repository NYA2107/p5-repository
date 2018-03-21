class Line{

  constructor(x1,y1,x2,y2,ratio){
    this.ratio = ratio;
    this.textX1 = x1*1;
    this.textY1 = -y1;
    this.textX2 = x2*1;
    this.textY2 = -y2;
    this.x1 = parseFloat(x1)*this.ratio;
    this.y1 = parseFloat(y1)*this.ratio;
    this.x2 = parseFloat(x2)*this.ratio;
    this.y2 = parseFloat(y2)*this.ratio;

    
  }
  drawLine(name){

    var x1 = this.x1;
    var y1 = this.y1;
    var x2 = this.x2;
    var y2 = this.y2;
    strokeWeight(2);
    line(x1,y1,x2,y2);
    strokeWeight(15);
    point(this.x1, this.y1);
    point(this.x2, this.y2);
    push();
    noStroke();
    text(name + ": ("+this.textX1+","+this.textY1+")",this.x1+10 ,this.y1);
    text(name + ": ("+this.textX2+","+this.textY2+")",this.x2+10 ,this.y2);
    pop();

  }

}


class LineCollection{

  constructor(ratio){
    this.list = new Array();
    this.ratio = ratio;
  }

  addLine(x1,y1,x2,y2){
    this.list.push(new Line(x1,y1,x2,y2,this.ratio));
  }
  updateLine(x1,y1,x2,y2,i){
    this.list[i] = new Line(x1,y1,x2,y2,this.ratio);
  }

}

class LineController{
  

  constructor(ratio){
    this.ratio = ratio
    this.lineCol = new LineCollection(this.ratio);
    this.totalLine = 0;
  }

  addLine() {
    this.totalLine +=1

    var parent = select('#controller-container');
    var temp = createDiv(
    '<h4> LINE '+ this.totalLine + '</h4>'+
    '<input id="line-x1-' + this.totalLine + '" type="number" name="" value="" placeholder="Coordinate x1">' + 
    '<input id="line-y1-' + this.totalLine + '" type="number" name="" value="" placeholder="Coordinate y1">' +
    '<input id="line-x2-' + this.totalLine + '" type="number" name="" value="" placeholder="Coordinate x2">' + 
    '<input id="line-y2-' + this.totalLine + '" type="number" name="" value="" placeholder="Coordinate y2">'
    );
    temp.id('vector-card');
    parent.child(temp);

    this.currX1 = select('#line-x1-'+this.totalLine).value();
    this.currY1 = select('#line-y1-'+this.totalLine).value();
    this.currX2 = select('#line-x2-'+this.totalLine).value();
    this.currY2 = select('#line-y2-'+this.totalLine).value();
    this.lineCol.addLine(this.currX1,this.currY1,this.currX2,this.currY2);
  }

  drawResult(){
    if(this.totalLine == 0){
      return;
    }
    else{
      for(var i = 0; i < this.totalLine; i++){
        this.currX1 = select('#line-x1-'+(i+1)).value();
        this.currY1 = select('#line-y1-'+(i+1)).value();
        this.currX2 = select('#line-x2-'+(i+1)).value();
        this.currY2 = select('#line-y2-'+(i+1)).value();

        this.currX1 = this.currX1;
        this.currY1 = -this.currY1;
        this.currX2 = this.currX2;
        this.currY2 = -this.currY2;

        this.lineCol.updateLine(this.currX1,this.currY1,this.currX2,this.currY2,i);
        fill(255);
        this.lineCol.list[i].drawLine("L" + parseInt(i+1));
      } 
    }
  }
  
}
  
