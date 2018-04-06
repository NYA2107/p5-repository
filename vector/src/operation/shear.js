class Shear{

  constructor(point){
    this.point = point;
    this.toogleCalled = 0;
    this.called = false;
  }

  callShear(){
    this.toogleCalled++;
    if(this.toogleCalled == 1){
      var parent = select('#operation-container');
      var temp = createDiv(
      '<h4> SHEAR </h4>'+
      '<select id="shear-base">'+
        '<option value="shearX">Shear X</option>'+
        '<option value="shearY">Shear Y</option>'+
      '</select>'+
      '<p>Shear Value</p>'+
      '<input id="shear-value" type="number" name="" value="" placeholder="shear value">' +
      '<div id="but" class="button" onclick="shear.changeResult()">SHEAR</div>'
      );
      temp.id('vector-card');
      parent.child(temp);
    }
    this.called = true;

  }

  loop(){
    if(this.called == false){
      return;
    }
    else{
      this.shearValue = select('#shear-value').value()*1;
      this.shearBase = select('#shear-base').value();
    }
      
  }

  changeResult(){
    if(this.shearBase == "shearX"){
      for(var i = 0; i< this.point.totalPoint; i++){
        var x = select('#point-x-'+(i+1)).value()*1;
        var y = select('#point-y-'+(i+1)).value()*1;

        this.currX = x + this.shearValue * y;
        this.currY = y;

        select('#point-x-'+(i+1)).value(this.currX);
        select('#point-y-'+(i+1)).value(this.currY);
     }

    }
    else if(this.shearBase == "shearY"){
      for(var i = 0; i< this.point.totalPoint; i++){
        var x = select('#point-x-'+(i+1)).value()*1;
        var y = select('#point-y-'+(i+1)).value()*1;

        this.currX = x;
        this.currY = y + this.shearValue * x;;

        select('#point-x-'+(i+1)).value(this.currX);
        select('#point-y-'+(i+1)).value(this.currY);
     }
    }

  }

}