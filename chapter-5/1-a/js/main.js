document.addEventListener('DOMContentLoaded', function() {
    let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

    let image = new Image();
    image.onload = function() {
        cobj.context.drawImage(image, 0, 0);
    };
    image.src = 'image/token0.png';
});
