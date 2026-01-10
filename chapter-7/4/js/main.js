document.addEventListener('DOMContentLoaded', function() {
    let canvas = document.createElement('canvas');    // 生成
    canvas.width = 1200;    // 横幅設定
    canvas.height = 800;    // 高さ設定
    const context = canvas.getContext('2d');    // 2Dコンテキスト

    canvas.style.background = 'url(image/bg.png)';  // 背景画像を設定
    let target = document.querySelector('#target'); // idがtargetの要素を選択
    target.append(canvas);  // canvas要素を追加

    var lingrad = context.createLinearGradient(0, 100, 0, 700);
    lingrad.addColorStop(0, "#00ABEB");
    lingrad.addColorStop(0.5, "#fff");
    lingrad.addColorStop(0.5, "rgba(0, 0, 0, 0)");
    lingrad.addColorStop(1, "#26C000");
  
    var lingrad2 = context.createLinearGradient(100, 100, 700, 700);
    lingrad2.addColorStop(0.5, "#004488");
    lingrad2.addColorStop(1, "#ee6666");

    context.fillStyle = lingrad//'#ee6666';  // 塗りつぶし色
    context.strokeStyle = lingrad2//'#004488';  // 線色
    context.lineWidth = 30;
    context.lineJoin = 'round';
    context.lineCap = 'round';

    context.beginPath();
    context.moveTo(50, 300);
    context.lineTo(650, 300);
    context.lineTo(150, 700);
    context.lineTo(350, 100);
    context.lineTo(550, 700);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(880, 350, 260, 0, Math.PI * 0.9, !true);
    context.arc(880, 350, 130, Math.PI * 1.8, Math.PI * 0.25, true);
    context.fill();
    context.stroke();
});
