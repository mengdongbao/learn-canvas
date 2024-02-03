/**
 * 线条 API
 */
// lineWidth: 线宽
// lineCap: 线端点样式 butt: 平的 round: 补充半圆 square: 补充方块
// lineJoin: 线连接样式 miter: 尖的 round: 圆的 bevel: 连接处是平的
// miterLimit: 夹角越小，线越粗的时候控制尖端大小
// setLineDash: 设置虚线
// lineDashOffset: 虚线偏移





/** @type {HTMLCanvasElement} */
const dom = document.querySelector('#c1');
const ctx = dom.getContext('2d');
dom.width = 400;
dom.height = 400;

ctx.beginPath();
ctx.setLineDash([10, 10])
ctx.lineWidth = 3;
ctx.strokeStyle = 'pink';
ctx.lineCap = 'butt';
ctx.moveTo(50, 50);
ctx.lineTo(100, 50);
ctx.lineTo(50, 100);
// ctx.lineTo(100, 100);

ctx.lineTo(50, 50);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(100, 100);
ctx.setLineDash([100]);
ctx.lineTo(200, 100);
ctx.lineDashOffset = -100;
function move() {
    ctx.lineDashOffset += 1;
    ctx.stroke();
    if (ctx.lineDashOffset > 1) {
        requestAnimationFrame(move);
    }
}
requestAnimationFrame(move);