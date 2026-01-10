function sleep() {
    let promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('待機終了');
        }, 1000);
    });
    return promise;
}

let promise = sleep();

promise
.then(function(res) {
    console.log(res);
});
