
function printAsyncName(callback, name) {
    const delay = 1000;
    let count = 0;

    const intervalId = setInterval(() => {
        if (count === 0) {
            callback();
        } else if (count === 2) {
            console.log(name);
            clearInterval(intervalId);
        }
        count++;
    }, delay);
}

function greeting() {
    console.log("Hello");
}

printAsyncName(greeting, "Alptekin");
