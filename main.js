const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');

function init() {
	render()
}

function render() {
	window.requestAnimationFrame(render);
	canv.width = window.innerWidth;
	canv.height = window.innerHeight;
	ctx.fillStyle = '#87CEEB';
	ctx.fillRect(0, 0, canv.width, canv.height)
	ctx.fillStyle = '#9CDC00';
	ctx.strokeStyle = '#8CCC00';
	ctx.lineWidth = 1;
	ctx.save();
	ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
	drawTile(new Point(0, 0))
	drawTile(new Point(50, 0))
	drawTile(new Point(0, 50))
	drawTile(new Point(50, 50))
	ctx.restore();
}

function drawTile(p) {
	p = p.toIso();
	ctx.beginPath();
	ctx.moveTo(p.x, p.y - 25);
	ctx.lineTo(p.x - 50, p.y);
	ctx.lineTo(p.x, p.y + 25);
	ctx.lineTo(p.x + 50, p.y);
	ctx.lineTo(p.x, p.y - 25);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

init()
