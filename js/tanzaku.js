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
		translate(w(this.x), h(this.y));
		fill(this.c, 60, 100);
		rect(-30, 20, 60, 180 + 2 * this.tw.length + 5 * this.tn.length);
		textSize(12);
		fill(0, 0, 0);
		text(this.tw, 0, 50);
		text(this.tn, -15, 135 + 3 * this.tw.length);
		fill(0, 0, 100);
		rect(-1.5, 0, 3, 40);
		pop();
	}
}

class cTanzaku {

	constructor(_name, _wish) {
		this.name = _name;
		this.wish = _wish;
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

	display(_x, _y) {
		this.x = _x;
		this.y = _y;
		push();
		translate(this.x, this.y);
		fill(0, 0, 100);
		rect(-30, 20, 60, 180 + 2 * this.tw.length + 10 * this.tn.length);
		textSize(12);
		fill(0, 0, 0);
		text(this.tw, 0, 50);
		text(this.tn, -15, 135 + 3 * this.tw.length);
		fill(0, 0, 100);
		rect(-1.5, 0, 3, 40);
		pop();
	}
}

