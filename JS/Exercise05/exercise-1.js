const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1); // { firstName: "Simon", lastName: "Doe", age: 25 }
console.log(person2); // { firstName: "Simon", lastName: "Doe", age: 25 }

// Explanation: When we assign `person1` to `person2`, we are actually creating a new reference to the same object in memory.
// This means that both `person1` and `person2` are now pointing to the same object.
// So, if we modify a property of the object through `person2`, the same change will be reflected in `person1` because both variables reference the same object in memory.
// That's why, modifying the property `firstName` of `person2` will also change the value of `firstName` in `person1`.
