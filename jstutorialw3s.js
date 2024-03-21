
// from Learn JavaScript - Full Course for Beginners



var a;
var b = 2;
console.log(a);

a = 7;

b = a;

console.log(a)

var a = 5;
var b = 10;
var c = "I am a"

a = a + 1;
b = b + 5;
c = c + " String"

console.log(c);

var sum = 10 + 10;
console.log(sum)

var difference = 45 - 33;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient)

var myVar = 87;
myVar++;
console.log(myVar);

var myVar = 11;
myVar--;
console.log(myVar);

var product = 2.0 * 2.5;
console.log(product);

var remainder;
remainder = 11 % 3;
console.log(remainder);

var myFirstName = "Edu";
var myLastName = "Kyanjo";
console.log(myFirstName, myLastName);

/*
CODE OUTPUT
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr);

var myStr = "This is the first sentence. "
myStr += "This is the second sentence."
console.log(myStr);

var myName = "Edu";
var myStr = "My name is " + myName + " and me a kul!!!"
console.log(myStr);

function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// PASSING VALUES TO FUNCTIONS WITH ARGUMENTS

function ourFunctionWithArgs(a, b) {    // (a, b) can be anything
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5);

// GLOBAL SCOPE AND FUNCTIONS

// Declare your variable here
var myGlobal = 10;
function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// GLOBAL vs. LOCAL SCOPE in FUNCTIONS
var outerWear = "T-Shirt";
function myOutfit() {
    return outerWear;
}
console.log(outerWear);


var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater"
    return outerWear;
}
console.log(myOutfit);
console.log(outerWear);

// RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));

// STAND IN LINE (Que)
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// COMPARISON WITH THE EQUALITY OPERATOR
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));