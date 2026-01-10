document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    await appResource.load();
    appView.init();

    gameAnim.add('main', () => {
        appView.update();
    });
    gameAnim.start();   // アニメーション開始

    await gameUtil.sleep(1000);
    revCore.data.board[3][3] = RevData.blank;
    await gameUtil.sleep(1000);
    revCore.data.board[4][4] = RevData.blank;
});
