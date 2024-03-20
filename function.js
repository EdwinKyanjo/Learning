
// Function is a block of reusable code that performs a specific task. Functions can take parameters and return values.

// Reusable Code : Functions allow you to encapsulate a block of code that you can reuse multiple times throughout your program.
function greet() {
    console.log("Hello, world!");
}

// Call the function multiple times
greet();
greet();

// Abstraction : Functions help abstract away complex operations, making your code more readable and easier to understand.
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

let circleArea = calculateArea(5);
console.log(circleArea); // Output: 78.53981633974483

// Modularization : Functions allow you to break down your code into smaller, more manageable pieces, promoting modularization and improving code organization.
function getUserData() {
    // Fetch user data from an API or database
}

function displayUserData(userData) {
    // Display user data on the webpage
}

let userData = getUserData();
displayUserData(userData);

// Callback Functions : Functions can be passed as arguments to other functions, allowing you to perform actions asynchronously or in response to events.
function fetchData(callback) {
    // Simulate fetching data
    setTimeout(() => {
        let data = "Some data";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing data:", data);
}

fetchData(processData);

// Event Handling : Functions are commonly used to handle events triggered by user interactions, such as clicking a button or submitting a form.
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});

// Encapsulation and Information Hiding : Functions allow you to encapsulate implementation details, hiding them from the rest of your program and providing an interface for interaction.
function Counter() {
    let count = 0;

    this.increment = function() {
        count++;
    };

    this.getCount = function() {
        return count;
    };
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1

// These examples illustrate various situations where functions are commonly used in JavaScript to improve code structure, readability, and maintainability. Understanding how and when to use functions is fundamental for programming in JavaScript.


