class ScalarMultiply{

  constructor(object, ratio){
    this.object = object;
    this.called = false;
    this.ratio = ratio;
  }

  callMultiplyScalar(){
    this.called = true;
    var parent = select('#operation-container');
    var temp = createDiv(
    '<h4> MULTIPLY </h4>'+
    '<p>vector id</p>'+
    '<input id="vector-m' + '" type="number" name="" value="" placeholder="Vector id">' +
    '<p>multiplier</p>'+ 
    '<input id="scalar-m' + '" type="number" name="" value="" placeholder="Multiplier">'
    );
    temp.id('vector-card');
    parent.child(temp);
  }

  drawResult(){
    if(this.called == true){
      this.vectorSelector = select('#vector-m').value();
      this.scalarSelector = select('#scalar-m').value();

      if(this.vectorSelector > this.object.totalVector || this.vectorSelector == "" || this.vectorSelector <= 0){
        return;
      }
      else{
        console.log("masuk");
        this.x = select('#vector-x-'+(this.vectorSelector)).value();
        this.y = select('#vector-y-'+(this.vectorSelector)).value();

        this.resultX = this.x * this.scalarSelector;
        this.resultY = this.y * this.scalarSelector;

        var result = new Vector(this.resultX,-this.resultY, this.ratio);

        stroke(126, 234, 202);
        fill(126, 234, 202);
        result.drawVector("R");
      }
    }
    else{
      return;
    }  
  }
  
}