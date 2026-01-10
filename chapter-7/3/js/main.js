document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    await appResource.load();
    appView.init();
    appView.update();

    await gameUtil.sleep(1000);
    revCore.data.board[3][3] = RevData.blank;
    revCore.data.board[4][4] = RevData.blank;
    appView.update();
});
