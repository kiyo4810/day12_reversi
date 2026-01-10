// リバーシ COM
const revCom = {};

// COMの指し手を取得
revCom.get = function() {
    const {board, player} = revCore.data;
    const max = revCom.think(board, player, 0);
    return max.square;
};

// 思考（COMの内部処理）
revCom.think = function(board, player, nest) {
    let max = {value: -9999, square: null};    // 評価値、石を置く場所
    const activeSquares = revMid.getAllActive(board, player);

    activeSquares.forEach(square => {
        const {x, y} = square;
        let value = this.evalFromTable(x, y);   // 評価表の評価値
        value += this.evalNext(x, y, board, player, nest);  // 次手確認
        if (value > max.value || max.square === null) max = {value, square};
    });
    return max;
};

// 盤面評価表の利用
revCom.evalFromTable = function(x, y) {
    const valueTable = [    // COMの盤面評価表
        [64,  1,  8,  4,  4,  8,  1, 64],
        [ 1,  1, 10, 12, 12, 10,  1,  1],
        [ 8, 10, 14, 16, 16, 14, 10,  8],
        [ 4, 12, 16,  1,  1, 16, 12,  4],
        [ 4, 12, 16,  1,  1, 16, 12,  4],
        [ 8, 10, 14, 16, 16, 14, 10,  8],
        [ 1,  1, 10, 12, 12, 10,  1,  1],
        [64,  1,  8,  4,  4,  8,  1, 64]
    ];
    const value = valueTable[y][x];
    return value;
};

// 次手確認（石を配置した場合の"次の"プレイヤーの点数を引く）
revCom.evalNext = function(x, y, board, player, nest) {
    if (nest <= 1) {
        // nestが0、1のとき
        const board2 = gameUtil.deepClone(board);   // 深い複製
        revUpdate.reverse(board2, x, y, player);    // 裏返し処理

        const enemy = 1 - player;   // 相手方手番
        const max = this.think(board2, enemy, nest + 1);    // 再度思考
        return - max.value; // 次の手番の最大評価値を引く
    }
    return 0;
};
