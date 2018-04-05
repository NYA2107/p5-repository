class DotProduct{
  constructor(object,ratio){
    this.object = object;
    this.ratio = ratio;
    this.toogleCalled = 0;
    this.called = false;
  }

  callDotProduct(){
    this.toogleCalled++;
    if(this.toogleCalled == 1){
      var parent = select('#operation-container');
      var temp = createDiv(
      '<h4> DOT PRODUCT </h4>'+
      '<p>vector id</p>'+
      '<input id="vector-dot-1' + '" type="number" name="" value="" placeholder="Vector id">' +
      '<p>vector id</p>'+ 
      '<input id="vector-dot-2' + '" type="number" name="" value="" placeholder="Vector id">' +
      '<p>result</p>'+
      '<input id="vector-dot-result' + '" type="number" name="" value="" placeholder="Result">'
      );
      temp.id('vector-card');
      parent.child(temp);
    }
    this.called = true;
    
  }

  drawResult(){
    if(this.called == true){
      this.vector1 = select('#vector-dot-1').value();
      this.vector2 = select('#vector-dot-2').value();

      if(this.vector1 > this.object.totalVector|| this.vector2 > this.object.totalVector || this.vector1 == "" || this.vector2 == "" || this.vector1 <= 0 || this.vector2 <= 0){
        return;
      }
      else{
        this.x1 = select('#vector-x-'+(this.vector1)).value()*1;
        this.y1 = select('#vector-y-'+(this.vector1)).value()*1;

        this.x2 = select('#vector-x-'+(this.vector2)).value()*1;
        this.y2 = select('#vector-y-'+(this.vector2)).value()*1;

        this.resultCross = (this.x1*this.x2) + (this.y1*this.y2);

        var result = select('#vector-dot-result');
        result.value(this.resultCross);
      }
    }
    else{
      return;
    }  
  }
}
