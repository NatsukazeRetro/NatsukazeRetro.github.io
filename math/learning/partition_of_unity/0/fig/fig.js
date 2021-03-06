var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var w = canvas.width = 600;
var h = canvas.height = 400;

var d = 0.01;
var scale = 150;

var origin = {x: w/2, y: h*3/4};
var max_x = w - origin.x;
var min_x = - origin.x;
var max_y = h - origin.y;
var min_y = - origin.y;

var arrow_ang = 30;
var arrow_len = 10;

ctx.translate(origin.x, origin.y);

// 座標軸
ctx.lineWidth = 2;
//ctx.strokeStyle = '#2D0B06';
ctx.strokeStyle = '#92551D';
//ctx.strokeStyle = '#F20020';

var start = {x: min_x, y: 0};
var end = {x: max_x - 10, y: 0};
arrow(ctx, start, end, arrow_ang, arrow_len);

var start = {x: 0, y: max_y};
var end = {x: 0, y: -240};
arrow(ctx, start, end, arrow_ang, arrow_len);


// 半直線
ctx.lineWidth = 3;
//ctx.strokeStyle = '#6bbf3f';
//ctx.strokeStyle = '#53C43C';
ctx.strokeStyle = '#45B11A';
//ctx.strokeStyle = '#2DDC15';

ctx.beginPath();

ctx.moveTo(0,0);
ctx.lineTo(-300,0)

ctx.stroke();

// 直線
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(scale*1.2, -scale*1.2);
ctx.stroke();

/*
// 放物線
ctx.beginPath();
ctx.moveTo(0,0);
for( var x = d; x <= 1.2; x += d ) {
    ctx.lineTo(scale*x, -scale*x*x);
}
ctx.stroke();
*/

function arrow(ctx, start, end, ang, len) {
    // 終点から始点へ向けた長さ len のベクトル
    var vec = {x: start.x - end.x, y: start.y - end.y};
    var vecLen = Math.sqrt(vec.x**2 + vec.y**2);
    vec.x *= len/vecLen;
    vec.y *= len/vecLen;

    // ラジアンへ変換
    ang *= Math.PI / 180;

    ctx.beginPath();

    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);

    ctx.save();
    ctx.translate(end.x, end.y);

    ctx.save();
    ctx.rotate(ang);
    ctx.moveTo(0, 0);
    ctx.lineTo(vec.x, vec.y);
    ctx.restore();

    ctx.save();
    ctx.rotate(-ang);
    ctx.moveTo(0, 0);
    ctx.lineTo(vec.x, vec.y);
    ctx.restore();

    ctx.restore();

    ctx.stroke();
}
