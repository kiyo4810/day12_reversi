class RevData {
    constructor() {
        this.player = 0;        // 現在の手番プレイヤー
        this.isEnd = false;     // 終了フラグ
        this.scores = [2, 2];   // 獲得石数
        this.types = ['MAN', 'COM'];    // プレイヤー種類
        this.board = [          // 盤面
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 1, 0, 8, 8, 8],
            [8, 8, 8, 0, 1, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8]
        ];
        this.putToken = {x: 0, y: 0};   // ログ：石置き位置
        this.activeSquares = [];        // 配置可能マス配列
        this.revTokens = [];    // ログ：裏返した石の配列
    }
}

let revData = new RevData();
console.log(revData);
