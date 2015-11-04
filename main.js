// Pressed keys list
var keys = [];

window.addEventListener("keydown",
	function(e){
		keys[e.keyCode] = true;
	},
false);

window.addEventListener('keyup',
	function(e){
		keys[e.keyCode] = false;
	},
false);


var entities = [];
var clock = 0;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Retina fixes
canvas.width = parseInt(window.getComputedStyle(canvas).width)*window.devicePixelRatio;
canvas.height = parseInt(window.getComputedStyle(canvas).height)*window.devicePixelRatio;
ctx.scale(window.devicePixelRatio, window.devicePixelRatio);


// Game loop
function step(timestamp) {
	clearScreen('#666');

	// Iterate through all entities
	for (var i = entities.length - 1; i >= 0; i--) {
		if (!entities[i].active){
			entities.splice(i,1);
		} else {
			entities[i].update();
			entities[i].display(ctx);
		}
	};

	clock++;
	requestAnimationFrame(step);
}

requestAnimationFrame(step);
