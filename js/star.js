class Star {
	constructor(x, y) {
		this.a = random(100, 255);
		this.size = random(2, 5);
		this.location = createVector(x, y);
		this.t = random(255);
	}

	glow() {
		this.a = 100 * abs(sin(this.t));
		this.t+= 0.02;
	}

	display() {
		noStroke();
		fill(0, 0, 100, this.a);
		ellipse(this.location.x, this.location.y, this.size, this.size);
	}

}
