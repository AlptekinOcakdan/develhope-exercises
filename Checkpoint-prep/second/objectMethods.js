// Objects
const obj = {a: 1, b: 2, c: 3};
const target = {a: 1};
const source = {b: 2, c: 3};
const person = {
    greeting: function () {
        console.log('Hello!');
    },
};
const person2 = {
    name: 'John',
    age: 30,

}

// Object.keys(): Returns an array of enumerable property names (keys) of an object.
const keys = Object.keys(obj);
console.log(keys);
/*
In this example, the Object.keys() method is used to retrieve the enumerable property names (keys) of the obj object.
The method returns an array keys containing the property names ["a", "b", "c"].
*/

// Object.values(): Returns an array of enumerable property values of an object.
const values = Object.values(obj);
console.log(values);
/*
In this example, the Object.values() method is used to retrieve the enumerable property values of the obj object.
The method returns an array values containing the property values [1, 2, 3].
*/

// Object.entries(): Returns an array of arrays containing key-value pairs for each enumerable property of an object.
const entries = Object.entries(obj);
console.log(entries);
/*
In this example, the Object.entries() method is used to retrieve the key-value pairs of the obj object.
The method returns an array entries containing arrays representing each key-value pair [['a', 1], ['b', 2], ['c', 3]].
*/

// Object.hasOwnProperty(): Checks if an object has a specific property as a direct property (not inherited).
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('d'));
/*
In this example, the hasOwnProperty() method is used to check if the obj object has the properties 'a' and 'd'.
The first console.log() statement returns true because 'a' is a direct property of the obj object.
The second console.log() statement returns false because 'd' is not a direct property of the obj object.
*/

// in operator: Checks if an object has a specific property, including inherited properties.
console.log('a' in obj);
console.log('d' in obj);
/*
In this example, the in operator is used to check if the obj object has the properties 'a' and 'd'.
The first console.log() statement returns true because 'a' is a property of the obj object.
The second console.log() statement returns false because 'd' is not a property of the obj object.
*/

// Object.assign(): Copies the values of all enumerable properties from one or more source objects to a target object.
const merged = Object.assign(target, source);
console.log(merged);
/*
In this example, the Object.assign() method is used to merge the properties of the source object into the target object.
The method returns the modified target object with the properties { a: 1, b: 2, c: 3 }.
*/

// Object.create(): Creates a new object with the specified prototype object and properties.
const john = Object.create(person);
john.name = 'John';

john.greeting();
console.log(john.name);
/*
In this example, the Object.create() method is used to create a new object john with the prototype set to the person object.
The john object inherits the greeting() method from its prototype. Properties can be added directly to the john object as well.
*/

// Object.getOwnPropertyNames(): Returns an array of all property names (including non-enumerable properties) of an object.
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
});

const propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames);
/*
In this example, the Object.getOwnPropertyNames() method is used to retrieve all property names of the obj object, including non-enumerable properties.
The c property is defined with enumerable: false, making it non-enumerable. The propertyNames array will contain all property names ["a", "b", "c"].
*/

// Object.getPrototypeOf(): Returns the prototype of an object.
const janna = Object.create(person2);

const prototype = Object.getPrototypeOf(janna);
console.log(prototype);
/*
In this example, the Object.getPrototypeOf() method is used to retrieve the prototype of the john object.
The john object is created using Object.create() with person as its prototype.
The prototype variable will contain the person object, which is the prototype of john.
*/

// Object.setPrototypeOf(): Sets the prototype (i.e., the internal [[Prototype]] property) of an object.
Object.setPrototypeOf(person2, person);

person2.greeting();
/*
In this example, the Object.setPrototypeOf() method is used to set the prototype of the john object to the person object.
After setting the prototype, the john object gains access to the greeting() method defined in the person object.
Invoking john.greeting() outputs "Hello!".
*/

// Object.toString(): Returns a string representation of an object.
console.log(obj.toString());
/*
In this example, the toString() method is called on the obj object.
By default, the toString() method returns the string representation of the object, which is [object Object].
This is a common default string representation for objects.
*/

// Object.hasOwnProperty(): Checks if an object has a specific property as a direct property (not inherited).
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('d'));
/*
In this example, the hasOwnProperty() method is used to check if the obj object has the properties 'a' and 'c'.
The first console.log() statement returns true because 'a' is a direct property of the obj object.
The second console.log() statement returns false because 'c' is not a direct property of the obj object.
*/

// Object.is(): Compares two values for equality, even in edge cases such as NaN and -0
console.log(Object.is(2, 2));
console.log(Object.is(0, -0));
console.log(Object.is(NaN, NaN));
/*
In this example, the Object.is() method is used to compare two values.
The first console.log() statement compares 2 with 2 and returns true since the values are equal.
The second console.log() statement compares 0 with -0 and returns false even though they are both considered zero.
The third console.log() statement compares NaN with NaN and returns true, which is useful for identifying NaN values.
*/

// Object.seal(): Seals an object, preventing new properties from being added and marking existing properties as non-configurable.
Object.seal(obj);
obj.d = 3;
obj.a = 10;
delete obj.b;

console.log(obj);
/*
In this example, the Object.seal() method is used to seal the obj object.
After sealing, attempts to add new properties (c) will have no effect.
However, existing properties can still be modified (a) and cannot be deleted (b).
The console.log() statement outputs the modified obj object with the changed value of 'a' but the property 'b' remaining.
*/

// Object.freeze(): Freezes an object, preventing new properties from being added and existing properties from being modified or removed.
Object.freeze(obj);
obj.d = 3;
obj.a = 10;
delete obj.b;

console.log(obj);
/*
In this example, the Object.freeze() method is used to freeze the obj object.
After freezing, attempts to add new properties (c), modify existing properties (a), or delete properties (b) will have no effect.
The console.log() statement outputs the original obj object without any changes.
*/
