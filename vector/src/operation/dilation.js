class Dilation{

  constructor(point,line,circle){
    this.point = point;
    this.line = line;
    this.circle = circle;
    this.toogle = 0;
    this.called = false;
  }

  callDilation(){
    this.called = true;
    var parent = select('#operation-container');
    var temp = createDiv(
    '<h4> DILATION </h4>'+
    '<select id="dilation-object">'+
      '<option value="point">Point/Shape</option>'+
      '<option value="line">Line</option>'+
      '<option value="circle">Circle</option>'+
    '</select>'+
    '<input id="dilation-x" type="number" name="" value="" placeholder="Base X">' +
    '<input id="dilation-y" type="number" name="" value="" placeholder="Base Y">' +
    '<input id="dilation-scale" type="number" name="" value="" placeholder="scale">' +
    '<div id="translate" class="button" onclick="dilation.drawResult()">DILATE</div>'
    );
    temp.id('vector-card');
    parent.child(temp);

  }

  loop(){
    if(this.called == false){
      return;
    }
    else{
      this.dilationX = select('#dilation-x').value()*1;
      this.dilationY = select('#dilation-y').value()*1;
      this.dilationScale = select('#dilation-scale').value()*1;
      this.dilationObject = select('#dilation-object').value();
    }
      
  }

  drawResult(){
    if(this.dilationObject == "point"){
      for(var i = 0; i< this.point.totalPoint; i++){
        var x = select('#point-x-'+(i+1)).value()*1;
        var y = select('#point-y-'+(i+1)).value()*1;

        this.currX = ( this.dilationScale*(x - this.dilationX) )+ this.dilationX;
        this.currY = ( this.dilationScale*(y - this.dilationY) )+ this.dilationY;

        select('#point-x-'+(i+1)).value(this.currX);
        select('#point-y-'+(i+1)).value(this.currY);
     }

    }
    else if(this.dilationObject == "line"){
      for(var i = 0; i< this.line.totalLine; i++){
        var x1 = select('#line-x1-'+(i+1)).value()*1;
        var y1 = select('#line-y1-'+(i+1)).value()*1;
        var x2 = select('#line-x2-'+(i+1)).value()*1;
        var y2 = select('#line-y2-'+(i+1)).value()*1;

        this.currX1 = ( this.dilationScale*(x1 - this.dilationX) )+ this.dilationX;
        this.currY1 = ( this.dilationScale*(y1 - this.dilationX) )+ this.dilationX;
        this.currX2 = ( this.dilationScale*(x2 - this.dilationX) )+ this.dilationX;
        this.currY2 = ( this.dilationScale*(y2 - this.dilationX) )+ this.dilationX;

        select('#line-x1-'+(i+1)).value(this.currX1);
        select('#line-y1-'+(i+1)).value(this.currY1);
        select('#line-x2-'+(i+1)).value(this.currX2);
        select('#line-y2-'+(i+1)).value(this.currY2);
     }

    }
    else if(this.dilationObject == "circle"){
      for(var i = 0; i< this.circle.totalCircle; i++){

        var x = select('#circle-x-'+(i+1)).value()*1;
        var y = select('#circle-y-'+(i+1)).value()*1;
        var diameter = select('#diameter'+(i+1)).value();

        this.currX = ( this.dilationScale*(x - this.dilationX) )+ this.dilationX;
        this.currY = ( this.dilationScale*(y - this.dilationY) )+ this.dilationY;
        this.diameter = ( this.dilationScale*(diameter - this.dilationY) )+ this.dilationY;

        select('#circle-x-'+(i+1)).value(this.currX);
        select('#circle-y-'+(i+1)).value(this.currY);
        select('#diameter'+(i+1)).value(this.diameter);
     }
    }
  }

}