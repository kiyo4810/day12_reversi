document.addEventListener('DOMContentLoaded', async () => {
    resAudio.init();
    resAudio.load('bgm', 'audio/bgm.mp3');

    document.querySelector('#play-bgm').addEventListener('click', () => {
        resAudio.play('bgm');
    });
    document.querySelector('#stop-bgm').addEventListener('click', () => {
        resAudio.stop('bgm');
    });
});
