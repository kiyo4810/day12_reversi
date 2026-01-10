document.addEventListener('DOMContentLoaded', function() {
    let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);
    cobj.context.fillStyle = '#004488';         // 塗りつぶし色
    cobj.context.fillRect(100, 100, 1000, 600); // 四角く塗りぶつし
});
