class Grid{
  constructor(ratio){
    this.ratio = ratio;
  }

  drawGrid(){
    var widthCounter = 0;
    var heightCounter = 0

    stroke(0);
    strokeWeight(1);
    while(widthCounter <= width){
      line(widthCounter,0,widthCounter,height);
      widthCounter+=this.ratio;

    }
    while(heightCounter <= height){
      heightCounter+=this.ratio;
      line(0,heightCounter,width,heightCounter);
    }
    this.showXY();
  }
  showXY(){
    stroke(232, 255, 102);
    strokeWeight(2);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);
  }
}