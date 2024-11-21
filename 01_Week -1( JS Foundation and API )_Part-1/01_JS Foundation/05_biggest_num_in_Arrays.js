// 2. Write a program to print the biggest number in an arrays

let numbers = [4, 5, 6, 7, 8, 10, 12, 14, 11, 15, 17];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("MAX Number in Array is : " + max);