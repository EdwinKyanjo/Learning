
// Data Structures are specialized formats for organizing and storing data efficiently. They provide ways to manage and manipulate data, making it easier to perform operations like insertion, deletion, and traversal.

// Arrays
// used to store multiple values in a single variable. can hold elements of any data type, and the elements can be accessed using index numbers
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

// Objects
// are collections of key-value pairs. used to store complex data structures where each value is accessed by its corresponding key
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Sets
// are colletions of unique values. useful for storing a collection of distinct items and performing operations like intersection, union, and difference
let uniqueNumbers = new Set([1, 2, 3, 4, 5]);
let uniqueLetters = new Set("hello");

// Maps
// are collections of key-value pairs similar to objects. However, in maps, keys can be of any data type, and the order of elements is maintained
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);

// Stacks
// are a data structure that follows the Last-In-First-Out (LIFO) principle. Elements are insterted and removed from the top of the stack
let stack = [];
stack.push("a");
stack.push("b");
let topElement = stack.pop(); // Returns "b"

// Queues
// are a data structure that follows the First-In-First-Out (FIFO) principle. Elements are inserted at the rear and removed from the front of the queue
let queue = [];
queue.push("a");
queue.push("b");
let frontElement = queue.shift(); // Returns "a"

// Linked Lists
// are a data structure consisting of a sequence of elements where each element points to the next element in the sequence
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    // Methods to manipulate the linked list
}


