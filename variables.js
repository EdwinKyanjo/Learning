
// Variables are containers for storing Data Values (names of storage spaces). they are like named placeholders where you can store and manipulate data


let age = 25;       // Numeric Variable

let name = "John";  // String Variable

let isStudent = true;   // Boolean Variable

let fruits = ["apple", "banana", "orange"]; // Array Variable

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};                  // Object Variable

let car;            // Undefined Variable

let x = 5;
x = 10;             // Variable Reassignment

// Variable Scope (Global)
let globalVariable = "I'm a global variable";

function testFunction() {
    console.log(globalVariable);
}

testFunction();     // Output: I'm a global variable


// Variable Scope (Local)
function testFunction() {
    let localVariable = "I'm a local variable";
    console.log(localVariable);
}
testFunction();     // Output: I'm a local variable
console.log(localVariable); // ReferenceError: localVariable is not defined


