// Calculate the time it takes between a setTimeout call and the inner function actually running.

const start = new Date().getTime();
console.log(start);

setTimeout(() => {
    let j = new Date().getTime();
    console.log("Time taken to run the function is " + (j - start) + " milliseconds");
}, 1000);