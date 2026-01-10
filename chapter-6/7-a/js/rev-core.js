// リバーシ 中核処理
const revCore = {};

// 初期化
revCore.init = function() {
    this.data = new RevData();  // リバーシ データ
    this.data.activeSquares = [
        {x: 3, y: 2}, {x: 2, y: 3}, {x: 5, y: 4}, {x: 4, y: 5}
    ];
};
