let id = setInterval(function() {
    console.log('処理を実行');
}, 1000);
setTimeout(function() {
    clearInterval(id);
    console.log('処理を停止');
}, 2500);
