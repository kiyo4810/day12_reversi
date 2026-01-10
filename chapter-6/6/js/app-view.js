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
    revLow.scanBoard((posX, posY) => {
        const {x, y} = appLayout.boardToPixel(posX, posY);
        resImage.draw('square', this.cobjBg, x, y, unit, unit);
    });
};

// 石描画
appView.drawToken = function() {
    const {unit} = appLayout;
    revLow.scanBoard((posX, posY) => {
        const square = revCore.data.board[posY][posX];
        if (square === RevData.blank) return;
        const {x, y} = appLayout.boardToPixel(posX, posY);
        resImage.draw(`token${square}`, this.cobj, x, y, unit, unit);
    });
};
 