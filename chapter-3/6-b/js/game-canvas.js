// ゲーム キャンバス
class GameCanvas {
    // キャンバスの生成
    static genCanvas(w, h) {
        const canvas = document.createElement('canvas');    // 生成
        canvas.width = w;   // 横幅設定
        canvas.height = h;  // 高さ設定
        const context = canvas.getContext('2d');    // 2Dコンテキスト
        return {canvas, context, w, h};
    }
}
