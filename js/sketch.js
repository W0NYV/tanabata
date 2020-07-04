let stars = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i = 0; i < width/2; i++) {
		stars.push(new Star(random(width), random(height)));
	}
}

function draw() {
	background(1,16,88);
	for(let i=0; i < stars.length; i++) {
		if(i % 2 == 0) {
			stars[i].glow();
		}
		stars[i].display();
	}
}
