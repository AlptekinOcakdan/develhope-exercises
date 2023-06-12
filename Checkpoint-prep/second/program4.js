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

async function saveCarToTotal(car) {
    try {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.push(car);
        localStorage.setItem('cars', JSON.stringify(cars));
    } catch (e) {
        console.log('Error: ', e);
        throw e;
    }
}

async function getCarsFromLocal() {
    try {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        return cars.map((car) => new Car(car.make, car.model, car.year, car.color));
    } catch (e) {
        console.log('Error: ', e);
        throw e;
    }
}

const myCar = new Car('Toyota', 'Camry', 2021, 'Silver');

saveCarToTotal(myCar)
    .then(() => getCarsFromLocal())
    .then((cars) => {
        console.log('Cars from local storage', cars);
        cars.forEach((car) => console.log(car.getSummary()));
    })
    .catch((error) => console.log('Error: ', error));

/*
1.	We start by defining a class called Vehicle.
It has a constructor that takes in make, model, and year as parameters and assigns them to the corresponding properties of the class.

2.	The getSummary() method is defined within the Vehicle class.
It returns a string summarizing the vehicle's information by accessing the class properties.

3.	We define another class called Car, which extends the Vehicle class. It adds an additional color property to the Car class.

4.	Inside the Car class, we use the super() keyword to call the constructor of the parent class (Vehicle) and pass the make, model, and year parameters.

5.	We then assign the color parameter to the color property of the Car class.

6.	We define an asynchronous function called saveCarToLocal, which takes a car parameter.

7.	Inside the saveCarToLocal function, we first retrieve the cars from the local storage using localStorage.getItem('cars').
If there are no cars stored, we initialize an empty array using || [].

8.	We push the car parameter into the cars array.

9.	Finally, we store the updated cars array back into the local storage using localStorage.setItem('cars', JSON.stringify(cars)).

10.	We define another asynchronous function called getCarsFromLocal, which retrieves the cars from the local storage.

11.	Inside the getCarsFromLocal function, we first retrieve the cars from the local storage using localStorage.getItem('cars').
If there are no cars stored, we initialize an empty array using || [].

12.	We map over the retrieved cars array and create new Car instances for each car by passing the corresponding properties.

13.	The saveCarToLocal and getCarsFromLocal functions include error handling using try and catch.
If an error occurs, it is caught, logged to the console, and re-thrown.

14.	Finally, we create a myCar instance using the Car class with the provided parameters.

15.	We call the saveCarToLocal function and pass myCar as an argument. The function returns a promise, which we chain with .then().

16.	In the chained .then() callback, we call the getCarsFromLocal function to retrieve the cars from the local storage.
The function also returns a promise, which we chain with another .then().

17.	In the second .then() callback, we log the retrieved cars array to the console using console.log().
We also iterate over each car using forEach() and call the getSummary() method on each car, logging the summary to the console.

18.	If an error occurs during any step, it is caught and logged to the console using the .catch() method.

*/