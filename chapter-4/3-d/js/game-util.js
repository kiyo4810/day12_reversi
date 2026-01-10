// ゲーム ユーティリティ
const gameUtil = {};

// 一時停止
gameUtil.sleep = function(time) {
    let promise = new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
    return promise;
};