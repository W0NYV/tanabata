let stars = [];
function setup() {
	input = createInput();
  input.position(20, 65);
	input.attribute('placeholder', '願いはなんじゃ');

  button = createButton('願う');
  button.position(input.x + input.width, 65);
	button.mousePressed(send);

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

	generateTake();

}


function send() {
  const wish = input.value();
  input.value('');

	var url = "https://script.google.com/macros/s/AKfycbzFIfTrPr8GZiz99nkn8cg3XHYxn72hOglzRAfiE7N9tUa6PSI/exec?name=WOのテスト&wish=" + wish + "&x=CCC&y=DDDD"; // リクエスト先URL
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
}

//座標は0から100で指定
function w(_n) {
  const w = width/100;
  return w * _n;
}

function h(_n) {
  const h = height/100;
  return h * _n;
}
