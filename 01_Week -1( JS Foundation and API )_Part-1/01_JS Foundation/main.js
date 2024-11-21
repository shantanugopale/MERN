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

////////////// Functions ////////////////

function toGreet(str) {
    return ("Hi " + str);
}
console.log(toGreet("Shantanu"));
console.log(toGreet("Sushant"));


//////////// CallBacks /////////////////

function sum(a, b) {
    return (a + b);
}

function calculate(fn) {
    return fn(3, 5);
}

let result = calculate(sum);
console.log(result);

//---------- Synchronous -----------

function demo() {
    let ans = 0;
    for (let i = 0; i < 1000; i++) {
        ans = ans + i;
    }
    return ans;
}
console.log(demo());

//---------- Asynchronous (setTimeout)-----------

function fetchData() {
    console.log("requesting data from the ChatGpt Server [] ");

    setTimeout(() => {
        console.log("Data Received from the ChatGpt Sever [] ");
    }, 3000);
}

fetchData();

// Special Case : In Above E.g setTimeout wait for 3 sec in that time it executes the below function becuase in below e.g setTimeout is low as compare to above example while Waiting for Above E.g it executes the Below function then Above E.g
setTimeout(function timeout() {
    console.log("Click the Button!");
}, 1000);

let add = 0;
for (let i = 0; i < 1000000000; i++) {
    add = add + i;
}