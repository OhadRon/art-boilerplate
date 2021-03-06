function headingToRadians(degrees){
	return degrees*Math.PI/180;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clone(obj) {
	if (null == obj || "object" != typeof obj) return obj;
	var copy = obj.constructor();
	for (var attr in obj) {
		if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	}
	return copy;
}

function clearScreen(color){
	ctx.fillStyle=color;
	ctx.fillRect(0,0,canvas.width, canvas.height);
}

function distance(a,b){
	var d = Math.sqrt( (a.position.x-b.position.x)*(a.position.x-b.position.x) + (a.position.y-b.position.y)*(a.position.y-b.position.y) );
	return d;
}

function heading(a,b){
	var xDiff = a.position.x - b.position.x;
	var yDiff = a.position.y - b.position.y;
	return ((Math.atan2(yDiff, xDiff) * (180 / Math.PI)+270))%360;
}
