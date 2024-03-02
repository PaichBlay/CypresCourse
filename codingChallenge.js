
//Task 1
console.log("Task 1: Calculate the sum of numbers within an array");
function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", sumArray(numbers)); 


// Task 2
console.log("task 2: Create a length converter function");
function convertLength(length, fromUnit, toUnit) {
    const units = {
        'm': 1,
        'cm': 100,
        'mm': 1000,
        'km': 0.001,
        'in': 39.3701,
        'ft': 3.28084,
        'yd': 1.09361,
        'mi': 0.000621371
    };

    if (!units[fromUnit] || !units[toUnit]) {
        return "Invalid units";
    }

    return length * units[fromUnit] / units[toUnit];
}
console.log("Length in meters:", convertLength(100, 'cm', 'm')); 

// Task 3
console.log("task 3: Print all even numbers from 0 – 100:");
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}


// Task 4
console.log("Task 4: Print a table containing multiplication tables");
function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let row = '';
        for (let j = 1; j <= 10; j++) {
            row += `${i} * ${j} = ${i * j}\t`;
        }
        console.log(row);
    }
}
printMultiplicationTable();


//Task 5
console.log("Task 5: Create a function that reverses an array");
function reverseArray(arr) {
    return arr.reverse();
}
const num = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArray(num)); // Output: [5, 4, 3, 2, 1]


// Task 6
console.log("Task 6: Sort an array of strings in alphabetical order");
function sortStringsAlphabetically(arr) {
    return arr.sort();
}
const strings = ["banana", "apple", "orange", "grape"];
console.log("Sorted strings:", sortStringsAlphabetically(strings)); // Output: ["apple", "banana", "grape", "orange"]


// Task 7
console.log("Task 7: Sort an array of numbers in descending order");
function sortNumbersDescending(arr) {
    return arr.sort((a, b) => b - a);
}
const examplNumber = [5, 8, 2, 1, 9];
console.log("Numbers sorted in descending order:", sortNumbersDescending(examplNumber)); // Output: [9, 8, 5, 2, 1]


// Task 8
console.log("Task 8: Return a Boolean if a number is divisible by 10");
function isDivisibleBy10(num) {
    return num % 10 === 0;
}
console.log("Is 30 divisible by 10?", isDivisibleBy10(30)); // Output: true
console.log("Is 17 divisible by 10?", isDivisibleBy10(17)); // Output: false


//Task 9
console.log("Task 9: Return the number of vowels in a string");
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
console.log("Number of vowels in 'Hello':", countVowels("Hello")); // Output: 2


// Task 10
console.log("Task 10: Create a function that filters out negative numbers")
function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}
const numberList = [-1, 2, -3, 4, -5, 6];
console.log("Positive numbers:", filterNegativeNumbers(numberList)); // Output: [2, 4, 6]





