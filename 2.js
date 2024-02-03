/**
 * 矩形绘制
 */
// stroke fill 默认对所有图形进行处理
// beginPath 清空路径上下文


/** @type {HTMLCanvasElement} */
const dom = document.querySelector('#c1');
const ctx = dom.getContext('2d');
dom.width = 400;
dom.height = 400;

// 填充矩形
// ctx.fillRect(100, 100, 200, 100);

// 描边矩形
// ctx.strokeRect(100, 100, 200, 100);

// 提供矩形路径
// ctx.rect(100, 100, 200, 100);
// ctx.fillStyle = 'pink';
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 10;
// ctx.stroke();
// ctx.fill();

// beginPath
// ctx.rect(100, 100, 200, 100);
// ctx.beginPath();
// ctx.fill();

// 圆角矩形
ctx.beginPath();
ctx.roundRect(100, 100, 100, 100, [10, 20, 30, 40]);
ctx.fill();

