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
});
