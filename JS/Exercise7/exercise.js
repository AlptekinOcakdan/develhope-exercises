function printName() {
    const helloName = "Hello John";

    function inner() {
        console.log(helloName);
    }

    setTimeout(inner, 1000);
}

printName(); // After 1 second, "Hello John" will be printed to the console
