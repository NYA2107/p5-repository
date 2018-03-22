class Rotation{

  constructor(point,line,circle){
    this.point = point;
    this.line = line;
    this.circle = circle;
    this.toogle = 0;
    this.called = false;
  }

  callRotation(){
    this.called = true;
    var parent = select('#operation-container');
    var temp = createDiv(
    '<h4> ROTATION </h4>'+
    '<select id="rotation-object">'+
      '<option value="point">Point/Shape</option>'+
      '<option value="line">Line</option>'+
      '<option value="circle">Circle</option>'+
    '</select>'+
    '<input id="rotation-x" type="number" name="" value="" placeholder="Base X">' +
    '<input id="rotation-y" type="number" name="" value="" placeholder="Base Y">' +
    '<p>angle</p>'+
    '<input id="rotation-angle" type="number" name="" value="" placeholder="angle">' +
    '<div id="rotate" class="button" onclick="rotation.drawResult()">ROTATE</div>'
    );
    temp.id('vector-card');
    parent.child(temp);

  }

  loop(){
    if(this.called == false){
      return;
    }
    else{
      this.rotationX = select('#rotation-x').value()*1;
      this.rotationY = select('#rotation-y').value()*1;
      this.rotationAngle = select('#rotation-angle').value()*1;
      this.rotationObject = select('#rotation-object').value();
    }
      
  }

  drawResult(){
    if(this.rotationObject == "point"){
      for(var i = 0; i< this.point.totalPoint; i++){
        var x = select('#point-x-'+(i+1)).value()*1;
        var y = select('#point-y-'+(i+1)).value()*1;

        this.currX = ( this.dilationScale*(x - this.dilationX) )+ this.dilationX;
        this.currY = ( this.dilationScale*(y - this.dilationY) )+ this.dilationY;

        select('#point-x-'+(i+1)).value(this.currX);
        select('#point-y-'+(i+1)).value(this.currY);
     }

    }
    else if(this.rotationObject == "line"){
      for(var i = 0; i< this.line.totalLine; i++){
        var x1 = select('#line-x1-'+(i+1)).value()*1;
        var y1 = select('#line-y1-'+(i+1)).value()*1;
        var x2 = select('#line-x2-'+(i+1)).value()*1;
        var y2 = select('#line-y2-'+(i+1)).value()*1;

        this.currX1 = ( this.dilationScale*(x1 - this.dilationX) )+ this.dilationX;
        this.currY1 = ( this.dilationScale*(y1 - this.dilationY) )+ this.dilationY;
        this.currX2 = ( this.dilationScale*(x2 - this.dilationX) )+ this.dilationX;
        this.currY2 = ( this.dilationScale*(y2 - this.dilationY) )+ this.dilationY;

        select('#line-x1-'+(i+1)).value(this.currX1);
        select('#line-y1-'+(i+1)).value(this.currY1);
        select('#line-x2-'+(i+1)).value(this.currX2);
        select('#line-y2-'+(i+1)).value(this.currY2);
     }

    }
    else if(this.rotationObject == "circle"){
      for(var i = 0; i< this.circle.totalCircle; i++){

        var x = select('#circle-x-'+(i+1)).value()*1;
        var y = select('#circle-y-'+(i+1)).value()*1;
        var diameter = select('#diameter'+(i+1)).value();

        this.currX = ( this.dilationScale*(x - this.dilationX) )+ this.dilationX;
        this.currY = ( this.dilationScale*(y - this.dilationY) )+ this.dilationY;
        this.diameter = this.dilationScale*diameter;

        select('#circle-x-'+(i+1)).value(this.currX);
        select('#circle-y-'+(i+1)).value(this.currY);
        select('#diameter'+(i+1)).value(this.diameter);
     }
    }
  }

}``