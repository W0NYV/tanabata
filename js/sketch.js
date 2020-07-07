let stars = [];
let tanzax = [];
let ct;
let tanzakuData, input, input2, button;

let isRecording = false;

function preload() {
	tanzakuData = loadJSON('https://script.google.com/macros/s/AKfycbzFIfTrPr8GZiz99nkn8cg3XHYxn72hOglzRAfiE7N9tUa6PSI/exec?');
}

function setup() {

	//データ数を特定
	const len = Object.keys(tanzakuData).length;
//
	for(let i = 0; i < len-1; i++) {
		const o = tanzakuData[i];
		tanzax.push(new Tanzaku(o.name, o.wish, o.x, o.y));
	}

	input = createInput();
  input.position(20, 65);
	input.attribute('placeholder', '願いはなんじゃ');

	input2 = createInput();
  input2.position(20, 85);
	input2.attribute('placeholder', '名前はなんじゃ');

  button = createButton('願う');
  button.position(20, 105);
	button.mousePressed(send);

	createCanvas(windowWidth, windowHeight);
	for(let i = 0; i < width/2; i++) {
		stars.push(new Star(random(width), random(height)));
	}


	textAlign(CENTER, TOP);
	colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
	background(230,99,35);

	for(let i=0; i < stars.length; i++) {
		if(i % 2 == 0) {
			stars[i].glow();
		}
		stars[i].display();
	}

	generateTake(width/2);
	generateTake(width/4 * 1);
	generateTake(width/4 * 3);


	for(let j = 0; j < tanzax.length; j++) {
		tanzax[j].tategaki();
		tanzax[j].display();
	}

	if(ct != null) {
		ct.tategaki();
		ct.display(mouseX, mouseY);

		if(ct.x > 50) {
			if(mouseIsPressed == true) {

				let x = (ct.x / width) * 100;
				let y = (ct.y / height) * 100;
				tanzax.push(new Tanzaku(ct.name, ct.wish, x, y));

				var url = "https://script.google.com/macros/s/AKfycbzFIfTrPr8GZiz99nkn8cg3XHYxn72hOglzRAfiE7N9tUa6PSI/exec?name=" + ct.name + "&wish=" + ct.wish + "&x=" + x + "&y=" + y; // リクエスト先URL

				var request = new XMLHttpRequest();
				request.open('GET', url);
				request.onreadystatechange = function () {
					if (request.readyState != 4) {
     				// リクエスト中
    			} else if (request.status != 200) {
						// 失敗
					} else {
      			// 取得成功
      			// var result = request.responseText;
    			}
				};
				request.send(null);

				ct = null;
			}
		}


	}


}


function send() {
  const wish = input.value();
	const name = input2.value();
	let x = random(16, 90);
	let y = random(10, 50);


	if(name != "" && wish != "") {
		ct = new cTanzaku(name, wish);


	} else {
		alert("名前と願い事書いてください");
	}
	input.value('');
	input2.value('');
}

function w(_n) {
  const w = width/100;
  return w * _n;
}

function h(_n) {
  const h = height/100;
  return h * _n;
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
	if(key == 'r' || key == "S") {
		print('push')
		if(isRecording == true) {
			stopRecording();
		} else {
			startRecording();
		}
		isRecording = !isRecording;
	}
}
