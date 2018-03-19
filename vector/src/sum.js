class SumVector{
	constructor(){
		this.object = new VectorController();
	}
	hide(){
		this.object = new VectorController();
	}
	show(object){
		this.object = object; 
	}
	loopSum(){
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

			var result = new Vector(x,y);

			stroke(255,0,0);
			result.drawVector();

		}
	}
}