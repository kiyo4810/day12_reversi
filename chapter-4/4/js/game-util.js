// ゲーム ユーティリティ
const gameUtil = {};

// 一時停止
gameUtil.sleep = function(time) {
    return new Promise(r => setTimeout(r, time));
};