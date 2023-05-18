function repeatHello(callback) {
    setInterval(() => {
        callback();
    }, 1000);
}

const printHello = () => {
    console.log("Hello");
};

repeatHello(printHello);

/*
* Using an arrow function as a callback allows us to preserve lexical scope,
* i.e. this state within the callback function will be inherited from the surrounding context.
* This can be useful when accessing variables or properties from the surrounding context.
* * */