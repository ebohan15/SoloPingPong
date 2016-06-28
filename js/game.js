// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
		function( callback ){
			return window.setTimeout(callback, 1000 / 60);
		};
})();

window.cancelRequestAnimFrame = ( function() {
	return  window.cancelAnimationFrame          ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame    ||
			window.oCancelRequestAnimationFrame      ||
			window.msCancelRequestAnimationFrame     ||
		clearTimeout;
} )();

//DO NOT TOUCH CODE ABOVE

//console.log('Holla');

//step1..erb..create game canvas and track mouse position
var gameCanvas = document.getElementById("canvas");
// Store Html5 canvas tag in js varible 

var ctx = gameCanvas.getContext("2d"); // Create context 2d
var W = window.innerWidth;
var H = window.innerHeight;
var mouseObj = {};

//console.log('browser width is currently ' + W)
//console.log('browser height is currently ' + H)

gameCanvas.width = W;
gameCanvas.height = H;

function paintCanvas() {
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, W, H);
}
paintCanvas();


function trackPosition(evt){
    mouseObj.x = evt.pageX;
    mouseObj.y = evt.pageY;
    console.log("cursor x is :" + mouseObj.x + "cursor y is :" + mouseObj.y);
}

gameCanvas.addEventListener("mousemove", trackPosition, true);

