class Tanzaku {

	constructor(t) {
		this.name = t['name'];
//		this.wish = t.wish;
//		this.x = t.x;
//		this.y = t.y;
	}

	p() {
		print(this.name + "\n");
	}
}

class SimulatedTanzaku {

	constructor(_name, _wish, _x, _y) {
		this.name = _name;
		this.wish = _wish;
		this.x = _x;
		this.y = _y;
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
		fill(0, 0, 100);
		rect(0, 0, 60, 120);
		textSize(12);
		fill(0, 0, 0);
		text(this.tw, 0, -20);
		text(this.tn, -20, 15);
		pop();
	}
}
