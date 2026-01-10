// アプリ 進行
const appProcess = {};

appProcess.start = function() {};              // 開始
appProcess.put = async function(x, y) {};      // 石の配置
appProcess.update = async function() {};       // 更新
appProcess.tryEnd = async function() {};       // 実行1：終了
appProcess.tryPass = async function() {};      // 実行2：パス
appProcess.tryCom = async function() {};       // 実行3：COM手番
