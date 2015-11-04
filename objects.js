// Game entity abstract object

function GameEntity(options) {
	this.velocity =  options.velocity || 0;
	this.position =  options.position || { x: 0, y:0 };
	this.heading =  options.heading || 0;
	this.active = true;
	this.wrapping = true;
}

GameEntity.prototype = {
	constructor: GameEntity,

	// Default shape
	draw: function(context){
		context.fillStyle="#e5333d";
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(0,5);
		context.lineTo(10,5);
		context.lineTo(10,-5);
		context.lineTo(0,-5);
		context.lineTo(0,0);
		context.fill();
	},

	// Default display - wraps draw() with default transformations
	display: function(context){
		context.save();
		context.translate(this.position.x,this.position.y);
		context.rotate(headingToRadians(this.heading));
		this.draw(context);
		context.restore();
	},

	// Default movement
	update: function(){
		this.position.x += this.velocity*Math.cos(headingToRadians(this.heading-90));
		this.position.y += this.velocity*Math.sin(headingToRadians(this.heading-90));

		if (this.wrapping){
			if (this.position.x<0) this.position.x=canvas.width;
			if (this.position.x>canvas.width) this.position.x = 0;
			if (this.position.y<0) this.position.y=canvas.height;
			if (this.position.y>canvas.height) this.position.y = 0;
		};

		if(this.heading<0) this.heading += 360;
		this.heading = this.heading%360;
	}
};

// Children object declaration

function NewObject(options){
	GameEntity.call(this,options);
}

NewObject.prototype = Object.create(GameEntity.prototype);
NewObject.prototype.constructor = NewObject;

NewObject.prototype.draw = function(context){};
NewObject.prototype.update = function(){
	GameEntity.prototype.update.call(this);
};
