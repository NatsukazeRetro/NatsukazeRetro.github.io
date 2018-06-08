var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var w = canvas.width = 600;
var h = canvas.height = 400;

// 座標軸の設定
var origin = {x: w/2, y: h*3/4};
var max_x = w - origin.x;
var min_x = - origin.x;
var max_y = origin.y;
var min_y = origin.y - h;

var arrow_ang = 30;
var arrow_len = 10;

// 原点移動, y 軸の向きを上にする
ctx.translate(origin.x, origin.y);
ctx.scale(1, -1);

// 座標軸の描画
ctx.lineWidth = 2;
ctx.strokeStyle = '#92551D';

// x 軸
var start = {x: min_x, y: 0};
var end = {x: max_x - 1, y: 0};
draw_arrow(ctx, start, end, arrow_ang, arrow_len);

// y 軸
var start = {x: 0, y: min_y + 50};
var end = {x: 0, y: max_y - 80};
draw_arrow(ctx, start, end, arrow_ang, arrow_len);

// 拡大率
var scale = 110;
ctx.scale(scale, scale);

max_x /= scale;
min_x /= scale;
max_y /= scale;
min_y /= scale;

// lineWidth
var lw1 = 1 / scale;
var lw2 = 2 / scale;
var lw3 = 3 / scale;

// 直線 (y = 1) の描画
ctx.lineWidth = lw1;
ctx.strokeStyle = 'black';

ctx.beginPath();
ctx.moveTo(min_x,1);
ctx.lineTo(max_x,1)
ctx.stroke();

/*
// 半直線 (y = 0, x <= 0) の描画
ctx.lineWidth = lw3;
ctx.strokeStyle = '#45B11A';

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(min_x,0)
ctx.stroke();

// e^{-1/x} (x > 0) の描画
var D = 100;
var step = max_x / D;

ctx.beginPath();
ctx.moveTo(0,0);
for (var x = 0.00001; x <= max_x; x += step) {
    ctx.lineTo(x, Math.exp(-1/x));
}
ctx.stroke();
*/


// 半直線 (y = 0, x <= e) の描画
var e = 1.5;

ctx.lineWidth = lw3;
ctx.strokeStyle = '#45B11A';

ctx.beginPath();
ctx.moveTo(-e,0);
ctx.lineTo(min_x,0)
ctx.stroke();

// e^{-1/(x+e)} (x > -e) の描画
var D = 5000;
var step = max_x / D;

ctx.beginPath();
ctx.moveTo(-e,0);
for (var x = -e + 0.001; x <= max_x; x += step) {
    ctx.lineTo(x, Math.exp(-1/(x+e)));
}
ctx.stroke();

// 半直線 (y = 0, x >= e) の描画
ctx.beginPath();
ctx.moveTo(e,0);
ctx.lineTo(max_x,0)
ctx.stroke();

// e^{-1/(-x+e)} (x < e) の描画
ctx.beginPath();
ctx.moveTo(e,0);
for (var x = e - 0.001; x >= min_x; x -= step) {
    ctx.lineTo(x, Math.exp(-1/(-x+e)));
}
ctx.stroke();

// ２つの半直線 (y = 0, x <= -e, x >= e) の描画
ctx.strokeStyle = 'tomato';
//ctx.strokeStyle = 'salmon';

ctx.beginPath();
ctx.moveTo(-e,0);
ctx.lineTo(min_x,0)
ctx.moveTo(e,0);
ctx.lineTo(max_x,0)
ctx.stroke();

// e^{-1/(x+e)} e^{-1/(-x+e)} (-e < x < e) の描画
ctx.beginPath();
ctx.moveTo(-e,0);
for (var x = -e + 0.00001; x < e; x += step) {
    ctx.lineTo( x, Math.exp(-1/(x+e)) * Math.exp(-1/(-x+e)) );
}
ctx.stroke();


// 矢印描画関数
function draw_arrow(ctx, start, end, ang, len) {
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
