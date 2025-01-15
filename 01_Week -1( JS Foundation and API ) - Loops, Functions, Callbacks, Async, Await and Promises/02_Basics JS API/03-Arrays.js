// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function funcPush(arr, item) {
    console.log("Original Array :" + arr);
    arr.push(item);
    console.log("New Array :" + arr);
}

let arr1 = [1, 2, 3, 4, 5];
funcPush(arr1, 2);


// pop()
function funcPop(arr) {
    console.log("Original Array :" + arr);
    arr.pop();
    console.log("New Array :" + arr);
}

let arr2 = [1, 2, 3, 4, 5];
funcPop(arr2);


// shift()
function funcShift(arr) {
    console.log("Original Array :" + arr);
    arr.shift();
    console.log("New Array :" + arr);
}

let arr3 = [1, 2, 3, 4, 5];
funcShift(arr3);


// unshift()
function funcUnshift(arr) {
    console.log("Original Array :" + arr);
    arr.unshift(9);
    console.log("New Array :" + arr);
}

let arr4 = [1, 2, 3, 4, 5];
funcUnshift(arr4);


// splice()
function funcSplice(arr) {
    console.log("Original Array :" + arr);
    arr.splice(2, 0, "Shantanu", "Gopale");
    console.log("New Array :" + arr);
}

let arr5 = [1, 2, 3, 4, 5];
funcSplice(arr5);


// slice()
function funcSlice(arr) {
    console.log("Original Array :" + arr);
    arr.slice(2, 5);
    console.log("New Array :" + arr);
}

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
funcSlice(arr6);


// concat()
function funcConcat(arr, newArr) {
    console.log(arr.concat(newArr));
}

let arr7 = [1, 2, 3];
let arr8 = [1, 2, 3, 4, 5, 6];
funcConcat(arr7, arr8);


// forEach()
function funcForEach(arr) {
    console.log("Original Array :" + initialArray);

    arr.forEach(function (item, index) {
        console.log(item, index);
    });
}

let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
funcForEach(initialArray);