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
    for (let posX = 0; posX < 8; posX ++) {
        const {x, y} = appLayout.boardToPixel(posX, 0);
        resImage.draw('square', this.cobjBg, x, y, unit, unit);
    }
};
