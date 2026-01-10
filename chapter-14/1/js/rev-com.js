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
        let value = 0;  // 評価値
        if (value > max.value) max = {value, square};   // 最大時の更新
    });
    return max;
};
