const str = 'Hello, World!';
const str1 = 'Hello';
const str2 = 'World';
const num = 42;
const strObj = new String('Hello, World');

// charAt(index): Returns the character at the specified index in a string.
const char = str.charAt(7);
console.log(char);

/*In this example, the charAt() method is used to retrieve the character at index 7 in the string str, which is 'W'.
The method returns the character at the specified index.*/

// charCodeAt(index): Returns the Unicode value of the character at the specified index in a string.
const charCode = str.charCodeAt(1);
console.log(charCode);

/*In this example, the charCodeAt() method is used to retrieve the Unicode value of the character at index 1 in the string str, which is 'e'.
The method returns the Unicode value (in decimal) of the character.*/

// concat(str1, str2, ..., strN): Combines two or more strings and returns a new concatenated string.
const concatenatedString = str1.concat(', ', str2);
console.log(concatenatedString);

/*In this example, the concat() method is used to concatenate the strings str1 and str2, along with a comma and a space.
The method returns a new string that is the result of the concatenation.*/

// includes(searchValue, startIndex): Checks if a string contains the specified search value, optionally starting from a specified index.
console.log(str.includes('World'));
console.log(str.includes('Universe'));

/*In this example, the includes() method is used to check if the string str includes the substring 'World'.
The method returns true if the search value is found in the string, and false otherwise.*/

// indexOf(searchValue, startIndex): Returns the index of the first occurrence of a specified value within a string, optionally starting from a specified index.
console.log(str.indexOf('o'));
console.log(str.indexOf('z'));

/*In this example, the indexOf() method is used to find the index of the first occurrence of the letter 'o' in the string str.
The method returns the index (starting from 0) if the search value is found, and -1 if the search value is not found.*/

// lastIndexOf(searchValue, startIndex): Returns the index of the last occurrence of a specified value within a string, optionally searching backwards from a specified index.
console.log(str.lastIndexOf('o'));
console.log(str.lastIndexOf('z'));

/*In this example, the lastIndexOf() method is used to find the index of the last occurrence of the letter 'o' in the string str.
The method returns the index (starting from 0) if the search value is found, and -1 if the search value is not found.*/

// length: Returns the length of a string.
console.log(str.length);

/*In this example, the length property is used to get the length of the string str, which is the total number of characters in the string.*/

// match(regex): Searches a string for a match against a regular expression and returns an array of matches.
const matches = str.match(/o/g);
console.log(matches);

/*In this example, the match() method is used to search the string str for all occurrences of the letter 'o' using a regular expression (/o/g).
The method returns an array containing all the matches found.*/

// replace(searchValue, replaceValue): Searches for a specified value or regular expression pattern and replaces it with a new value.
const newStr = str.replace('World', 'Universe');
console.log(newStr);

/*In this example, the replace() method is used to replace the substring 'World' in the string str with the new substring 'Universe'.
The method returns a new string with the replacement performed.*/

// search(regex): Searches a string for a specified value or regular expression pattern and returns the index of the first match.
console.log(str.search(/o/));
console.log(str.search(/z/));

/*In this example, the search() method is used to search the string str for the first occurrence of the letter 'o' using a regular expression (/o/).
The method returns the index of the first match if found, and -1 if the search value is not found.*/

// slice(startIndex, endIndex): Extracts a portion of a string and returns it as a new string.
const slicedStr = str.slice(7, 12);
console.log(slicedStr);

/*In this example, the slice() method is used to extract a portion of the string str starting from index 7 (inclusive) up to index 12 (exclusive).
The method returns a new string containing the extracted portion.*/

// split(separator, limit): Splits a string into an array of substrings based on a specified separator and optional limit.
const fruits = str.split(', ');
console.log(fruits);

/*In this example, the split() method is used to split the string str into an array of substrings using the separator ', '.
Each substring between the separator is treated as an individual element in the resulting array.*/

// substring(startIndex, endIndex): Extracts characters from a string between two specified indices and returns a new string.
const substring = str.substring(7, 12);
console.log(substring);

/*In this example, the substring() method is used to extract a portion of the string str starting from index 7 (inclusive) up to index 12 (exclusive).
The method returns a new string containing the extracted portion.*/

// toLowerCase(): Converts a string to lowercase letters.
const lowercaseStr = str.toLowerCase();
console.log(lowercaseStr);

/*In this example, the toLowerCase() method is used to convert the string str to lowercase.
The method returns a new string with all characters converted to lowercase.*/

// toUpperCase(): Converts a string to uppercase letters.
const uppercaseStr = str.toUpperCase();
console.log(uppercaseStr);

/*In this example, the toUpperCase() method is used to convert the string str to uppercase.
The method returns a new string with all characters converted to uppercase.*/

// trim(): Removes whitespace characters from both ends of a string.
const trimmedStr = str.trim();
console.log(trimmedStr);

/*In this example, the trim() method is used to remove leading and trailing whitespace characters from the string str.
The method returns a new string with the whitespace characters removed.*/

// trimStart() or trimLeft(): Removes whitespace characters from the beginning of a string.
const trimmedFrontStr = str.trimStart();
console.log(trimmedFrontStr);

/*In this example, the trimStart() method (or trimLeft()) is used to remove leading whitespace characters from the string str.
The method returns a new string with the leading whitespace characters removed.*/

// trimEnd() or trimRight(): Removes whitespace characters from the end of a string.
const trimmedBackStr = str.trimEnd();
console.log(trimmedBackStr);

/*In this example, the trimEnd() method (or trimRight()) is used to remove trailing whitespace characters from the string str.
The method returns a new string with the trailing whitespace characters removed.*/

// toString(): Converts an object to a string.
const str3 = num.toString();
console.log(str3);

/*In this example, the toString() method is used to convert the number num to a string representation.
The method returns a new string representing the converted value.*/

// valueOf(): Returns the primitive value of a string object.
const value = strObj.valueOf();
console.log(value);

/*In this example, the valueOf() method is used to retrieve the primitive value of the string object strObj.
The method returns the underlying string value of the object.*/

