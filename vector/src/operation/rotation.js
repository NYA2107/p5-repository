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
    '<input id="rotation-x" type="number" name="" value="" placeholder="PRotation X">' +
    '<input id="rotation-y" type="number" name="" value="" placeholder="PRotation Y">' +
    '<p>angle</p>'+
    '<input id="rotation-angle" type="number" name="" value="" placeholder="angle">' +
    '<div id="but" class="button" onclick="rotation.changeResult()">ROTATE</div>'
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
      this.rotationAngle = radians(select('#rotation-angle').value()*1);
      this.rotationObject = select('#rotation-object').value();
    }
      
  }

  changeResult(){
    if(this.rotationObject == "point"){
      for(var i = 0; i< this.point.totalPoint; i++){
        var x = select('#point-x-'+(i+1)).value()*1;
        var y = select('#point-y-'+(i+1)).value()*1;


        this.currX = round((cos(this.rotationAngle)*(x-this.rotationX) - sin(this.rotationAngle)*(y-this.rotationY)) + this.rotationX);
        this.currY = round((sin(this.rotationAngle)*(x-this.rotationX) + cos(this.rotationAngle)*(y-this.rotationY)) + this.rotationY);

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

        this.currX1 = round((cos(this.rotationAngle)*(x1-this.rotationX) - sin(this.rotationAngle)*(y1-this.rotationY)) + this.rotationX);
        this.currY1 = round((sin(this.rotationAngle)*(x1-this.rotationX) + cos(this.rotationAngle)*(y1-this.rotationY)) + this.rotationY);
        this.currX2 = round((cos(this.rotationAngle)*(x2-this.rotationX) - sin(this.rotationAngle)*(y2-this.rotationY)) + this.rotationX);
        this.currY2 = round((sin(this.rotationAngle)*(x2-this.rotationX) + cos(this.rotationAngle)*(y2-this.rotationY)) + this.rotationY);

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

        this.currX = round((cos(this.rotationAngle)*(x-this.rotationX) - sin(this.rotationAngle)*(y-this.rotationY)) + this.rotationX);
        this.currY = round((sin(this.rotationAngle)*(x-this.rotationX) + cos(this.rotationAngle)*(y-this.rotationY)) + this.rotationY);

        select('#circle-x-'+(i+1)).value(this.currX);
        select('#circle-y-'+(i+1)).value(this.currY);
     }
    }
  }

}