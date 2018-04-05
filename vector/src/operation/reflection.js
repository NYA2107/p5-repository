class Reflection{

  constructor(point,line,circle,ratio){
    this.ratio = ratio;
    this.point = point;
    this.line = line;
    this.circle = circle;
    this.toogle = 0;
    this.toogleCalled = 0;
    this.shadowPoint = new PointCollection(this.ratio);
    this.shadowLine =  new LineCollection(this.ratio);
    this.shadowCircle = new CircleCollection(this.ratio);
  }

  callReflection(){
    this.toogleCalled++;
    if(this.toogleCalled == 1){
      var parent = select('#operation-container');
      var temp = createDiv(
      '<h4> REFLECTION </h4>'+
      '<p> OBJECT </p>'+
      '<select id="reflection-object">'+
        '<option value="point">Point/Shape</option>'+
        '<option value="line">Line</option>'+
        '<option value="circle">Circle</option>'+
      '</select>'+
      '<p> BASE </p>'+
      '<select id="reflection-base">'+
        '<option value="x-axis">x-axis</option>'+
        '<option value="y-axis">y-axis</option>'+
        '<option value="right-diagonal">y = x</option>'+
        '<option value="left-diagonal">y = -x</option>'+
        '<option value="O">(0,0)</option>'+
        '<option value="xEquals">x</option>'+
        '<option value="yEquals">y</option>'+
      '</select>'+
      '<p>x = k or y = k</p>'+
      '<input id="equals" type="number" name="" value="" placeholder="k">'
      );
      temp.id('vector-card');
      parent.child(temp);
    }
    
  }

  toogleShape(){
    this.toogle++;
  }

  loop(){
    if(this.toogleCalled % 2 == 0){
      return;
    }
    else{
      this.reflectionObject = select('#reflection-object').value();
      this.reflectionBase = select('#reflection-base').value();
      this.drawResult();
    }
      
  }

  drawResult(){
    if(this.reflectionObject == "point"){

      if(this.reflectionBase == "x-axis"){
        this.xAxisLine();
        this.pointXaxis();


        if(this.toogle % 2 != 0){
          this.pointShapeXaxis();
        }
        this.shadowPoint = new PointCollection(this.ratio);
      }

      else if(this.reflectionBase == "y-axis"){
        this.yAxisLine();
        this.pointYaxis();

        if(this.toogle % 2 != 0){
          this.pointShapeYaxis();
        }
        this.shadowPoint = new PointCollection(this.ratio);
      }
      else if(this.reflectionBase == "right-diagonal"){
        this.rightDiagonalLine();
        this.pointRightDiagonal();

        if(this.toogle % 2 != 0){
          this.pointShapeRightDiagonal();
        }
        this.shadowPoint = new PointCollection(this.ratio);
      }
      else if(this.reflectionBase == "left-diagonal"){
        this.leftDiagonalLine();
        this.pointLeftDiagonal();

        if(this.toogle % 2 != 0){
          this.pointShapeLeftDiagonal();
        }
        this.shadowPoint = new PointCollection(this.ratio);
      }
      else if(this.reflectionBase == "O"){
        this.oLine();
        this.pointO();

        if(this.toogle % 2 != 0){
          this.pointShapeO();
        }
        this.shadowPoint = new PointCollection(this.ratio);
      }  
      else if(this.reflectionBase == "xEquals"){

        var xEquals = select('#equals').value();

        this.xLine(xEquals);
        this.pointX(xEquals);

        if(this.toogle % 2 != 0){
          this.pointShapeX(xEquals);
        }
        this.shadowPoint = new PointCollection(this.ratio);
      }
      else if(this.reflectionBase == "yEquals"){

        var yEquals = select('#equals').value();

        this.yLine(yEquals);
        this.pointY(yEquals);

        if(this.toogle % 2 != 0){
          this.pointShapeY(yEquals);
        }
        this.shadowPoint = new PointCollection(this.ratio);
      }   
    }

    else if(this.reflectionObject == "line"){
      if(this.reflectionBase == "x-axis"){
        this.xAxisLine();
        this.lineXaxis();
        this.shadowLine = new LineCollection(this.ratio);
      }
      else if(this.reflectionBase == "y-axis"){
        this.yAxisLine();
        this.lineYaxis();
        this.shadowLine = new LineCollection(this.ratio);
      }
      else if(this.reflectionBase == "right-diagonal"){
        this.rightDiagonalLine();
        this.lineRightDiagonal();
        this.shadowLine = new LineCollection(this.ratio);
      }
      else if(this.reflectionBase == "left-diagonal"){
        this.leftDiagonalLine();
        this.lineLeftDiagonal();
        this.shadowLine = new LineCollection(this.ratio);
      }
      else if(this.reflectionBase == "O"){
        this.oLine();
        this.lineO();
        this.shadowLine = new LineCollection(this.ratio);
      }
      else if(this.reflectionBase == "xEquals"){
        var xEquals = select('#equals').value();

        this.xLine(xEquals);
        this.lineX(xEquals);
        this.shadowLine = new LineCollection(this.ratio);
      }
      else if(this.reflectionBase == "yEquals"){
        var yEquals = select('#equals').value();

        this.yLine(yEquals);
        this.lineY(yEquals);
        this.shadowLine = new LineCollection(this.ratio);
      }
    }

    else if(this.reflectionObject == "circle"){
      if(this.reflectionBase == "x-axis"){
        this.xAxisLine();
        this.circleXaxis();
        this.shadowCircle = new CircleCollection(this.ratio);
      }
      else if(this.reflectionBase == "y-axis"){
        this.yAxisLine();
        this.circleYaxis();
        this.shadowCircle = new CircleCollection(this.ratio);
      }
      else if(this.reflectionBase == "right-diagonal"){
        this.rightDiagonalLine();
        this.circleRightDiagonal();
        this.shadowCircle = new CircleCollection(this.ratio);
      }
      else if(this.reflectionBase == "left-diagonal"){
        this.leftDiagonalLine();
        this.circleLeftDiagonal();
        this.shadowCircle = new CircleCollection(this.ratio);
      }
      else if(this.reflectionBase == "O"){
        this.oLine();
        this.circleO();
        this.shadowCircle = new CircleCollection(this.ratio);
      }
      else if(this.reflectionBase == "xEquals"){
        var xEquals = select('#equals').value()

        this.xLine(xEquals);
        this.circleX(xEquals);
        this.shadowCircle = new CircleCollection(this.ratio);
      }
      else if(this.reflectionBase == "yEquals"){
        var yEquals = select('#equals').value()

        this.yLine(yEquals);
        this.circleY(yEquals);
        this.shadowCircle = new CircleCollection(this.ratio);
      }
    }
    
  }

  xAxisLine(){
    stroke(237, 28, 63);
    strokeWeight(2);
    line(-width,0,width,0);
  }
  yAxisLine(){
    stroke(237, 28, 63);
    strokeWeight(2);
    line(0,height,0,-height);
  }
  rightDiagonalLine(){
    stroke(237, 28, 63);
    strokeWeight(2);
    line(1000,-1000,-1000,1000);
  }
  leftDiagonalLine(){
    stroke(237, 28, 63);
    strokeWeight(2);
    line(1000,1000,-1000,-1000);
    
  }
  oLine(){
    stroke(237, 28, 63);
    strokeWeight(2);
    fill(237, 28, 63);
    ellipse(0,0,this.ratio,this.ratio);
  }
  xLine(h){
    h = h * this.ratio;
    stroke(237, 28, 63);
    strokeWeight(2);
    line(h,height,h,-height);
  }
  yLine(k){
    k = -(k * this.ratio);
    stroke(237, 28, 63);
    strokeWeight(2);
    line(width,k,-width,k );
  }

  circleXaxis(){
    for(var i = 0; i< this.circle.totalCircle; i++){
      var x = select('#circle-x-'+(i+1)).value()*1;
      var y = -select('#circle-y-'+(i+1)).value()*1;
      var diameter = select('#diameter'+(i+1)).value();

      this.currX = x;
      this.currY = -y;
      this.diameter = diameter;

      this.shadowCircle.addCircle(this.currX,this.currY,this.diameter);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168,50);
      this.shadowCircle.list[i].drawCircle('SC' + (i+1));
    }
  }
  circleYaxis(){
    for(var i = 0; i< this.circle.totalCircle; i++){
      var x = select('#circle-x-'+(i+1)).value()*1;
      var y = -select('#circle-y-'+(i+1)).value()*1;
      var diameter = select('#diameter'+(i+1)).value();

      this.currX = -x;
      this.currY = y;
      this.diameter = diameter;

      this.shadowCircle.addCircle(this.currX,this.currY,this.diameter);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168,50);
      this.shadowCircle.list[i].drawCircle('SC' + (i+1));
    }
  }
  circleRightDiagonal(){
    for(var i = 0; i< this.circle.totalCircle; i++){
      var x = -select('#circle-x-'+(i+1)).value()*1;
      var y = select('#circle-y-'+(i+1)).value()*1;
      var diameter = select('#diameter'+(i+1)).value();

      this.currX = y;
      this.currY = x;
      this.diameter = diameter;

      this.shadowCircle.addCircle(this.currX,this.currY,this.diameter);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168,50);
      this.shadowCircle.list[i].drawCircle('SC' + (i+1));
    }
  }
  circleLeftDiagonal(){
    for(var i = 0; i< this.circle.totalCircle; i++){
      var x = -select('#circle-x-'+(i+1)).value()*1;
      var y = select('#circle-y-'+(i+1)).value()*1;
      var diameter = select('#diameter'+(i+1)).value();

      this.currX = -y;
      this.currY = -x;
      this.diameter = diameter;

      this.shadowCircle.addCircle(this.currX,this.currY,this.diameter);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168,50);
      this.shadowCircle.list[i].drawCircle('SC' + (i+1));
    }
  }
  circleO(){
    for(var i = 0; i< this.circle.totalCircle; i++){
      var x = select('#circle-x-'+(i+1)).value()*1;
      var y = -select('#circle-y-'+(i+1)).value()*1;
      var diameter = select('#diameter'+(i+1)).value();

      this.currX = -x;
      this.currY = -y;
      this.diameter = diameter;

      this.shadowCircle.addCircle(this.currX,this.currY,this.diameter);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168,50);
      this.shadowCircle.list[i].drawCircle('SC' + (i+1));
    }
  }
  circleX(h){
    for(var i = 0; i< this.circle.totalCircle; i++){
      var x = select('#circle-x-'+(i+1)).value()*1;
      var y = -select('#circle-y-'+(i+1)).value()*1;
      var diameter = select('#diameter'+(i+1)).value();

      this.currX = 2*h-x;
      this.currY = y;
      this.diameter = diameter;

      this.shadowCircle.addCircle(this.currX,this.currY,this.diameter);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168,50);
      this.shadowCircle.list[i].drawCircle('SC' + (i+1));
    }
  }
  circleY(k){
    for(var i = 0; i< this.circle.totalCircle; i++){
      var x = select('#circle-x-'+(i+1)).value()*1;
      var y = -select('#circle-y-'+(i+1)).value()*1;
      var diameter = select('#diameter'+(i+1)).value();

      this.currX = x;
      this.currY = (2*-k) - y;
      this.diameter = diameter;

      this.shadowCircle.addCircle(this.currX,this.currY,this.diameter);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168,50);
      this.shadowCircle.list[i].drawCircle('SC' + (i+1));
    }
  }

  lineXaxis(){
    for(var i = 0; i< this.line.totalLine; i++){
      var x1 = select('#line-x1-'+(i+1)).value()*1;
      var y1 = -select('#line-y1-'+(i+1)).value()*1;
      var x2 = select('#line-x2-'+(i+1)).value()*1;
      var y2 = -select('#line-y2-'+(i+1)).value()*1;

      this.currX1 = x1;
      this.currY1 = -y1;
      this.currX2 = x2;
      this.currY2 = -y2;

      this.shadowLine.addLine(this.currX1,this.currY1,this.currX2,this.currY2);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168);
      this.shadowLine.list[i].drawLine('SL' + (i+1));
    }
  }
  lineYaxis(){
    for(var i = 0; i< this.line.totalLine; i++){
      var x1 = select('#line-x1-'+(i+1)).value()*1;
      var y1 = -select('#line-y1-'+(i+1)).value()*1;
      var x2 = select('#line-x2-'+(i+1)).value()*1;
      var y2 = -select('#line-y2-'+(i+1)).value()*1;

      this.currX1 = -x1;
      this.currY1 = y1;
      this.currX2 = -x2;
      this.currY2 = y2;

      this.shadowLine.addLine(this.currX1,this.currY1,this.currX2,this.currY2);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168);
      this.shadowLine.list[i].drawLine('SL' + (i+1));
    }
  }
  lineRightDiagonal(){
    for(var i = 0; i< this.line.totalLine; i++){
      var x1 = -select('#line-x1-'+(i+1)).value()*1;
      var y1 = select('#line-y1-'+(i+1)).value()*1;
      var x2 = -select('#line-x2-'+(i+1)).value()*1;
      var y2 = select('#line-y2-'+(i+1)).value()*1;

      this.currX1 = y1;
      this.currY1 = x1;
      this.currX2 = y2;
      this.currY2 = x2;

      this.shadowLine.addLine(this.currX1,this.currY1,this.currX2,this.currY2);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168);
      this.shadowLine.list[i].drawLine('SL' + (i+1));
    }
  }
  lineLeftDiagonal(){
    for(var i = 0; i< this.line.totalLine; i++){
      var x1 = -select('#line-x1-'+(i+1)).value()*1;
      var y1 = select('#line-y1-'+(i+1)).value()*1;
      var x2 = -select('#line-x2-'+(i+1)).value()*1;
      var y2 = select('#line-y2-'+(i+1)).value()*1;

      this.currX1 = -y1;
      this.currY1 = -x1;
      this.currX2 = -y2;
      this.currY2 = -x2;

      this.shadowLine.addLine(this.currX1,this.currY1,this.currX2,this.currY2);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168);
      this.shadowLine.list[i].drawLine('SL' + (i+1));
    }
  }
  lineO(){
    for(var i = 0; i< this.line.totalLine; i++){
      var x1 = select('#line-x1-'+(i+1)).value()*1;
      var y1 = -select('#line-y1-'+(i+1)).value()*1;
      var x2 = select('#line-x2-'+(i+1)).value()*1;
      var y2 = -select('#line-y2-'+(i+1)).value()*1;

      this.currX1 = -x1;
      this.currY1 = -y1;
      this.currX2 = -x2;
      this.currY2 = -y2;

      this.shadowLine.addLine(this.currX1,this.currY1,this.currX2,this.currY2);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168);
      this.shadowLine.list[i].drawLine('SL' + (i+1));
    }
  }
  lineX(h){
    for(var i = 0; i< this.line.totalLine; i++){
      var x1 = select('#line-x1-'+(i+1)).value()*1;
      var y1 = -select('#line-y1-'+(i+1)).value()*1;
      var x2 = select('#line-x2-'+(i+1)).value()*1;
      var y2 = -select('#line-y2-'+(i+1)).value()*1;

      this.currX1 = 2*h-x1;
      this.currY1 = y1;
      this.currX2 = 2*h-x2;
      this.currY2 = y2;

      this.shadowLine.addLine(this.currX1,this.currY1,this.currX2,this.currY2);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168);
      this.shadowLine.list[i].drawLine('SL' + (i+1));
    }
  }
  lineY(k){
    for(var i = 0; i< this.line.totalLine; i++){
      var x1 = select('#line-x1-'+(i+1)).value()*1;
      var y1 = -select('#line-y1-'+(i+1)).value()*1;
      var x2 = select('#line-x2-'+(i+1)).value()*1;
      var y2 = -select('#line-y2-'+(i+1)).value()*1;

      this.currX1 = x1;
      this.currY1 = (2*-k) - y1;
      this.currX2 = x2;
      this.currY2 = (2*-k) - y2;

      this.shadowLine.addLine(this.currX1,this.currY1,this.currX2,this.currY2);
      stroke(94, 214, 168);
      strokeWeight(1);
      fill(94, 214, 168);
      this.shadowLine.list[i].drawLine('SL' + (i+1));
    }
  }


  pointXaxis(){
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = select('#point-y-'+(i+1)).value()*1;

      this.currX = x;
      this.currY = -y;

      this.currX = this.currX;
      this.currY = -this.currY;

      this.shadowPoint.addPoint(this.currX,this.currY);
      stroke(94, 214, 168);
      fill(94, 214, 168);
      this.shadowPoint.list[i].drawPoint('SP' + (i+1));
    }
  }
  pointShapeXaxis(){
    strokeWeight(2);
    fill(94, 214, 168,50);
    beginShape();
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = select('#point-y-'+(i+1)).value()*1;

      this.currX = x;
      this.currY = -y;

      this.currX = this.currX*this.ratio;
      this.currY = -this.currY*this.ratio;

      vertex(this.currX,this.currY);
    }
    vertex(this.shadowPoint.list[0].x,this.shadowPoint.list[0].y);
    endShape();
    
  }

  pointYaxis(){
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = select('#point-y-'+(i+1)).value()*1;

      this.currX = x;
      this.currY = -y;

      this.currX = -this.currX;
      this.currY = this.currY;

      this.shadowPoint.addPoint(this.currX,this.currY);
      stroke(94, 214, 168);
      fill(94, 214, 168);
      this.shadowPoint.list[i].drawPoint('SP' + (i+1));
    }
  }
  pointShapeYaxis(){
    strokeWeight(2);
    fill(94, 214, 168,50);
    beginShape();
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = select('#point-y-'+(i+1)).value()*1;

      this.currX = x;
      this.currY = -y;

      this.currX = -this.currX*this.ratio;
      this.currY = this.currY*this.ratio;

      vertex(this.currX,this.currY);
    }
    vertex(this.shadowPoint.list[0].x,this.shadowPoint.list[0].y);
    endShape();
    
  }

  pointRightDiagonal(){
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = -(select('#point-x-'+(i+1)).value()*1);
      var y = select('#point-y-'+(i+1)).value()*1;

      this.currX = y;
      this.currY = x;

      this.shadowPoint.addPoint(this.currX,this.currY);
      stroke(94, 214, 168);
      fill(94, 214, 168);
      this.shadowPoint.list[i].drawPoint('SP' + (i+1));
    }
  }
  pointShapeRightDiagonal(){
    strokeWeight(2);
    fill(94, 214, 168,50);
    beginShape();
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = -(select('#point-x-'+(i+1)).value()*1);
      var y = select('#point-y-'+(i+1)).value()*1;

      this.currX = y*this.ratio;
      this.currY = x*this.ratio;

      vertex(this.currX,this.currY);
    }
    vertex(this.shadowPoint.list[0].x,this.shadowPoint.list[0].y);
    endShape();
  }

   pointLeftDiagonal(){
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = -(select('#point-x-'+(i+1)).value()*1);
      var y = select('#point-y-'+(i+1)).value()*1;

      this.currX = -y;
      this.currY = -x;

      this.shadowPoint.addPoint(this.currX,this.currY);
      stroke(94, 214, 168);
      fill(94, 214, 168);
      this.shadowPoint.list[i].drawPoint('SP' + (i+1));
    }
  }
  pointShapeLeftDiagonal(){
    strokeWeight(2);
    fill(94, 214, 168,50);
    beginShape();
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = -(select('#point-x-'+(i+1)).value()*1);
      var y = select('#point-y-'+(i+1)).value()*1;

      this.currX = -y*this.ratio;
      this.currY = -x*this.ratio;

      vertex(this.currX,this.currY);
    }
    vertex(this.shadowPoint.list[0].x,this.shadowPoint.list[0].y);
    endShape();
  }

  pointO(){
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = -select('#point-y-'+(i+1)).value()*1;

      this.currX = -x;
      this.currY = -y;

      this.shadowPoint.addPoint(this.currX,this.currY);
      stroke(94, 214, 168);
      fill(94, 214, 168);
      this.shadowPoint.list[i].drawPoint('SP' + (i+1));
    }
  }
  pointShapeO(){
    strokeWeight(2);
    fill(94, 214, 168,50);
    beginShape();
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = -select('#point-y-'+(i+1)).value()*1;

      this.currX = -x*this.ratio;
      this.currY = -y*this.ratio;

      vertex(this.currX,this.currY);
    }
    vertex(this.shadowPoint.list[0].x,this.shadowPoint.list[0].y);
    endShape();
  }

  pointX(h){
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = -select('#point-y-'+(i+1)).value()*1;

      this.currX = 2*h-x;
      this.currY = y;

      this.shadowPoint.addPoint(this.currX,this.currY);
      stroke(94, 214, 168);
      fill(94, 214, 168);
      this.shadowPoint.list[i].drawPoint('SP' + (i+1));
    }
  }
  pointShapeX(h){
    strokeWeight(2);
    fill(94, 214, 168,50);
    beginShape();
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = -select('#point-y-'+(i+1)).value()*1;

      this.currX = (2*h-x)*this.ratio;
      this.currY = y*this.ratio;

      vertex(this.currX,this.currY);
    }
    vertex(this.shadowPoint.list[0].x,this.shadowPoint.list[0].y);
    endShape();
  }

  pointY(k){
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = -select('#point-y-'+(i+1)).value()*1;

      this.currX = x;
      this.currY = (2*-k) - y;

      this.shadowPoint.addPoint(this.currX,this.currY);
      stroke(94, 214, 168);
      fill(94, 214, 168);
      this.shadowPoint.list[i].drawPoint('SP' + (i+1));
    }
  }
  pointShapeY(k){
    strokeWeight(2);
    fill(94, 214, 168,50);
    beginShape();
    for(var i = 0; i< this.point.totalPoint; i++){
      var x = select('#point-x-'+(i+1)).value()*1;
      var y = -select('#point-y-'+(i+1)).value()*1;

      this.currX = x*this.ratio;
      this.currY = ((2*-k) - y)*this.ratio;

      vertex(this.currX,this.currY);
    }
    vertex(this.shadowPoint.list[0].x,this.shadowPoint.list[0].y);
    endShape();
  }


}