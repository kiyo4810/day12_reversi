// アプリ リソース
const appResource = {};

// リソースの読み込み
appResource.load = async function() {
    const r = [];
    r.push(resImage.load('token0', 'image/token0.png'));
    r.push(resImage.load('token1', 'image/token1.png'));
    r.push(resImage.load('square', 'image/square.png'));
    r.push(resImage.load('active', 'image/active.png'));
    r.push(resFont.load('main', 'ArchivoBlack'));
    await Promise.all(r);
};
