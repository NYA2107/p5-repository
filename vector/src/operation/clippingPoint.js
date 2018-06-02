class ClippingPoint{

	constructor(ratio){
		this.ratio = ratio;
		this.toogleCalled = 0;
    	this.called = false;
    	this.click = 0;
    	this.bits = new Array();
	}

	callClippingPoint(){
	    this.toogleCalled++;
	    if(this.toogleCalled == 1){
	      var parent = select('#operation-container');
	      var temp = createDiv(
	      '<h4> CLIPPING POINT </h4>'+
	      '<input id="clip-minX' + '" type="number" name="" value="" placeholder="Min X">' +
	      '<input id="clip-maxX' + '" type="number" name="" value="" placeholder="Max X">' +
	      '<input id="clip-minY' + '" type="number" name="" value="" placeholder="Min Y">' +
	      '<input id="clip-maxY' + '" type="number" name="" value="" placeholder="Max Y">' +

	      '<p>point coordinate</p>'+
	      '<input id="pointX' + '" type="number" name="" value="" placeholder="Point X">' +
	      '<input id="pointY' + '" type="number" name="" value="" placeholder="Point Y">' +
	      '<div id="but" class="button" onclick="clippingPoint.clicks()">CLIP</div>'
	      );
	      temp.id('vector-card');
	      parent.child(temp);
	    }
	    this.called = true;
	    
  	}

  	clicks(){
  		this.click += 1;
  	}

  	drawResult(){
  		
	    if(this.called == true){
	        this.x = select('#pointX').value()*1;
	        this.y = select('#pointY').value()*1;

	        this.minX = select('#clip-minX').value()*1;
	        this.maxX = select('#clip-maxX').value()*1;
	        this.minY = select('#clip-minY').value()*1;
	        this.maxY = select('#clip-maxY').value()*1;

	        stroke(255);
	        strokeWeight(2);
	        var bot1 = new Point(this.minX,-this.minY,ratio);
	        var bot2 = new Point(this.maxX,-this.minY,ratio);
	        var top1 = new Point(this.minX,-this.maxY,ratio);
	        var top2 = new Point(this.maxX,-this.maxY,ratio);

	        bot1.drawPoint('');
	        bot2.drawPoint('');
	        top1.drawPoint('');
	        top2.drawPoint('');
	        strokeWeight(2);
	        line(this.minX*this.ratio,500,this.minX*this.ratio,-500);
	        line(this.maxX*this.ratio,500,this.maxX*this.ratio,-500);
	        line(500,this.minY*this.ratio*-1,-500,this.minY*this.ratio*-1);
	        line(500,this.maxY*this.ratio*-1,-500,this.maxY*this.ratio*-1);

	        if(this.x >= this.minX){
	        	this.bits.push(0);
	        }
	        else{
	        	this.bits.push(1);	
	        }

	        if(this.x <= this.maxX){
	        	this.bits.push(0);
	        }
	        else{
	        	this.bits.push(1);	
	        }

	        if(this.y >= this.minY){
	        	this.bits.push(0);
	        }
	        else{
	        	this.bits.push(1);	
	        }

	        if(this.y <= this.maxY){
	        	this.bits.push(0);
	        }
	        else{
	        	this.bits.push(1);	
	        }


	        var check = 0;
	        for(var i = 0; i < 4; i++){
	        	check = check + this.bits[i];
	        }
	        var p = new Point(this.x,this.y*-1,this.ratio);

		    if(this.click % 2 == 0){
	        	p.drawPoint('P');
	  		}
	  		else{
	  			if(check == 0){
	        		p.drawPoint('P');
		        }
		        else{

		        }
		        this.bits = new Array();
	  		}
	        

	        
	    }
	    else{
	      return;
	    }  
  	}

}