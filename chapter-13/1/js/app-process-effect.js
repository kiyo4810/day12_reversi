// アプリ 進行の演出
const appProcessEffect = {};

appProcessEffect.execStart = function() {};         // 開始時演出実行
appProcessEffect.execPut = async function() {};     // 石配置時演出実行
appProcessEffect.execPass = async function() {};    // パス時演出実行
appProcessEffect.execEnd = async function() {};     // 終了時演出実行
