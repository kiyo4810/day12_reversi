// アプリ エフェクト
const appEffect = {};

// メッセージ表示
appEffect.popupMessage = function(text) {
    return new Promise(resolve => {
        const id = 'message';
        const max = 750;
        const start = gameAnim.time.sum;
        gameAnim.add(id, () => {     // アニメ追加
            const diff = gameAnim.time.sum - start;
            if (diff < max) {
                // アニメ処理
                const rate = diff / max;
                const {cobj} = appView;
                const x = cobj.w * 0.5;
                const y = cobj.h * Math.max(1.5 - rate * 3, 0.5);
                resFont.draw('main', cobj, text, x,  y, 2);
            } else {
                gameAnim.remove(id);    // アニメ削除
                resolve();              // Promise解決
            }
        });
    });
};
