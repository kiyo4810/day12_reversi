// ゲーム キャンバス
const gameCanvas = {};

// キャンバスの生成
gameCanvas.genCanvas = function(w, h) {
    const canvas = document.createElement('canvas');    // 生成
    canvas.width = w;   // 横幅設定
    canvas.height = h;  // 高さ設定
    const context = canvas.getContext('2d');    // 2Dコンテキスト
    return {canvas, context, w, h};
};

// 指定要素下に、指定サイズでキャンバスを作成して格納
gameCanvas.addCanvas = function(selector, w, h) {
    const cobj = this.genCanvas(w, h);
    const element = document.querySelector(selector);
    element.append(cobj.canvas);
    return cobj;
};
