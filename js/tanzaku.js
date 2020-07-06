class Tanzaku {

	constructor(_name, _wish, _x, _y) {
		this.name = _name;
		this.wish = _wish;
		this.x = _x;
		this.y = _y;
		this.c = random(360);
	}
//
//	p() {
//		print(this.name);
//		print(this.wish);
//		print(this.x);
//		print(this.y);
//	}

	tategaki() {
		let n = this.name.split('');
		for(let i = 1; i < n.length; i += 2){
			n.splice(i, 0, '\n');
		}
		this.tn = join(n,'');

		let w = this.wish.split('');
		for(let j = 1; j < w.length; j += 2){
			w.splice(j, 0, '\n');
		}
		this.tw = join(w,'');

	}

	display() {
		push();
		translate(this.x, this.y);
		fill(this.c, 60, 100);
		rect(0, 100, 60, 180);
		textSize(12);
		fill(0, 0, 0);
		text(this.tw, 0, 30);
		text(this.tn, -15, 115);
		fill(0, 0, 100);
		rect(0, 0, 3, 40);
		pop();
	}
}
