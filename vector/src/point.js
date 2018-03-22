class Point{

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
  drawPoint(name){

    strokeWeight(15);
    point(this.x, this.y);

    push();

    translate(this.x,this.y);
    noStroke();
    text(name + ": ("+this.textX+","+this.textY+")",10 ,0);

    pop();

  }

}


class PointCollection{

  constructor(ratio){
    this.list = new Array();
    this.ratio = ratio;
  }

  addPoint(x,y){
    this.list.push(new Point(x,y,this.ratio));
  }
  updatePoint(x,y,i){
    this.list[i] = new Point(x,y,this.ratio);
  }

}

class PointController{
  

  constructor(ratio){
    this.ratio = ratio
    this.pointCol = new PointCollection(this.ratio);
    this.totalPoint = 0;
    
  }

  addPoint() {
    this.totalPoint +=1

    var parent = select('#controller-container');
    var temp = createDiv(
    '<h4> POINT '+ this.totalPoint + '</h4>'+
    '<p>coordinate x</p>'+
    '<input id="point-x-' + this.totalPoint + '" type="number" name="" value="" placeholder="Coordinate x">' + 
    '<p>coordinate y</p>'+
    '<input id="point-y-' + this.totalPoint + '" type="number" name="" value="" placeholder="Coordinate y">'
    );
    temp.id('vector-card');
    parent.child(temp);

    this.currX = select('#point-x-'+this.totalPoint).value();
    this.currY = select('#point-y-'+this.totalPoint).value();
    this.pointCol.addPoint(this.currX,this.currY);
  }

  drawResult(){
    if(this.totalPoint == 0){
      return;
    }
    else{
      for(var i = 0; i < this.totalPoint; i++){
        this.currX = select('#point-x-'+(i+1)).value();
        this.currY = select('#point-y-'+(i+1)).value();

        this.currX = this.currX;
        this.currY = -this.currY;

        this.pointCol.updatePoint(this.currX,this.currY,i);
        fill(255);
        this.pointCol.list[i].drawPoint("P" + parseInt(i+1));
      } 
    }
  }
  
}

class Shape{

  constructor(object,ratio){
    this.ratio = ratio;
    this.object = object;
    this.toogle = 0;
  }

  callShape(){
    this.toogle++;
  }
  drawResult(){
    if(this.object.totalPoint == 0){
      return;
    }
    else{
      if(this.toogle % 2 == 0){
        return;
      }
      else{
        fill(255,255,255,50);
        beginShape();
          for(var i = 0; i< this.object.totalPoint; i++){
            this.currX = select('#point-x-'+(i+1)).value();
            this.currY = select('#point-y-'+(i+1)).value();

            this.currX = this.currX*ratio;
            this.currY = -this.currY*ratio;
            vertex(this.currX,this.currY);
          }
          vertex(this.currX,this.currY);
          vertex(select('#point-x-1').value()*ratio,-select('#point-y-1').value()*ratio);
        endShape();
      }
      
    }
  }

}
  
