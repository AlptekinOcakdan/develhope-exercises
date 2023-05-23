const isLogged = true;

const randomNumberPromise = new Promise((resolve, reject) => {
    if (isLogged) {
        const randomNumber = Math.random();
        resolve(randomNumber);
    } else {
        reject("User is not logged in.");
    }
});

const userPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({name: "Alptekin", age: 24});
        } else {
            reject("Number is lower than 0.5.");
        }
    });
};
/*
randomNumberPromise.then((number) => userPromise(number)).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
*/
// When you pass a function as a handler to the then() method of a Promise, the return value of that function is automatically wrapped in a new Promise.
randomNumberPromise.then(userPromise).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});