
// let is keyword used to declare block-scoped variables. they are accessible only within the block in which they are defined, including loops, conditional statements, and functions.

// Variable Declaration and Assignment
let age = 25;   // variable 'age' declared & assigned value '25'

// Variable Reassignment
let name = "John";
name = "Alice"; // variable 'name' is first assigned the value '"John"', and then reassigned to '"Alice"'.

// Block Scope
function greet() {
    let message = "Hello";
    console.log(message);
}
greet();    // The variable message is scoped within the greet() function and cannot be accessed outside of it.

// No Redeclaration
let x = 5;
let x = 10; // SyntaxError: Identifier 'x' has already been declared
// Unlike var, let does not allow redeclaration of variables within the same scope.

// Temporal Dead Zone (TDZ)
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
// Variables declared with let are hoisted to the top of their block scope but remain uninitialized until their actual declaration, causing a TDZ if accessed earlier.

// For Loop Scope
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // ReferenceError: i is not defined
// Variables declared with let inside a loop are scoped to the loop block and are not accessible outside of it.

// Block-level Scoping
{
    let y = 15;
    console.log(y); // Output: 15
}
console.log(y); // ReferenceError: y is not defined
// Variables declared with let are block-scoped, meaning they exist only within the block they're declared in.


