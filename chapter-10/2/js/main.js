document.addEventListener('DOMContentLoaded', async function() {
    revCore.init();
    revLow.scan8Direction(revCore.data.board, 3, 3, (line, dir) => {
        console.log(JSON.stringify(dir), '▶', JSON.stringify(line));
    });
});
