class ClippingPolygon{

	constructor(object, ratio){
		this.object = object;
		this.ratio = ratio;
		this.toogleCalled = 0;
    	this.called = false;
    	this.click = 0;
    	this.bits = new Array();
    	this.clip = new Array();
    	// this.poin = new pointController(this.ratio);
    	// this.shape = new Shape(this.poin,this.ratio);
	}

	callClippingPolygon(){
	    this.toogleCalled++;
	    if(this.toogleCalled == 1){
	      var parent = select('#operation-container');
	      var temp = createDiv(
	      '<h4> CLIPPING </h4>'+
	      '<p>clipper</p>'+
	      '<input id="clipLine-minX' + '" type="number" name="" value="" placeholder="Min X">' +
	      '<input id="clipLine-maxX' + '" type="number" name="" value="" placeholder="Max X">' +
	      '<input id="clipLine-minY' + '" type="number" name="" value="" placeholder="Min Y">' +
	      '<input id="clipLine-maxY' + '" type="number" name="" value="" placeholder="Max Y">' +
	      '<div id="but" class="button" onclick="clippingPolygon.clicks()">CLIP</div>'
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
	    	if(this.object.totalPoints == 0){
	    			console.log('aa');
	    	}
	    	else{
	    		// this.x1 = select('#line-x1-'+this.lineId).value()*1;
		     //    this.y1 = select('#line-y1-'+this.lineId).value()*1;
		     //    this.x2 = select('#line-x2-'+this.lineId).value()*1;
		     //    this.y2 = select('#line-y2-'+this.lineId).value()*1;

		        this.minX = select('#clipLine-minX').value()*1;
		        this.maxX = select('#clipLine-maxX').value()*1;
		        this.minY = select('#clipLine-minY').value()*1;
		        this.maxY = select('#clipLine-maxY').value()*1;

		        stroke(255);

		        strokeWeight(2);

		        var bot1 = new Point(this.minX,-this.minY,ratio);
		        var bot2 = new Point(this.maxX,-this.minY,ratio);
		        var top1 = new Point(this.minX,-this.maxY,ratio);
		        var top2 = new Point(this.maxX,-this.maxY,ratio);

		        bot1.drawPoint('A');
		        bot2.drawPoint('B');
		        top1.drawPoint('C');
		        top2.drawPoint('D');
		        push();
		        
		        
		        strokeWeight(2);
		        line(this.minX*this.ratio,500,this.minX*this.ratio,-500);
		        line(this.maxX*this.ratio,500,this.maxX*this.ratio,-500);
		        line(500,this.minY*this.ratio*-1,-500,this.minY*this.ratio*-1);
		        line(500,this.maxY*this.ratio*-1,-500,this.maxY*this.ratio*-1);

		        for(var count = 1; count < this.object.totalPoint; count++){
		        	//console.log(i);
		        	this.x1 = select('#point-x-'+count).value()*1;
		        	this.y1 = select('#point-y-'+count).value()*1;
		        	this.x2 = select('#point-x-'+(count+1)).value()*1;
		        	this.y2 = select('#point-y-'+(count+1)).value()*1;

		        	// console.log(this.x1);
		        	// console.log(this.y1);
		        	// console.log(this.x2);
		        	// console.log(this.y2);
		        	// console.log('------------'+count);
		        
		        	if(this.x1 >= this.minX){
		        		this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.x1 <= this.maxX){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.y1 >= this.minY){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.y1 <= this.maxY){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }


			        if(this.x2 >= this.minX){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.x2 <= this.maxX){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.y2 >= this.minY){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.y2 <= this.maxY){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }


			        this.bits1 = this.bits[0];
			        this.bits2 = this.bits[4];
			        this.bitsAnd = ''+this.bits[0]*this.bits[4];

			        for(var i = 1; i < 4; i++){
			        	this.bits1 = this.bits1 + this.bits[i];
			        	this.bitsAnd = this.bitsAnd + this.bits[i]*this.bits[i+4];

			        }
			        for(var i = 5; i < 8; i++){
			        	this.bits2 = this.bits2 + this.bits[i];
			        }
			        // console.log(this.bits1);
			        // console.log(this.bits2);
			        // console.log(this.bitsAnd); 
			        // console.log('---------------------');

			        	 this.check1();
			        	 this.check2();
			        	//console.log('-------------------');
			        	//console.log(this.clip[0],this.clip[1],this.clip[2],this.clip[3]);
			        	//console.log(this.clip.length);

			        	this.bits = new Array();
			        	this.bitsAnd = new Array();
		        }
		        
		        	this.bits = new Array();
			        this.bitsAnd = new Array();
		        	this.x1 = select('#point-x-'+(this.object.totalPoint)).value()*1;
		        	this.y1 = select('#point-y-'+(this.object.totalPoint)).value()*1;
		        	this.x2 = select('#point-x-'+1).value()*1;
		        	this.y2 = select('#point-y-'+1).value()*1;

		        	 console.log(this.x1);
		        	 console.log(this.y1);
		        	// console.log(this.x2);
		        	// console.log(this.y2);
		        	// console.log('------------'+count);

		        	// console.log('------------'+this.object.totalPoint);
		        
		        	if(this.x1 >= this.minX){
		        		this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.x1 <= this.maxX){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.y1 >= this.minY){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.y1 <= this.maxY){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }


			        if(this.x2 >= this.minX){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.x2 <= this.maxX){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.y2 >= this.minY){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }

			        if(this.y2 <= this.maxY){
			        	this.bits.push('0');
			        }
			        else{
			        	this.bits.push('1');	
			        }


			        this.bits1 = this.bits[0];
			        this.bits2 = this.bits[4];
			        this.bitsAnd = ''+this.bits[0]*this.bits[4];

			        for(var i = 1; i < 4; i++){
			        	this.bits1 = this.bits1 + this.bits[i];
			        	this.bitsAnd = this.bitsAnd + this.bits[i]*this.bits[i+4];

			        }
			        for(var i = 5; i < 8; i++){
			        	this.bits2 = this.bits2 + this.bits[i];
			        }
			        // console.log(this.bits1);
			        // console.log(this.bits2);
			        // console.log(this.bitsAnd); 
			        // console.log('---------------------');

			        	 this.check1();
			        	 this.check2();
			        	//console.log('-------------------')
			        	this.bits = new Array();
			        	this.bitsAnd = new Array();
		        	

			        if(this.click % 2 != 0){
			        	console.log('masuk');
			        	console.log(this.clip.length);
			        	this.result = new Array();
			        	var c = 0;
			        	for(var i = 0; i < this.clip.length-3; i+=4){
			        		this.result.push(new Line(this.clip[i],-this.clip[i+1],this.clip[i+2],-this.clip[i+3],this.ratio));
			        		//lineController.lineCol.remLine();
			        		stroke(255);
	        				this.result[c].drawLine('S');
	        				c++;
	        				//console.log(c);
			        	}
			        	this.result = new Array();
			        	this.clip = new Array();
			        	
						
		        		clippingStatus = true;
		  			}
		  			else{
		  				clippingStatus = false;
		  				this.clip = new Array();
		  			}
		    }
	        	        
	    }
	    else{
	      return;
	    }  
  	}
  	check1(){
  		if(this.bitsAnd == '0000'){
		        	//console.log('masuk');
		        	if(this.bits1 == '0000'){
		        		console.log('haha1');
		        		this.clip.push(this.x1);
		        		this.clip.push(this.y1);
		        	}
		        	else{
		        		if(this.bits1 == '1001' || this.bits1 == '0001' || this.bits1 == '0101'){
		        			var x = ((this.maxY - this.y1)/(this.y2-this.y1)*(this.x2 - this.x1)) + this.x1;
		        			if(x >= this.minX && x <= this.maxX){
		        				//console.log(x+', '+this.maxY);
		        				this.clip.push(x);
		        				this.clip.push(this.maxY);
		        				return;
		        			}
		        		}
		        		else if(this.bits1 == '1010' || this.bits1 == '0010' || this.bits1 == '0110'){
		        			var x = ((this.minY - this.y1)/(this.y2-this.y1)*(this.x2 - this.x1)) + this.x1;
		        			if(x >= this.minX && x <= this.maxX){
		        				//console.log(x+', '+this.minY);
		        				this.clip.push(x);
		        				this.clip.push(this.minY);
		        				return;
		        			}	
		        		}
		        		if(this.bits1 == '0101' || this.bits1 == '0100' || this.bits1 == '0110'){
		        			var y = ((this.maxX - this.x1)/(this.x2-this.x1)*(this.y2 - this.y1)) + this.y1;
		        			//console.log(this.maxX+', '+y);
		        			if(y >= this.minY && y <= this.maxY){
		        				
		        				this.clip.push(this.maxX);
		        				this.clip.push(y);
		        				return;
		        			}		
		        		}
		        		else if(this.bits1 == '1001' || this.bits1 == '1000' || this.bits1 == '1010'){
		        			var y = ((this.minX - this.x1)/(this.x2-this.x1)*(this.y2 - this.y1)) + this.y1;
		        			if(y >= this.minY && y <= this.maxY){
		        				//console.log(this.minX+', '+y);
		        				this.clip.push(this.minX);
		        				this.clip.push(y);
		        				return;
		        			}		
		        		}
		        	}
		        }

  	}

  	check2(){
  		if(this.bitsAnd == '0000'){
  				if(this.bits2 == '0000'){
		        		this.clip.push(this.x2);
		        		this.clip.push(this.y2);
		        	}
		        	else{
		        		if(this.bits2 == '1001' || this.bits2 == '0001' || this.bits2 == '0101'){
		        			var x = ((this.maxY - this.y1)/(this.y2-this.y1)*(this.x2 - this.x1)) + this.x1;

		        			if(x >= this.minX && x <= this.maxX){
		        				//console.log(x+', '+this.maxY);
		        				this.clip.push(x);
		        				this.clip.push(this.maxY);
		        				return;
		        			}
		        		}
		        		else if(this.bits2 == '1010' || this.bits2 == '0010' || this.bits2 == '0110'){
		        			var x = ((this.minY - this.y1)/(this.y2-this.y1)*(this.x2 - this.x1)) + this.x1;
		        			if(x >= this.minX && x <= this.maxX){
		        				//console.log(x+', '+this.minY);
		        				this.clip.push(x);
		        				this.clip.push(this.minY);
		        				return;
		        			}	
		        		}
		        		if(this.bits2 == '0101' || this.bits2 == '0100' || this.bits2 == '0110'){
		        			var y = ((this.maxX - this.x1)/(this.x2-this.x1)*(this.y2 - this.y1)) + this.y1;
		        			if(y >= this.minY && y <= this.maxY){
		        				//console.log(this.maxX+', '+y);
		        				this.clip.push(this.maxX);
		        				this.clip.push(y);
		        				return;
		        			}		
		        		}
		        		else if(this.bits2 == '1001' || this.bits2 == '1000' || this.bits2 == '1010'){
		        			var y = ((this.minX - this.x1)/(this.x2-this.x1)*(this.y2 - this.y1)) + this.y1;
		        			if(y >= this.minY && y <= this.maxY){
		        				//console.log(this.minX+', '+y);
		        				this.clip.push(this.minX);
		        				this.clip.push(y);
		        				return;
		        			}		
		        		}
		        	}
  	}
	}


}