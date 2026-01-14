document.addEventListener("DOMContentLoaded", function () {
  let revData = new RevData();
  console.log(revData.scores); // 「{2, 2}」とコンソールに表示
  console.log(revData.scores[0]);
  console.log(RevData.w);
  console.log(revData.board[3][3]);
});
