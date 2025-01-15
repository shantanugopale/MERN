// Write a program prints all the even numbers in an array 

let numbers = [4, 5, 6, 7, 8, 10, 12, 14, 11, 15, 17];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i] + " ")
    }
}