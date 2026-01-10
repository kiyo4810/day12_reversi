// リバーシ 中核処理
const revCore = {};

// 初期化
revCore.init = function() {
    this.data = new RevData();  // リバーシ データ
    const {board, player} = this.data;
    this.data.activeSquares = revMid.getAllActive(board, player);
};
