class Circle{

  constructor(x,y,d,ratio){
    this.ratio = ratio;
    this.d = d*this.ratio;
    this.startX = 0;
    this.startY = 0;
    this.textX = x*1;
    this.textY = -y;
    this.x = parseFloat(x)*this.ratio;
    this.y = parseFloat(y)*this.ratio;
    
  }
  drawCircle(name){

    strokeWeight(2);
    ellipse(this.x, this.y,this.d,this.d);

    push();
    fill(178, 249, 177);
    translate(this.x,this.y);
    noStroke();
    text(name + ": ("+this.textX+","+this.textY+")"+" d: "+ this.d/ratio,this.d/2+3,0);
    pop();

  }

}


class CircleCollection{

  constructor(ratio){
    this.list = new Array();
    this.ratio = ratio;
  }

  addCircle(x,y,d){
    this.list.push(new Circle(x,y,d,this.ratio));
  }
  updateCircle(x,y,d,i){
    this.list[i] = new Circle(x,y,d,this.ratio);
  }

}

class CircleController{
  

  constructor(ratio){
    this.ratio = ratio
    this.circleCol = new CircleCollection(this.ratio);
    this.totalCircle = 0;
    
  }

  addCircle() {
    this.totalCircle +=1

    var parent = select('#controller-container');
    var temp = createDiv(
    '<h4> CIRCLE '+ this.totalCircle + '</h4>'+
    '<p>coordinate x</p>'+
    '<input id="circle-x-' + this.totalCircle + '" type="number" name="" value="" placeholder="Coordinate x">' +
    '<p>coordinate y</p>'+ 
    '<input id="circle-y-' + this.totalCircle + '" type="number" name="" value="" placeholder="Coordinate y">' +
    '<p>diameter</p>'+
    '<input id="diameter' + this.totalCircle + '" type="number" name="" value="" placeholder="Diameter">'
    );
    temp.id('vector-card');
    parent.child(temp);

    this.currX = select('#circle-x-'+this.totalCircle).value();
    this.currY = select('#circle-y-'+this.totalCircle).value();
    this.diameter = select('#diameter'+this.totalCircle).value();
    this.circleCol.addCircle(this.currX,this.currY,this.diameter);
  }

  drawResult(){
    if(this.totalCircle == 0){
      return;
    }
    else{
      for(var i = 0; i < this.totalCircle; i++){
        this.currX = select('#circle-x-'+(i+1)).value();
        this.currY = select('#circle-y-'+(i+1)).value();
        this.diameter = select('#diameter'+(i+1)).value();

        this.currX = this.currX;
        this.currY = -this.currY;

        this.circleCol.updateCircle(this.currX,this.currY,this.diameter,i);
        //fill(255);
        fill(255,255,255,50);
        this.circleCol.list[i].drawCircle("C" + parseInt(i+1));
      } 
    }
  }
  
}
  
