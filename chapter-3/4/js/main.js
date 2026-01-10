document.addEventListener('DOMContentLoaded', function() {
    let canvas = document.createElement('canvas');    // 生成
    canvas.width = 1200;    // 横幅設定
    canvas.height = 800;    // 高さ設定
    const context = canvas.getContext('2d');    // 2Dコンテキスト

    canvas.style.background = 'url(image/bg.png)';  // 背景画像を設定
    let target = document.querySelector('#target'); // idがtargetの要素を選択
    target.append(canvas);  // canvas要素を追加

    context.fillStyle = '#004488';  // 塗りつぶし色
    context.fillRect(50, 100, 600, 400);   // 四角く塗りぶつし

    context.fillStyle = '#ee6666';  // 塗りつぶし色
    context.fillRect(350, 300, 800, 400);   // 四角く塗りぶつし
});
