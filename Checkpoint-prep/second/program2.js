// PROGRAM 2
// classes, class methods, Array methods (map, filter), and an Object method (reduce)
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getSummary() {
        return `${this.name} is ${this.age} years old and is in grade ${this.grade}`;
    }
}

const students = [
    new Student('Alptekin', 23, 4),
    new Student('Fırat', 32, "Graduated"),
    new Student('Ömer', 23, "4+"),
    new Student('Ahmet', 25, 5)
];

const studentNames = students.map((student) => student.name);
const studentAges = students.map((student) => student.age);
const olderStudents = students.filter((student) => student.age > 23);

console.log('Student names: ', studentNames);
console.log('Student ages: ', studentAges);
console.log('Older students: ', olderStudents);

const studentGrades = students.reduce((grades, student) => {
    grades[student.name] = student.grade;
    return grades;
}, {});

console.log('Students grades: ', studentGrades);

students.forEach((student) => {
    console.log(student.getSummary());
});


/*
1.	We start by defining a class called Student.
It has a constructor that takes in name, age, and grade as parameters and assigns them to the corresponding properties of the class.

2.	The getSummary() method is defined within the Student class.
It returns a string summarizing the student's information by accessing the class properties.

3.	An array students is created, containing instances of the Student class.
Each student is initialized with a name, age, and grade using the new keyword and the Student constructor.

4.	The code demonstrates the usage of Array methods on the students array.

5.	The map() method is used twice.
First, studentNames is created by mapping the students array to an array of student names using the name property.
Second, studentAges is created by mapping the students array to an array of student ages using the age property.

6.	The filter() method is used to create an array olderStudents that contains only the students who are older than 15 years of age, based on the age property.

7.	The console.log() statements are used to log the results to the console: studentNames, studentAges, and olderStudents.

8.	The code also showcases the usage of an Object method.

9.	The reduce() method is used to create an object studentGrades that maps student names to their respective grades.
It iterates over the students array and accumulates the values into an object using the name property as the key and the grade property as the value.

10.	The console.log() statement is used to log the studentGrades object.

11.	Finally, the forEach() method is used on the students array to iterate over each student and call the getSummary() method on each instance.
This method returns a summary string for each student, which is logged to the console.
*/