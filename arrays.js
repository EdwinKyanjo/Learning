
// Array is a special type of object used to store multiple values in a single variable. Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays (nested arrays)

// Creating an Array
let fruits = ["apple", "banana", "orange"];

// Accessing Elements
console.log(fruits[0]);     // Output: "apple"
console.log(fruits[1]);     // Output: "banana"
console.log(fruits[2]);     // Output: "orange"

// Modifying Elements
fruits[1] = "grape"
console.log(fruits);    // Output: ["apple", "grape", "orange"]

// Adding Elements
fruits.push("kiwi");
console.log(fruits);    // Output: ["apple", "grape", "orange", "kiwi"]

// Removing Elements
fruits.pop();
console.log(fruits);    // Output: ["apple", "grape", "orange"]

// Array Length
console.log(fruits.length); // Output: 3

// Iterating Over an Array (using a for loop)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// "apple"
// "grape"
// "orange"

// Iterating Over an Array (using forEach method)
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// "apple"
// "grape"
// "orange"

// Nested Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]); // Output: 2

//Array Methods
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledNumbers);    // Output: [2, 4, 6, 8, 10]


