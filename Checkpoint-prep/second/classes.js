// Declaring a class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks!`);
    }
}

const myDog = new Dog('Max', 'Labrador');
myDog.speak();


// The Differences between Instance Method and Class Method

// Instance Method
/*
- Instance methods are defined on the prototype of the class and are accessible through each instance of the class.
- They operate on individual instances (objects) of the class and can access and modify the instance's properties.
- Instance methods are typically used to define behaviors and actions specific to each instance of the class.
- To access an instance method, you need to create an instance (object) of the class first.
*/
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    calculateArea() {
        return this.sideLength ** 2;
    }

    calculatePerimeter() {
        return 4 * this.sideLength;
    }
}

const mySquare = new Square(5);
console.log(mySquare.calculateArea());
console.log(mySquare.calculatePerimeter());

// Class Method
/*
- Class methods are defined on the class itself, not on its prototype, and are accessed directly from the class.
- They do not have access to the instance-specific properties or methods of the class because they are not bound to any particular instance.
- Class methods are commonly used for utility functions or operations that are not dependent on any specific instance but still relate to the class.
- To access a class method, you use the class name followed by the method name.
*/
class MathUtils {
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtils.multiply(5, 3)); // Output: 15

// Private Fields, Getter, Setter
class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }
}

const john = new Person('John Doe');
console.log(john.name);

john.name = 'John Smith';
console.log(john.name);

// Composition
class Engine {
    start() {
        console.log('Engine started');
    }
}

class Wheel {
    rotate() {
        console.log('Wheel rotating');
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
        this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    }

    start() {
        this.engine.start();
        console.log('Car started');
        this.wheels.forEach((wheel) => wheel.rotate());
    }
}

const myCar = new Car();

myCar.start();
