document.addEventListener('DOMContentLoaded', async function() {
    let cobj = gameCanvas.addCanvas('#target', 1200, 800);
    cobj.canvas.style.background = 'lightgray'; // 背景を明るい灰色にする

    cobj.context.fillStyle = '#002040';
    cobj.context.fillRect(100, 50, 600, 400);

    await gameUtil.sleep(500);
    cobj.context.clearRect(0, 0, cobj.w, cobj.h);
    cobj.context.fillStyle = '#004060';
    cobj.context.fillRect(300, 200, 600, 400);

    await gameUtil.sleep(1000);
    cobj.context.clearRect(0, 0, cobj.w, cobj.h);
    cobj.context.fillStyle = '#006080';
    cobj.context.fillRect(500, 350, 600, 400);
});
