document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    await appResource.load();
    appView.init();
    appView.drawToken();
    appView.drawCanPut();
});
