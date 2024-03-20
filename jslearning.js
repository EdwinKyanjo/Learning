// JavaScript Functions

/* function printSecondName(name1,name2,name3){
    console.log(name2)
}

printSecondName("Riley","Hailey","Bradley") */

// Function to compute the product of p1 and p2

/* function myFunction(p1, p2) {
console.log(p1 * p2)
}

myFunction(4, 3) */

// JavaSript Data Types
// 1. String 2. Numbers 3. Boolean 4. Objects 5. Symbol 6. Bigint 7. Undefined 8. Null

// Numbers:
/* let length = 16;
let weight = 7.5; */

// Strings:
/*let color = "Yellow";
let lastName = "Johnson";*/

// Booleans
/*let x = true;
let y = false;*/

// Objects: (object(person) has 4 properties(firstName,...))
// const person = {firstName:"John", lastName:"Doe",age:50, eyeColor:"blue"};

// Array object:
// const cars = ["Saab","Volvo","BMW"];

// Date object:
// const date = new Date("2024-02-28");

// A JavaScript variable can hold any type of data

// JavaScript Function
// Calculate the product of two numbers, and return the result
// Function is called, the return value will end up in x
/*let x = myFunction(4, 3);

function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b
}*/

// Accessing Object Properties
// objectName.propertyName or objectName["propertyName"]

// const person = {firstName:"John", lastName:"Doe",age:50, eyeColor:"blue"};
// // console.log(person.lastName);
// console.log(person["lastName"]);

// function division(a,b){ a/b }

// console.log(division(10,2));

/* let x = 10;

if(x>5){
    let y = 20;
    console.log(y);
}*/

            //VARIABLES AND SCOPES IN JAVASCRIPT

// Scope in js refers to visibility of variables and functions within a program
// Global scope, Function scope, Block scope

// GLOBAL SCOPE is the outermost scope in a js program. Variables and functions declared in the scope are visisble/accessible from anywhere in the program.

/* var x = "hello, GreatStack GLOBAL SCOPE"; // to be printed

function example(){
    console.log(x);   // accessible within the function
}
example();

console.log(x);      // still accessed outside the function
*/

// FUNCTION SCOPE is created when a function is delared. Variables and functions declared in a function's scope are only visible within that function.

/* function example(){
    var fs = "Hello, GreatStack FUNCTION SCOPE";

    console.log(fs);
}
example();
*/

// BLOCK SCOPE in js refers to the visibility of variables and functions within a block of code. It's a group of statements that are enclosed in curly braces ({}). Variables and functions delaclared in a block's scope are only visible within that block.

/* function example(){
    if(true){        // block begins
        let blockVariable = "GreatStack 'BLOCK SCOPE'";
        console.log(blockVariable);
    }               // block ends
}
example();
*/




