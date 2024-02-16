
// Task 4
console.log ("Task 4: print hello world");
console.log("hello world");


// Task 5
console.log ("Task 5: Data types");
const day = "Thursday";
const position = 4;
const output = "Today is " + day + ". It is the " + position + "th day of the week.";
console.log(output);


// Task 6
console.log ("Task 6: Types of triangle");
const number = 7;
// Checking if the number is divisible by 2
if (number % 2 === 0) {
    console.log(number + " is even."); 
} else {
    console.log(number + " is odd.");
}

// Task 7:Types of triangle
console.log ("Task 7: Types of triangle");
const side1 = 3;
const side2 = 5;
const side3 = 5;
// Check if all sides are equal
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
} 
// Check if any two sides are equal
else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles triangle");
} 
else { // If no sides are equal
    console.log("Scalene triangle");
}

// Task 8: The Odd Ones
console.log ("Task 8: The Odd Ones");
// Iterate through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Check if the number is odd
    if (i % 2 !== 0) {
        // Print the odd number
        console.log(i);
    }
}


// Task 9: Area Of a Rectangle
console.log ("Task 9: Area Of a Rectangle");
 function calculateAreaOfRectangle(length, width) {
    let area = length * width;
    console.log("The area of the rectangle is: " + area);

}

calculateAreaOfRectangle(5, 3);