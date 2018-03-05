class Point{

  //CONSTRUCTOR
  constructor(x, y, size, name){
    this.x = x;
    this.y = height - y;//CHANGE THE COORDINATE ORIENTATION TO LEFT BOTTOM SIDE OF THE SCREEN
    this.size = size;
    this.name = name;
  }
   
  drawPoint(){
     //MAKE THE POINT DRAGGABLE
     if(dist(this.x, this.y, mouseX, mouseY)<this.size/2){
       fill(255, 255, 255);
       if(mouseIsPressed){
         this.x = mouseX;
         this.y = mouseY;
       }
     }
     else{
       fill(101, 188, 119);
     }
     
     //DRAW A CIRCLE
     stroke(255);
     ellipse(this.x, this.y, this.size, this.size);
     
     //CAPTION
     fill(153, 255, 241);
     textSize(16);
     noStroke();
     //height is always subtracted by Y just for captioning reason
     text(this.name + " : (" + parseInt(this.x-(width/2)) + ", " + parseInt((height - this.y)-(height/2)) + ")" ,this.x+this.size ,this.y);
  }
}