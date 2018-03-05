class Support{
  //GRID IF REQUIRED
  showGrid(w, h){
    let widthCounter = 0;
    let heightCounter = 0;
    
    stroke(0);
    while(widthCounter <= width){
      line(widthCounter,0,widthCounter,height);
      widthCounter+=w;
    }
      
    while(heightCounter <= width){
       heightCounter+=h;
       line(0,heightCounter,width,heightCounter);
    }
  }
  
  //CURSOR COORDINATE
  showCursor(){
    fill(153, 255, 241);
    textSize(14);
    text("X : "+parseInt(mouseX)+"  Y : "+parseInt(height-mouseY),10,20);
  }
}  
   