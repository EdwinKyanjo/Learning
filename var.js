
// var is a keyword used to declare variables. Variables declared with var have function scope, meaning they are accessible throughout the function in which they are declared, but not outside it.

// Variable Declaration and Assignment
var age = 25;       // variable 'age' is declared and assigned the value '25'

// Variable Reassignment
var name = "John";
name = "Alice"; // variable 'name' first assigned the value '"John"', and then reassigned to '"Alice"'

// Function Scope
function greet() {
    var message = "Hello";
    console.log(message);
}
greet(); // variable 'message' is scoped within the 'greet()' function and cannot be accessed outside of it

// Var Hoisting
console.log(x); // Output: undefined
var x = 5; // variable 'x' is hoisted to the top of its scope but remains undefined until the actual assignment

// Global Scope
var globalVar = "I'm a global variable";
function testFunction() {
    console.log(globalVar);
}
testFunction(); // Output: I'm a global variable
// variable 'globalVar' is declared outside any function, making it accessible globally.

// Variable Shadowing
var x = 10;
function testFunction() {
    var x = 20;
    console.log(x); // Output: 20
}
testFunction();
console.log(x); // Output: 10
// here, the inner variable 'x' shadows the outer one within the 'testFunction()' scope.

// Variable Redeclaration
var y = 15;
var y = 25;
console.log(y); // Output: 25
// unlike 'let' and 'const', 'var' allows for variable redeclaration within the same scope.

// No Block Scope
if (true) {
    var z = 30;
}
console.log(z); // Output: 30
// Variables declared with 'var' are not block-scoped and can leak out of blocks.




