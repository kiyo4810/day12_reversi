document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    await appResource.load();
    appView.init();
    gameAnim.add('main', () => appView.update());
    gameAnim.start();

    gameClick.add(appView.cobj.canvas, 'board', (eX, eY) => {
        console.log(`x: ${eX}, y: ${eY}`);
    });
});
