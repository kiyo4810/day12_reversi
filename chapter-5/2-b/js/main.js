// 画像の読み込み
let load = function(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.onload = () => {
            resolve(image);     // 読み込み後の処理
        }
        image.src = url;    // URLを指定
    });
};

document.addEventListener('DOMContentLoaded', async function() {
    let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

    let image0 = await load('image/token0.png');
    let image1 = await load('image/token1.png');

    cobj.context.drawImage(image0, 0, 0);
    cobj.context.drawImage(image1, 150, 0);
});
