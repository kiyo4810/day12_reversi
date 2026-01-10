class RevData {
    static w = 8;   // 盤面横幅
    static h = 8;   // 盤面高さ
    static x = 0;   // 範囲判定用の最小X座標
    static y = 0;   // 範囲判定用の最小Y座標
    static blank = 8;   // 空マス（石マスはプレイヤー番号0,1）
}

console.log(`盤面横幅: ${RevData.w}`);
console.log(`盤面高さ: ${RevData.h}`);
console.log(`範囲判定用の最小X座標: ${RevData.x}`);
console.log(`範囲判定用の最小Y座標: ${RevData.y}`);
console.log(`空マス: ${RevData.blank}`);
