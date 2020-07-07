function take(_x, _y, _a) {
  push();
  translate(_x, _y);
  rotate(radians(_a));
  noStroke();
	fill(93, 94, 65);

  beginShape();
  curveVertex(w(1.2), h(0));
  curveVertex(w(-1.2), h(0));
  curveVertex(w(-1), h(-45));
  curveVertex(w(0), h(-85));
  curveVertex(w(1), h(-35));
  curveVertex(w(1.2), h(0));
  curveVertex(w(-1.2), h(0));
  curveVertex(w(-1), h(-45));
  endShape();

	push();
  fill(93, 89, 35);
  translate(0, h(-86));
  ellipse(0, 0, w(1.2), h(10));
  pop();

  push();
  fill(93, 89, 35);
  translate(w(2), h(-85));
  rotate(radians(45));
  ellipse(0, 0, w(1.2), h(10));
  pop();

  push();
  fill(93, 89, 35);
  translate(w(-2), h(-85));
  rotate(radians(315));
  ellipse(0, 0, w(1.2), h(10));
  pop();

  pop();
}

function generateTake(_w) {
	push();

	translate(_w, height);
  take(0, 0, 0);

  push();
  scale(0.5);
  take(0, h(-30), 38);
  pop();

  push();
  scale(0.4);
  take(0, h(-80), 330);
  pop();

  push();
  scale(0.3);
  take(0, h(-180), 30);
  pop();

	pop();
}
