
const isLogged = true;

const randomNumberPromise = new Promise((resolve, reject) => {
    if (isLogged) {
        const randomNumber = Math.random();
        resolve(randomNumber);
    } else {
        reject(new Error("User is not logged in."));
    }
});

const userPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({ name: "John", age: 24 });
        } else {
            reject(new Error("Number is lower than 0.5."));
        }
    });
};

randomNumberPromise
    .then((number) => userPromise(number))
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("Promise chain is completed.");
    });
