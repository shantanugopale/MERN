// 3. Write another function that takes this sum and prints it in passive tense

function sum(a, b) {
    return (a + b);
}

function calculateSum(fn) {
    console.log("The Sum is " + fn);
}

let number = sum(5, 7);
console.log(calculateSum(number));
// O/P : -->
// The Sum is 12
// undefined -->Because function doesn't return anything