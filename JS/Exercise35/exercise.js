function repeatHello(callback) {
    setInterval(() => {
        callback();
    }, 1000);
}

// Example usage:
const printHello = () => {
    console.log("Hello");
};

repeatHello(printHello);

/*
* Using an arrow function as the callback allows us to maintain lexical scope,
* meaning that this within the callback function will be inherited from the surrounding context.
* This can be useful when accessing variables or properties from the enclosing scope.
* */