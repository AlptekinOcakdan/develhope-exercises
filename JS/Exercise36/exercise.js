function repeatHello(callback) {
    let callbackCount = 0;
    const intervalId = setInterval(() => {
        callback();
        callbackCount++;
        if (callbackCount >= 5) {
            clearInterval(intervalId);
        }
    }, 1000);
}

const printHello = () => {
    console.log("Hello");
};

repeatHello(printHello);


