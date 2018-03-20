class Vector{

  constructor(x,y){
    this.startX = 0;
    this.startY = 0;
    this.x = parseInt(x);
    this.y = parseInt(y);
  }

  drawVector(){
    line(this.startX, this.startY, this.x, this.y);
  }

}


class VectorCollection{

  constructor(){
    this.list = new Array();
  }

  addVector(x,y){
    this.list.push(new Vector(x,y));
  }
  updateVector(x,y,i){
    this.list[i] = new Vector(x,y);
  }

}

class VectorController{
  

  constructor(){
    this.vectorCol = new VectorCollection();
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

  loopVector(){
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
        this.vectorCol.list[i].drawVector();
      } 
    }
  }
  
}
  
class VectorOperation{

  constructor(object){
    this.object = object;
  }

  multiplyScalar(){
    var parent = select('#operation-container');
    var temp = createDiv(
    '<h4> MULTIPLY </h4>'+
    '<input id="vector-m' + '" type="number" name="" value="" placeholder="Vector id">' + 
    '<input id="scalar-m' + '" type="number" name="" value="" placeholder="Multiplier">'
    );
    temp.id('vector-card');
    parent.child(temp);
  }
  drawResult(){
    this.vectorSelector = select('#vector-m').value();
    this.scalarSelector = select('#scalar-m').value();

    if(this.vectorSelector >= this.object.totalVector ){
      
    }
    else{

    }
  }

}