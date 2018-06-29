var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var w = canvas.width = 800;
var h = canvas.height = 400;

// 原点
var origin = {x: 10, y: h/2};

// 原点移動
ctx.translate(origin.x, origin.y);

// y 軸を上に向ける
ctx.scale(1, -1);

ctx.lineWidth = 3;

//draw_fig(140, 35, 20, 20, 60, 30);
draw_fig2(140, 35, 20, 20, 60, 30);

function draw_fig(a, b, c1, c2, h1, h2) {
    ctx.beginPath();

    // 基本線の色
    ctx.strokeStyle = '#92551D';
    
    // 基本線
    ctx.moveTo(origin.x, 0);
    ctx.lineTo(w, 0);

    // 目盛り線
    ctx.moveTo(origin.x, -c1/2);
    ctx.lineTo(origin.x, c1/2);

    var offset = origin.x;
    for (var i = 0; i < 3; i++) {
	offset += a;
	ctx.moveTo(offset, -c1/2);
	ctx.lineTo(offset, c1/2);

	for (var j = 0; j < 3; j++) {
	    offset += b;	
	    ctx.moveTo(offset, -c1/2);
	    ctx.lineTo(offset, c1/2);
	}	
    }

    ctx.stroke();

    // 括弧の色
    ctx.strokeStyle = '#45B11A';

    // 括弧
    var d = a + 2*b;
    draw_bracket(-1, origin.x, h2, c2, d);

    offset = origin.x + d;
    d = a + 4*b;
    var ud = 1;
    for (var i = 0; i < 3; i++) {
	offset -= b;
	draw_bracket(ud, offset, i%2 ? h2 : h1, c2, d);
	offset += d;
	ud *= -1;
    }
}

function draw_fig2(a, b, c1, c2, h1, h2) {
    ctx.beginPath();

    // 基本線の色
    ctx.strokeStyle = '#92551D';
    
    // 基本線
    ctx.moveTo(origin.x, 0);
    ctx.lineTo(w, 0);

    // 目盛り線
    ctx.moveTo(origin.x, -c1/2);
    ctx.lineTo(origin.x, c1/2);

    var offset = origin.x;
    for (var i = 0; i < 3; i++) {
	offset += a;
	ctx.moveTo(offset, -c1/2);
	ctx.lineTo(offset, c1/2);

	for (var j = 0; j < 3; j++) {
	    offset += b;	
	    ctx.moveTo(offset, -c1/2);
	    ctx.lineTo(offset, c1/2);
	}	
    }

    ctx.stroke();

    // 括弧の色
    ctx.strokeStyle = 'slateblue';

    // 括弧
    var d = a + 3*b;
    draw_bracket(-1, origin.x, h2, c2, d);

    offset = origin.x + d;
    d = a + 6*b;
    var ud = 1;
    for (var i = 0; i < 3; i++) {
	offset -= 3*b;
	draw_bracket(ud, offset, i%2 ? h2 : h1, c2, d);
	offset += d;
	ud *= -1;
    }
}

function draw_bracket(ud, x, h, c, d) {
    var y1 = ud * h;
    var y2 = ud * (h + c); 

    ctx.beginPath();
    
    ctx.moveTo(x, y1);
    ctx.lineTo(x, y2);
    ctx.lineTo(x + d, y2);
    ctx.lineTo(x + d, y1);

    ctx.stroke();
}
