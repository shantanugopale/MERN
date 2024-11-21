////////////// Simple Primitives ////////////////


// Variables (let, var, const) 

let name = "Shantanu";
var number = 836417314;
const gender = "male";


// Data types - strings, numbers and booleans 

let fName = "Shantanu"; // strings
let lName = "Gopale";
let mNo = 7350096668;  // numbers
let age = 21;
let isMarried = false;  // booleans
let isDevloper = true;

// If/else

if (fName == "Shantanu") {
    console.log("Married Status : " + isMarried);
}
else {
    console.log("Married");
}

// Loops - For loop

let fullName = "Shantanu Gopale";

for (let i = 0; i < 10; i++) {
    console.log(fullName)
}


////////////// Complex Primitives ////////////////

// 1. Arrays
let numbers = [4, 5, 6, 7, 8, 10, 12, 14, 11, 15, 17];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + " ")
}

// 2. Objects

let myName = {
    "firstName": "Shantanu",
    "lastName": "Gopale",
    "age": 21,
    "mobieNo": 7350096668
}

console.log(myName)