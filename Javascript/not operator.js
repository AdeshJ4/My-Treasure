// Example 1: Negating a boolean value
const isTrue = true;
const isFalse = !isTrue;
console.log(isFalse); // Output: false

// Example 2: Negating a condition
const x = 10;
const y = 5;
const result = !(x > y);
console.log(result); // Output: false

// Example 3: Checking if a variable is falsy
const myVar = null;
if (!myVar) {
  console.log("myVar is falsy"); // This block will be executed
}

// Example 4: Using double negation to convert a value to a boolean
const stringValue = "Hello";
const booleanValue = !!stringValue;
console.log(booleanValue); // Output: true

// Example 5: Checking if an array is empty
const myArray = [];
if (!myArray.length) {
  console.log("myArray is empty"); // This block will be executed
}

// Example 6: Checking if a string is empty or undefined
const myString = "";
if (!myString) {
  console.log("myString is empty or undefined"); // This block will be executed
}
