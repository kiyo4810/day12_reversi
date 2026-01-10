document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    await appResource.load();
    appView.init();
    gameAnim.add('main', () => appView.update());
    gameAnim.start();

    revCore.data.putToken = {x: 2, y: 2};
    revCore.data.revTokens = [{x: 3, y: 3}, {x: 4, y: 4}, {x: 5, y: 5}];
    await appEffect.updateBoard();
});
