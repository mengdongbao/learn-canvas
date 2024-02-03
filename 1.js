// canvas 是 inline 元素 默认 300 * 150 可以设置宽高 (canvas 专有)
// style 中 宽高和属性宽高效果不一样
// dom 属性设置的 width 和 height 指的是画布尺寸
// style 设置的是放置区域大小 (dom宽高)



/** @type {HTMLCanvasElement} */
const dom = document.querySelector('#c1');
const ctx = dom.getContext('2d');
dom.width = 300;
dom.height = 200;
ctx.fillRect(100, 100, 100, 100)