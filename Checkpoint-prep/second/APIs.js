// API Requests:
fetch('https://northwind.vercel.app/api/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
// Fetch Data:
fetch('https://northwind.vercel.app/api/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
// LocalStorage:
//
// Storing data in localStorage
localStorage.setItem('username', 'John');

// Retrieving data from localStorage
const username = localStorage.getItem('username');
console.log(username); // Output: John

// Removing data from localStorage
localStorage.removeItem('username');

// Asynchronous JavaScript:


console.log('Start');

setTimeout(() => {
    console.log('Asynchronous operation');
}, 2000);

console.log('End');

// Promises:
const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data has been retrieved');
    }, 2000);
});

getData
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

// Async/Await:
async function getAsyncData() {
    try {
        const response = await fetch('https://api.example.com/data');
        return await response.json();
    } catch (error) {
        return error;
    }
}

getAsyncData()
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e));

/*
filter , find,  map
reduce, indexOf, findIndex, startsWith, endsWith, split, join, reverse,

    obj methods
keys, values,entries, hasOwnProperty, hasOwn,

    Classes
declare class, inherit (extends)
Instance Method, Class method, differences (! will ask )
API requests,
    fetch data, localstorage,
    asynchronous js, promises, async, await,  That's it
*/