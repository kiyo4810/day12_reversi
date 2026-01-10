function sleep() {
    let promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('待機終了');
        }, 1000);
    });
    return promise;
}

async function main() {
    let res = await sleep();
    console.log(res);
}

main();
