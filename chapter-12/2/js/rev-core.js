// リバーシ 中核処理
const revCore = {};

// 初期化
revCore.init = function() {
    this.data = new RevData();  // リバーシ データ
    testRev.set(this.data);     // デバッグ用データ設定
    this.update();  // 更新
};

// 各種値の更新
revCore.update = function() {
};
