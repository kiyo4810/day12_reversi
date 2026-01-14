document.addEventListener("DOMContentLoaded", async function () {
  let cobj = gameCanvas.addCanvas("#target", 1200, 800);
  cobj.canvas.style.background = "lightgray"; // 背景を明るい灰色にする

  cobj.context.fillStyle = "#002040";
  cobj.context.fillRect(100, 50, 600, 400);
  // 1. フォントの大きさと種類を決める（CSSと同じ書き方）
  cobj.context.font = "bold 48px sans-serif";
  // 2. 色を決める
  cobj.context.fillStyle = "white";
  // 3. 文字を書く（内容, X座標, Y座標）
  cobj.context.fillText("サバンナ八木!", 150, 200);
  // 1. 画像の「箱」を作る
  const img = new Image();
  img.src = "yagi.webp"; // 画像のパス
  // 2. 読み込みが終わったら実行する
  img.onload = () => {
    // drawImage(画像, x, y, 横幅, 縦幅)
    cobj.context.drawImage(img, 10, 10, 200, 200);
  };

  await gameUtil.sleep(1000); // 1000ミリ秒
  cobj.context.clearRect(0, 0, cobj.w, cobj.h);
  cobj.context.fillStyle = "#004060";
  cobj.context.fillRect(300, 200, 600, 400);
  // 1. フォントの大きさと種類を決める（CSSと同じ書き方）
  cobj.context.font = "bold 48px sans-serif";
  // 2. 色を決める
  cobj.context.fillStyle = "white";
  // 3. 文字を書く（内容, X座標, Y座標）
  cobj.context.fillText("ドーナツ・ピーナツ", 350, 350);
  // 1. 画像の「箱」を作る
  const img2 = new Image();
  img2.src = "donapi.jpg"; // 画像のパス
  // 2. 読み込みが終わったら実行する
  img2.onload = () => {
    // drawImage(画像, x, y, 横幅, 縦幅)
    cobj.context.drawImage(img2, 10, 10, 200, 200);
  };

  await gameUtil.sleep(1000); // 1000ミリ秒
  cobj.context.clearRect(0, 0, cobj.w, cobj.h);
  cobj.context.fillStyle = "#006080";
  cobj.context.fillRect(500, 350, 600, 400);
  // 1. フォントの大きさと種類を決める（CSSと同じ書き方）
  cobj.context.font = "bold 48px sans-serif";
  // 2. 色を決める
  cobj.context.fillStyle = "white";
  // 3. 文字を書く（内容, X座標, Y座標）
  cobj.context.fillText("三浦マイルド", 550, 500);
  // 1. 画像の「箱」を作る
  const img3 = new Image();
  img3.src = "miuramild.avif"; // 画像のパス
  // 2. 読み込みが終わったら実行する
  img3.onload = () => {
    // drawImage(画像, x, y, 横幅, 縦幅)
    cobj.context.drawImage(img3, 10, 10, 200, 200);
  };
}); // ここが全体の「閉じカッコ」！
