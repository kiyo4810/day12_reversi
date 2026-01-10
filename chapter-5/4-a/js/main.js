document.addEventListener('DOMContentLoaded', async function() {
    let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

    let promiseArray = [];
    promiseArray.push(resImage.load('token0', 'image/token0.png'));
    promiseArray.push(resImage.load('token1', 'image/token1.png'));
    promiseArray.push(resImage.load('square', 'image/square.png'));
    await Promise.all(promiseArray);

    resImage.draw('token0', cobj, 0, 0, 400, 400);
    resImage.draw('token1', cobj, 300, 0, 400, 400);
    resImage.draw('square', cobj, 600, 0, 400, 400);
});
