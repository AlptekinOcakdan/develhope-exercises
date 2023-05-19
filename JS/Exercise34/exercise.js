function printAsyncName(callback, name) {
    const delay = 1000;
    let executed = false;

    const intervalId = setInterval(() => {
        if (!executed) {
            callback();
            executed = true;
        } else {
            console.log(name);
            clearInterval(intervalId);
        }
    }, delay);
}

function greetingCallback() {
    console.log("Hello");
}

printAsyncName(greetingCallback, "Alptekin");
