class Position {
    constructor(x, y) {
        this.x = x;     // プロパティxに、引数xの値を代入
        this.y = y;     // プロパティyに、引数yの値を代入
    }
}

let position = new Position(3, 4);
console.log(position);  // 「{x: 3, y: 4}」とコンソールに表示
