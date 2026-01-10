// アプリ 表示
const appView = {};

// 初期化
appView.init = function() {
    appLayout.init();    // レイアウトを初期化

    // キャンバス系オブジェクトを作成
    const size = appLayout.fitSize;
    this.cobjBg = gameCanvas.addBgCanvas('#reversi', size, size);
    this.cobj   = gameCanvas.addCanvas('#reversi', size, size);

    this.drawBoard();   // 盤面描画
};

// 盤面描画
appView.drawBoard = function() {
    const {unit} = appLayout;
    for (let posY = 0; posY < 8; posY ++) {
        for (let posX = 0; posX < 8; posX ++) {
            const {x, y} = appLayout.boardToPixel(posX, posY);
            resImage.draw('square', this.cobjBg, x, y, unit, unit);
        }
    }
};
