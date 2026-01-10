class Position {
    static min = 0;
    static max = 100;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

console.log(Position.min);  // 「0」と出力
console.log(Position.max);  // 「100」と出力
