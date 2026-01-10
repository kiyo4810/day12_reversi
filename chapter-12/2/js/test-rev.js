// テスト リバーシ
const testRev = {};

// デバッグ用：盤面を文字列にして出力
testRev.outBoard = function(board) {
    const lineArray = board.map(array => array.join(', '));
    console.log(lineArray.join('\n'));
};

// デバッグ用
testRev.set = function(data) {
    this.outBoard(data.board);
};
