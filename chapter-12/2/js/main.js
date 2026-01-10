document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    await appResource.load();
    appView.init();
    gameAnim.add('main', () => appView.update());
    gameAnim.start();

    gameClick.add(appView.cobj.canvas, 'board', (eX, eY) => {
        const pos = appLayout.pixelToBoard(eX, eY);  // マス位置を計算
        if (pos === null) return;   // 盤面外は飛ばす
        const {board, player} = revCore.data;
        if (! revMid.isActive(board, pos.x, pos.y, player)) return;
        revUpdate.reverse(board, pos.x, pos.y, player);
        revCore.data.activeSquares = revMid.getAllActive(board, player);
    });
});
