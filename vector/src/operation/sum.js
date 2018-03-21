class SumVector{
	constructor(vectorCol, ratio){
		this.ratio = ratio;
		this.object = new VectorController(this.ratio);
		this.vectorCol = vectorCol;
		this.tooglesum = 0;
	}
	callSum(){
		this.tooglesum++;
		if(this.tooglesum % 2 == 0){
			this.hide();
		}
		else{
			this.show(this.vectorCol);
		}
	}
	hide(){
		this.object = new VectorController(this.ratio);
	}
	show(object){
		this.object = object; 
	}
	drawResult(){
		if(this.object.totalVector == 0){
			return;
		}
		else{
			var x = this.object.vectorCol.list[0].x;
			var y = this.object.vectorCol.list[0].y;
			for(var i = 1; i < this.object.totalVector; i++){
				x = x + this.object.vectorCol.list[i].x;
				y = y + this.object.vectorCol.list[i].y;
			}

			x = x/this.ratio;
			y = y/this.ratio;
			var result = new Vector(x,y,this.ratio);

			stroke(126, 234, 202);
			fill(126, 234, 202);
			result.drawVector("R");

		}
	}
}