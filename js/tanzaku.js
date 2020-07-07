class Tanzaku {

	constructor(_name, _wish, _x, _y) {
		this.name = _name;
		this.wish = _wish;
		this.x = _x;
		this.y = _y;
		this.c = random(360);
	}

	tategaki() {
		let n = this.name.split('');
		for(let i = 1; i < n.length; i += 2){
			n.splice(i, 0, '\n');
		}
		let tn = join(n,'');
		let rn = tn.replace(/ー/g, '|');
		let rn1 = rn.replace(/-/g, '|');
		let rn2 = rn1.replace(/~/g, '⌇');
		this.fn = rn2.replace(/〜/g, '⌇');


		let w = this.wish.split('');
		for(let j = 1; j < w.length; j += 2){
			w.splice(j, 0, '\n');
		}
		let tw = join(w,'');
		let rw = tw.replace(/ー/g, '|');
		let rw1 = rw.replace(/-/g, '|');
		let rw2 = rw1.replace(/~/g, '⌇');
		this.fw = rw2.replace(/〜/g, '⌇');


	}

	display() {
		push();
		translate(w(this.x), h(this.y));
		fill(this.c, 60, 100);
		rect(-30, 20, 60, 180 + 4 * this.fw.length + 5 * this.fn.length);
		textSize(12);
		fill(0, 0, 0);
		text(this.fw, 0, 50);
		text(this.fn, -15, 135 + 3 * this.fw.length);
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

	tategaki() {
		let n = this.name.split('');
		for(let i = 1; i < n.length; i += 2){
			n.splice(i, 0, '\n');
		}
		let tn = join(n,'');
		let rn = tn.replace(/ー/g, '|');
		let rn1 = rn.replace(/-/g, '|');
		let rn2 = rn1.replace(/~/g, '⌇');
		this.fn = rn2.replace(/〜/g, '⌇');



		let w = this.wish.split('');
		for(let j = 1; j < w.length; j += 2){
			w.splice(j, 0, '\n');
		}
		let tw = join(w,'');
		let rw = tw.replace(/ー/g, '|');
		let rw1 = rw.replace(/-/g, '|');
		let rw2 = rw1.replace(/~/g, '⌇');
		this.fw = rw2.replace(/〜/g, '⌇');

	}

	display(_x, _y) {
		this.x = _x;
		this.y = _y;
		push();
		translate(this.x, this.y);
		fill(0, 0, 100);
		rect(-30, 20, 60, 180 + 4 * this.fw.length + 5 * this.fn.length);
		textSize(12);
		fill(0, 0, 0);
		text(this.fw, 0, 50);
		text(this.fn, -15, 135 + 3 * this.fw.length);
		fill(0, 0, 100);
		rect(-1.5, 0, 3, 40);
		pop();
	}
}

