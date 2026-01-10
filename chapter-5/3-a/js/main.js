let holder = {};    // ホルダー（画像保持用のオブジェクト）

// 画像の読み込み
let load = function(id, url) {
    return new Promise(resolve => {
        const image = new Image();
        image.onload = resolve;     // 読み込み後の処理
        image.src = url;            // URLを指定
        holder[id] = image;         // ホルダーに格納
    });
};

document.addEventListener('DOMContentLoaded', async function() {
    let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

    await load('token0', 'image/token0.png');
    await load('token1', 'image/token1.png');
    await load('square', 'image/square.png');

    cobj.context.drawImage(holder['token0'], 0, 0);
    cobj.context.drawImage(holder['token1'], 300, 0);
    cobj.context.drawImage(holder['square'], 600, 0);
});
