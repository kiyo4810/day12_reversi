// アプリ 進行
const appProcess = {};

// 開始
appProcess.start = function() {
    appClick.addButton('Start', () => {
        appProcessEffect.execStart();   // 開始時演出実行
        appClick.addBoard();    // 盤面クリック処理追加
    });
};

// 石の配置
appProcess.put = async function(x, y) {
    revCore.putToken(x, y); // 石置き処理
    revCore.next();         // 次へ
    await appProcessEffect.execPut();   // 石配置時演出実行
    this.update();    // 更新
};

// 更新
appProcess.update = async function() {
    if (await this.tryEnd()) return;    // 終了
    if (await this.tryPass()) return;   // パス
    if (await this.tryCom()) return;    // COM手番
    appClick.isLock = false;    // 終了、パス、COM手番以外はロック解除
};

// 実行1：終了
appProcess.tryEnd = async function() {
    if (! revCore.data.isEnd) return false;
    await appProcessEffect.execEnd();   // 終了時演出実行
    revCore.init();     // 盤面初期化
    this.start();       // 開始
    return true;
};

// 実行2：パス（配置可能マスがないならパス）
appProcess.tryPass = async function() {
    if (revCore.data.activeSquares.length > 0) return false;
    await appProcessEffect.execPass();  // パス時演出実行
    revCore.next(); // 次へ
    this.update();  // 更新
    return true;
};

appProcess.tryCom = async function() {};    // 実行3：COM手番
