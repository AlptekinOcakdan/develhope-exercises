// PROGRAM 3
// classes, class methods, and Object methods (Object.keys, Object.values, Object.entries)
class Book {
    constructor(title, author, publicationYear) {
        this.title=title;
        this.author=author;
        this.publicationYear=publicationYear;
    }
    getSummary(){
        return `${this.title} by ${this.author}, published in ${this.publicationYear}`;
    }
}

const books = [
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
    new Book('1984', 'George Orwell', 1949),
];

const bookProperties =Object.keys(books[0]);
const bookValues = Object.values(books[0]);
const bookEntries = Object.entries(books[0]);

console.log('Book properties: ', bookProperties);
console.log('Book values: ', bookValues);
console.log('Book entries: ',bookEntries);

books.forEach((book)=>{
    console.log(book.getSummary());
})


/*
1.	We start by defining a class called Book.
It has a constructor that takes in title, author, and publicationYear as parameters and assigns them to the corresponding properties of the class.

2.	The getSummary() method is defined within the Book class.
It returns a string summarizing the book's information by accessing the class properties.

3.	An array books is created, containing instances of the Book class.
Each book is initialized with a title, author, and publication year using the new keyword and the Book constructor.

4.	The code demonstrates the usage of Object methods on a book instance.

5.	The Object.keys() method is used on the first book instance (books[0]) to extract the properties of the book as an array of strings.
The array bookProperties will contain the keys title, author, and publicationYear.

6.	The Object.values() method is used on the first book instance to extract the property values as an array.
The array bookValues will contain the values of the title, author, and publicationYear properties.

7.	The Object.entries() method is used on the first book instance to extract the property entries as an array of key-value pairs.
The array bookEntries will contain arrays of [key, value] for each property of the book.

8.	The console.log() statements are used to log the results to the console: bookProperties, bookValues, and bookEntries.

9.	Finally, the forEach() method is used on the books array to iterate over each book and call the getSummary() method on each instance.
This method returns a summary string for each book, which is logged to the console.
*/