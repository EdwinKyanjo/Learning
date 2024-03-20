
// const is a keyword used to declare variables that cannot be reassigned once they are initialized. it stands for constant.

//Constant Declaration and Assignment
const PI = 3.14; // In this example, a constant PI is declared and assigned the value 3.14. Once assigned, the value of a constant cannot be changed.

// Attempting to Reassign a Constant
const country = "USA";
country = "Canada"; // TypeError: Assignment to constant variable.
// Constants cannot be reassigned after declaration. Attempting to do so will result in a TypeError.

// Constants with Objects
const person = { name: "John", age: 30 };
person.age = 40;
console.log(person.age); // Output: 40
// While the binding of a constant cannot change, properties of objects assigned to constants can still be modified.

// Block-level Scoping
{
    const x = 10;
    console.log(x); // Output: 10
}
console.log(x); // ReferenceError: x is not defined
// Constants, like variables declared with 'let', are block-scoped, meaning they exist only within the block they're declared in.

// Initializing a Constant Later
const name;     // Constants must be initialized at the time of declaration. Attempting to declare a constant without initializing it will result in a SyntaxError.

// Constants in Loops
for (const i = 0; i < 5; i++) {
    console.log(i);
}           // TypeError: Assignment to constant variable.
// Constants declared in loops cannot be reassigned within the loop, making them useful for preventing accidental modifications.


// Constants and Hoisting
console.log(x); // ReferenceError: Cannot access 'x' before initialization
const x = 5;    //Similar to 'let', constants declared with const are hoisted to the top of their block scope but remain uninitialized until their actual declaration.

// Using 'const' is a good practice when you want to ensure that a variable doesn't change throughout the execution of your program, providing better predictability and reliability in your code.
