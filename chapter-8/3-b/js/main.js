document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    await appResource.load();
    appView.init();
    gameAnim.add('main', () => appView.update());
    gameAnim.start();

    await appEffect.popupMessage('START');
    await appEffect.popupMessage('END');
});
