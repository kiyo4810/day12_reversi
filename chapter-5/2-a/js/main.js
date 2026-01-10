document.addEventListener('DOMContentLoaded', function() {
    let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

    let image0 = new Image();
    image0.src = 'image/token0.png';
    image0.onload = function() {
        cobj.context.drawImage(image0, 0, 0);
    };

    let image1 = new Image();
    image1.src = 'image/token1.png';
    image1.onload = function() {
        cobj.context.drawImage(image1, 150, 0);
    };
});
