document.addEventListener('DOMContentLoaded', function() {
    let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

    cobj.context.fillStyle = '#002040';
    cobj.context.fillRect(100, 50, 600, 400);

    setTimeout(function() {
        cobj.context.clearRect(0, 0, cobj.w, cobj.h);
        cobj.context.fillStyle = '#004060';
        cobj.context.fillRect(300, 200, 600, 400);

        setTimeout(function() {
            cobj.context.clearRect(0, 0, cobj.w, cobj.h);
            cobj.context.fillStyle = '#006080';
            cobj.context.fillRect(500, 350, 600, 400);
        }, 1000);   // 1000ミリ秒後の、さらに1000ミリ秒後
    }, 1000);       // 1000ミリ秒後
});
