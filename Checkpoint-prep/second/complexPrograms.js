// PROGRAM 1.
// async/await, fetching data using the Fetch API, error handling with try/catch,
// manipulation of the fetched data using Array methods (filter and map), and usage of Object methods (Object.assign).

// Fetch data from a mock API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

// Perform manipulations on the fetched data
async function processData() {
    try {
        const data = await fetchData();

        // Example of Array methods
        const filteredData = data.filter((item) => item.userId === 1);
        const mappedData = filteredData.map((item) => ({
            id: item.id,
            title: item.title.toUpperCase(),
        }));

        // Example of Object methods
        const objectData = Object.assign({}, ...mappedData.map((item) => ({ [item.id]: item.title })));

        console.log('Filtered and mapped data:', mappedData);
        console.log('Object data:', objectData);

        return objectData;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

// Usage of the program
processData()
    .then((result) => console.log('Final result:', result))
    .catch((error) => console.log('Error:', error));


// PROGRAM 2
// classes, class methods, Array methods (map, filter), and an Object method (reduce)
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getSummary() {
        return `${this.name} is ${this.age} years old and is in grade ${this.grade}.`;
    }
}

const students = [
    new Student('John', 16, 10),
    new Student('Jane', 15, 9),
    new Student('Adam', 17, 11),
    new Student('Emily', 16, 10),
];

// Example of Array methods
const studentNames = students.map((student) => student.name);
const studentAges = students.map((student) => student.age);
const olderStudents = students.filter((student) => student.age > 15);

console.log('Student names:', studentNames);
console.log('Student ages:', studentAges);
console.log('Older students:', olderStudents);

// Example of Object methods
const studentGrades = students.reduce((grades, student) => {
    grades[student.name] = student.grade;
    return grades;
}, {});

console.log('Student grades:', studentGrades);

// Usage of class method
students.forEach((student) => {
    console.log(student.getSummary());
});

// PROGRAM 3
// classes, class methods, and Object methods (Object.keys, Object.values, Object.entries)
class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.publicationYear}`;
    }
}

const books = [
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
    new Book('1984', 'George Orwell', 1949),
];

// Example of Object Methods
const bookProperties = Object.keys(books[0]);
const bookValues = Object.values(books[0]);
const bookEntries = Object.entries(books[0]);

console.log('Book properties:', bookProperties);
console.log('Book values:', bookValues);
console.log('Book entries:', bookEntries);

// Usage of class method
books.forEach((book) => {
    console.log(book.getSummary());
});

// PROGRAM 4
// classes, inheritance (with the Car class extending the Vehicle class), asynchronous functions,
// local storage (localStorage), and error handling using try and catch
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getSummary() {
        return `${this.make} ${this.model} (${this.year})`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color) {
        super(make, model, year);
        this.color = color;
    }
}

async function saveCarToLocal(car) {
    try {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

async function getCarsFromLocal() {
    try {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        return cars.map((car) => new Car(car.make, car.model, car.year, car.color));
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

// Usage of the program
const myCar = new Car('Toyota', 'Camry', 2021, 'Silver');

saveCarToLocal(myCar)
    .then(() => getCarsFromLocal())
    .then((cars) => {
        console.log('Cars from local storage:', cars);
        cars.forEach((car) => console.log(car.getSummary()));
    })
    .catch((error) => console.log('Error:', error));

// PROGRAM 5
// API, fetching their respective posts, and processing the data
class User {
    constructor(id, name, username) {
        this.id = id;
        this.name = name;
        this.username = username;
    }
}

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users.map((user) => new User(user.id, user.name, user.username));
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

async function fetchUserPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        return await response.json();
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

async function processUserPosts() {
    try {
        const users = await getUsers();
        const userPostsPromises = users.map(async (user) => {
            const posts = await fetchUserPosts(user.id);
            return {
                user: user.username,
                posts: posts.length,
            };
        });
        const userPosts = await Promise.all(userPostsPromises);
        console.log('User Posts:', userPosts);
    } catch (error) {
        console.log('Error:', error);
    }
}

// Usage of the program

processUserPosts().then(() => {
    console.log('Processing of user posts completed.');
}).catch((error) => {
    console.log('Error:', error);
});

