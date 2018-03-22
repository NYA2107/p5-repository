class CrossProuct{

  constructor(object,ratio){
    this.object = object;
    this.ratio = ratio;
    this.called = false;
  }

  callCrossProduct(){
    this.called = true;
    var parent = select('#operation-container');
    var temp = createDiv(
    '<h4> CROSS PRODUCT </h4>'+
    '<p>vector id</p>'+
    '<input id="vector-cross-1' + '" type="number" name="" value="" placeholder="Vector id">' +
    '<p>vector id</p>'+ 
    '<input id="vector-cross-2' + '" type="number" name="" value="" placeholder="Vector id">' +
    '<p>result</p>'+
    '<input id="vector-cross-result' + '" type="number" name="" value="" placeholder="Result">'
    );
    temp.id('vector-card');
    parent.child(temp);
  }

  drawResult(){
    if(this.called == true){
      this.vector1 = select('#vector-cross-1').value();
      this.vector2 = select('#vector-cross-2').value();

      if(this.vector1 > this.object.totalVector|| this.vector2 > this.object.totalVector || this.vector1 == "" || this.vector2 == "" || this.vector1 <= 0 || this.vector2 <= 0){
        return;
      }
      else{
        console.log("masuk");
        this.x1 = select('#vector-x-'+(this.vector1)).value()*1;
        this.y1 = select('#vector-y-'+(this.vector1)).value()*1;

        this.x2 = select('#vector-x-'+(this.vector2)).value()*1;
        this.y2 = select('#vector-y-'+(this.vector2)).value()*1;
        fill(178, 96, 107,90);
        noStroke();
        beginShape();
          vertex(0,0);
          vertex(this.x1*this.ratio,-this.y1*this.ratio);
          vertex(this.x1*this.ratio+this.x2*this.ratio,(-this.y1*this.ratio)+(-this.y2*this.ratio));
          vertex(this.x2*this.ratio,-this.y2*this.ratio);
        endShape();
        fill(126, 234, 202);
        noStroke();
        text("("+parseInt(this.x1+this.x2)+","+parseInt(this.y1+this.y2)+")",this.x1*this.ratio+this.x2*this.ratio,(-this.y1*this.ratio)+(-this.y2*this.ratio));

        this.resultCross = (this.x1*this.y2) - (this.y1*this.x2);

        var result = select('#vector-cross-result');
        result.value(this.resultCross);
      }
    }
    else{
      return;
    }  
  }
}