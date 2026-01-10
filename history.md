# 2024-02-26

## バグ修正

* `chapter-4/3-d/js/main.js` を修正。
    * 修正前：`await sleep(1000);`
    * 修正後：`await gameUtil.sleep(1000);`
* `chapter-4/4/js/main.js` を修正。
    * 修正前：`await sleep(1000);`
    * 修正後：`await gameUtil.sleep(1000);`
* `stable/js/rev-com.js` の `revCom.think` を修正。
    * `if (value > max.value) max = {value, square};   // 最大時の更新` のあとに1行追加
    * `if (max.square === null) max = {value, square}; // -9999未満のみの対策`
    * 同様の修正を、次のファイルにも実施。
        * `chapter-14/3/js/rev-com.js` の `revCom.think` 。
        * `chapter-14/4/js/rev-com.js` の `revCom.think` 。
        * `chapter-15/2/js/rev-com.js` の `revCom.think` 。
        * `stable-audio/js/rev-com.js` の `revCom.think` 。

## デバッグ用サンプル `debug` 追加

デバッグ用サンプル `debug` を追加しました。
プレイヤーの代わりに、ランダムな手を指してデバッグする「モンキー モード」を実装しています。

* `rev-data.js` の変更。
    *  `RevData` の `types` を `MONKEY`にすることで、モンキー モードになる（デフォルト設定）。
* `debug/js/app-process.js` に、デバッグ用の処理を追加。
    * `appProcess.start` に、デバッグ用の処理を追加。
        * `this.update();  // デバッグ盤面用、ユーザー初手パス対応処理`
        * 通常プレイ時には発生しないパスが必要になるため。
    * `appProcess.update` に、デバッグ用の出力処理を追加。
        * `console.log('player', revCore.data.player);`
        * `testRev.outBoard(revCore.data.board);`
    * `appProcess.tryMonkey` を追加。
* `debug/js/test-rev.js` にテスト盤面を追加。
    * `testRev.test1` `testRev.test2` `testRev.test3`
* `app-effect.js` の `appEffect.updateBoard` を変更。
    * 変更前：`await this.effectPromise('board', 750, rate => {`
    * 変更後：`await this.effectPromise('board', 1, rate => {`
    * 高速デバッグのため。

