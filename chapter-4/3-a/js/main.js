function sleep() {
    let promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
    return promise;
}

async function main() {
    await sleep();
    console.log('処理1');
    await sleep();
    console.log('処理2');
    await sleep();
    console.log('処理3');
}

main();
