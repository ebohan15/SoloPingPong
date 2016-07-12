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

//step2..erb..clear page canvas by covering it in black















//step3..erb..place a ball on the canvas
var ball = {};//ball object
ball = {
    x: 50,
    y: 50,
    r: 5,
    c: "#ffffff",
    vx: 4,
    vy: 8,
    
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        ctx.fill();
    }
}
ball.draw();

//step4..erb..place a start button on canvas
var startBtn = {};// start button 
startBtn = {
    w:100,
    h:50,
    x: W / 2 - 50,
    y: H / 2 - 25,
    
    draw: function () {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = "2";
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    
        ctx.font = "18px Arial, sans-seriff";
        ctx.textAlign = "center";
        ctx.fillBaseline = "middle";
        ctx.fillStyle='#ffffff';
        ctx.fillText("Start", W/2, H/2);
    }
}
startBtn.draw();

//step5..erb..place score and pionts on canvas
var points = 0; //game points
function paintScore() {
    ctx.fillStyle = "#ffffff";
    ctx.font = "18px Arial, sans-seriff";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Score: " + points, 20, 20);
}
paintScore();


