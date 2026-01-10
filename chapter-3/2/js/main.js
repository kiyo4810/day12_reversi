let canvas = document.createElement('canvas');    // 生成
canvas.width = 1200;    // 横幅設定
canvas.height = 800;    // 高さ設定
let context = canvas.getContext('2d');    // 2Dコンテキスト

console.log(canvas);    // 「<canvas width="1200" height="800"></canvas>」と出力
console.log(context);   // 「CanvasRenderingContext2D {…}」と出力
