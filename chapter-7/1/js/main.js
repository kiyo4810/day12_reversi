document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    await appResource.load();
    appView.init();
    appView.drawToken();
    appView.drawCanPut();

    let {cobj} = appView;
    let text = 'You02 Com02';
    resFont.draw('main', cobj, text, cobj.w / 2, cobj.h / 2, 1, cobj.w);
});
