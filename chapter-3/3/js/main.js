document.addEventListener('DOMContentLoaded', function() {
    let canvas = document.createElement('canvas');    // 生成
    canvas.width = 1200;    // 横幅設定
    canvas.height = 800;    // 高さ設定

    canvas.style.background = 'url(image/bg.png)';  // 背景画像を設定
    let target = document.querySelector('#target'); // idがtargetの要素を選択
    target.append(canvas);  // canvas要素を追加
});
