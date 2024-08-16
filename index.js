// //import all the functions from math.js
// const { add, substract, multiply, divide, fact } = require("./math");

// console.log("Add: ", add(3, 7));
// console.log("substract: ", substract(98,87));
// console.log("multiply: ", multiply(86,762));
// console.log("Divide: ", divide(7386,46));

// console.log("Factorial", fact(5));




// const fs = require("fs");

// console.log("Start reading a file...");
// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// console.log("File reading started...");


// app.js
const fs = require('fs');

// Replace 'example.txt' with the path to your file
const filePath = 'example.txt';

// Asynchronously read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error', err);
        return;
    }
    console.log('File content:');
    console.log(data);
});
