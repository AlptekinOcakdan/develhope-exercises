
function repeatHello(callback) {
    const intervalId = setInterval(() => {
        callback();
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}

// Example usage:
const printHello = () => {
    console.log("Hello");
};

repeatHello(printHello);
