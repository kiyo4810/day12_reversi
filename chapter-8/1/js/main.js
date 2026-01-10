document.addEventListener('DOMContentLoaded', async function() {
    await appResource.load();

    let w = 1200;
    let h = 800;
    gameCanvas.addBgCanvas('#reversi', w, h);
    let cobj = gameCanvas.addCanvas('#reversi', w, h);

    let x = 0;
    let y = 0;
    let imageSize = 400;

    gameAnim.add('main', () => {
        cobj.context.clearRect(0, 0, w, h);

        x += gameAnim.time.diff * 0.75;
        y += gameAnim.time.diff * 0.25;
        if (x >= w) x = -imageSize;
        if (y >= h) y = -imageSize;
        resImage.draw('token0', cobj, x, y, imageSize, imageSize);
    })
    gameAnim.start();
});
