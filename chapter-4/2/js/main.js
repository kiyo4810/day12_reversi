function sleep() {
    let promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
    return promise;
}

let promise = sleep();

promise
.then(function() {
    console.log('処理1');
    let promise = sleep();
    return promise;
})
.then(function() {
    console.log('処理2');
    let promise = sleep();
    return promise;
})
.then(function() {
    console.log('処理3');
});
