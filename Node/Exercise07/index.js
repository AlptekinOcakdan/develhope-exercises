const fs = require('fs');

const content = 'This is the content that will be written to the file.\n';

// Specify the file path and name
const filePath = 'example.txt';

// Use fs.writeFile() to write the content to the file
fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error('An error occurred:', err);
    } else {
        console.log(`File "${filePath}" has been successfully written.`);
    }
});
