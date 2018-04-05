class Translation{

  constructor(point,line,circle){
    this.point = point;
    this.line = line;
    this.circle = circle;
    this.toogleCalled = 0;
    this.called = false;
  }

  callTranslation(){
    this.toogleCalled++;
    if(this.toogleCalled == 1){
      var parent = select('#operation-container');
      var temp = createDiv(
      '<h4> TRANSLATION </h4>'+
      '<select id="translation-object">'+
        '<option value="point">Point/Shape</option>'+
        '<option value="line">Line</option>'+
        '<option value="circle">Circle</option>'+
      '</select>'+
      '<p>translate x</p>'+
      '<input id="translate-x" type="number" name="" value="" placeholder="Translate X">' +
      '<p>translate y</p>'+
      '<input id="translate-y" type="number" name="" value="" placeholder="Translate Y">' +
      '<div id="but" class="button" onclick="translation.changeResult()">TRANSLATE</div>'
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
      this.translateX = select('#translate-x').value()*1;
      this.translateY = select('#translate-y').value()*1;
      this.translationObject = select('#translation-object').value();
    }
      
  }

  changeResult(){
    if(this.translationObject == "point"){
      for(var i = 0; i< this.point.totalPoint; i++){
        this.currX = (select('#point-x-'+(i+1)).value()*1)+this.translateX;
        this.currY = (select('#point-y-'+(i+1)).value()*1)+this.translateY;

        select('#point-x-'+(i+1)).value(this.currX);
        select('#point-y-'+(i+1)).value(this.currY);
     }

    }
    else if(this.translationObject == "line"){
      for(var i = 0; i< this.line.totalLine; i++){
        this.currX1 = (select('#line-x1-'+(i+1)).value()*1)+this.translateX;
        this.currY1 = (select('#line-y1-'+(i+1)).value()*1)+this.translateY;
        this.currX2 = (select('#line-x2-'+(i+1)).value()*1)+this.translateX;
        this.currY2 = (select('#line-y2-'+(i+1)).value()*1)+this.translateY;

        select('#line-x1-'+(i+1)).value(this.currX1);
        select('#line-y1-'+(i+1)).value(this.currY1);
        select('#line-x2-'+(i+1)).value(this.currX2);
        select('#line-y2-'+(i+1)).value(this.currY2);
        // this.listX.push(this.currX);
        // this.listY.push(this.currY);
     }

    }
    else if(this.translationObject == "circle"){
      for(var i = 0; i< this.circle.totalCircle; i++){
        this.currX = (select('#circle-x-'+(i+1)).value()*1)+this.translateX;
        this.currY = (select('#circle-y-'+(i+1)).value()*1)+this.translateY;

        select('#circle-x-'+(i+1)).value(this.currX);
        select('#circle-y-'+(i+1)).value(this.currY);
     }
    }
  }

}