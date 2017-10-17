class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toIso() {
		return new Point(this.x - this.y, (this.x + this.y) / 2);
	}
	toCartesian() {
		return new Point((2 * this.y + this.x) / 2, (2 * this.y - this.x) / 2)
	}
}
